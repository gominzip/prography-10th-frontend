import type { StepProps } from '@/types';
import { FieldSet, RadioField, Section } from '@/pages/RecruitFunnelPage/components';

function ConsentStep({ register, errors, showError }: StepProps) {
  return (
    <Section
      title="개인정보 수집 동의"
      description="프로그라피 10기 지원을 위한 개인정보 수집에 대한 동의가 필요합니다"
    >
      <FieldSet
        legend="개인정보 수집여부 동의 여부를 체크해주세요."
        warningText={showError && errors.consent ? errors.consent.message : undefined}
        description={`수집 목적: Prography 10기 리쿠르팅 과정 및 결과 안내
          수집항목: 이름, 이메일, 핸드폰번호, 학교 정보 및 직장 정보
          보유 및 이용 기간: 리크루팅 과정 종료일(3월 7일) 이후 파기`}
      >
        <RadioField label="개인정보 수집 여부에 동의합니다" value="true" {...register('consent')} />
        <RadioField label="개인정보 수집 여부에 동의하지 않습니다" value="false" {...register('consent')} />
      </FieldSet>
    </Section>
  );
}

export default ConsentStep;
