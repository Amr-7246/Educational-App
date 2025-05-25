import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-background via-background-secondary to-background py-20">
      <div className="page !min-h-fit relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Unlock Your Potential with Expert-Led Courses
          </h1>
          <p className="text-lg text-foreground-secondary mb-8">
            Learn from industry experts and transform your skills with our comprehensive online courses.
          </p>
          <div className="flex gap-4">
            <Link 
              href="#courses" 
              className="bg-primary text-primary-foreground px-8 py-3 rounded-lg
              hover:bg-primary-hover transition-colors duration-200"
            >
              Explore Courses
            </Link>
            <Link 
              href="/teachers/PushCourses" 
              className="bg-accent text-accent-foreground px-8 py-3 rounded-lg
              hover:bg-accent-hover transition-colors duration-200"
            >
              Become an Instructor
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5"></div>
    </section>
  );
}
