import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 py-20">
      <div className="page !min-h-fit text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Start Your Learning Journey?
        </h2>
        <p className="text-lg text-foreground-secondary mb-8 max-w-2xl mx-auto">
          Join thousands of learners who have transformed their careers through our courses.
        </p>
        <Link 
          href="/global/user/signIn"
          className="bg-primary text-primary-foreground px-8 py-3 rounded-lg
          hover:bg-primary-hover transition-colors duration-200 inline-block"
        >
          Get Started Now
        </Link>
      </div>
    </section>
  );
}
