import React from 'react';
import CourseList from '../components/CourseList';

const HomePage = () => {
    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 py-12">
            <div className="max-w-6xl mx-auto px-4">
                {/* Hero Section */}
                <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden mb-8">
                    <div className="px-8 py-12 text-center" style={{ background: 'linear-gradient(to right, #238DC1, #1a7ba0)' }}>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">
                            Training Guide Catalog
                        </h1>
                        <p className="text-blue-100 text-lg max-w-2xl mx-auto">
                            Training guide with common questions and pricing for procedures and appointments
                        </p>
                    </div>
                </div>

                <CourseList />
            </div>
        </main>
    );
};

export default HomePage;