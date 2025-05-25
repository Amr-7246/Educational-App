import { ICourse } from '@/types/coursesTypes'
import React from 'react'
import Image from "next/image";

const CourseDescription = (course:ICourse) => {
  return (
              <div className="lg:col-span-2 space-y-8">
                {/* What You'll Learn */}
                <div className="course-section">
                  <h2 className="text-xl font-semibold mb-4">What You will Learn</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {(course as ICourse).learningOutcomes.map((outcome: string, index: number) => (
                      <div key={index} className="flex items-start gap-2">
                        <span className="text-success">✓</span>
                        <span>{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>
    
                {/* Requirements */}
                <div className="course-section">
                  <h2 className="text-xl font-semibold mb-4">Requirements</h2>
                  <ul className="space-y-2">
                    {(course as ICourse).requirements.map((req :  string , index : number ) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
    
                {/* Course Description */}
                <div className="course-section">
                  <h2 className="text-xl font-semibold mb-4">Description</h2>
                  <div className="prose text-foreground-secondary">
                    {(course as ICourse).description}
                  </div>
                </div>
    
                {/* Instructor */}
                <div className="course-section">
                  <h2 className="text-xl font-semibold mb-4">Instructor</h2>
                  <div className="flex items-start gap-4">
                    <div className="relative w-20 h-20 rounded-full overflow-hidden">
                      <Image
                        src={(course as ICourse).instructor.avatar.secure_url}
                        alt={(course as ICourse).instructor.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold">{(course as ICourse).instructor.name}</h3>
                      <p className="text-foreground-muted mb-2">
                        {(course as ICourse).instructor.expertise.join(", ")}
                      </p>
                      <p className="text-foreground-secondary">
                        {(course as ICourse).instructor.bio}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
  )
}

export default CourseDescription