import type { StepProps } from '@/types/form';
import { FieldSet, Section, TextField } from '../fields';

function BasicInfoStep({ register, errors, showError }: StepProps) {
  return (
    <Section title="기본 정보" description="연락 가능한 정보를 입력해주세요">
      <FieldSet legend="성함을 입력해주세요" warningText={showError && errors.name ? errors.name.message : undefined}>
        <TextField id="name" type="text" {...register('name')} />
      </FieldSet>

      <FieldSet
        legend="이메일 주소를 입력해주세요"
        warningText={showError && errors.email ? errors.email.message : undefined}
      >
        <TextField id="email" type="email" placeholder="예시 : prography@gmail.com" {...register('email')} />
      </FieldSet>

      <FieldSet
        legend="휴대폰 번호를 입력해주세요"
        warningText={showError && errors.phone ? errors.phone.message : undefined}
      >
        <TextField id="phone" type="text" placeholder="예시 : 010-1234-5678" {...register('phone')} />
      </FieldSet>
    </Section>
  );
}

export default BasicInfoStep;
