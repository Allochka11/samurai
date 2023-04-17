import React from "react";
import s from './FormControls.module.css'

const FormControl = (props: any) => {
    const {input, meta, child, placeholder, ...restProps} = props
    let hasError = meta && meta.touched && meta.error;
    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : ' ')}>
            <div>{props.children}</div>
            {React.createElement(props.type, {
                ...input,
                placeholder
            })}
            {hasError && <span>{meta.error}</span>}
        </div>
    );
}
export const Textarea = (props: any) => {
    return <FormControl {...props}></FormControl>
};

export const Input = (props: any) => {
    return <FormControl {...props}></FormControl>
};