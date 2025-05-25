'use client'
import { ICourse, ILesson, IModule } from '@/types/coursesTypes'
import React, { useState } from 'react'

const CourseSidebar = (course:ICourse) => {
  const [selectedModule, setSelectedModule] = useState<number>(0);
  return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Course Content</h2>
            <div className="course-section">
              <div className="text-sm text-foreground-muted mb-4">
                {(course as ICourse).totalLessons} lessons • {Math.floor((course as ICourse).totalDuration / 60)}h {(course as ICourse).totalDuration % 60}m total
              </div>

              {/* Modules Accordion */}
              <div className="space-y-2">
                {(course as ICourse).modules.map((module : IModule , index : number ) => (
                  <div  key={index} className="border border-border rounded-lg overflow-hidden" >
                    <button
                      onClick={() => setSelectedModule(selectedModule === index ? -1 : index)}
                      className="flex items-center justify-between w-full p-4 text-left hover:bg-background-secondary transition-colors"
                    >
                      <div>
                        <h3 className="font-medium">Module {index + 1}: {module.title}</h3>
                        <p className="text-sm text-foreground-muted">
                          {module.lessons.length} lessons
                        </p>
                      </div>
                      <span className={`transition-transform ${ selectedModule === index ? 'rotate-180' : '' }`}>
                        ▼
                      </span>
                    </button>

                    {selectedModule === index && (
                      <div className="border-t border-border">
                        {module.lessons.map((lesson : ILesson , lessonIndex : number) => (
                          <div key={lessonIndex} className="flex items-center gap-3 p-4 hover:bg-background-secondary transition-colors border-b border-border last:border-0" >
                            <span className="text-primary">
                              {lesson.isPreview ? '▶' : '🔒'}
                            </span>
                            <div className="flex-1">
                              <h4 className="font-medium">{lesson.title}</h4>
                              <p className="text-sm text-foreground-muted">
                                {lesson.duration} min
                              </p>
                            </div>
                            {lesson.isPreview && (
                              <span className="text-xs bg-success/10 text-success px-2 py-1 rounded">
                                Preview
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
  )
}

export default CourseSidebar