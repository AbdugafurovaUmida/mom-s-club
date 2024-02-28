'use client'
import React, { useState } from 'react'
import axios from 'axios';

// const Modal = ({modalbot}) => {
//   return (
//     <div >
//         <form action="" >
//             <input type="text" placeholder='name' id='fname' className='border-black border-1' />
//             <input type="text" placeholder='sourname'id='sourname' className='border-black border-1'  />
//             <input type="text" placeholder='number' id='number' className='border-black border-1' />
//             <input type="submit" onClick={modalbot()} className='border-green border-1' />
//         </form>
//     </div>
//   )
// }

// export default Modal





export default function Modal() {
  // const BOT_API_TOKEN = 'TOKEN'; // Replace 'TOKEN' with your actual bot token


  const [name, setName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [lastName, setLastName] = useState('')

  const sendMessageToTelegram = async (name, lastName, phoneNumber) => {

    try {
      const response = await axios.post(`https://api.telegram.org/bot7026888986:AAHZ7fHmJqRTZIY1bAriWY2jsj7BElobKsk/sendMessage`, {
        chat_id: '484404492', // Replace 'CHAT_ID' with your actual chat ID
        text: `Ismi: ${name}; \nFamilyasi: ${lastName};\n Telefon Raqami: ${phoneNumber};`
      });
      // {   }
      console.log('Message sent:', response.data);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault()
    if (name && lastName && phoneNumber) {
        sendMessageToTelegram(name, lastName, phoneNumber)
        setName('')
        setPhoneNumber('')
        setLastName('')
    
    }
    else {
    console.log('please enter a phonenumber')
  }
  }

  return (

    <>
      <form action="" onSubmit={handleSubmit}>
        <h3>Welcome to My Telegram App</h3>
        <div>
          <input
            type='text'
            placeholder="Type your Name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>

        <div>
          <input
            type="text"
            placeholder='Type your phone Last Name'
            value={lastName}
            onChange={e => setLastName(e.target.value)}
          />
        </div>

        <div>
          <input t
            type="text"
            placeholder='Type your phone Number' 
            value={phoneNumber}
            onChange={e => setPhoneNumber(e.target.value)}
            />
        </div>


        <button type='submit' title="Send" >send</button>
      </form>
    </>

  );
}

