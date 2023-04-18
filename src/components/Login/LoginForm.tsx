import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormControls/FormControls";
import {required} from "../../utils/validators/validators";


export type FormDataType = {
    login: string,
    password: string,
    rememberMe: boolean
}
const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {

    return (
        <form action="" onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'login'}
                       name={'login'}
                       component={Input}
                       validate={[required]}
                       type={'input'}
                />
            </div>
            <div>
                <Field placeholder={'password'}
                       name={'password'}
                       component={Input}
                       validate={[required]}
                       type={'password'}/>
            </div>
            <div>
                <Field type="checkbox" name={'rememberMe'} component={'input'}/>
            </div>
            <div>
                <button type={'submit'}>Submit</button>
            </div>
        </form>
    );
};

export const LoginReduxForm = reduxForm<FormDataType>({
    form: 'loginForm'
})(LoginForm)