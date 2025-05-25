"use client"
// import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'
import { IoCloseOutline } from "react-icons/io5";
import { ThemeToggle } from './themeToggle';
import { useLogOut } from '@/APIs/Auth/logOut';

const GlobalNav = () => {
    const { mutate : logOut } = useLogOut()
    // const { mutate : DeleteUser } = useSignOut()
    const navRef = useRef<HTMLDivElement>(null);
    const [IsOpend, setIsOpend] = useState(false)
    const curentPath = usePathname()
    const options = [
        {
        name: 'Home',
        href: '/global',
        fake_href: '/global',
        },
        {
        name: 'Courses',
        href: '/courses',
        fake_href: '/courses',
        },
        {
        name: 'Teachers',
        href: '/teachers/PushCourses',
        fake_href: '/global/store',
        },
        {
        name: 'Admin',
        href: '/admin',
        fake_href: '/admin/dashboard/',
        },
        {
        name: 'profile',
        href: '/students/profile',
        fake_href: '/students/profile',
        }
    ]
    useEffect(() => {
        const handleResize = () => {
            const IsSmall = !!( window.innerWidth < 768 )
            if (IsOpend  && IsSmall ) {
                document.body.style.overflow = "hidden"
            } else {
                document.body.style.overflow = "auto"
            }
        }
        handleResize()
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
            document.body.style.overflow = "auto"
        } 
    }, [IsOpend])
return (
<>
    {/* Wide nav bar */}
        <nav  className='hidden border-b !font-bold border-black mb-10 py-5 md:flex-center !justify-between gap-3 h-fit sticky w-[80%] mx-auto '>
            <div className=''>
                <ThemeToggle/>
            </div>
            <div className='flex-center lg:gap-8 gap-4 text-sky-400 '>
                {options.map((option, idx) => (
                    false  ?
                    <Link 
                        className={` hidden ${curentPath.includes(option.fake_href) ? '!text-white' : ''} hover:!text-white duration-500 cursor-pointer`} key={idx} 
                        href={option.href}>
                        {option.name}
                    </Link> 
                    :
                    <Link 
                        className={`${curentPath.includes(option.fake_href) ? '!text-white' : ''} hover:!text-white duration-500 cursor-pointer`} key={idx} 
                        href={option.href}>
                        {option.name}
                    </Link> 
                ))}
            </div>
            {
                true ? 
                    <div className='flex-center gap-2'>
                    <Link href={"/students/login"} className=' btn'>log In</Link>
                    <Link href={"/students/signup"} className='btn  hover:!via-black  hover:from-amber-300/30 hover:to-amber-300/30  from-sky-400/30 via-black to-sky-400/30 '>Sign In</Link>
                    </div> 
                :
                    <div className='flex-center gap-2'>
                        <div className='h-[50px] w-[50px] rounded-full bg-sky-400'></div>
                        <button onClick= {() => logOut() }  className=' btn'>Sign out</button>
                    </div> 
            }
        </nav >
    {/* Wide nav bar */}
    {/* mobile nav bar */}
        <nav ref={navRef}  className="flex-center md:hidden mb-[-50] !justify-between text-stone-400 h-fit w-[90%] pt-4 mx-auto ">
            <div className=''>
                <ThemeToggle/>
            </div>
            {/* <Link href={"/global/home"} >
                <img className='md:w-[60px] md:h-[60px] h-[50px] w-[50px] cursor-pointer rounded-lg border-[1px] border-sky-400 ' src="/assets/photo_2_2025-04-28_02-57-24.jpg" alt="logo" />
            </Link> */}
            <div onClick={() => {setIsOpend(true); navRef.current?.scrollIntoView({ behavior: "smooth" });}}  className="flex-center group items-end flex-col w-[60px] h-[60px] gap-2 cursor-pointer">
                <span className={` ${IsOpend ? 'w-full  group-hover:w-1/2 ' : ' w-1/2 group-hover:w-full' } block  h-[1px] bg-sky-400 transition-all duration-[800ms] ease-in-out `}></span>
                <span className="block w-full h-[1px] bg-sky-400 transition-all duration-300 ease-in-out"></span>
            </div>
        </nav>
        {/* Sid Bar */}
            <nav className={` z-20 absolute ${IsOpend ? "translate-x-[0%]" : "translate-x-[-100%]" } left-0 top-0 md:hidden z-20 flex h-screen duration-1000 transition-all w-full `}>
                <div className=' text-stone-300 bg-stone-900 w-[70%] border-r border-stone-600 '>
                    <div className='border-b flex justify-end border-black px-5 '>
                        <div onClick={() => setIsOpend(false)}  className={`flex-center group items-end flex-col w-[60px] h-[60px] gap-2 cursor-pointer`}>
                            <span className={` text-sky-400 text-[30px] hover:scale-125 hover:rotate-15 hover:text-white duration-700 `}><IoCloseOutline/></span>
                        </div>
                    </div>
                    <div  className='flex flex-wrap h-fit '>
                        {options.map((option, idx) => (
                            false  ?
                                <Link onClick={() => setIsOpend(false)}  className={`${curentPath == option.href ? '!text-white' : 'text-stone-500'} hidden hover:!text-stone-300 font-black font-mono duration-500 py-5 px-3 w-full border-b border-stone-600 cursor-pointer`} key={idx} href={option.href}>{option.name}</Link>
                            :   <Link onClick={() => setIsOpend(false)}  className={`${curentPath == option.href ? '!text-white' : 'text-stone-500'} hover:!text-stone-300 font-black font-mono duration-500 py-5 px-3 w-full border-b border-stone-600 cursor-pointer`} key={idx} href={option.href}>{option.name}</Link>
                        ))}
                    </div>
                    {
                        true ? 
                        <div className='flex-center mt-10 !justify-around '>
                            <Link onClick={() => setIsOpend(false)} href={"/students/login"} className=' btn w-[40%]'>log In</Link>
                            <Link onClick={() => setIsOpend(false)} href={"/students/signup"} className='btn w-[40%]  hover:!via-black  hover:from-amber-300/30 hover:to-amber-300/30  from-sky-400/30 via-black to-sky-400/30 '>Sign In</Link>
                        </div> 
                        :
                        <div className='flex-center mt-10 !justify-around '>
                            <button onClick= {() => logOut() }   className=' btn w-[40%]'>Sign out</button>
            </div>
                    }
                </div>
                {
                // IsOpend &&
                // <motion.div
                //     initial={{ opacity: 0 }}
                //     animate={{opacity : 0.5 }}
                //     transition={{
                //         duration: 0.3 ,
                //         delay: 0.8 ,
                //         ease: "easeInOut"
                //     }}
                //     onClick={() => setIsOpend(false)} className={` h-full flex-1 bg-black   `} />
                }
            </nav>
        {/* Sid Bar */}
    {/* mobile nav bar */}
</>
)
}

export default GlobalNav