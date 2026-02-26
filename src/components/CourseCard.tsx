'use client'

import React from 'react';
import type { Course } from '../types/contentful';
import Link from 'next/link';

interface CourseCardProps {
    course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
    const title = course.fields?.pageTitle ?? 'Untitled course';
    // Get intro text from introductionNew rich text field
    const getIntroText = () => {
        const introDoc = course.fields?.introductionNew;
        if (!introDoc?.content) return '';
        // Extract first paragraph text
        const firstParagraph = introDoc.content.find((node: any) => node.nodeType === 'paragraph');
        const firstContent = firstParagraph?.content?.[0];
        if (firstContent && 'value' in firstContent) {
            return firstContent.value;
        }
        return '';
    };
    const introduction = getIntroText();
    const slug = course.fields?.slug ?? course.sys.id;
    const procedureFee = course.fields?.procedureFee;
    const bilatProcedureFee = course.fields?.bilatProcedureFee;

    return (
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="p-4">
                <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="text-lg font-bold text-gray-900 flex-grow">
                        {title}
                    </h3>
                </div>

                {introduction && (
                    <p className="text-sm text-gray-600 leading-relaxed mb-3 line-clamp-2">
                        {introduction}
                    </p>
                )}

                {(procedureFee || bilatProcedureFee) && (
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-3 mb-3">
                        <div className="flex items-center gap-1 mb-2">
                            <p className="text-xs font-semibold text-green-800 uppercase tracking-wide">
                                Approximate Pricing
                            </p>
                        </div>
                        <div className="flex gap-2 text-sm">
                            {procedureFee && (
                                <div className="flex-1">
                                    <p className="text-xs text-gray-600">Unilateral</p>
                                    <p className="text-base font-bold text-green-700">£{procedureFee.toLocaleString()}</p>
                                </div>
                            )}
                            {bilatProcedureFee && (
                                <div className="flex-1">
                                    <p className="text-xs text-gray-600">Bilateral</p>
                                    <p className="text-base font-bold" style={{ color: '#238DC1' }}>£{bilatProcedureFee.toLocaleString()}</p>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>

            <div className="bg-gray-50 px-4 py-3 border-t border-gray-200">
                <Link href={`/courses/${slug}`} className="inline-flex items-center justify-center w-full px-4 py-2 text-white text-sm font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg group" style={{ background: 'linear-gradient(to right, #238DC1, #1a7ba0)' }} onMouseEnter={(e) => e.currentTarget.style.background = 'linear-gradient(to right, #1a7ba0, #157091)'} onMouseLeave={(e) => e.currentTarget.style.background = 'linear-gradient(to right, #238DC1, #1a7ba0)'}>
                    <span>View Details</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </Link>
            </div>
        </div>
    );
};

export default CourseCard;