import React from 'react'
import messageImg from '../../../../assets/defaultImg/message.png'
function Message(props) {
  return (
    <form className='message'>
      <div className='styling_message'>
        <div className='message_svg'>
          <img className='message_img' src={messageImg} alt='err' />
        </div>
      </div>
    </form>
  )
}

export default Message
