import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../../utils/validators/validators";
import {Textarea} from "../../../common/FormControls/FormControls";


export type PostFormDataType = {
    newPostText: string
}

const maxLength10 = maxLengthCreator(10);
const AddPostForm: React.FC<InjectedFormProps<PostFormDataType>> = (props) => {

    return (
        <form action="" onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Write your message...'}
                       name={'newPostText'}
                       component={Textarea}
                       validate={[required, maxLength10]}

                />
            </div>
            <div>
                <button type={'submit'}>Submit</button>
            </div>
        </form>
    );
};

export const AddPostReduxForm = reduxForm<PostFormDataType>({
    form: 'addPostForm'
})(AddPostForm)