module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/Documents/React apps/lfas-training-next/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/Documents/React apps/lfas-training-next/src/lib/contentful.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "fetchAllCourses",
    ()=>fetchAllCourses,
    "fetchAllSpecialists",
    ()=>fetchAllSpecialists,
    "fetchCourseBySlug",
    ()=>fetchCourseBySlug,
    "fetchSpecialistBySlug",
    ()=>fetchSpecialistBySlug
]);
const ENVIRONMENT = 'master';
const CONTENT_TYPE = 'course';
const SPECIALIST_CONTENT_TYPE = 'specialistsPage';
function ensureAuth() {
    const space = ("TURBOPACK compile-time value", "81by070by44x");
    const token = ("TURBOPACK compile-time value", "6NU2czXx9dwIV-upGg_qhXcFpm7xxosl4LB7_UOEnLU");
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return {
        space,
        token
    };
}
/**
 * Resolve asset links in course entries.
 */ function resolveAssets(courses, assets = []) {
    const assetMap = new Map(assets.map((asset)=>[
            asset.sys.id,
            asset
        ]));
    return courses.map((course)=>{
        const resolvedFields = {
            ...course.fields
        };
        // Resolve imageOfIssue array
        if (course.fields.imageOfIssue && Array.isArray(course.fields.imageOfIssue)) {
            resolvedFields.imageOfIssue = course.fields.imageOfIssue.map((img)=>{
                if (img && 'sys' in img && img.sys.id) {
                    return assetMap.get(img.sys.id) || img;
                }
                return img;
            });
        }
        // Resolve video array
        if (course.fields.video && Array.isArray(course.fields.video)) {
            resolvedFields.video = course.fields.video.map((vid)=>{
                if (vid && 'sys' in vid && vid.sys.id) {
                    return assetMap.get(vid.sys.id) || vid;
                }
                return vid;
            });
        }
        return {
            ...course,
            fields: resolvedFields
        };
    });
}
async function fetchCourseBySlug(slug) {
    if (!slug) return null;
    const { space, token } = ensureAuth();
    // Always use the collection endpoint with include parameter for proper asset resolution
    try {
        // Try by entry ID first
        const idUrl = `https://cdn.contentful.com/spaces/${space}/environments/${ENVIRONMENT}/entries?sys.id=${encodeURIComponent(slug)}&limit=1&include=2&access_token=${token}`;
        const idRes = await fetch(idUrl);
        if (idRes.ok) {
            const data = await idRes.json();
            if (Array.isArray(data?.items) && data.items.length > 0) {
                const assets = data.includes?.Asset || [];
                const resolved = resolveAssets(data.items, assets);
                return resolved[0] || null;
            }
        }
    } catch (err) {
        console.log('Entry not found by ID, trying slug field...');
    }
    // Fallback: try searching by slug field
    try {
        const slugUrl = `https://cdn.contentful.com/spaces/${space}/environments/${ENVIRONMENT}/entries?fields.slug=${encodeURIComponent(slug)}&limit=1&include=2&access_token=${token}`;
        const slugRes = await fetch(slugUrl);
        if (slugRes.ok) {
            const data = await slugRes.json();
            if (Array.isArray(data?.items) && data.items.length > 0) {
                const assets = data.includes?.Asset || [];
                const resolved = resolveAssets(data.items, assets);
                return resolved[0] || null;
            }
        }
    } catch (err) {
        console.error('Contentful fetch error:', err);
    }
    return null;
}
async function fetchAllCourses() {
    const { space, token } = ensureAuth();
    const url = `https://cdn.contentful.com/spaces/${space}/environments/${ENVIRONMENT}/entries?content_type=${CONTENT_TYPE}&include=2&access_token=${token}`;
    try {
        const res = await fetch(url);
        if (!res.ok) {
            // Try fetching all entries without content type filter if the type doesn't exist
            const fallbackUrl = `https://cdn.contentful.com/spaces/${space}/environments/${ENVIRONMENT}/entries?include=2&access_token=${token}`;
            const fallbackRes = await fetch(fallbackUrl);
            if (!fallbackRes.ok) {
                console.error(`Contentful fetch failed: ${fallbackRes.status}`);
                return [];
            }
            const data = await fallbackRes.json();
            // Filter entries that look like courses (have pageTitle or slug)
            const filteredItems = Array.isArray(data?.items) ? data.items.filter((item)=>item?.fields?.pageTitle || item?.fields?.slug) : [];
            const assets = data.includes?.Asset || [];
            return resolveAssets(filteredItems, assets);
        }
        const data = await res.json();
        const items = Array.isArray(data?.items) ? data.items : [];
        const assets = data.includes?.Asset || [];
        return resolveAssets(items, assets);
    } catch (err) {
        console.error('Contentful fetch error:', err);
        return [];
    }
}
const __TURBOPACK__default__export__ = {
    fetchCourseBySlug,
    fetchAllCourses
};
/**
 * Resolve asset links in specialist entries.
 */ function resolveSpecialistAssets(specialists, assets = []) {
    const assetMap = new Map(assets.map((asset)=>[
            asset.sys.id,
            asset
        ]));
    return specialists.map((specialist)=>{
        const resolvedFields = {
            ...specialist.fields
        };
        // Resolve specialistPicture
        if (specialist.fields.specialistPicture && 'sys' in specialist.fields.specialistPicture && specialist.fields.specialistPicture.sys.id) {
            resolvedFields.specialistPicture = assetMap.get(specialist.fields.specialistPicture.sys.id) || specialist.fields.specialistPicture;
        }
        return {
            ...specialist,
            fields: resolvedFields
        };
    });
}
async function fetchAllSpecialists() {
    const { space, token } = ensureAuth();
    const url = `https://cdn.contentful.com/spaces/${space}/environments/${ENVIRONMENT}/entries?content_type=${SPECIALIST_CONTENT_TYPE}&include=2&access_token=${token}`;
    try {
        const res = await fetch(url);
        if (!res.ok) {
            console.error(`Contentful fetch failed: ${res.status}`);
            return [];
        }
        const data = await res.json();
        const items = Array.isArray(data?.items) ? data.items : [];
        const assets = data.includes?.Asset || [];
        return resolveSpecialistAssets(items, assets);
    } catch (err) {
        console.error('Contentful fetch error:', err);
        return [];
    }
}
async function fetchSpecialistBySlug(slug) {
    if (!slug) return null;
    const { space, token } = ensureAuth();
    // Always use the collection endpoint with include parameter for proper asset resolution
    try {
        // Try by entry ID first
        const idUrl = `https://cdn.contentful.com/spaces/${space}/environments/${ENVIRONMENT}/entries?sys.id=${encodeURIComponent(slug)}&limit=1&include=2&access_token=${token}`;
        const idRes = await fetch(idUrl);
        if (idRes.ok) {
            const data = await idRes.json();
            if (Array.isArray(data?.items) && data.items.length > 0) {
                const assets = data.includes?.Asset || [];
                const resolved = resolveSpecialistAssets(data.items, assets);
                return resolved[0] || null;
            }
        }
    } catch (err) {
        console.log('Entry not found by ID, trying slug field...');
    }
    // Fallback: try searching by slug field
    try {
        const slugUrl = `https://cdn.contentful.com/spaces/${space}/environments/${ENVIRONMENT}/entries?fields.slug=${encodeURIComponent(slug)}&limit=1&include=2&access_token=${token}`;
        const slugRes = await fetch(slugUrl);
        if (slugRes.ok) {
            const data = await slugRes.json();
            if (Array.isArray(data?.items) && data.items.length > 0) {
                const assets = data.includes?.Asset || [];
                const resolved = resolveSpecialistAssets(data.items, assets);
                return resolved[0] || null;
            }
        }
    } catch (err) {
        console.error('Contentful fetch error:', err);
    }
    return null;
}
}),
"[project]/Documents/React apps/lfas-training-next/src/app/courses/[slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CoursePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$src$2f$lib$2f$contentful$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/src/lib/contentful.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$contentful$2f$rich$2d$text$2d$react$2d$renderer$2f$dist$2f$rich$2d$text$2d$react$2d$renderer$2e$es5$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/@contentful/rich-text-react-renderer/dist/rich-text-react-renderer.es5.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$contentful$2f$rich$2d$text$2d$types$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/@contentful/rich-text-types/dist/esm/index.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$contentful$2f$rich$2d$text$2d$types$2f$dist$2f$esm$2f$blocks$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/@contentful/rich-text-types/dist/esm/blocks.mjs [app-rsc] (ecmascript)");
;
;
;
;
;
function fixImageUrl(url) {
    if (!url) return null;
    if (url.startsWith('//')) return `https:${url}`;
    if (url.startsWith('http')) return url;
    return `https:${url}`;
}
function isResolvedAsset(image) {
    return image && 'fields' in image && 'file' in image.fields;
}
async function CoursePage({ params }) {
    const resolvedParams = await params;
    const slug = resolvedParams?.slug;
    if (!slug) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center py-20",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-3xl font-bold text-gray-900 mb-2",
                    children: "Invalid course URL"
                }, void 0, false, {
                    fileName: "[project]/Documents/React apps/lfas-training-next/src/app/courses/[slug]/page.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-600",
                    children: "No course slug was provided."
                }, void 0, false, {
                    fileName: "[project]/Documents/React apps/lfas-training-next/src/app/courses/[slug]/page.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/React apps/lfas-training-next/src/app/courses/[slug]/page.tsx",
            lineNumber: 28,
            columnNumber: 7
        }, this);
    }
    const course = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$src$2f$lib$2f$contentful$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fetchCourseBySlug"])(slug);
    if (!course) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center py-20",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-3xl font-bold text-gray-900 mb-2",
                    children: "Course not found"
                }, void 0, false, {
                    fileName: "[project]/Documents/React apps/lfas-training-next/src/app/courses/[slug]/page.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-600",
                    children: "We couldn't find a course with that URL."
                }, void 0, false, {
                    fileName: "[project]/Documents/React apps/lfas-training-next/src/app/courses/[slug]/page.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/React apps/lfas-training-next/src/app/courses/[slug]/page.tsx",
            lineNumber: 39,
            columnNumber: 7
        }, this);
    }
    const { pageTitle, introductionNew, specialistName, questionAndAnswer, procedureFee, bilatProcedureFee, imageOfIssue, video } = course.fields || {};
    // Get first image from imageOfIssue array
    const firstImage = imageOfIssue && imageOfIssue.length > 0 ? imageOfIssue[0] : null;
    const imageUrl = isResolvedAsset(firstImage) ? fixImageUrl(firstImage.fields.file.url) : null;
    // Get first video if available
    const firstVideo = video && video.length > 0 ? video[0] : null;
    const videoUrl = isResolvedAsset(firstVideo) ? fixImageUrl(firstVideo.fields.file.url) : null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 py-12 px-4 sm:px-6 lg:px-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-5xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-8 py-10",
                            style: {
                                background: 'linear-gradient(to right, #238DC1, #1a7ba0)'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight",
                                    children: pageTitle
                                }, void 0, false, {
                                    fileName: "[project]/Documents/React apps/lfas-training-next/src/app/courses/[slug]/page.tsx",
                                    lineNumber: 62,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-blue-100 text-lg",
                                    children: "Training Course Information"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/React apps/lfas-training-next/src/app/courses/[slug]/page.tsx",
                                    lineNumber: 63,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/React apps/lfas-training-next/src/app/courses/[slug]/page.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this),
                        specialistName && specialistName.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-8 py-6 bg-blue-50 border-b border-blue-100",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 mb-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold",
                                            style: {
                                                backgroundColor: '#238DC1'
                                            },
                                            children: "👤"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/React apps/lfas-training-next/src/app/courses/[slug]/page.tsx",
                                            lineNumber: 70,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-semibold text-gray-900",
                                            children: [
                                                "Specialist",
                                                specialistName.length > 1 ? 's' : '',
                                                " to Book With"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/React apps/lfas-training-next/src/app/courses/[slug]/page.tsx",
                                            lineNumber: 71,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/React apps/lfas-training-next/src/app/courses/[slug]/page.tsx",
                                    lineNumber: 69,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-2",
                                    children: specialistName.map((name, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "inline-flex items-center bg-white border-2 px-4 py-2 rounded-lg text-sm font-semibold shadow-sm",
                                            style: {
                                                borderColor: '#238DC1',
                                                color: '#157091'
                                            },
                                            children: name
                                        }, index, false, {
                                            fileName: "[project]/Documents/React apps/lfas-training-next/src/app/courses/[slug]/page.tsx",
                                            lineNumber: 75,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Documents/React apps/lfas-training-next/src/app/courses/[slug]/page.tsx",
                                    lineNumber: 73,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/React apps/lfas-training-next/src/app/courses/[slug]/page.tsx",
                            lineNumber: 68,
                            columnNumber: 13
                        }, this),
                        (procedureFee || bilatProcedureFee) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-8 py-6 bg-green-50 border-b border-green-100",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 mb-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold",
                                            children: "£"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/React apps/lfas-training-next/src/app/courses/[slug]/page.tsx",
                                            lineNumber: 88,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-semibold text-gray-900",
                                            children: "Procedure Pricing"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/React apps/lfas-training-next/src/app/courses/[slug]/page.tsx",
                                            lineNumber: 89,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/React apps/lfas-training-next/src/app/courses/[slug]/page.tsx",
                                    lineNumber: 87,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-600 italic mb-4 ml-11",
                                    children: "Approximate pricing for surgery"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/React apps/lfas-training-next/src/app/courses/[slug]/page.tsx",
                                    lineNumber: 92,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                    children: [
                                        procedureFee && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white rounded-xl p-6 shadow-md border-2 border-green-200",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-medium text-gray-600 mb-2 uppercase tracking-wide",
                                                    children: "Unilateral Procedure"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/React apps/lfas-training-next/src/app/courses/[slug]/page.tsx",
                                                    lineNumber: 96,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-4xl font-bold text-green-700",
                                                    children: [
                                                        "£",
                                                        procedureFee.toLocaleString()
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/React apps/lfas-training-next/src/app/courses/[slug]/page.tsx",
                                                    lineNumber: 97,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/React apps/lfas-training-next/src/app/courses/[slug]/page.tsx",
                                            lineNumber: 95,
                                            columnNumber: 19
                                        }, this),
                                        bilatProcedureFee && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white rounded-xl p-6 shadow-md border-2 border-blue-200",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-medium text-gray-600 mb-2 uppercase tracking-wide",
                                                    children: "Bilateral Procedure"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/React apps/lfas-training-next/src/app/courses/[slug]/page.tsx",
                                                    lineNumber: 102,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-4xl font-bold",
                                                    style: {
                                                        color: '#238DC1'
                                                    },
                                                    children: [
                                                        "£",
                                                        bilatProcedureFee.toLocaleString()
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/React apps/lfas-training-next/src/app/courses/[slug]/page.tsx",
                                                    lineNumber: 103,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/React apps/lfas-training-next/src/app/courses/[slug]/page.tsx",
                                            lineNumber: 101,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/React apps/lfas-training-next/src/app/courses/[slug]/page.tsx",
                                    lineNumber: 93,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/React apps/lfas-training-next/src/app/courses/[slug]/page.tsx",
                            lineNumber: 86,
                            columnNumber: 13
                        }, this),
                        introductionNew && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-8 py-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 mb-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold",
                                            children: "ℹ️"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/React apps/lfas-training-next/src/app/courses/[slug]/page.tsx",
                                            lineNumber: 114,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-semibold text-gray-900",
                                            children: "Procedure Overview"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/React apps/lfas-training-next/src/app/courses/[slug]/page.tsx",
                                            lineNumber: 115,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/React apps/lfas-training-next/src/app/courses/[slug]/page.tsx",
                                    lineNumber: 113,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-indigo-50 border-l-4 border-indigo-600 rounded-r-xl p-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "prose prose-lg max-w-none text-gray-800 leading-relaxed",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$contentful$2f$rich$2d$text$2d$react$2d$renderer$2f$dist$2f$rich$2d$text$2d$react$2d$renderer$2e$es5$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["documentToReactComponents"])(introductionNew, {
                                            renderNode: {
                                                [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$contentful$2f$rich$2d$text$2d$types$2f$dist$2f$esm$2f$blocks$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BLOCKS"].PARAGRAPH]: (node, children)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mb-4 text-base leading-7",
                                                        children: children
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/React apps/lfas-training-next/src/app/courses/[slug]/page.tsx",
                                                        lineNumber: 122,
                                                        columnNumber: 25
                                                    }, this),
                                                [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$contentful$2f$rich$2d$text$2d$types$2f$dist$2f$esm$2f$blocks$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BLOCKS"].UL_LIST]: (node, children)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "list-disc list-outside ml-5 mb-4 space-y-2",
                                                        children: children
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/React apps/lfas-training-next/src/app/courses/[slug]/page.tsx",
                                                        lineNumber: 125,
                                                        columnNumber: 25
                                                    }, this),
                                                [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$contentful$2f$rich$2d$text$2d$types$2f$dist$2f$esm$2f$blocks$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BLOCKS"].OL_LIST]: (node, children)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                                        className: "list-decimal list-outside ml-5 mb-4 space-y-2",
                                                        children: children
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/React apps/lfas-training-next/src/app/courses/[slug]/page.tsx",
                                                        lineNumber: 128,
                                                        columnNumber: 25
                                                    }, this),
                                                [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$contentful$2f$rich$2d$text$2d$types$2f$dist$2f$esm$2f$blocks$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BLOCKS"].LIST_ITEM]: (node, children)=>{
                                                    const unwrappedChildren = node.content.map((item)=>item.nodeType === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$contentful$2f$rich$2d$text$2d$types$2f$dist$2f$esm$2f$blocks$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BLOCKS"].PARAGRAPH ? item.content.map((c)=>c.value).join('') : null).filter(Boolean).join('');
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "text-base leading-7",
                                                        children: unwrappedChildren || children
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/React apps/lfas-training-next/src/app/courses/[slug]/page.tsx",
                                                        lineNumber: 134,
                                                        columnNumber: 32
                                                    }, this);
                                                }
                                            }
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/React apps/lfas-training-next/src/app/courses/[slug]/page.tsx",
                                        lineNumber: 118,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/React apps/lfas-training-next/src/app/courses/[slug]/page.tsx",
                                    lineNumber: 117,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/React apps/lfas-training-next/src/app/courses/[slug]/page.tsx",
                            lineNumber: 112,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/React apps/lfas-training-next/src/app/courses/[slug]/page.tsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, this),
                imageUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden p-8 mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 mb-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold",
                                    children: "📷"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/React apps/lfas-training-next/src/app/courses/[slug]/page.tsx",
                                    lineNumber: 148,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-semibold text-gray-900",
                                    children: "Visual Reference"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/React apps/lfas-training-next/src/app/courses/[slug]/page.tsx",
                                    lineNumber: 149,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/React apps/lfas-training-next/src/app/courses/[slug]/page.tsx",
                            lineNumber: 147,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center bg-gray-50 rounded-xl p-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                src: imageUrl,
                                alt: pageTitle || 'Course image',
                                width: 450,
                                height: 338,
                                className: "object-cover rounded-lg shadow-lg border border-gray-200",
                                priority: true
                            }, void 0, false, {
                                fileName: "[project]/Documents/React apps/lfas-training-next/src/app/courses/[slug]/page.tsx",
                                lineNumber: 152,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/React apps/lfas-training-next/src/app/courses/[slug]/page.tsx",
                            lineNumber: 151,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/React apps/lfas-training-next/src/app/courses/[slug]/page.tsx",
                    lineNumber: 146,
                    columnNumber: 11
                }, this),
                questionAndAnswer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-2xl shadow-xl border border-gray-200 p-8 mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold",
                                    children: "❓"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/React apps/lfas-training-next/src/app/courses/[slug]/page.tsx",
                                    lineNumber: 168,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold text-gray-900",
                                    children: "Frequently Asked Questions"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/React apps/lfas-training-next/src/app/courses/[slug]/page.tsx",
                                    lineNumber: 169,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/React apps/lfas-training-next/src/app/courses/[slug]/page.tsx",
                            lineNumber: 167,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "prose prose-lg max-w-none",
                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$contentful$2f$rich$2d$text$2d$react$2d$renderer$2f$dist$2f$rich$2d$text$2d$react$2d$renderer$2e$es5$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["documentToReactComponents"])(questionAndAnswer, {
                                renderNode: {
                                    [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$contentful$2f$rich$2d$text$2d$types$2f$dist$2f$esm$2f$blocks$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BLOCKS"].HEADING_4]: (node, children)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-semibold text-gray-900 mb-3 mt-6 pb-2 border-b-2 border-gray-200",
                                            children: children
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/React apps/lfas-training-next/src/app/courses/[slug]/page.tsx",
                                            lineNumber: 175,
                                            columnNumber: 21
                                        }, this),
                                    [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$contentful$2f$rich$2d$text$2d$types$2f$dist$2f$esm$2f$blocks$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BLOCKS"].PARAGRAPH]: (node, children)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mb-4 text-base text-gray-700 leading-7",
                                            children: children
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/React apps/lfas-training-next/src/app/courses/[slug]/page.tsx",
                                            lineNumber: 178,
                                            columnNumber: 21
                                        }, this),
                                    [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$contentful$2f$rich$2d$text$2d$types$2f$dist$2f$esm$2f$blocks$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BLOCKS"].UL_LIST]: (node, children)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "list-disc list-outside ml-5 mb-4 space-y-2",
                                            children: children
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/React apps/lfas-training-next/src/app/courses/[slug]/page.tsx",
                                            lineNumber: 181,
                                            columnNumber: 21
                                        }, this),
                                    [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$contentful$2f$rich$2d$text$2d$types$2f$dist$2f$esm$2f$blocks$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BLOCKS"].OL_LIST]: (node, children)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                            className: "list-decimal list-outside ml-5 mb-4 space-y-2",
                                            children: children
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/React apps/lfas-training-next/src/app/courses/[slug]/page.tsx",
                                            lineNumber: 184,
                                            columnNumber: 21
                                        }, this),
                                    [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$contentful$2f$rich$2d$text$2d$types$2f$dist$2f$esm$2f$blocks$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BLOCKS"].LIST_ITEM]: (node, children)=>{
                                        const unwrappedChildren = node.content.map((item)=>item.nodeType === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$contentful$2f$rich$2d$text$2d$types$2f$dist$2f$esm$2f$blocks$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BLOCKS"].PARAGRAPH ? item.content.map((c)=>c.value).join('') : null).filter(Boolean).join('');
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "text-base text-gray-700 leading-7",
                                            children: unwrappedChildren || children
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/React apps/lfas-training-next/src/app/courses/[slug]/page.tsx",
                                            lineNumber: 190,
                                            columnNumber: 28
                                        }, this);
                                    }
                                }
                            })
                        }, void 0, false, {
                            fileName: "[project]/Documents/React apps/lfas-training-next/src/app/courses/[slug]/page.tsx",
                            lineNumber: 171,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/React apps/lfas-training-next/src/app/courses/[slug]/page.tsx",
                    lineNumber: 166,
                    columnNumber: 11
                }, this),
                videoUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-2xl shadow-xl border border-gray-200 p-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 mb-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold",
                                    children: "▶️"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/React apps/lfas-training-next/src/app/courses/[slug]/page.tsx",
                                    lineNumber: 202,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-semibold text-gray-900",
                                    children: "Training Video"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/React apps/lfas-training-next/src/app/courses/[slug]/page.tsx",
                                    lineNumber: 203,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/React apps/lfas-training-next/src/app/courses/[slug]/page.tsx",
                            lineNumber: 201,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gray-900 rounded-xl overflow-hidden shadow-lg",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                controls: true,
                                className: "w-full",
                                src: videoUrl,
                                children: "Your browser does not support the video tag."
                            }, void 0, false, {
                                fileName: "[project]/Documents/React apps/lfas-training-next/src/app/courses/[slug]/page.tsx",
                                lineNumber: 206,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/React apps/lfas-training-next/src/app/courses/[slug]/page.tsx",
                            lineNumber: 205,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/React apps/lfas-training-next/src/app/courses/[slug]/page.tsx",
                    lineNumber: 200,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/React apps/lfas-training-next/src/app/courses/[slug]/page.tsx",
            lineNumber: 58,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/React apps/lfas-training-next/src/app/courses/[slug]/page.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/React apps/lfas-training-next/src/app/courses/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/src/app/courses/[slug]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__d0b03968._.js.map