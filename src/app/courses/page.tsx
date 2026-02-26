import Link from 'next/link';
import { fetchAllCourses } from '@/lib/contentful';
import type { Course } from '@/types/contentful';

export default async function CoursesPage() {
    let courses: Course[] = [];
    try {
        courses = await fetchAllCourses();
    } catch (err) {
        console.error('Failed to fetch courses', err);
    }

    return (
        <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Courses</h1>
            {courses.length === 0 ? (
                <p className="text-gray-600">No courses available.</p>
            ) : (
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-8">
                    {courses.map(course => {
                        const title = course.fields?.pageTitle ?? 'Untitled course';
                        const slug = course.fields?.slug ?? course.sys.id;
                        const getIntroText = () => {
                            const introDoc = course.fields?.introductionNew;
                            if (!introDoc?.content) return '';
                            const firstParagraph = introDoc.content.find((node: any) => node.nodeType === 'paragraph');
                            const firstContent = firstParagraph?.content?.[0];
                            if (firstContent && 'value' in firstContent) {
                                return firstContent.value;
                            }
                            return '';
                        };
                        const intro = getIntroText();
                        const procedureFee = course.fields?.procedureFee;
                        const bilatProcedureFee = course.fields?.bilatProcedureFee;

                        return (
                            <article key={course.sys.id} className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow p-6">
                                <h2 className="text-xl font-semibold text-gray-900 mb-2">{title}</h2>
                                <p className="text-gray-600 mb-4">{intro}</p>
                                {(procedureFee || bilatProcedureFee) && (
                                    <div className="mb-4 bg-green-50 rounded-lg p-3">
                                        <p className="text-xs font-semibold text-green-800 mb-1">Pricing:</p>
                                        {procedureFee && (
                                            <p className="text-sm text-green-700">Unilateral: £{procedureFee.toLocaleString()}</p>
                                        )}
                                        {bilatProcedureFee && (
                                            <p className="text-sm text-green-700">Bilateral: £{bilatProcedureFee.toLocaleString()}</p>
                                        )}
                                    </div>
                                )}
                                <Link href={`/courses/${slug}`} className="inline-flex items-center px-4 py-2 text-white rounded-md transition-colors font-medium hover:opacity-80" style={{ backgroundColor: '#238DC1' }}>
                                    View course
                                </Link>
                            </article>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
