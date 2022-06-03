import React from 'react'
import notificationImg from '../../../../assets/defaultImg/notification.png'
function Notification(props) {
  return (
    <form className='notification'>
      <div className='styling_notification'>
        <div className='notification_svg'>
          <img className='notification_img' src={notificationImg} alt='err' />
        </div>
      </div>
    </form>
  )
}

export default Notification
