import { object, string } from "yup";

export const getSchema = () =>
  object().shape({
      userId: string().optional(),
      text: string().trim().optional()
  });

export default getSchema;
