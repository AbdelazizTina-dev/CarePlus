"use client";
import { createUser } from "@/lib/actions/patient.actions";
import { UserFormValidation } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";
import { Field } from "../ui/Field";
import { Form } from "../ui/form";

export enum FieldTypes {
  INPUT = "input",
  PHONE_NUMBER = "phone_number",
}

export const PatientForm = () => {
  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  function onSubmit(values: z.infer<typeof UserFormValidation>) {
    createUser(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <p className="font-bold text-4xl mb-2">Hi there,</p>
        <p className="font-semibold text-lg text-dark-700 mb-10">
          Get Started with Appointments.
        </p>
        <section className="space-y-4">
          <Field
            control={form.control}
            name="name"
            label="Full name"
            iconSrc="/assets/icons/user.svg"
            type={FieldTypes.INPUT}
          />
          <Field
            control={form.control}
            name="email"
            label="E-mail"
            iconSrc="/assets/icons/email.svg"
            type={FieldTypes.INPUT}
          />
          <Field
            control={form.control}
            name="phone"
            label="Phone number"
            type={FieldTypes.PHONE_NUMBER}
          />
        </section>
        <Button className="shad-primary-btn w-full mt-10" type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
};
