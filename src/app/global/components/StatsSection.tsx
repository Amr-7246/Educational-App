interface StatsSectionProps {
  coursesCount: number;
}

export default function StatsSection({ coursesCount }: StatsSectionProps) {
  return (
    <section className="!h-fit py-16">
      <div className="page !min-h-fit grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="stats-card text-center">
          <h3 className="text-3xl font-bold text-primary">{coursesCount}+</h3>
          <p className="text-foreground-muted">Courses Available</p>
        </div>
        <div className="stats-card text-center">
          <h3 className="text-3xl font-bold text-primary">1000+</h3>
          <p className="text-foreground-muted">Active Students</p>
        </div>
        <div className="stats-card text-center">
          <h3 className="text-3xl font-bold text-primary">50+</h3>
          <p className="text-foreground-muted">Expert Instructors</p>
        </div>
        <div className="stats-card text-center">
          <h3 className="text-3xl font-bold text-primary">4.8</h3>
          <p className="text-foreground-muted">Average Rating</p>
        </div>
      </div>
    </section>
  );
}
