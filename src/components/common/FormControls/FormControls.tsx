import React from "react";
import s from "./FormControls.module.css";

const FormControl = (props: any) => {
  const { input, meta, child, placeholder, ...restProps } = props;
  let hasError = meta.touched && meta.error;

  return (
    <div className={s.formControl + " " + (hasError ? s.error : " ")}>
      <div>{props.children}</div>
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};
export const Textarea = (props: any) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} />
    </FormControl>
  );
};

export const Input = (props: any) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  );
};
