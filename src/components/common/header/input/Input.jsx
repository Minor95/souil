import React from 'react';

function Input(props) {
    return (
      <form className='search'>
        <div className='styling'>
          <div className='entrails'>
            <div className='glass'>🔍︎</div>
            <input className='search_input' type='text' placeholder='Поиск' />
          </div>
        </div>
      </form>
    )
}

export default Input;