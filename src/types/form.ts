import { FieldTypeServer } from '@/constants/form';
import { FormDataSchema } from '@/lib/schema';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { z } from 'zod';

export type FormPayload = {
  consent: boolean;
  name: string;
  email: string;
  phone: string;
  part: FieldTypeServer;
};

export type Inputs = z.infer<typeof FormDataSchema>;

export interface StepProps {
  register: UseFormRegister<Inputs>;
  errors: FieldErrors<Inputs>;
  showError: boolean;
}
