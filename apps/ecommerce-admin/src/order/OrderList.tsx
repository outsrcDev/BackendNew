import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const OrderList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Orders"} perPage={50} pagination={<Pagination />}>
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
        <TextField label="zipCode" source="zipCode" />{" "}
      </Datagrid>
    </List>
  );
};
