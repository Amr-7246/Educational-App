import Link from "next/link";
import { ICourse } from "@/types/coursesTypes";
import Image from "next/image";


interface CourseGridProps {
  courses: ICourse[];
}

export default function CoursesGrid({ courses }: CourseGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses?.map((course: ICourse) => (
        <Link 
          href={`/courses/${course._id}`}
          key={course._id} 
          className="course-card group"
        >
          <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
            <Image
              src={course.thumbnail.secure_url}
              alt={course.title}
              fill
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-200"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={course.isRecommended}
            />
            {course.isRecommended && (
              <span className="absolute top-2 right-2 bg-warning text-warning-foreground  px-2 py-1 rounded text-xs font-medium">
                Featured
              </span>
            )}
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary 
              transition-colors line-clamp-2">
              {course.title}
            </h3>
            <p className="text-sm text-foreground-muted line-clamp-2">
              {course.shortDescription}
            </p>
            
            <div className="flex items-center gap-4 text-sm">
              <span className="text-foreground-muted">
                {course.totalLessons} lessons
              </span>
              <span className="text-foreground-muted">
                {Math.floor(course.totalDuration / 60)}h {course.totalDuration % 60}m
              </span>
              <span className="text-foreground-muted">
                {course.level}
              </span>
            </div>

            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-1">
                <span className="text-warning">⭐</span>
                <span className="font-medium">{course.averageRating.toFixed(1)}</span>
                <span className="text-foreground-muted">
                  ({course.totalReviews})
                </span>
              </div>
              <div className="flex items-center gap-2">
                {course.discount > 0 && (
                  <span className="text-sm line-through text-foreground-muted">
                    ${course.price}
                  </span>
                )}
                <span className="font-semibold text-primary">
                  ${course.originalPrice}
                </span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
