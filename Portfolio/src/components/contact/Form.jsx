import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


import img from '../../assets/webdev-06.webp';
function Form() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_i1opgoi', 'template_fj7fwf7', form.current, {
                publicKey: 'Yh-uXs1dFmwjUc4-c',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (<>
        <div className="bg-black w-full h-screen flex flex-col items-center relative">

            <div className=" absolute  bg-amber-300 w-3/4 h-full flex justify-center bottom-0">
                <div className=" w-1/2 h-full flex flex-col justify-center items-center overflow-hidden">
                    <img src={img} alt="Web development" className="w-full h-full object-cover relative top-20"></img>
                </div>
                <div className="w-1/2 h-full bg-white flex flex-col justify-center px-15">
                    <p className='text-black text-6xl mt-6 font-bold '>Let's Build</p>
                    <p className='text-black text-6xl mt-1 font-bold'>Something</p>
                    <p className=' my-7 text-zinc-500'>Fill this form to contact me</p>
                    <form className='mt-2' ref={form} onSubmit={sendEmail}>
                        
                        <input className='bg-zinc-300 text-zinc-600 my-2 py-4 w-full pl-10 placeholder:text-zinc-600 font-bold border-none focus:outline-none' type='text' name="user_name" placeholder='NAME'></input>
                        <input className='bg-zinc-300 text-zinc-600 my-2 py-4 w-full pl-10 placeholder:text-zinc-600 font-bold border-none focus:outline-none' type='email' name="user_email" placeholder='EMAIL ADDRESS'></input>
                        <textarea className='bg-zinc-300 text-zinc-600 my-2 py-4 w-full pl-10 placeholder:text-zinc-600 font-bold border-none focus:outline-none' type='text' name="message" placeholder='MESSAGE'></textarea>
                        <button type="submit" className=" bg-amber-300 text-black text-sm mt-10 mr-60 font-bold px-10 py-6 cursor-pointer transition duration-200 " value="Send">SUBMIT</button>
                    </form>
                </div>
            </div>
        </div>
    </>);
}

export default Form;