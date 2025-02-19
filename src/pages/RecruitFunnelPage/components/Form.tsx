import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormDataSchema } from '@/lib/schema';
import type { Inputs } from '@/types';
import { Box, Button, ConfirmModal, ProgressBar } from '@/components';
import { transformFormData } from '@/utils/transformFormData';
import { useFormStep, useModal } from '@/hooks';
import { ApplicationInfoStep, BasicInfoStep, CompleteStep, ConsentStep } from '@/pages/RecruitFunnelPage/components';
import { sendApplicationForm } from '@/apis';

const steps = [
  { id: 1, name: '개인정보 수집 동의', component: ConsentStep, fields: ['consent'] },
  { id: 2, name: '기본 정보', component: BasicInfoStep, fields: ['name', 'email', 'phone'] },
  { id: 3, name: '지원 정보', component: ApplicationInfoStep, fields: ['part'] }
] as const;

function Form() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { isOpen, closeModal, openModal } = useModal();
  const { currentStep, showError, next, prev } = useFormStep({ totalSteps: steps.length });

  const {
    register,
    handleSubmit,
    trigger,
    getValues,
    formState: { errors }
  } = useForm<Inputs>({ mode: 'onChange', resolver: zodResolver(FormDataSchema) });

  type FieldName = keyof Inputs;

  const processForm: SubmitHandler<Inputs> = async (data) => {
    try {
      const formattedData = {
        ...data,
        consent: JSON.parse(data.consent as unknown as string)
      };

      await sendApplicationForm(formattedData);
      setIsSubmitted(true);
    } catch (error) {
      console.error(error);
      alert('폼 제출 중 오류가 발생했습니다.');
    }
  };

  const validateFields = async () => {
    const fields = steps[currentStep].fields;
    const isValid = await trigger(fields as readonly FieldName[], { shouldFocus: true });
    return isValid;
  };
  const finalStepAction = () => openModal();
  const handleNext = () => next(validateFields, finalStepAction);
  const handlePrev = () => prev();

  const preventRefresh = (event: BeforeUnloadEvent) => {
    if (!isSubmitted) {
      event.preventDefault();
      event.returnValue = '';
    }
  };

  useEffect(() => {
    window.addEventListener('beforeunload', preventRefresh);

    return () => {
      window.removeEventListener('beforeunload', preventRefresh);
    };
  }, [isSubmitted]);

  const CurrentComponent = steps[currentStep].component;

  return (
    <>
      {!isSubmitted && (
        <>
          <ProgressBar totalSteps={steps.length} currentStep={currentStep} />

          <form>
            <CurrentComponent register={register} errors={errors} showError={showError} />
          </form>

          <Box className="flex justify-between">
            <Button text="뒤로" onClick={handlePrev} disabled={currentStep === 0} />
            <Button text={currentStep < steps.length - 1 ? '다음' : '제출하기'} onClick={handleNext} />
          </Box>
        </>
      )}

      {isSubmitted && <CompleteStep />}

      {isOpen && (
        <ConfirmModal
          title="제출 전 확인해주세요!"
          description={transformFormData(getValues())}
          leftBtnText="취소"
          rightBtnText="제출"
          rightBtnAction={handleSubmit(processForm)}
          closeModal={closeModal}
        />
      )}
    </>
  );
}

export default Form;
