import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ApplicationInfoStep, BasicInfoStep, CompleteStep, ConsentStep } from './steps';
import { FormDataSchema } from '@/lib/schema';
import type { Inputs } from '@/types/form';
import { Box, Button } from '@/components';

function Form() {
  const [, setPreviousStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [showError, setShowError] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors }
  } = useForm<Inputs>({ mode: 'onTouched', resolver: zodResolver(FormDataSchema) });

  const steps = [
    { id: 1, name: '개인정보 수집 동의', component: ConsentStep, fields: ['consent'] },
    { id: 2, name: '기본 정보', component: BasicInfoStep, fields: ['name', 'email', 'phone'] },
    { id: 3, name: '지원 정보', component: ApplicationInfoStep, fields: ['selectedOption'] }
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
      handleSubmit(processForm)();
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
      {!isSubmitted && (
        <form onSubmit={handleSubmit(processForm)}>
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
    </>
  );
}

export default Form;
