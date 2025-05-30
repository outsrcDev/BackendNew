import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CATEGORY_TITLE_FIELD } from "./CategoryTitle";
import { ORDERDETAIL_TITLE_FIELD } from "../orderDetail/OrderDetailTitle";
import { TAG_TITLE_FIELD } from "../tag/TagTitle";

export const CategoryShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="thumbnailImage" source="thumbnailImage" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Product"
          target="categoryId"
          label="Products"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField
              label="Category"
              source="category.id"
              reference="Category"
            >
              <TextField source={CATEGORY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="description" source="description" />
            <TextField label="detail" source="detail" />
            <TextField label="Discount Precent" source="discountPrecent" />
            <TextField label="ID" source="id" />
            <TextField label="images" source="images" />
            <TextField label="name" source="name" />
            <ReferenceField
              label="Order Detail"
              source="orderdetail.id"
              reference="OrderDetail"
            >
              <TextField source={ORDERDETAIL_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="price" source="price" />
            <TextField label="stock" source="stock" />
            <ReferenceField label="Tag" source="tag.id" reference="Tag">
              <TextField source={TAG_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
