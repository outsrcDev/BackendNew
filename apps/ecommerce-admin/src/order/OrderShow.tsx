import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { ORDER_TITLE_FIELD } from "./OrderTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const OrderShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="city" source="city" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="deliveryDate" source="deliveryDate" />
        <TextField label="deliveryType" source="deliveryType" />
        <TextField label="ID" source="id" />
        <TextField label="orderDate" source="orderDate" />
        <TextField label="paymentType" source="paymentType" />
        <TextField label="shippingAddress" source="shippingAddress" />
        <TextField label="state" source="state" />
        <TextField label="totalPrice" source="totalPrice" />
        <TextField label="township" source="township" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="user" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="zipCode" source="zipCode" />
        <ReferenceManyField
          reference="OrderDetail"
          target="orderId"
          label="Order Details"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField label="order" source="order.id" reference="Order">
              <TextField source={ORDER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="quantity" source="quantity" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
