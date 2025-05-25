export default function FeaturesSection() {
  return (
    <section className="bg-background-secondary py-16">
      <div className="page !min-h-fit ">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Platform</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="course-section text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold mb-2">Expert-Led Courses</h3>
            <p className="text-foreground-muted">
              Learn from industry professionals with real-world experience
            </p>
          </div>
          <div className="course-section text-center">
            <div className="text-4xl mb-4">🔄</div>
            <h3 className="text-xl font-semibold mb-2">Lifetime Access</h3>
            <p className="text-foreground-muted">
              Learn at your own pace with unlimited access to course content
            </p>
          </div>
          <div className="course-section text-center">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-xl font-semibold mb-2">Learn Anywhere</h3>
            <p className="text-foreground-muted">
              Access courses on any device, anytime, anywhere
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
