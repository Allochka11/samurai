import React from "react";

type MessagePropsType = {
    message: string
    id: number
}

export const Message = (props: MessagePropsType) => {
    // console.log(props, 'Message')
    return (
        <div>
            <div>{props.message}</div>
        </div>
    )
}