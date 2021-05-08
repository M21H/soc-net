import React from "react";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    userStatus: this.props.userStatus,
  };

  activeEditMode = () => {
    this.setState({ editMode: true });
  };

  deactiveEditMode = () => {
    this.setState({ editMode: false });
    this.props.updateUserStatus(this.state.userStatus);
  };

  onUserStatusChange = (e) => {
    this.setState({ userStatus: e.target.value });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.userStatus !== this.props.userStatus) {
      this.setState({ userStatus: this.props.userStatus });
    }
  }

  render() {
    // console.log('render')
    return (
      <div>
        {this.state.editMode ? (
          <input
            type="text"
            autoFocus={true}
            onBlur={this.deactiveEditMode}
            onChange={this.onUserStatusChange}
            value={this.state.userStatus}
          />
        ) : (
          <div onDoubleClick={this.activeEditMode}>{this.props.userStatus}</div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
