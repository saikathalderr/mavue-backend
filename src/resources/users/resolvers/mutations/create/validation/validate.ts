import { Validate } from "../../../types";
import { getSchema } from "./get-yup-schema";

export const validate: Validate = (input) =>
  getSchema().validate(input, { abortEarly: false });

export default validate