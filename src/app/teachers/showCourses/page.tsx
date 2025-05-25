"use client"

import { useGetEntity } from "@/APIs/REST";
import { ICourse } from "@/types/coursesTypes";
import Link from "next/link";
import CourseDeets from "../components/CourseDeets";
import { toast } from "react-toastify";

export default function Page() {
  const { data: courses , isLoading , isError } = useGetEntity<ICourse[]>('courses');

  if (isLoading) {
    return (
      <div className="page flex-center min-h-[50vh]">
        <div className="text-xl text-foreground-muted">Loading courses...</div>
      </div>
    );
  } else if (isError) {
    toast.error('Faild')
  } else {
    toast.error('Done')
  }
  console.log(courses)
  return (
    <main className="page">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-foreground">Your Courses</h1>
        <Link  href="/teachers/PushCourses" className="bg-primary text-primary-foreground px-6 py-2.5 rounded-lg hover:bg-primary-hover transition-colors duration-200" >
          Create New Course
        </Link>
      </div>

      {Array.isArray(courses) && courses.length === 0 ? (
        <div className="flex-center flex-col gap-4 min-h-[50vh] text-foreground-muted">
          <div className="text-6xl">📚</div>
          <p className="text-xl">You have not created any courses yet</p>
          <Link  href="/teachers/PushCourses" className="bg-primary text-primary-foreground px-6 py-2.5 rounded-lg hover:bg-primary-hover transition-colors duration-200 mt-4" >
            Create Your First Course
          </Link>
        </div>
      ) 
      : (<CourseDeets />)
      }

    </main>
  );
}