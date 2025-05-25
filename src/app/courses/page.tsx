"use client"

import { useState } from 'react';
import CourseCard from './components/CourseCard';

// This would come from your API
const categories = ['Development', 'Business', 'Design', 'Marketing', 'IT & Software'];
const levels = ['Beginner', 'Intermediate', 'Advanced'];

export default function CoursesPage() {
  // ~ ####### Hooks
    const [searchTerm, setSearchTerm] = useState('');
    const [filters, setFilters] = useState({
      category: '',
      level: '',
      minPrice: '',
      maxPrice: '',
    });
  // ~ ####### Hooks
  // ~ ####### Logics
    // & Filteration logic
      // const filteredCourses = courses.filter((course) => {
      //   const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      //     course.shortDescription.toLowerCase().includes(searchTerm.toLowerCase());

      //   const matchesCategory = !filters.category || course.category === filters.category;
      //   const matchesLevel = !filters.level || course.level === filters.level;
      //   const matchesPrice = (!filters.minPrice || course.price >= Number(filters.minPrice)) &&
      //     (!filters.maxPrice || course.price <= Number(filters.maxPrice));
          
      //     return matchesSearch && matchesCategory && matchesLevel && matchesPrice;
      // });
    // & Filteration logic
    // ~ ####### Logics
  return (
    <div className="page mx-auto px-4 py-8">
      <div className="mb-8">

        <h1 className="mb-4 text-3xl font-bold w-full flex-center py-10 text-foreground">Explore Courses</h1>
        <div className="flex flex-col gap-6 lg:flex-row">
          {/* Filters sidebar */}
          <div className="w-full lg:w-1/4">
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Search courses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full rounded-md border border-input bg-background px-4 py-2 text-sm"
                />
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="mb-3 font-semibold text-foreground">Category</h3>
                  <select
                    value={filters.category}
                    onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                    className="w-full rounded-md border border-input bg-background px-4 py-2 text-sm"
                  >
                    <option value="">All Categories</option>
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-foreground">Level</h3>
                  <select
                    value={filters.level}
                    onChange={(e) => setFilters({ ...filters, level: e.target.value })}
                    className="w-full rounded-md border border-input bg-background px-4 py-2 text-sm"
                  >
                    <option value="">All Levels</option>
                    {levels.map((level) => (
                      <option key={level} value={level}>
                        {level}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-foreground">Price Range</h3>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      placeholder="Min"
                      value={filters.minPrice}
                      onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
                      className="w-1/2 rounded-md border border-input bg-background px-4 py-2 text-sm"
                    />
                    <input
                      type="number"
                      placeholder="Max"
                      value={filters.maxPrice}
                      onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
                      className="w-1/2 rounded-md border border-input bg-background px-4 py-2 text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Course grid */}
          <div className="flex-1 max-h-[80vh] overflow-auto">
            <CourseCard/>
          </div>

        </div>

      </div>
    </div>
  );
}