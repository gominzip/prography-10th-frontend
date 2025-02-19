import type { StepProps } from '@/types';
import { FieldSet, RadioField, Section } from '@/pages/RecruitFunnelPage/components';
import { partFieldMapping } from '@/constants';

function ApplicationInfoStep({ register, errors, showError }: StepProps) {
  const parts = Object.keys(partFieldMapping) as Array<keyof typeof partFieldMapping>;

  return (
    <Section title="지원 정보" description="지원하고자 하는 분야를 선택해주세요">
      <FieldSet
        legend="지원 분야를 선택해주세요"
        warningText={showError && errors.part ? errors.part.message : undefined}
      >
        {parts.map((label) => (
          <RadioField key={label} label={label} value={partFieldMapping[label]} {...register('part')} />
        ))}
      </FieldSet>
    </Section>
  );
}

export default ApplicationInfoStep;
