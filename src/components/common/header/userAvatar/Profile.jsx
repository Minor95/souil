import React from 'react';
import profileImg from "../../../../assets/defaultImg/avatar.png"
function Profile(props) {
    return (
      <form className='profile'>
        <div className='styling_profile'>
          <div className='profile_svg'>
            <img className='profile_img' src={profileImg} alt='err' />
          </div>
        </div>
      </form>
    )
}

export default Profile;