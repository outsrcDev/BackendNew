import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  BooleanField,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { USER_TITLE_FIELD } from "./UserTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <BooleanField label="active" source="active" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="First Name" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="phone" source="phone" />
        <TextField label="resetPwdExpire" source="resetPwdExpire" />
        <TextField label="resetPwdToken" source="resetPwdToken" />
        <TextField label="Roles" source="roles" />
        <TextField label="shippingAddress" source="shippingAddress" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Username" source="username" />
        <ReferenceManyField reference="Order" target="userId" label="Orders">
          <Datagrid rowClick="show" bulkActionButtons={false}>
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
