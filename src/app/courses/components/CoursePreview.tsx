'use client'
import { ICourse } from '@/types/coursesTypes'
import React, { useState } from 'react'
import Image from "next/image";

const CoursePreview = (course : ICourse) => {
    const [isTrailerPlaying, setIsTrailerPlaying] = useState(false);
    const handleEnroll = async () => {
      console.log("Enrolling in course:", (course as ICourse)._id);
    };
  return (
                  <div className="course-card">
                    <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                      {isTrailerPlaying ? (
                        <video
                          src={(course as ICourse).trailerVideo}
                          controls
                          autoPlay
                          className="w-full h-full"
                        />
                      ) : (
                        <>
                          <Image
                            src={(course as ICourse).thumbnail.secure_url}
                            alt={(course as ICourse).title}
                            fill
                            className="object-cover"
                          />
                          <button
                            onClick={() => setIsTrailerPlaying(true)}
                            className="absolute inset-0 flex-center bg-black/50 group"
                          >
                            <div className="w-16 h-16 rounded-full bg-primary/90 flex-center
                              group-hover:bg-primary transition-colors">
                              <span className="text-2xl text-primary-foreground">▶</span>
                            </div>
                          </button>
                        </>
                      )}
                    </div>
    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="text-2xl font-bold text-foreground">
                          {(course as ICourse).discount > 0 ? (
                            <>
                              <span className="text-primary">${(course as ICourse).originalPrice}</span>
                              <span className="text-sm line-through text-foreground-muted ml-2">
                                ${(course as ICourse).price}
                              </span>
                            </>
                          ) : (
                            <span className="text-primary">${(course as ICourse).price}</span>
                          )}
                        </div>
                        {(course as ICourse).discount > 0 && (
                          <span className="bg-warning/10 text-warning px-2 py-1 rounded">
                            {(course as ICourse).discount}% OFF
                          </span>
                        )}
                      </div>
    
                      {/* Update the enroll button to use the handler */}
                      <button 
                        onClick={handleEnroll}
                        className="btn-primary w-full py-3 transition-transform active:scale-95"
                      >
                        Enroll Now
                      </button>
                    </div>
                  </div>
  )
}

export default CoursePreview