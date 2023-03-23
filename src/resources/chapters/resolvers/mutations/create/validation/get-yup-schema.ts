import { object, string, number } from "yup";

export const getSchema = () =>
  object().shape({
      title: string().trim().required(),
      requirements: string().trim().required(),
      recurringInterval: number().positive().required(),
  });

export default getSchema;
