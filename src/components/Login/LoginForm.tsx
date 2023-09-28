import React from "react";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { Input } from "../common/FormControls/FormControls";
import { required } from "utils/validators/validators";
import s from "../common/FormControls/FormControls.module.css";

export type LoginFormOwnProps = {
  captchaUrl: string | null;
};

export type FormDataType = {
  captcha: string | null;
  email: string;
  password: string;
  rememberMe: boolean;
};
const LoginForm: React.FC<InjectedFormProps<FormDataType, LoginFormOwnProps> & LoginFormOwnProps> = ({
  handleSubmit,
  error,
  captchaUrl,
}) => {
  return (
    <>
      <p>
        To log in get registered{" "}
        <a href={"https://social-network.samuraijs.com/"} target={"_blank"}>
          here
        </a>
      </p>
      <p>or use common test account credentials:</p>
      <p> Email: free@samuraijs.com</p>
      <p>Password: free</p>

      <form action="" onSubmit={handleSubmit}>
        <div>
          <Field placeholder={"email"} name={"email"} component={Input} validate={[required]} type={"input"} />
        </div>
        <div>
          <Field placeholder={"password"} name={"password"} component={Input} validate={[required]} type={"input"} />
        </div>
        <div>
          <Field type="checkbox" name={"rememberMe"} component={"input"} />
        </div>
        {captchaUrl && <img src={captchaUrl} />}
        {captchaUrl && (
          <div>
            <Field
              placeholder={"enter anti-bot symbols "}
              name={"captcha"}
              component={Input}
              validate={[required]}
              type={""}
            />
          </div>
        )}
        {error && <div className={s.fieldSummaryError}>{error}</div>}

        <div>
          <button type={"submit"} name={"submit"}>
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export const LoginReduxForm = reduxForm<FormDataType, LoginFormOwnProps>({
  form: "loginForm",
})(LoginForm);
