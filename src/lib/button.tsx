"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { useFormStatus } from "react-dom";

const FormButton = () => {
  const { pending } = useFormStatus();

  return <Button type="submit">{pending ? "Loading..." : "Submit"}</Button>;
};

export default FormButton;
