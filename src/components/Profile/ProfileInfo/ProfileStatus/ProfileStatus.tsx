import React from "react";

type ProfileStatusType = {
    status: string
}

export class ProfileStatus extends React.Component<ProfileStatusType> {
    state = {
        editMode: false
    }

    onDoubleClickHandler = () => {
     
        console.log(this)
        this.setState({editMode: true})
        console.log('double click')
    }

    onBlurHandler() {
        console.log(this)
        this.setState({editMode: false})
        console.log('onBlur')
    }

    render() {
        return (
            <div>
                {this.state.editMode ?

                    <div>
                        <input type="text" value={this.props.status}
                               onBlur={this.onBlurHandler.bind(this)}
                               autoFocus={true}
                        />
                    </div>
                    :
                    <div>
                        <span onDoubleClick={this.onDoubleClickHandler}>{this.props.status} span</span>
                    </div>

                }
            </div>
        );
    }
};