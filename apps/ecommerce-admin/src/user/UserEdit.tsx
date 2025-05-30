import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  PasswordInput,
} from "react-admin";

import { OrderTitle } from "../order/OrderTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="active" source="active" />
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Last Name" source="lastName" />
        <ReferenceArrayInput source="orders" reference="Order">
          <SelectArrayInput
            optionText={OrderTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <PasswordInput label="Password" source="password" />
        <TextInput label="phone" source="phone" />
        <TextInput label="resetPwdExpire" source="resetPwdExpire" />
        <TextInput label="resetPwdToken" source="resetPwdToken" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="shippingAddress" source="shippingAddress" />
        <TextInput label="Username" source="username" />
      </SimpleForm>
    </Edit>
  );
};
