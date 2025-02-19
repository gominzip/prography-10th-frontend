import { fieldLabels, partFieldMapping } from '@/constants';
import { FormDataSchema } from '@/lib/schema';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { z } from 'zod';

export type FormKey = keyof typeof fieldLabels;
export type PartKey = keyof typeof partFieldMapping;
export type PartAPIValue = (typeof partFieldMapping)[PartKey];

export type ApplicationFormData = {
  consent: boolean;
  name: string;
  email: string;
  phone: string;
  part: PartAPIValue;
};

export type Inputs = z.infer<typeof FormDataSchema>;

export interface StepProps {
  register: UseFormRegister<Inputs>;
  errors: FieldErrors<Inputs>;
  showError: boolean;
}
