import * as axios from 'axios'
import React, { Component } from 'react'
import style from './Users.module.css'
import userImg from '../../assets/img/user.png'
import { Avatar } from '@material-ui/core'

export default class UsersC extends Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then(response => {
        // debugger
        this.props.setUsers(response.data.items)
        this.props.setUsersCount(response.data.totalCount)
      })
  }

  onPageChange = pageNumber => {
    this.props.setCurrentPage(pageNumber)
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then(response => this.props.setUsers(response.data.items))
  }

  render() {
    let pagesCount = Math.ceil(this.props.usersCount / this.props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
    }

    return (
      <div className={style.users}>
        <div>
          {pages.map((p, index) => (
            <span
              key={`${p}_${index}`}
              className={this.props.currentPage === p ? style.active : null}
              onClick={() => this.onPageChange(p)}
            >
              {`${p} `}
            </span>
          ))}
        </div>
        {this.props.users.map(u => (
          //---------------create User component--------------
          <div key={u.id}>
            <Avatar src={u.photos.small != null ? u.photos.small : userImg}/>
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
          //------------------ User component------------------
        ))}
      </div>
    )
  }
}
