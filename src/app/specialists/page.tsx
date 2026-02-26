import Link from 'next/link';
import Image from 'next/image';
import { fetchAllSpecialists } from '@/lib/contentful';
import type { Specialist, Asset } from '@/types/contentful';

function fixImageUrl(url?: string) {
    if (!url) return null;
    if (url.startsWith('//')) return `https:${url}`;
    if (url.startsWith('http')) return url;
    return `https:${url}`;
}

function isResolvedAsset(image: any): image is Asset {
    return image && 'fields' in image && 'file' in image.fields;
}

export default async function SpecialistsPage() {
    let specialists: Specialist[] = [];
    try {
        specialists = await fetchAllSpecialists();
    } catch (err) {
        console.error('Failed to fetch specialists', err);
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Specialists</h1>
                    <p className="text-xl text-gray-600">Meet our team of expert medical professionals</p>
                </div>

                {specialists.length === 0 ? (
                    <div className="text-center py-20">
                        <p className="text-gray-600 text-lg">No specialists available at this time.</p>
                    </div>
                ) : (
                    <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {specialists.map(specialist => {
                            const name = specialist.fields?.specialistName ?? 'Unnamed Specialist';
                            const slug = specialist.fields?.slug ?? specialist.sys.id;
                            const treatments = specialist.fields?.treatments ?? [];
                            const consultationFee = specialist.fields?.newConsultationFee;
                            const insuranceCompanies = specialist.fields?.insuranceCompanies;

                            // Get image URL
                            const image = specialist.fields?.specialistPicture;
                            const imageUrl = isResolvedAsset(image) ? fixImageUrl(image.fields.file.url) : null;

                            return (
                                <article key={specialist.sys.id} className="bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 overflow-hidden">
                                    {imageUrl && (
                                        <div className="relative w-full h-64 bg-gray-100">
                                            <Image
                                                src={imageUrl}
                                                alt={name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    )}

                                    <div className="p-6">
                                        <h2 className="text-2xl font-bold text-gray-900 mb-4">{name}</h2>

                                        {/* Consultation Fee */}
                                        {consultationFee && (
                                            <div className="mb-4 bg-green-50 rounded-lg p-3 border border-green-200">
                                                <p className="text-xs font-semibold text-green-800 mb-1">Consultation Fee:</p>
                                                <p className="text-2xl font-bold text-green-700">£{consultationFee.toLocaleString()}</p>
                                            </div>
                                        )}

                                        {/* Insurance Companies */}
                                        {insuranceCompanies && (
                                            <div className="mb-4 bg-purple-50 rounded-lg p-3 border border-purple-200">
                                                <p className="text-xs font-semibold text-purple-800 mb-1">Insurance Accepted:</p>
                                                <p className="text-sm font-medium text-purple-900">{insuranceCompanies}</p>
                                            </div>
                                        )}

                                        {treatments.length > 0 && (
                                            <div className="mb-4">
                                                <p className="text-sm font-semibold text-gray-700 mb-2">Treatments:</p>
                                                <div className="flex flex-wrap gap-2">
                                                    {treatments.slice(0, 3).map((treatment, index) => (
                                                        <span
                                                            key={index}
                                                            className="bg-blue-50 px-3 py-1 rounded-full text-sm font-medium"
                                                            style={{ color: '#238DC1' }}
                                                        >
                                                            {treatment}
                                                        </span>
                                                    ))}
                                                    {treatments.length > 3 && (
                                                        <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium">
                                                            +{treatments.length - 3} more
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        )}

                                        <Link
                                            href={`/specialists/${slug}`}
                                            className="inline-flex items-center justify-center w-full px-4 py-3 text-white rounded-lg transition-colors font-medium mt-4 hover:opacity-90"
                                            style={{ backgroundColor: '#238DC1' }}
                                        >
                                            View Profile
                                            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </Link>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}
