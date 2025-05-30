import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
  ReferenceInput,
} from "react-admin";

import { OrderDetailTitle } from "../orderDetail/OrderDetailTitle";
import { UserTitle } from "../user/UserTitle";

export const OrderCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="city" source="city" />
        <DateTimeInput label="deliveryDate" source="deliveryDate" />
        <SelectInput
          source="deliveryType"
          label="deliveryType"
          choices={[
            { label: "STORE_PICKUP", value: "StorePickup" },
            { label: "OTHERS", value: "Others" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <DateTimeInput label="orderDate" source="orderDate" />
        <ReferenceArrayInput source="orderDetails" reference="OrderDetail">
          <SelectArrayInput
            optionText={OrderDetailTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <SelectInput
          source="paymentType"
          label="paymentType"
          choices={[
            { label: "CASH_ON_DELIVERY", value: "CashOnDelivery" },
            { label: "BANK_TRANSFER", value: "BankTransfer" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="shippingAddress" source="shippingAddress" />
        <TextInput label="state" source="state" />
        <NumberInput label="totalPrice" source="totalPrice" />
        <TextInput label="township" source="township" />
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="zipCode" source="zipCode" />
      </SimpleForm>
    </Create>
  );
};
