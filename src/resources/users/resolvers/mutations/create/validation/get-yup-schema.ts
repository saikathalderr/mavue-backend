import { object, string } from "yup";

export const getSchema = () =>
  object().shape({
    firstName: string().trim().required(),
    lastName: string().trim().required(),
  });

export default getSchema;
