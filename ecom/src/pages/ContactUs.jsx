import axios, { toFormData } from 'axios'
import React, { useState } from 'react'

export default function ContactUs() {

    // let [contactData, setconatactData] = useState({
    //     Mname: "",
    //     Memail: "",
    //     Mpassword: "",
    //     Mmessage: "",
    // })

    let dataMail = (e) => {
        e.preventDefault()
        let allMailData=new FormData(e.target)
        // console.log(allMailData)
        // let objdata = {
        //     Mname: e.target.Mname.value,
        //     Memail: e.target.Memail.value,
        //     Mpassword: e.target.Mpassword.value,
        //     Mmessage: e.target.Mmessage.value,
        // }
        

        axios.post("http://localhost:8000/contact/contact-mail", allMailData)
            .then((res) => res.data)
            .then((finalres) => {
                console.log(finalres)
            })
    }

    return (
        <>
            <section>
                <div className='max-w-[1320px] mx-auto'>
                    <form onSubmit={dataMail} className='max-w-[800px] shadow-xl shadow-cyan-500/50 mx-auto p-4 mt-[100px]'>
                        <div className='mb-[30px]'>
                            <label className='text-[22px]'>
                                User Name
                            </label>
                            <div className='mt-2'>
                                <input type="text" name='Mname' className='border-2 border-gray-400 w-[100%] px-2 py-3 rounded-[10px]' />
                            </div>
                        </div>
                        <div className='mb-[30px]'>
                            <label className='text-[22px]'>
                                User Email
                            </label>
                            <div className='mt-2'>
                                <input type="email" name='Memail' className='border-2 border-gray-400 w-[100%] px-2 py-3 rounded-[10px]' />
                            </div>
                        </div>
                        <div className='mb-[30px]'>
                            <label className='text-[22px]'>
                                Password
                            </label>
                            <div className='mt-2'>
                                <input type="password" name='Mpassword' className='border-2 border-gray-400 w-[100%] px-2 py-3 rounded-[10px]' />
                            </div>
                        </div>
                        <div className='mb-[30px]'>
                            <label className='text-[22px]'>
                                Message
                            </label>
                            <div className='mt-2'>
                                <textarea name="Mmessage" id="" cols="30" rows="10" className='border-2 border-gray-400 w-[100%] px-2 py-3 rounded-[10px]'></textarea>
                            </div>
                        </div>
                        <div>
                            <button className='border text-[23px] px-4 py-3 rounded-[10px] bg-cyan-500/50 text-white font-semibold'>
                                Send
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}
