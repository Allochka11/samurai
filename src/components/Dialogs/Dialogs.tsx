import React, {ChangeEvent} from 'react';
import {Message} from "./Message/Message";
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogsStatePropsType} from "../../redux/state";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/message-reducer";


export const Dialogs = (props: DialogsStatePropsType) => {


    let dialogsElements = props.state.dialogs.map((el) => <DialogItem key={el.id} name={el.name} id={el.id}/>
    );

    let messagesElements = props.state.messages.map((el) => <Message key={el.id} message={el.message} id={el.id}/>)
    let newMessage = React.createRef<HTMLTextAreaElement>();
    let newMessageBody = props.state.newMessageBody

    console.log(props.state.newMessageBody)

    const onSendMessageClick = () => {
        props.dispatch(sendMessageActionCreator());
    }
    let onNewMessageChange = (el: ChangeEvent<HTMLTextAreaElement>) => {
        let body = el.target.value;
        props.dispatch(updateNewMessageBodyActionCreator(body))
    }

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogs__item}>
                    {dialogsElements}
                </div>
                <div>
                    <div>{messagesElements}</div>
                    <div className={s.send}>
                        <div><textarea name="" value={newMessageBody}
                                       onChange={onNewMessageChange}
                                       placeholder={'Enter your message'}></textarea>
                        </div>
                        <div>
                            <button onClick={onSendMessageClick}>send</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

// export default Dialogs;