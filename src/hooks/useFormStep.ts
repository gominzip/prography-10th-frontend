import { useState } from 'react';

interface UseFormStepParams {
  totalSteps: number;
}

export function useFormStep({ totalSteps }: UseFormStepParams) {
  const [currentStep, setCurrentStep] = useState(0);
  const [previousStep, setPreviousStep] = useState(0);

  const [showError, setShowError] = useState(false);

  /**
   * 필드값 검증 후 다음 스텝으로 넘어가는 함수입니다.
   * @param validateFields 필드값 검증 결과를 반환하는 함수
   * @param finalStepAction 마지막 스텝에서 추가적인 액션을 진행하는 함수
   * @returns
   */
  const next = async (validateFields?: () => Promise<boolean>, finalStepAction?: () => void) => {
    if (validateFields) {
      const isValid = await validateFields();
      setShowError(true);
      if (!isValid) return;
    }

    if (currentStep === totalSteps - 1 && finalStepAction) {
      finalStepAction();
      return;
    }

    setShowError(false);
    setPreviousStep(currentStep);
    setCurrentStep((prevStep) => prevStep + 1);
  };

  /**
   * 이전 스텝으로 이동하는 함수
   * @param callback
   */
  const prev = (callback?: () => void) => {
    if (callback) callback();
    if (currentStep > 0) {
      setPreviousStep(currentStep);
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  return {
    currentStep,
    previousStep,
    showError,
    next,
    prev
  };
}
