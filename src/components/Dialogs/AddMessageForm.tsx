import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Textarea} from "../common/FormControls/FormControls";


export type MessageFormDataType = {
    newMessageBody: string
}

const maxLength100 = maxLengthCreator(100);

const AddMessageForm: React.FC<InjectedFormProps<MessageFormDataType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'newMessageBody'}
                       placeholder={'Enter your message'}
                       component={Textarea}
                       validate={[required, maxLength100]}

                />
            </div>
            <div>
                <button type={"submit"}>send</button>
            </div>
        </form>
    )
};

export const AddMessageReduxForm = reduxForm<MessageFormDataType>({
    form: 'addMessageForm'
})(AddMessageForm)