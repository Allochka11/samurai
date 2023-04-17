import React from "react";

type MessagePropsType = {
    message: string
    id: number
}

export const Message = (props: MessagePropsType) => {

    return (
        <div>
            <div>{props.message}</div>
        </div>
    )
}