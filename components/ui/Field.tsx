import Image from "next/image";
import { Control, ControllerRenderProps } from "react-hook-form";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { FieldTypes } from "../forms/PatientForm";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

import { Input } from "../ui/input";

interface FieldProps {
  control: Control<any>;
  type: FieldTypes;
  name: string;
  label?: string;
  iconSrc?: string;
}

const RenderField = ({
  field,
  props: { type, iconSrc },
}: {
  field: ControllerRenderProps;
  props: FieldProps;
}) => {
  switch (type) {
    case FieldTypes.INPUT:
      return (
        <div className="flex rounded-md border bg-dark-400 border-dark-500">
          {iconSrc && (
            <Image
              src={iconSrc}
              alt="icon"
              width={25}
              height={25}
              className="ms-2"
            />
          )}
          <FormControl>
            <Input {...field} className="shad-input border-0" />
          </FormControl>
        </div>
      );
    case FieldTypes.PHONE_NUMBER:
      return (
        <FormControl>
          <PhoneInput
            defaultCountry="US"
            international
            value={field.value}
            onChange={field.onChange}
            className="input-phone"
          />
        </FormControl>
      );
  }
};

export const Field = (props: FieldProps) => {
  const { control, type, iconSrc, name, label } = props;

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <RenderField field={field} props={props} />
          <FormMessage className="shad-error" />
        </FormItem>
      )}
    />
  );
};
