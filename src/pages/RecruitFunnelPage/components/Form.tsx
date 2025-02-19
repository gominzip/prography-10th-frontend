import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ApplicationInfoStep, BasicInfoStep, CompleteStep, ConsentStep } from './steps';
import { FormDataSchema } from '@/lib/schema';
import type { Inputs } from '@/types/form';
import { Box, Button, ConfirmModal } from '@/components';
import clsx from 'clsx';
import { useModal } from '@/hooks/useModal';
import { transformFormData } from '@/utils/transformFormData';

function Form() {
  const [, setPreviousStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [showError, setShowError] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { isOpen, closeModal, openModal } = useModal();

  const {
    register,
    handleSubmit,
    trigger,
    getValues,
    formState: { errors }
  } = useForm<Inputs>({ mode: 'onChange', resolver: zodResolver(FormDataSchema) });

  const steps = [
    { id: 1, name: '개인정보 수집 동의', component: ConsentStep, fields: ['consent'] },
    { id: 2, name: '기본 정보', component: BasicInfoStep, fields: ['name', 'email', 'phone'] },
    { id: 3, name: '지원 정보', component: ApplicationInfoStep, fields: ['part'] }
  ] as const;

  type FieldName = keyof Inputs;

  // 폼 제출 함수
  const processForm: SubmitHandler<Inputs> = (data) => {
    console.log('폼 제출 데이터:', data);
    setIsSubmitted(true);
  };

  // 모든 필드를 검사하고 유효하지 않은 경우 에러 보여주기
  const validateFields = async () => {
    const fields = steps[currentStep].fields;
    if (!fields) return true;

    const isValid = await trigger(fields as readonly FieldName[], { shouldFocus: true });
    setShowError(true);

    return isValid;
  };

  // 다음 단계로 이동
  const next = async () => {
    const isValid = await validateFields();
    if (!isValid) return;

    if (currentStep === steps.length - 1) {
      openModal();

      return;
    }

    setPreviousStep(currentStep);
    setShowError(false);
    setCurrentStep((step) => step + 1);
  };

  // 이전 단계로 이동
  const prev = () => {
    if (currentStep > 0) {
      setPreviousStep(currentStep);
      setCurrentStep((step) => step - 1);
    }
  };

  const CurrentComponent = steps[currentStep].component;

  return (
    <>
      <Box>
        <div className="flex items-center justify-between w-full max-w-2xl mx-auto gap-1">
          {steps.map((_, index) => (
            <>
              {index > 0 && <div className={`h-1 flex-1 ${index <= currentStep ? 'bg-blue-500' : 'bg-gray-300'}`} />}

              <div
                className={clsx(
                  'w-10 h-10 flex items-center justify-center rounded-full text-base transition-all',
                  index <= currentStep ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600'
                )}
              >
                {index + 1}
              </div>
            </>
          ))}
        </div>
      </Box>

      {!isSubmitted && (
        <form>
          <CurrentComponent register={register} errors={errors} showError={showError} />
        </form>
      )}

      {!isSubmitted && (
        <Box className="flex justify-between">
          <Button text="뒤로" onClick={prev} disabled={currentStep === 0} />
          <Button text={currentStep < steps.length - 1 ? '다음' : '제출하기'} onClick={next} />
        </Box>
      )}

      {isSubmitted && <CompleteStep />}

      {isOpen && (
        <ConfirmModal
          title="제출 전 확인해주세요!"
          description={transformFormData(getValues())}
          leftBtnText="취소"
          rightBtnText="제출"
          rightBtnAction={() => handleSubmit(processForm)()}
          closeModal={closeModal}
        />
      )}
    </>
  );
}

export default Form;
