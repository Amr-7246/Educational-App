import Image from 'next/image';
import Link from 'next/link';
import { ICourse } from '@/types/coursesTypes';
import { useGetEntity } from '@/APIs/REST';

export default function CourseCard() {
    const { data: AllCourses , isLoading , isError } = useGetEntity<ICourse[]>('courses');
    console.log(AllCourses)
  return (
    <>
      {
        isLoading ? <span>Loading . . . </span> : isError ? <span>Error!!</span> : !AllCourses || AllCourses.length === 0 ? <span>Empty</span> : 
      AllCourses.map((course : ICourse , index: number ) => (
        <Link key={index} href={`/courses/${course._id}`} className="course-card group">
          <div className="relative aspect-video w-full overflow-hidden rounded-t-lg">
            <Image
              src={course.thumbnail.secure_url}
              alt={course.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {course.isRecommended && (
              <div className="absolute left-2 top-2 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                Recommended
              </div>
            )}
          </div>
          
          <div className="p-4">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm font-medium text-foreground-muted">{course.category}</span>
              <span className="text-sm font-semibold text-primary">${course.price.toFixed(2)}</span>
            </div>
            
            <h3 className="mb-2 line-clamp-2 text-lg font-semibold text-foreground">
              {course.title}
            </h3>
            
            <p className="mb-3 line-clamp-2 text-sm text-foreground-secondary">
              {course.shortDescription}
            </p>
            
            <div className="flex items-center gap-2 border-t border-border pt-3">
              <Image
                src={course.instructor.avatar.secure_url}
                alt={course.instructor.name}
                width={24}
                height={24}
                className="rounded-full"
              />
              <span className="text-sm font-medium text-foreground-secondary">
                {course.instructor.name}
              </span>
            </div>
            
            <div className="mt-2 flex items-center justify-between text-sm text-foreground-muted">
              <div className="flex items-center gap-2">
                <span>{course.totalLessons} lessons</span>
                <span>•</span>
                <span>{Math.round(course.totalDuration / 60)} hours</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="font-medium">
                  {course.averageRating.toFixed(1)}
                </span>
                <span>★</span>
                <span>({course.totalReviews})</span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}
