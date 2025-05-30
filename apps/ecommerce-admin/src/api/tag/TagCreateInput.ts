import { ProductCreateNestedManyWithoutTagsInput } from "./ProductCreateNestedManyWithoutTagsInput";

export type TagCreateInput = {
  name?: string | null;
  products?: ProductCreateNestedManyWithoutTagsInput;
};
