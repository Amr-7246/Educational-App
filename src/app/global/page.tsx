"use client"

import { useGetEntity } from "@/APIs/REST";
import { ICourse } from "@/types/coursesTypes";
import { useState } from "react";
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import SearchFilterSection from './components/SearchFilterSection';
import CoursesGrid from './components/CoursesGrid';
import FeaturesSection from './components/FeaturesSection';
import CTASection from './components/CTASection';


export default function Page() {
    // ~ ######## Hooks
    const { data } = useGetEntity<ICourse[]>('courses');
    const courses: ICourse[] = Array.isArray(data) ? data : [];
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [searchQuery, setSearchQuery] = useState('');
    // ~ ######## Hooks
    // ~ ######## Logics
        const categories = [
            'all',
            'programming',
            'design',
            'business',
            'marketing',
            'personal development',
            'photography',
            'music'
        ];
        const filteredCourses = courses?.filter((course: ICourse) => {
            const matchesCategory = selectedCategory === 'all' || course.category.toLowerCase() === selectedCategory;
            const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                course.description.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    // ~ ######## Logics    
    return (
        <main className="min-h-screen">
            <HeroSection />
            <StatsSection coursesCount={courses?.length || 0} />
            <SearchFilterSection 
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                categories={categories}
            />
            <div className="page !min-h-fit space-y-8">
                <CoursesGrid courses={filteredCourses || []} />
            </div>
            <FeaturesSection />
            <CTASection />
        </main>
    )
}