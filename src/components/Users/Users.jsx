import * as axios from 'axios'
import React, { Component } from 'react'
import style from './Users.module.css'
import userImg from '../../assets/img/user.png'
import { Avatar } from '@material-ui/core'

export default class UsersC extends Component {
  componentDidMount() {
    axios
      .get('https://social-network.samuraijs.com/api/1.0/users?page=2')
      .then(response => this.props.setUsers(response.data.items))
  }

  render() {
    return (
      <div className={style.users}>
        {this.props.users.map(u => (
          <div key={u.id}>
            <Avatar src={u.photos.small && userImg} />
            <div>{u.name}</div>
            <div>{u.status}</div>
            {u.followed ? (
              <button onClick={() => this.props.unfollow(u.id)}>
                Unfollow
              </button>
            ) : (
              <button onClick={() => this.props.follow(u.id)}>Follow</button>
            )}
          </div>
        ))}
      </div>
    )
  }
}
