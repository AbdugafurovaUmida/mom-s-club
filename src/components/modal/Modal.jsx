'use client'
import React, {useState} from 'react'
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
   const [message, setMessage] = useState('')

  const sendMessageToTelegram = async (message) => {
   
    try {
      const response = await axios.post(`https://api.telegram.org/bot7026888986:AAHZ7fHmJqRTZIY1bAriWY2jsj7BElobKsk/sendMessage`, {
        chat_id: '484404492', // Replace 'CHAT_ID' with your actual chat ID
        text: message,
      });
      console.log('Message sent:', response.data);
    } catch (error) {
       console.error('Error sending message:', error);
     }
   };
   const handleSend = () => {
    sendMessageToTelegram(message)

   
  }

  return (

    <>
          <h3>Welcome to My Telegram App</h3>
           <input
           type='text'
             placeholder="Type your message..."
             onChange={e => setMessage(e.target.value)}
           />
           <button onClick={handleSend()} title="Send" >send</button>
        </>
     
       );
     }
    
 