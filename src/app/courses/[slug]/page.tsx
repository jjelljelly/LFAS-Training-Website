import type { Course, Asset } from '@/types/contentful';
import { fetchCourseBySlug } from '@/lib/contentful';
import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';

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

export default async function CoursePage({ params }: Props) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;

  if (!slug) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Invalid course URL</h1>
        <p className="text-gray-600">No course slug was provided.</p>
      </div>
    );
  }

  const course: Course | null = await fetchCourseBySlug(slug);

  if (!course) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Course not found</h1>
        <p className="text-gray-600">We couldn't find a course with that URL.</p>
      </div>
    );
  }

  const { pageTitle, introductionNew, specialistName, questionAndAnswer, procedureFee, bilatProcedureFee, imageOfIssue, video } = course.fields || {};

  // Get first image from imageOfIssue array
  const firstImage = imageOfIssue && imageOfIssue.length > 0 ? imageOfIssue[0] : null;
  const imageUrl = isResolvedAsset(firstImage) ? fixImageUrl(firstImage.fields.file.url) : null;

  // Get first video if available
  const firstVideo = video && video.length > 0 ? video[0] : null;
  const videoUrl = isResolvedAsset(firstVideo) ? fixImageUrl(firstVideo.fields.file.url) : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden mb-8">
          <div className="px-8 py-10" style={{ background: 'linear-gradient(to right, #238DC1, #1a7ba0)' }}>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">{pageTitle}</h1>
            <p className="text-blue-100 text-lg">Training Course Information</p>
          </div>

          {/* Specialist Names Section */}
          {specialistName && specialistName.length > 0 && (
            <div className="px-8 py-6 bg-blue-50 border-b border-blue-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold" style={{ backgroundColor: '#238DC1' }}>👤</div>
                <h3 className="text-lg font-semibold text-gray-900">Specialist{specialistName.length > 1 ? 's' : ''} to Book With</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {specialistName.map((name, index) => (
                  <span key={index} className="inline-flex items-center bg-white border-2 px-4 py-2 rounded-lg text-sm font-semibold shadow-sm" style={{ borderColor: '#238DC1', color: '#157091' }}>
                    {name}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Pricing Section */}

          {(procedureFee || bilatProcedureFee) && (
            <div className="px-8 py-6 bg-green-50 border-b border-green-100">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">£</div>
                <h3 className="text-lg font-semibold text-gray-900">Procedure Pricing</h3>

              </div>
              <p className="text-sm text-gray-600 italic mb-4 ml-11">Approximate pricing for surgery</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {procedureFee && (
                  <div className="bg-white rounded-xl p-6 shadow-md border-2 border-green-200">
                    <p className="text-sm font-medium text-gray-600 mb-2 uppercase tracking-wide">Unilateral Procedure</p>
                    <p className="text-4xl font-bold text-green-700">£{procedureFee.toLocaleString()}</p>
                  </div>
                )}
                {bilatProcedureFee && (
                  <div className="bg-white rounded-xl p-6 shadow-md border-2 border-blue-200">
                    <p className="text-sm font-medium text-gray-600 mb-2 uppercase tracking-wide">Bilateral Procedure</p>
                    <p className="text-4xl font-bold" style={{ color: '#238DC1' }}>£{bilatProcedureFee.toLocaleString()}</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Introduction Section */}
          {introductionNew && (
            <div className="px-8 py-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">ℹ️</div>
                <h3 className="text-lg font-semibold text-gray-900">Procedure Overview</h3>
              </div>
              <div className="bg-indigo-50 border-l-4 border-indigo-600 rounded-r-xl p-6">
                <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
                  {documentToReactComponents(introductionNew, {
                    renderNode: {
                      [BLOCKS.PARAGRAPH]: (node, children) => (
                        <p className="mb-4 text-base leading-7">{children}</p>
                      ),
                      [BLOCKS.UL_LIST]: (node, children) => (
                        <ul className="list-disc list-outside ml-5 mb-4 space-y-2">{children}</ul>
                      ),
                      [BLOCKS.OL_LIST]: (node, children) => (
                        <ol className="list-decimal list-outside ml-5 mb-4 space-y-2">{children}</ol>
                      ),
                      [BLOCKS.LIST_ITEM]: (node, children) => {
                        const unwrappedChildren = node.content.map((item: any) =>
                          item.nodeType === BLOCKS.PARAGRAPH ? item.content.map((c: any) => c.value).join('') : null
                        ).filter(Boolean).join('');
                        return <li className="text-base leading-7">{unwrappedChildren || children}</li>;
                      },
                    },
                  })}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Image Section */}
        {imageUrl && (
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden p-8 mb-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">📷</div>
              <h3 className="text-lg font-semibold text-gray-900">Visual Reference</h3>
            </div>
            <div className="flex justify-center bg-gray-50 rounded-xl p-6">
              <Image
                src={imageUrl}
                alt={pageTitle || 'Course image'}
                width={450}
                height={338}
                className="object-cover rounded-lg shadow-lg border border-gray-200"
                priority
              />
            </div>
          </div>
        )}

        {/* FAQ Section */}
        {questionAndAnswer && (
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">❓</div>
              <h2 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
            </div>
            <div className="prose prose-lg max-w-none">
              {documentToReactComponents(questionAndAnswer, {
                renderNode: {
                  [BLOCKS.HEADING_4]: (node, children) => (
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6 pb-2 border-b-2 border-gray-200">{children}</h3>
                  ),
                  [BLOCKS.PARAGRAPH]: (node, children) => (
                    <p className="mb-4 text-base text-gray-700 leading-7">{children}</p>
                  ),
                  [BLOCKS.UL_LIST]: (node, children) => (
                    <ul className="list-disc list-outside ml-5 mb-4 space-y-2">{children}</ul>
                  ),
                  [BLOCKS.OL_LIST]: (node, children) => (
                    <ol className="list-decimal list-outside ml-5 mb-4 space-y-2">{children}</ol>
                  ),
                  [BLOCKS.LIST_ITEM]: (node, children) => {
                    const unwrappedChildren = node.content.map((item: any) =>
                      item.nodeType === BLOCKS.PARAGRAPH ? item.content.map((c: any) => c.value).join('') : null
                    ).filter(Boolean).join('');
                    return <li className="text-base text-gray-700 leading-7">{unwrappedChildren || children}</li>;
                  },
                },
              })}
            </div>
          </div>
        )}

        {/* Video Section */}
        {videoUrl && (
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">▶️</div>
              <h3 className="text-lg font-semibold text-gray-900">Training Video</h3>
            </div>
            <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg">
              <video controls className="w-full" src={videoUrl}>
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}