'use client'
import React, { useEffect, useState } from 'react'
import Image from "next/image";
import { useDeleteEntity, useGetEntity, usePatchEntity } from '@/APIs/REST';
import { ICourse } from '@/types/coursesTypes';
import { deleteAsset, uploadAsset } from '@/utils/assetsUpload';
import { toast } from 'react-toastify';

const CourseDeets = () => {
    // ~ Hooks
      const { data: courses , isError : CoursesError } = useGetEntity<ICourse[]>('courses'); 
      const [editingCourse, setEditingCourse] = useState<string | null>(null);
      const { mutate: updateCourse } = usePatchEntity('courses', '');
    // ~ Hooks
    // ~ Logics
    useEffect(() => {
      if(CoursesError) {
        toast.error('failed to gulp courses')
      }else{
        console.log(courses)
        toast.success('Done')
      }
    }, [CoursesError , courses ])
      // & Handle Course Update
      const handleUpdate = async (course_id: string, updatedData: Partial<ICourse>) => {
        updateCourse({ _id: course_id, data: updatedData });
        setEditingCourse(null);
      };
    
      // & Handle Media Update
      const handleMediaUpdate = async (course_id: string, file: File, type: 'thumbnail' | 'trailer') => {
        try {
          const result = await uploadAsset(file, type === 'thumbnail' ? 'image' : 'video');
          
          const course = Array.isArray(courses) ? courses.find((c: ICourse) => c._id === course_id) : null;
          if (type === 'thumbnail' && course?.thumbnail?.publicId) {
            await deleteAsset(course.thumbnail.publicId, 'image');
          }
    
          const updateData = type === 'thumbnail' 
            ? { thumbnail: { secure_url: result.secure_url, publicId: result.publicId } }
            : { trailerV_ideo: result.secure_url };
    
          handleUpdate(course_id, updateData);
        } catch (error) {
          console.error('Failed to update media:', error);
        }
      };
    
      // & Handle Course Delete
      const HandleDelete = (course_id: string) => {
        const { mutate: deleteCourse } = useDeleteEntity('courses' , course_id);
        if (window.confirm('Are you sure you want to delete this course?')) {
          deleteCourse()
        }
      };
      // & Handle Edit Mode
        const toggleEditMode = (course_id: string) => {
          setEditingCourse(editingCourse === course_id ? null : course_id);
        };
    // ~ Logics
  return (
      <div className="gr_id gr_id-cols-1 md:gr_id-cols-2 lg:gr_id-cols-3 gap-6">
        {Array.isArray(courses) && courses.map((course : ICourse ) => (
          <div  key={course._id}  className="course-card group relative overflow-h_idden" >
            {/* Thumbnail & Trailer */}
            <div className="relative aspect-v_ideo rounded-lg overflow-h_idden mb-4">
              {editingCourse === course._id ? (
                <div className="absolute inset-0 flex-center bg-background-tertiary">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => e.target.files?.[0] &&
                      handleMediaUpdate(course._id, e.target.files[0], 'thumbnail')}
                    className="absolute inset-0 opacity-0 cursor-pointer" />
                  <span className="text-foreground-muted">Click to change thumbnail</span>
                </div> ) 
                :(
                <Image
                    src={course.thumbnail.secure_url || ''}
                    alt={course.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ borderRadius: 'inherit' }}
                    priority={true} />
              )}
            </div>

            {/* Course Info */}
            <div className="space-y-4">
              {editingCourse === course._id ? (
                <input
                  type="text"
                  value={course.title}
                  onChange={(e) => handleUpdate(course._id, { title: e.target.value })}
                  className="text-xl font-semibold w-full bg-transparent border-b border-border focus:border-primary focus:ring-0 px-0"
                />
              ) : (
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {course.title}
                </h3>
              )}

              {/* Stats */}
              <div className="flex items-center gap-4 text-sm text-foreground-muted">
                <span className="flex items-center gap-1"> 👥 {course.enrolledStudents} students </span>
                <span className="flex items-center gap-1">⭐ {course.averageRating.toFixed(1)}</span>
                <span className="flex items-center gap-1">💰 ${course.price}</span>
              </div>

              {/* Description */}
              {editingCourse === course._id ? (
                <textarea
                  value={course.shortDescription}
                  onChange={(e) => handleUpdate(course._id, { shortDescription: e.target.value })}
                  className="w-full bg-transparent border border-border rounded-lg p-2 focus:border-primary focus:ring-0 text-sm text-foreground-muted"
                  rows={3}
                />
              ) : (
                <p className="text-sm text-foreground-muted line-clamp-3">
                  {course.shortDescription}
                </p>
              )}

              {/* Actions */}
              <div className="flex items-center gap-2 pt-4">
                <button onClick={() => toggleEditMode(course._id)} className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-accent text-accent-foreground hover:bg-accent-hover transition-colors" >
                  {editingCourse === course._id ? 'Save' : 'Edit'}
                </button>
                <button onClick={() => HandleDelete(course._id)} className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-destructive text-destructive-foreground hover:bg-destructive/90 transition-colors" >
                  Delete
                </button>
                <button onClick={() => handleUpdate(course._id, { isPublished: !course.isPublished })} className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium ${course.isPublished  ? 'bg-warning text-warning-foreground hover:bg-warning/90' : 'bg-success text-success-foreground hover:bg-success/90'}  transition-colors`} >
                  {course.isPublished ? 'Unpublish' : 'Publish'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
  )
}

export default CourseDeets