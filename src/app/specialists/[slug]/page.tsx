import type { Specialist, Asset } from '@/types/contentful';
import { fetchSpecialistBySlug } from '@/lib/contentful';
import Image from 'next/image';
import Link from 'next/link';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';

type Props = {
    params: Promise<{ slug: string }>;
};

function fixImageUrl(url?: string) {
    if (!url) return null;
    if (url.startsWith('//')) return `https:${url}`;
    if (url.startsWith('http')) return url;
    return `https:${url}`;
}

function isResolvedAsset(image: any): image is Asset {
    return image && 'fields' in image && 'file' in image.fields;
}

export default async function SpecialistPage({ params }: Props) {
    const resolvedParams = await params;
    const slug = resolvedParams?.slug;

    if (!slug) {
        return (
            <div className="text-center py-20">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Invalid specialist URL</h1>
                <p className="text-gray-600">No specialist slug was provided.</p>
            </div>
        );
    }

    const specialist: Specialist | null = await fetchSpecialistBySlug(slug);

    if (!specialist) {
        return (
            <div className="text-center py-20">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Specialist not found</h1>
                <p className="text-gray-600">We couldn't find a specialist with that URL.</p>
                <Link href="/specialists" className="mt-4 inline-block font-medium hover:opacity-80 transition-opacity" style={{ color: '#238DC1' }}>
                    ← Back to Specialists
                </Link>
            </div>
        );
    }

    const { specialistName, specialistBio, treatments, specialistPicture, newConsultationFee, insuranceCompanies } = specialist.fields || {};

    // Get image URL
    const imageUrl = isResolvedAsset(specialistPicture) ? fixImageUrl(specialistPicture.fields.file.url) : null;

    // Rich text rendering options
    const renderOptions = {
        renderNode: {
            [BLOCKS.PARAGRAPH]: (node: any, children: any) => (
                <p className="mb-4 text-gray-700 leading-relaxed">{children}</p>
            ),
            [BLOCKS.HEADING_1]: (node: any, children: any) => (
                <h1 className="text-3xl font-bold text-gray-900 mb-4 mt-8">{children}</h1>
            ),
            [BLOCKS.HEADING_2]: (node: any, children: any) => (
                <h2 className="text-2xl font-bold text-gray-900 mb-3 mt-6">{children}</h2>
            ),
            [BLOCKS.HEADING_3]: (node: any, children: any) => (
                <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-4">{children}</h3>
            ),
            [BLOCKS.UL_LIST]: (node: any, children: any) => (
                <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700 ml-4">{children}</ul>
            ),
            [BLOCKS.OL_LIST]: (node: any, children: any) => (
                <ol className="list-decimal list-inside mb-4 space-y-2 text-gray-700 ml-4">{children}</ol>
            ),
            [BLOCKS.LIST_ITEM]: (node: any, children: any) => (
                <li className="text-gray-700">{children}</li>
            ),
            [INLINES.HYPERLINK]: (node: any, children: any) => (
                <a
                    href={node.data.uri}
                    className="underline font-medium hover:opacity-80 transition-opacity"
                    style={{ color: '#238DC1' }}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {children}
                </a>
            ),
        },
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                {/* Back Button */}
                <Link
                    href="/specialists"
                    className="inline-flex items-center font-medium mb-6 hover:opacity-80 transition-opacity"
                    style={{ color: '#238DC1' }}
                >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back to Specialists
                </Link>

                {/* Header Section */}
                <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden mb-8">
                    <div className="px-8 py-10" style={{ background: 'linear-gradient(to right, #238DC1, #1a7ba0)' }}>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">{specialistName || 'Unnamed Specialist'}</h1>
                    </div>

                    {/* Profile Section */}
                    <div className="p-8">
                        {/* Image */}
                        {imageUrl && (
                            <div className="flex justify-center mb-8">
                                <div className="relative w-64 h-64 rounded-xl overflow-hidden shadow-lg">
                                    <Image
                                        src={imageUrl}
                                        alt={specialistName || 'Specialist'}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        )}

                        {/* About - Full Width */}
                        {specialistBio && (
                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">About</h3>
                                <div className="prose max-w-none">
                                    {documentToReactComponents(specialistBio, renderOptions)}
                                </div>
                            </div>
                        )}

                        {/* Consultation Fee and Insurance */}
                        {(newConsultationFee || insuranceCompanies) && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                {/* Consultation Fee */}
                                {newConsultationFee && (
                                    <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold">£</div>
                                            <h3 className="text-xl font-semibold text-gray-900">Consultation Fee</h3>
                                        </div>
                                        <p className="text-3xl font-bold text-green-700 ml-13">£{newConsultationFee.toLocaleString()}</p>
                                    </div>
                                )}

                                {/* Insurance Companies */}
                                {insuranceCompanies && (
                                    <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold">
                                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <h3 className="text-xl font-semibold text-gray-900">Insurance Accepted</h3>
                                        </div>
                                        <p className="text-lg text-purple-900 font-medium">{insuranceCompanies}</p>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Treatments - Full Width */}
                        {treatments && treatments.length > 0 && (
                            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">Treatments Offered</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                    {treatments.map((treatment, index) => (
                                        <div
                                            key={index}
                                            className="bg-white border-2 px-4 py-2 rounded-lg text-sm font-medium shadow-sm flex items-center"
                                            style={{ borderColor: '#238DC1', color: '#157091' }}
                                        >
                                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" style={{ color: '#238DC1' }}>
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            {treatment}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
