import { object, string } from "yup";

export const getSchema = () =>
  object().shape({
    id: string().trim().required(),
  });

export default getSchema;
