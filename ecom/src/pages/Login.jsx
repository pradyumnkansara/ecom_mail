import React from 'react'

export default function Login() {
    return (
        <>
            <section>
                <div className='max-w-[1320px] mx-auto'>
                    <form className='max-w-[800px] shadow-xl shadow-cyan-500/50 mx-auto p-4 mt-[100px]'>
                        <div className='mb-[30px]'>
                            <label className='text-[22px]'>
                                User Name
                            </label>
                            <div className='mt-2'>
                                <input type="text" className='border-2 border-gray-400 w-[100%] px-2 py-3 rounded-[10px]' />
                            </div>
                        </div>
                        <div className='mb-[30px]'>
                            <label className='text-[22px]'>
                                Password
                            </label>
                            <div className='mt-2'>
                                <input type="password" className='border-2 border-gray-400 w-[100%] px-2 py-3 rounded-[10px]' />
                            </div>
                        </div>
                        <div>
                            <button className='border text-[23px] px-4 py-3 rounded-[10px] bg-cyan-500/50 text-white font-semibold'>
                                LogIn
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}
