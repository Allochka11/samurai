import React from "react";

type ProfileStatusType = {
  status: string;
  userId: number;
  updateStatus: (status: string) => void;
};

export class ProfileStatus extends React.Component<ProfileStatusType> {
  state = {
    editMode: false,
    status: this.props.status,
  };

  onDoubleClickHandler = () => {
    this.setState({ editMode: true });
  };

  onBlurHandler = () => {
    this.setState({ editMode: false });
    this.props.updateStatus(this.state.status);
  };
  deactivateEditMode = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === "Enter") {
      this.props.updateStatus(this.state.status);
      this.setState({ editMode: false });
    }
  };

  componentDidUpdate(prevProps: Readonly<ProfileStatusType>, prevState: Readonly<{}>, snapshot?: any) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      });
    }
  }

  onChangeStatusHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ status: e.currentTarget.value });
  };

  render() {
    return (
      <div>
        {this.state.editMode ? (
          <div>
            <input
              type="text"
              value={this.state.status}
              onBlur={this.onBlurHandler}
              autoFocus={true}
              onChange={this.onChangeStatusHandler}
              onKeyDown={this.deactivateEditMode}
            />
          </div>
        ) : (
          <div>
            <span onDoubleClick={this.onDoubleClickHandler}>{this.props.status || "No status"} </span>
          </div>
        )}
      </div>
    );
  }
}
