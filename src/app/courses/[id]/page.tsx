"use client"

import { useGetEntity } from "@/APIs/REST";
import { ICourse } from "@/types/coursesTypes";
import { useRouter } from "next/navigation";
import CourseInfo from "../components/CourseInfo";
import CoursePreview from "../components/CoursePreview";
import CourseDescription from "../components/CourseDescription";
import CourseSidebar from "../components/CourseSidebar";

export default function CourseDetails({ params }: { params: { id: string } }) {
  const router = useRouter();
  // ~ ######## Hooks
  const { data: course , isError, error } = useGetEntity<ICourse>(`courses/${params.id}`);
  // ~ ######## Hooks
  // ~ ######## start Logics
    if (isError) {
      return (
        <div className="page flex-center min-h-[50vh] flex-col gap-4">
          <div className="text-xl text-destructive">Failed to load course</div>
          <p className="text-foreground-muted">{error?.message}</p>
          <button 
            onClick={() => router.back()}
            className="btn-secondary"
          >
            Go Back
          </button>
        </div>
      );
    }

    if (!course) {
      return (
        <div className="min-h-screen bg-background">
          <section className="bg-gradient-to-r from-primary/10 via-background to-accent/10">
            <div className="page py-12">
              <div className="grid lg:grid-cols-2 gap-8 items-start">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="h-8 w-3/4 bg-muted rounded-lg animate-pulse"></div>
                    <div className="h-20 w-full bg-muted rounded-lg animate-pulse"></div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-muted animate-pulse"></div>
                    <div className="space-y-2">
                      <div className="h-4 w-32 bg-muted rounded animate-pulse"></div>
                      <div className="h-4 w-24 bg-muted rounded animate-pulse"></div>
                    </div>
                  </div>
                </div>
                <div className="aspect-video rounded-lg bg-muted animate-pulse"></div>
              </div>
            </div>
          </section>
        </div>
      );
    }
  // ~ ######## End Logics

  return (
    <main className="min-h-screen bg-background">
      {/* ######### Start Course Header ############ */}
      <section className="bg-gradient-to-r from-primary/10 via-background to-accent/10">
        <div className="page py-12">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Course Info */}
              <CourseInfo {...(course as ICourse)} />
            {/* Course Preview */}
              <CoursePreview {...(course as ICourse)} />
          </div>
        </div>
      </section>
      {/* ######### End Course Header ############ */}
      {/* ############ Start course Content ############ */}
      <section className="page py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Course Description */}
          {/* Course Description */}
            <CourseDescription {...(course as ICourse)} />
          {/* Course Content Sidebar */}
            <CourseSidebar {...(course as ICourse)} />
          {/* Course Content Sidebar */}
        </div>
      </section>
      {/* ############ End course Content ############ */}
    </main>
  );
}
