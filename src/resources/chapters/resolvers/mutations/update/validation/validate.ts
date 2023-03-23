import { ValidateChapterUpdate } from "../../../types";
import { getSchema } from "./get-yup-schema";

export const validate: ValidateChapterUpdate = (input) =>
  getSchema().validate(input, { abortEarly: false });

export default validate