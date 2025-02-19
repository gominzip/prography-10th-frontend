import type { StepProps } from '@/types/form';
import { FieldSet, RadioField } from '../fields';
import Section from '../fields/Section';
import { partFieldMapping } from '@/constants/form';

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
