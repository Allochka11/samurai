import React from "react";
import {profileAPI} from "../../../../api/api";

type ProfileStatusType = {
    status: string
    userId: number
}

export class ProfileStatus extends React.Component<ProfileStatusType> {


    state = {
        editMode: false,
        status: ''
    }

    componentDidMount() {
        console.log(this)
        profileAPI.getProfileStatus(this.props.userId).then(data => {
            this.setState({status: data})
        })


        // this.setState({status: a})
        // console.log(a)
    }

    onDoubleClickHandler = () => {


        this.setState({editMode: true})
        console.log('double click')
    }

    onBlurHandler() {

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
                        eslint-disable-next-line no-restricted-globals
                        <span onDoubleClick={this.onDoubleClickHandler}>{this.state.status} span</span>
                    </div>

                }
            </div>
        );
    }
};