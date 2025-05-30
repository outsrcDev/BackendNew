import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { CategoryTitle } from "../category/CategoryTitle";
import { OrderDetailTitle } from "../orderDetail/OrderDetailTitle";
import { TagTitle } from "../tag/TagTitle";

export const ProductEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="category.id"
          reference="Category"
          label="Category"
        >
          <SelectInput optionText={CategoryTitle} />
        </ReferenceInput>
        <TextInput label="description" multiline source="description" />
        <TextInput label="detail" source="detail" />
        <TextInput label="Discount Precent" source="discountPrecent" />
        <div />
        <TextInput label="name" source="name" />
        <ReferenceInput
          source="orderDetail.id"
          reference="OrderDetail"
          label="Order Detail"
        >
          <SelectInput optionText={OrderDetailTitle} />
        </ReferenceInput>
        <NumberInput label="price" source="price" />
        <TextInput label="stock" source="stock" />
        <ReferenceInput source="tag.id" reference="Tag" label="Tag">
          <SelectInput optionText={TagTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
