'use client'

import React, { useState, useMemo } from 'react';
import CourseCard from './CourseCard';
import useContentful from '../hooks/useContentful';

const CourseList: React.FC = () => {
    const { data: courses, loading, error } = useContentful('trainingWebsite');
    const [searchInput, setSearchInput] = useState('');

    // Filter courses based on search input - live search as user types
    const filteredCourses = useMemo(() => {
        if (!courses) return [];
        if (!searchInput.trim()) return courses;

        const searchLower = searchInput.toLowerCase().trim();
        return courses.filter(course => {
            const title = (course.fields?.pageTitle ?? '').toLowerCase();
            const intro = (course.fields?.introduction ?? '').toLowerCase();
            const slug = (course.fields?.pageTitle ?? '').toLowerCase();

            return title.includes(searchLower) ||
                intro.includes(searchLower) ||
                slug.includes(searchLower);
        });
    }, [courses, searchInput]);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[200px]">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2" style={{ borderColor: '#238DC1' }}></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-center p-4">
                <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 rounded-r-lg">
                    <p className="font-medium">Error fetching courses</p>
                    <p className="text-sm">{error}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full">
            {/* Search Section */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 mb-8">
                <div className="flex items-center gap-3 mb-4">
                    <div className="text-white rounded-full w-8 h-8 flex items-center justify-center" style={{ backgroundColor: '#238DC1' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </div>
                    <h2 className="text-lg font-semibold text-gray-900">Search Conditions and Treatments</h2>
                </div>
                <div className="relative">
                    <input
                        type="text"
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                        placeholder="Search by course name or keyword..."
                        className="w-full px-4 py-3 pl-12 border-2 border-gray-300 rounded-xl focus:border-[#238DC1] focus:ring-2 focus:ring-[#238DC1]/20 transition-all outline-none text-gray-800"
                    />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </div>
                {searchInput && (
                    <p className="text-sm text-gray-600 mt-3 text-center">
                        Found <span className="font-semibold" style={{ color: '#238DC1' }}>{filteredCourses.length}</span> course{filteredCourses.length !== 1 ? 's' : ''}
                    </p>
                )}
            </div>

            {/* Results */}
            {filteredCourses.length === 0 ? (
                <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 text-center">
                    <div className="text-6xl mb-4">📚</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {searchInput ? 'No courses found' : 'No courses available'}
                    </h3>
                    <p className="text-gray-600">
                        {searchInput
                            ? `Try different keywords or browse all courses`
                            : 'Check back later for new training courses'}
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredCourses.map(course => (
                        <CourseCard key={course.sys.id} course={course} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default CourseList;