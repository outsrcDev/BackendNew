import { ProductUpdateManyWithoutTagsInput } from "./ProductUpdateManyWithoutTagsInput";

export type TagUpdateInput = {
  name?: string | null;
  products?: ProductUpdateManyWithoutTagsInput;
};
