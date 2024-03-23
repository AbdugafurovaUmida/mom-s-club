'use client'
import React, { useState } from 'react'
import axios from 'axios';
import Image from 'next/image'
import Close from "../../../public/images/icons8-x.png"
import PhoneInput from 'react-phone-number-input'
import flags from 'react-phone-number-input/flags'
import 'react-phone-number-input/style.css'




export default function Modal({ toggleModal, renderBackdrop }) {
  // const BOT_API_TOKEN = 'TOKEN'; // Replace 'TOKEN' with your actual bot token

  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState("");

  const [send, setSend] = useState(false)


  const sendMessageToTelegram = async (name, lastName, phone) => {
  
    try {
      const response = await axios.post(`https://api.telegram.org/bot7026888986:AAHZ7fHmJqRTZIY1bAriWY2jsj7BElobKsk/sendMessage`, {
        chat_id: '484404492', // Replace 'CHAT_ID' with your actual chat ID
        text: `Ismi: ${name}; \nFamilyasi: ${lastName}; \nTelefon Raqami: ${phone};`
      });
      console.log('Message sent:', response.data);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault()
    if (name && lastName && phone) {
        sendMessageToTelegram(name, lastName, phone)
        setName('')
        setPhone('')
        setLastName('')
    
    }
    else {
    console.log('please enter a phonenumber')
  }
  setSend(true)
  };

  return (

    <>
        {send ?
        <div className={renderBackdrop}>
          <div className='rounded-[30px] border-[3px] border-solid border-[#F1DBDA]  px-[40px] py-[40px] max-w-[500px] max-h-[400px] w-full  overflow-auto fixed top-[136px] left-[280px] bg-[white] z-50 text-center'>
            <div className='flex justify-end'>
              <button onClick={() => toggleModal()} className='max-w-[40px] mb-[20px]'><Image src={Close} /></button>
            </div>
            <h3 className='alexandra text-2xl md:leading-[100px] leading-[70px] md:my-4 my-5 inline-block '>Congratulation</h3>
          </div> 
        </div>
        :
        <div className={renderBackdrop}>
          <form className={`rounded-[30px] border-[3px] border-solid border-[#F1DBDA]  px-[40px] py-[40px] max-w-[600px] max-h-[500px] w-full  overflow-auto m-auto mt-[5%] bg-[white] z-50 `} action="" onSubmit={handleSubmit}>
            <div className='flex justify-end'>
              <button onClick={() => toggleModal()} className='max-w-[40px] mb-[20px]'><Image src={Close} /></button>
            </div>

            <div>
              <input
                type='text'
                placeholder="Введите ваше имя"
                required
                value={name}
                onChange={e => setName(e.target.value)}
                className='focus:outline-none inline-block py-[18px] px-9 w-full max-w-full bg-transparent border-[3px] border-solid border-secondary rounded-[30px] text-base font-regular '
              />
            </div>

            <div>
              <input
                type="text"
                placeholder='Введите фамилию'
                required
                value={lastName}
                onChange={e => setLastName(e.target.value)}
                className='focus:outline-none inline-block py-[18px] px-9 w-full max-w-full bg-transparent border-[3px] border-solid border-secondary rounded-[30px] text-base font-regular my-[25px] '
              />
            </div>

            <div>
              <PhoneInput
                type="text"
                placeholder='Введите свой телефон'
                flags={flags}
                country={"uz"}
                enableSearch={true}
                required
                value={phone}
                onChange={(phone) => setPhone(phone)}
                className='focus:outline-none inline-block py-[18px] px-9  bg-transparent border-[3px] border-solid border-secondary rounded-[30px] text-base font-regular '
              />
            </div>


            <button type='submit' title="Send" className=' mt-[25px] inline-block py-[18px] px-9 w-full max-w-full bg-secondary border-[3px] border-solid border-transparent rounded-[30px] text-base font-regular text-center text-white' >Отправлять</button>
          </form>
        </div>
          }
    </>

  );
}

