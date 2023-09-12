import {
  MessagesPagePropsType,
  sendMessageActionCreator,
  // updateNewMessageBodyActionCreator
} from "../../redux/message-reducer";
import { Dialogs } from "./Dialogs";
import { connect } from "react-redux";
import { AppRootStateType } from "../../redux/redux-store";
import { compose, Dispatch } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import React from "react";

type MapStatePropsType = {
  dialogsPage: MessagesPagePropsType;
  isAuth: boolean;
};
type MapDispatchPropsType = {
  // updateNewMessageBody: (body: string) => void
  sendMessage: (newMessageBody: string) => void;
};

export type DialogsPropsTypes = MapStatePropsType & MapDispatchPropsType;

let mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
  return {
    dialogsPage: state.messageReducer,
    isAuth: state.auth.isAuth,
  };
};
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
  return {
    // updateNewMessageBody: (body: string) => {
    //     dispatch(updateNewMessageBodyActionCreator(body))
    // },
    sendMessage: (newMessageBody) => {
      dispatch(sendMessageActionCreator(newMessageBody));
    },
  };
};

const DialogsContainer = compose<React.FC>(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs);
export default DialogsContainer;

// export const  withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Dialogs));
