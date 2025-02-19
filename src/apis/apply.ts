import { ApplicationFormData } from '@/types';
import fetchClient from './fetchClient';

export async function sendApplicationForm(data: ApplicationFormData) {
  try {
    const response = await fetchClient.post('/apply', data);
    return response.data;
  } catch (error) {
    console.error('폼 제출 실패:', error);
    throw error;
  }
}
