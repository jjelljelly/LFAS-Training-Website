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
"[project]/Documents/React apps/lfas-training-next/src/app/specialists/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SpecialistsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$src$2f$lib$2f$contentful$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/src/lib/contentful.ts [app-rsc] (ecmascript)");
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
async function SpecialistsPage() {
    let specialists = [];
    try {
        specialists = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$src$2f$lib$2f$contentful$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fetchAllSpecialists"])();
    } catch (err) {
        console.error('Failed to fetch specialists', err);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 py-12 px-4 sm:px-6 lg:px-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl md:text-5xl font-bold text-gray-900 mb-4",
                            children: "Our Specialists"
                        }, void 0, false, {
                            fileName: "[project]/Documents/React apps/lfas-training-next/src/app/specialists/page.tsx",
                            lineNumber: 29,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xl text-gray-600",
                            children: "Meet our team of expert medical professionals"
                        }, void 0, false, {
                            fileName: "[project]/Documents/React apps/lfas-training-next/src/app/specialists/page.tsx",
                            lineNumber: 30,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/React apps/lfas-training-next/src/app/specialists/page.tsx",
                    lineNumber: 28,
                    columnNumber: 17
                }, this),
                specialists.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center py-20",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600 text-lg",
                        children: "No specialists available at this time."
                    }, void 0, false, {
                        fileName: "[project]/Documents/React apps/lfas-training-next/src/app/specialists/page.tsx",
                        lineNumber: 35,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/React apps/lfas-training-next/src/app/specialists/page.tsx",
                    lineNumber: 34,
                    columnNumber: 21
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
                    children: specialists.map((specialist)=>{
                        const name = specialist.fields?.specialistName ?? 'Unnamed Specialist';
                        const slug = specialist.fields?.slug ?? specialist.sys.id;
                        const treatments = specialist.fields?.treatments ?? [];
                        const consultationFee = specialist.fields?.newConsultationFee;
                        const insuranceCompanies = specialist.fields?.insuranceCompanies;
                        // Get image URL
                        const image = specialist.fields?.specialistPicture;
                        const imageUrl = isResolvedAsset(image) ? fixImageUrl(image.fields.file.url) : null;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 overflow-hidden",
                            children: [
                                imageUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative w-full h-64 bg-gray-100",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        src: imageUrl,
                                        alt: name,
                                        fill: true,
                                        className: "object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/React apps/lfas-training-next/src/app/specialists/page.tsx",
                                        lineNumber: 54,
                                        columnNumber: 45
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/React apps/lfas-training-next/src/app/specialists/page.tsx",
                                    lineNumber: 53,
                                    columnNumber: 41
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-2xl font-bold text-gray-900 mb-4",
                                            children: name
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/React apps/lfas-training-next/src/app/specialists/page.tsx",
                                            lineNumber: 64,
                                            columnNumber: 41
                                        }, this),
                                        consultationFee && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-4 bg-green-50 rounded-lg p-3 border border-green-200",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs font-semibold text-green-800 mb-1",
                                                    children: "Consultation Fee:"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/React apps/lfas-training-next/src/app/specialists/page.tsx",
                                                    lineNumber: 69,
                                                    columnNumber: 49
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-2xl font-bold text-green-700",
                                                    children: [
                                                        "£",
                                                        consultationFee.toLocaleString()
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/React apps/lfas-training-next/src/app/specialists/page.tsx",
                                                    lineNumber: 70,
                                                    columnNumber: 49
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/React apps/lfas-training-next/src/app/specialists/page.tsx",
                                            lineNumber: 68,
                                            columnNumber: 45
                                        }, this),
                                        insuranceCompanies && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-4 bg-purple-50 rounded-lg p-3 border border-purple-200",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs font-semibold text-purple-800 mb-1",
                                                    children: "Insurance Accepted:"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/React apps/lfas-training-next/src/app/specialists/page.tsx",
                                                    lineNumber: 77,
                                                    columnNumber: 49
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-medium text-purple-900",
                                                    children: insuranceCompanies
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/React apps/lfas-training-next/src/app/specialists/page.tsx",
                                                    lineNumber: 78,
                                                    columnNumber: 49
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/React apps/lfas-training-next/src/app/specialists/page.tsx",
                                            lineNumber: 76,
                                            columnNumber: 45
                                        }, this),
                                        treatments.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-semibold text-gray-700 mb-2",
                                                    children: "Treatments:"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/React apps/lfas-training-next/src/app/specialists/page.tsx",
                                                    lineNumber: 84,
                                                    columnNumber: 49
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-wrap gap-2",
                                                    children: [
                                                        treatments.slice(0, 3).map((treatment, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "bg-blue-50 px-3 py-1 rounded-full text-sm font-medium",
                                                                style: {
                                                                    color: '#238DC1'
                                                                },
                                                                children: treatment
                                                            }, index, false, {
                                                                fileName: "[project]/Documents/React apps/lfas-training-next/src/app/specialists/page.tsx",
                                                                lineNumber: 87,
                                                                columnNumber: 57
                                                            }, this)),
                                                        treatments.length > 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium",
                                                            children: [
                                                                "+",
                                                                treatments.length - 3,
                                                                " more"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/React apps/lfas-training-next/src/app/specialists/page.tsx",
                                                            lineNumber: 96,
                                                            columnNumber: 57
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/React apps/lfas-training-next/src/app/specialists/page.tsx",
                                                    lineNumber: 85,
                                                    columnNumber: 49
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/React apps/lfas-training-next/src/app/specialists/page.tsx",
                                            lineNumber: 83,
                                            columnNumber: 45
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            href: `/specialists/${slug}`,
                                            className: "inline-flex items-center justify-center w-full px-4 py-3 text-white rounded-lg transition-colors font-medium mt-4 hover:opacity-90",
                                            style: {
                                                backgroundColor: '#238DC1'
                                            },
                                            children: [
                                                "View Profile",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "ml-2 w-4 h-4",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: 2,
                                                        d: "M9 5l7 7-7 7"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/React apps/lfas-training-next/src/app/specialists/page.tsx",
                                                        lineNumber: 111,
                                                        columnNumber: 49
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/React apps/lfas-training-next/src/app/specialists/page.tsx",
                                                    lineNumber: 110,
                                                    columnNumber: 45
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/React apps/lfas-training-next/src/app/specialists/page.tsx",
                                            lineNumber: 104,
                                            columnNumber: 41
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/React apps/lfas-training-next/src/app/specialists/page.tsx",
                                    lineNumber: 63,
                                    columnNumber: 37
                                }, this)
                            ]
                        }, specialist.sys.id, true, {
                            fileName: "[project]/Documents/React apps/lfas-training-next/src/app/specialists/page.tsx",
                            lineNumber: 51,
                            columnNumber: 33
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/Documents/React apps/lfas-training-next/src/app/specialists/page.tsx",
                    lineNumber: 38,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/React apps/lfas-training-next/src/app/specialists/page.tsx",
            lineNumber: 27,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/React apps/lfas-training-next/src/app/specialists/page.tsx",
        lineNumber: 26,
        columnNumber: 9
    }, this);
}
}),
"[project]/Documents/React apps/lfas-training-next/src/app/specialists/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/src/app/specialists/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__d72a265a._.js.map