import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div className={s.content}>
        <img src='http://www.photoplato.com/photoplato/23751-free-large-desktop-wallpaper.png' />
      </div>
      <div className={s.discription}>
        avatar+discription
      </div>
    </div>
            
    );
}
export default ProfileInfo;