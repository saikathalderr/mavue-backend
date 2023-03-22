import { ValidateUserDelete} from "../../../types";
import { getSchema } from "./get-yup-schema";

export const validate: ValidateUserDelete = (input) =>
  getSchema().validate(input, { abortEarly: false });

export default validate