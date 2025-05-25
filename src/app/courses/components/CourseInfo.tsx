import { ICourse } from '@/types/coursesTypes'
import Image from "next/image";
import React from 'react'

const CourseInfo = (course: ICourse) => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-4">{(course as ICourse).title}</h1>
        <p className="text-lg text-foreground-secondary">{(course as ICourse).shortDescription}</p>
      </div>      
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="relative w-12 h-12 rounded-full overflow-hidden">
            <Image
            src={(course as ICourse).instructor.avatar.secure_url}
            alt={(course as ICourse).instructor.name}
            fill
            className="object-cover"
            />
          </div>
        <div>
          <h3 className="font-medium text-foreground">{(course as ICourse).instructor.name}</h3>
          <p className="text-sm text-foreground-muted">{(course as ICourse).instructor.expertise.join(", ")}</p>
        </div>
      </div>      
      <div className="flex items-center gap-2">
        <span className="text-warning text-xl">⭐</span>
        <div>
          <span className="font-medium">{(course as ICourse).averageRating.toFixed(1)}</span>
          <span className="text-foreground-muted">
          ({(course as ICourse).totalReviews} reviews)
          </span>
        </div>
      </div>
      </div>      
        <div className="flex flex-wrap gap-4">
        <div className="stats-card">
        <span className="text-foreground-muted">Level</span>
        <span className="font-medium text-foreground">{(course as ICourse).level}</span>
        </div>
        <div className="stats-card">
        <span className="text-foreground-muted">Duration</span>
        <span className="font-medium text-foreground">
          {Math.floor((course as ICourse).totalDuration / 60)}h {(course as ICourse).totalDuration % 60}m
        </span>
      </div>
      <div className="stats-card">
        <span className="text-foreground-muted">Lessons</span>
        <span className="font-medium text-foreground">{(course as ICourse).totalLessons}</span>
      </div>
      <div className="stats-card">
        <span className="text-foreground-muted">Students</span>
        <span className="font-medium text-foreground">{(course as ICourse).enrolledStudents}</span>
      </div>
      </div>
    </div>
  )
}

export default CourseInfo