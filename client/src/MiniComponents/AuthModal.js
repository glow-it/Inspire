import React, { useState } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
  } from '@chakra-ui/react'

function AuthModal({onClose,isOpen,isLogin}) {



  return (
    <Modal rounded-3xl isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent  >
            <div className='bg-white rounded-3xl flex flex-col items-center  h-[600px] w-full pt-12' >
                <h1 data-aos="fade-up" className='font-bold text-3xl mb-8' >{isLogin ? 'Welcome back' : 'Join Inspire.'}</h1>

                {
                    isLogin ?
                    <form action="/login" method='post' className='flex flex-col items-center'>


                    <div data-aos="fade-up" data-aos-delay='100' className="w-full flex mt-3">
                    <label htmlFor="email" className='font-semibold  mb-2 ml-2 text-sm'>Email</label>
                    </div>
                    <input data-aos="fade-up" data-aos-delay='100' required  type="email" name='email' autoComplete='off' className='outline-none transition-all border-2 border-slate-300 placeholder:text-sm placeholder:font-medium w-[350px] focus:border-slate-800 pl-6 py-3.5 rounded-full  font-semibold' />

                    <div data-aos="fade-up" data-aos-delay='200' className="w-full flex mt-3">
                    <label htmlFor="password" className='font-semibold  mb-2 ml-2 text-sm'>Password</label>
                    </div>
                    <input data-aos="fade-up" data-aos-delay='200' required  type="password" name='password' autoComplete='off'  className='outline-none transition-all border-2 border-slate-300 placeholder:text-sm placeholder:font-medium w-[350px] focus:border-slate-800 pl-6 py-3.5 rounded-full  font-semibold' />

                    <button data-aos="fade-up" data-aos-delay='300' type='submit' className="py-3.5 text-lg w-full px-6 mt-8 bg-slate-900 hover:bg-slate-800 transition-colors text-white font-semibold rounded-full">
                    Sign in
                    </button>

                   <p data-aos="fade-up" data-aos-delay='400' className='text-sm text-slate-400 mt-6' >©Glowit Labs. All rights reserved</p>

                </form>
                : 
<form action="/signup" method='post' className='flex flex-col items-center'>

<div data-aos="fade-up" data-aos-delay='100' className="w-full flex mt-3">
<label htmlFor="name" className='font-semibold  mb-2 ml-2 text-sm'>Full name</label>
</div>
<input data-aos="fade-up" data-aos-delay='100'  required  type="text" name='name' autoComplete='off'  className='outline-none transition-all border-2 border-slate-300 placeholder:text-sm placeholder:font-medium w-[350px] focus:border-slate-800 pl-6 py-3.5 rounded-full  font-semibold' />

<div data-aos="fade-up" data-aos-delay='200' className="w-full flex mt-3">
<label htmlFor="email" className='font-semibold  mb-2 ml-2 text-sm'>Email</label>
</div>
<input data-aos="fade-up" data-aos-delay='200' required  type="email" name='email' autoComplete='off' className='outline-none transition-all border-2 border-slate-300 placeholder:text-sm placeholder:font-medium w-[350px] focus:border-slate-800 pl-6 py-3.5 rounded-full  font-semibold' />

<div data-aos="fade-up" data-aos-delay='300' className="w-full flex mt-3">
<label htmlFor="password" className='font-semibold  mb-2 ml-2 text-sm'>Password</label>
</div>
<input data-aos="fade-up" data-aos-delay='300' required  type="password" name='password' autoComplete='off'  className='outline-none transition-all border-2 border-slate-300 placeholder:text-sm placeholder:font-medium w-[350px] focus:border-slate-800 pl-6 py-3.5 rounded-full  font-semibold' />

<button data-aos="fade-up" data-aos-delay='400' type='submit' className="py-3.5 text-lg w-full px-6 mt-8 bg-slate-900 hover:bg-slate-800 transition-colors text-white font-semibold rounded-full">
Create account
</button>

<p data-aos="fade-up" data-aos-delay='500' className='text-sm text-slate-400 mt-6' >©Glowit Labs. All rights reserved</p>

</form>
                }

                

               

            </div>
        </ModalContent>
      </Modal>
  )
}

export default AuthModal