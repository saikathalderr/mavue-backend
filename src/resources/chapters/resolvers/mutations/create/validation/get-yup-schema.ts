import { number, object, string } from "yup";

export const getSchema = () =>
  object().shape({
    title: string().trim().required(),
    text: string().trim().required(),
    requirements: string().trim().required(),
    recurringInterval: number().positive().required(),
    userId: string().trim().required(),
  });

export default getSchema;
