import React from 'react';
import styles from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/user.png';

class Users extends React.Component {
  debugger;
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items);
      });
  }

  // onPageChanged=(pageNumber)=>{
  //   this.props.setCurrentPage(pageNumber);
  //   axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
  //   .then(response => {
  //     this.props.setUsers(response.data.items);
  //   });
  // }
  render() {
    let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
      pages.push(i);
    }
    debugger;
    return (
      

      <div>
        {pages.map(p => {
          return (
            <span className={this.props.currentPage === p && styles.selectedPage}
            onClick={()=>alert('asda')}
            
              // onClick={(e) => {this.onPageChanged(p);}}
              >{p}</span>
          )
        })}

        {this.props.users.map(u => <div key={u.id}>
          <span>
            <div>
              <img src={u.photos.small != null ? u.photos.small : userPhoto}
               className={styles.userPhoto} />
            </div>
            <div>
              {u.followed
                ? <button onClick={() => { this.props.unfollow(u.id) }}>UnFollow</button>
                : <button onClick={() => { this.props.follow(u.id) }}>Follow</button>}
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{"u.location.country"}</div>
              <div>{"u.location.city"}</div>
            </span>

          </span>

        </div>)
        }
      </div>

    );
  }

}
export default Users;