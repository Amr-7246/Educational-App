"use client"

import { usePostEntity } from "@/APIs/REST";
import { uploadAsset, deleteAsset } from "@/utils/assetsUpload";
import { ICourse, IModule } from "@/types/coursesTypes";
import { useState } from "react";
import  {toast}  from "react-toastify";
import Image from "next/image";

export default function Page() {
  // ~ ######## Hooks
  const { mutate: pushCourse , status } = usePostEntity<ICourse>('courses')

  const [courseData, setCourseData] = useState<Partial<ICourse>>({
    title: '',
    description: '',
    shortDescription: '',
    thumbnail: { secure_url: '', publicId: '' },
    trailerVideo: '',
    modules: [],
    price: 0,
    discount: 0,
    level: 'Beginner',
    language: 'English',
    category: '',
    tags: [],
    requirements: [],
    learningOutcomes: [],
    instructor: {
      name: '',
      bio: '',
      avatar: { secure_url: '', publicId: '' },
      expertise: []
    }
  });
  // ~ ######## Hooks
  const [currentModule, setCurrentModule] = useState<Partial<IModule>>({
    title: '',
    description: '',
    lessons: [],
    order: 0
  });

  // ~ ######## Logics
    // & handle Thumbnail Upload
      const handleThumbnailUpload: (file: File) => Promise<void> = async (file: File) => {
        try {
          const result = await uploadAsset(file, 'image');
          if (courseData.thumbnail?.publicId) {
            await deleteAsset(courseData.thumbnail.publicId, 'image');
          }
          setCourseData(prev => ({
            ...prev,
            thumbnail: { secure_url: result.secure_url, publicId: result.publicId }
          }));
          toast.success('Thumbnail uploaded successfully');
        } catch {
          toast.error('Failed to upload thumbnail');
          console.log('we coudnt upload')
        }
      };
    // & handle Thumbnail Upload
    // & handle Trailer Upload
      const handleTrailerUpload = async (file: File) => {
        try {
            const result = await uploadAsset(file, 'video');
            setCourseData(prev => ({
              ...prev,
              trailerVideo: result.secure_url
            }));
            toast.success('Trailer video uploaded successfully');
          } catch {
            console.log('we coudnt upload')
            toast.error('Failed to upload trailer');
          }
        };
    // & handle Trailer Upload
    // & handle Module Add
      const handleModuleAdd = (module: IModule) => {
        setCourseData(prev => ({
        ...prev,
        modules: [...(prev.modules || []), module]
      }));
      setCurrentModule({
        title: '',
        description: '',
        lessons: [],
        order: (courseData.modules?.length || 0) + 1
      });
    };
    // & handle Module Add
    // & handle Submit
      const handleSubmit = async () => {
        try {
          //* Calculate total duration and lessons
          const totalDuration = courseData.modules?.reduce(
            (acc, module) => acc + module.lessons.reduce((sum, lesson) => sum + lesson.duration, 0), 0 ) || 0;
          const totalLessons = courseData.modules?.reduce(
            (acc, module) => acc + module.lessons.length, 0 ) || 0;
        //* Calculate original price
        const originalPrice = courseData.price ? courseData.price * (1 - (courseData.discount || 0) / 100) : 0 ;

        pushCourse({
          ...courseData,
          totalDuration,
          totalLessons,
          originalPrice,
          enrolledStudents: 0,
          averageRating: 0,
          totalReviews: 0,
          isPublished: false,
          isRecommended: false,
          createdAt: new Date(),
          updatedAt: new Date()
        });
        console.log('OK amr we created it . . Done')
        toast.error('Failed to create course');
        } catch  {
          console.log('we coudnt create')
          toast.error('Failed to create course');
        }
      };
    // & handle Submit
  // ~ ######## Logics

  return (    <main className="page">
      <h1 className="text-3xl font-bold text-center mb-8 text-foreground">Create New Course</h1>
      
      {/* #### Start Course information #### */}
      <section className="course-section mb-8">
        {/* start Video Trailer with thumbnail and description & title */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <div>
              <label className="form-label">Course Thumbnail</label>
              <div className="media-upload-box">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => e.target.files?.[0] && handleThumbnailUpload(e.target.files[0])}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                  <Image
                    src={ courseData?.thumbnail?.secure_url || '' }
                    alt="thumbnail"
                    width={400}
                    height={128}
                    className="w-full h-32 object-cover rounded"
                  />
                ) : (
                  <div className="text-center">
                    <div className="text-2xl mb-2">📸</div>
                    <p className="text-sm text-foreground-muted">Click or drag to upload thumbnail</p>
                  </div>
                )
              </div>
            </div>
            <div>
              <label className="form-label">Trailer Video</label>
              <div className="media-upload-box">
                <input
                  type="file"
                  accept="video/*"
                  onChange={(e) => e.target.files?.[0] && handleTrailerUpload(e.target.files[0])}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />                <div className="text-center">
                  <div className="text-2xl mb-2">🎬</div>
                  <p className="text-sm text-foreground-muted">Click or drag to upload trailer video</p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <label className="form-label">Course Title</label>
              <input
                type="text"
                placeholder="Enter an engaging title"
                value={courseData.title}
                onChange={(e) => setCourseData(prev => ({ ...prev, title: e.target.value }))}
                className="input-primary"
              />
            </div>
            <div>
              <label className="form-label">Course Description</label>
              <textarea
                placeholder="Provide a detailed description of your course"
                value={courseData.description}
                onChange={(e) => setCourseData(prev => ({ ...prev, description: e.target.value }))}
                className="input-primary h-32 resize-none"
              />
            </div>
            <div>
              <label className="form-label">Short Description</label>
              <textarea
                placeholder="Write a compelling short description"
                value={courseData.shortDescription}
                onChange={(e) => setCourseData(prev => ({ ...prev, shortDescription: e.target.value }))}
                className="input-primary h-20 resize-none"
              />
          </div>
          </div>
        </div>
        {/* start Course information & Requirements */}
        <div className="flex-center flex-col gap-4 p-4">
          <div className="w-full space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="number"
                placeholder="Price"
                value={courseData.price}
                onChange={(e) => setCourseData(prev => ({ ...prev, price: Number(e.target.value) }))}
                className="input-primary"
              />
              <input
                type="number"
                placeholder="Discount %"
                value={courseData.discount}
                onChange={(e) => setCourseData(prev => ({ ...prev, discount: Number(e.target.value) }))}
                className="input-primary"
              />
            </div>
            <select
              value={courseData.level}
              onChange={(e) => setCourseData(prev => ({ ...prev, level: e.target.value as "Beginner" | "Intermediate" | "Advanced" }))}
              className="input-primary w-full"
            >
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
            <input
              type="text"
              placeholder="Category"
              value={courseData.category}
              onChange={(e) => setCourseData(prev => ({ ...prev, category: e.target.value }))}
              className="input-primary w-full"
            />
            <input
              type="text"
              placeholder="Tags (comma-separated)"
              onChange={(e) => setCourseData(prev => ({ ...prev, tags: e.target.value.split(',').map(tag => tag.trim()) }))}
              className="input-primary w-full"
            />
          </div>
          <div className="w-full space-y-4">
            <textarea
              placeholder="Requirements (one per line)"
              value={courseData.requirements?.join('\n')}
              onChange={(e) => setCourseData(prev => ({ ...prev, requirements: e.target.value.split('\n').filter(req => req.trim()) }))}
              className="input-primary w-full h-32"
            />
            <textarea
              placeholder="Learning Outcomes (one per line)"
              value={courseData.learningOutcomes?.join('\n')}
              onChange={(e) => setCourseData(prev => ({ ...prev, learningOutcomes: e.target.value.split('\n').filter(outcome => outcome.trim()) }))}
              className="input-primary w-full h-32"
            />
          </div>
        </div>
      </section>

      {/* #### Start modules with Videos of the course (lessons) #### */}      <section className="course-section mt-8">
        <h2 className="text-xl font-semibold mb-6">Course Content</h2>

        <div className="grid md:grid-cols-5 gap-6">
          <div className="md:col-span-2 space-y-6">
            <div className="course-card">
              <h3 className="text-lg font-semibold mb-4">Add New Module</h3>
              <div className="space-y-4">
                <div>
                  <label className="form-label">Module Title</label>
                  <input
                    type="text"
                    placeholder="Enter module title"
                    value={currentModule.title}
                    onChange={(e) => setCurrentModule(prev => ({ ...prev, title: e.target.value }))}
                    className="input-primary"
                  />
                </div>
                <div>
                  <label className="form-label">Module Description</label>
                  <textarea
                    placeholder="Describe what students will learn in this module"
                    value={currentModule.description}
                    onChange={(e) => setCurrentModule(prev => ({ ...prev, description: e.target.value }))}
                    className="input-primary h-24 resize-none"
                  />
                </div>
                <button
                  onClick={() => handleModuleAdd(currentModule as IModule)}
                  className="btn-primary w-full"
                >
                  Add Module
                </button>
              </div>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="space-y-4">
              {courseData.modules?.length === 0 ? (
                <div className="text-center py-8 text-foreground-muted">
                  <div className="text-3xl mb-2">📚</div>
                  <p>No modules added yet. Start by adding your first module!</p>
                </div>
              ) : (
                courseData.modules?.map((module, index) => (
                  <div key={index} className="module-card group">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold group-hover:text-primary transition-colors">
                          Module {index + 1}: {module.title}
                        </h4>
                        <p className="text-sm text-foreground-muted mt-1">{module.description}</p>
                      </div>
                      <div className="text-sm text-foreground-muted">
                        {module.lessons?.length || 0} lessons
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>

      <div className="fixed bottom-6 right-6 z-10">
        <button
          onClick={handleSubmit}
          disabled={status === "pending"}
          className="btn-primary px-8 py-3 rounded-full shadow-lg hover:shadow-primary/20 transition-shadow"
        >
          {status === "pending" ? (
            <span className="flex items-center gap-2">
              <span className="animate-spin">⏳</span> Creating Course...
            </span>
          ) : (
            'Create Course'
          )}
        </button>
      </div>
    </main>
  );
}