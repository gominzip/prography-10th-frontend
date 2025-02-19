import { fieldLabels, partFieldMapping } from '@/constants/form';
import type { FormKey, PartKey } from '@/types/form';

export const formatValue = (key: FormKey, value: string) => {
  if (key === 'consent') return value === 'true' ? '동의' : '비동의';
  if (key === 'part') return partFieldMapping[value as PartKey] ?? value;
  return value;
};

// 폼 데이터 변환 함수
export const transformFormData = (formData: Record<string, string>) => {
  return Object.entries(formData)
    .map(([key, value]) => {
      const label = fieldLabels[key as FormKey] ?? key;
      let formattedValue = value;

      if (key === 'consent') {
        formattedValue = value === 'true' ? '동의' : '미동의';
      } else if (key === 'part') {
        const partKey = Object.keys(partFieldMapping).find(
          (k) => partFieldMapping[k as keyof typeof partFieldMapping] === value
        );
        formattedValue = partKey ?? value;
      }

      return `${label}: ${formattedValue}`;
    })
    .join('\n');
};
