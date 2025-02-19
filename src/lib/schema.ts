import { ERROR_MESSAGES, partFieldMapping, FieldTypeServer, PHONE_REGEX } from '@/constants/form';
import { z } from 'zod';

export const FormDataSchema = z.object({
  consent: z.literal('true', {
    errorMap: () => ({ message: ERROR_MESSAGES.consent })
  }),
  name: z.string().min(2, { message: ERROR_MESSAGES.nameMinLength }).max(50, { message: ERROR_MESSAGES.nameMaxLength }),
  email: z.string().email({ message: ERROR_MESSAGES.emailInvalid }),
  phone: z.string().regex(PHONE_REGEX, { message: ERROR_MESSAGES.phoneInvalid }),
  part: z.enum(Object.values(partFieldMapping) as [FieldTypeServer, ...FieldTypeServer[]], {
    errorMap: () => ({ message: ERROR_MESSAGES.part })
  })
});
