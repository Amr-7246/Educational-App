import Link from 'next/link';
import React from 'react'
interface IOption {
  name : string ;
  path : string 
}
const TeacherNavBar = () => {
  const Options = [
    {
      name : 'push new course ',
      path : '/teachers/PushCourses' 
    },
    {    
      name : 'show all courses',
      path : '/teachers/showCourses' 
    } 
  ]
  return (
    <div className='fix w-full flex flex-row gap-5 flex-center'>
      {Options.map((option : IOption ,idx) => (
        <Link className={`btn`} href={option.path} key={idx} >{option.name}</Link>
      ))}
    </div>
  )
}

export default TeacherNavBar