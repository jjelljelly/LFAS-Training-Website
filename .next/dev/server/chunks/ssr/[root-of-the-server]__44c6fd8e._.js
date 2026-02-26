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
"[project]/Documents/React apps/lfas-training-next/src/app/specialists/[slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SpecialistPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$src$2f$lib$2f$contentful$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/src/lib/contentful.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$contentful$2f$rich$2d$text$2d$react$2d$renderer$2f$dist$2f$rich$2d$text$2d$react$2d$renderer$2e$es5$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/@contentful/rich-text-react-renderer/dist/rich-text-react-renderer.es5.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$contentful$2f$rich$2d$text$2d$types$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/@contentful/rich-text-types/dist/esm/index.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$contentful$2f$rich$2d$text$2d$types$2f$dist$2f$esm$2f$blocks$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/@contentful/rich-text-types/dist/esm/blocks.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$contentful$2f$rich$2d$text$2d$types$2f$dist$2f$esm$2f$inlines$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/@contentful/rich-text-types/dist/esm/inlines.mjs [app-rsc] (ecmascript)");
;
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
async function SpecialistPage({ params }) {
    const resolvedParams = await params;
    const slug = resolvedParams?.slug;
    if (!slug) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center py-20",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-3xl font-bold text-gray-900 mb-2",
                    children: "Invalid specialist URL"
                }, void 0, false, {
                    fileName: "[project]/Documents/React apps/lfas-training-next/src/app/specialists/[slug]/page.tsx",
                    lineNumber: 30,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-600",
                    children: "No specialist slug was provided."
                }, void 0, false, {
                    fileName: "[project]/Documents/React apps/lfas-training-next/src/app/specialists/[slug]/page.tsx",
                    lineNumber: 31,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/React apps/lfas-training-next/src/app/specialists/[slug]/page.tsx",
            lineNumber: 29,
            columnNumber: 13
        }, this);
    }
    const specialist = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$src$2f$lib$2f$contentful$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fetchSpecialistBySlug"])(slug);
    if (!specialist) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center py-20",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-3xl font-bold text-gray-900 mb-2",
                    children: "Specialist not found"
                }, void 0, false, {
                    fileName: "[project]/Documents/React apps/lfas-training-next/src/app/specialists/[slug]/page.tsx",
                    lineNumber: 41,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-600",
                    children: "We couldn't find a specialist with that URL."
                }, void 0, false, {
                    fileName: "[project]/Documents/React apps/lfas-training-next/src/app/specialists/[slug]/page.tsx",
                    lineNumber: 42,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    href: "/specialists",
                    className: "mt-4 inline-block font-medium hover:opacity-80 transition-opacity",
                    style: {
                        color: '#238DC1'
                    },
                    children: "← Back to Specialists"
                }, void 0, false, {
                    fileName: "[project]/Documents/React apps/lfas-training-next/src/app/specialists/[slug]/page.tsx",
                    lineNumber: 43,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/React apps/lfas-training-next/src/app/specialists/[slug]/page.tsx",
            lineNumber: 40,
            columnNumber: 13
        }, this);
    }
    const { specialistName, specialistBio, treatments, specialistPicture, newConsultationFee, insuranceCompanies } = specialist.fields || {};
    // Get image URL
    const imageUrl = isResolvedAsset(specialistPicture) ? fixImageUrl(specialistPicture.fields.file.url) : null;
    // Rich text rendering options
    const renderOptions = {
        renderNode: {
            [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$contentful$2f$rich$2d$text$2d$types$2f$dist$2f$esm$2f$blocks$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BLOCKS"].PARAGRAPH]: (node, children)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mb-4 text-gray-700 leading-relaxed",
                    children: children
                }, void 0, false, {
                    fileName: "[project]/Documents/React apps/lfas-training-next/src/app/specialists/[slug]/page.tsx",
                    lineNumber: 59,
                    columnNumber: 17
                }, this),
            [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$contentful$2f$rich$2d$text$2d$types$2f$dist$2f$esm$2f$blocks$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BLOCKS"].HEADING_1]: (node, children)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-3xl font-bold text-gray-900 mb-4 mt-8",
                    children: children
                }, void 0, false, {
                    fileName: "[project]/Documents/React apps/lfas-training-next/src/app/specialists/[slug]/page.tsx",
                    lineNumber: 62,
                    columnNumber: 17
                }, this),
            [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$contentful$2f$rich$2d$text$2d$types$2f$dist$2f$esm$2f$blocks$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BLOCKS"].HEADING_2]: (node, children)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl font-bold text-gray-900 mb-3 mt-6",
                    children: children
                }, void 0, false, {
                    fileName: "[project]/Documents/React apps/lfas-training-next/src/app/specialists/[slug]/page.tsx",
                    lineNumber: 65,
                    columnNumber: 17
                }, this),
            [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$contentful$2f$rich$2d$text$2d$types$2f$dist$2f$esm$2f$blocks$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BLOCKS"].HEADING_3]: (node, children)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-xl font-semibold text-gray-900 mb-2 mt-4",
                    children: children
                }, void 0, false, {
                    fileName: "[project]/Documents/React apps/lfas-training-next/src/app/specialists/[slug]/page.tsx",
                    lineNumber: 68,
                    columnNumber: 17
                }, this),
            [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$contentful$2f$rich$2d$text$2d$types$2f$dist$2f$esm$2f$blocks$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BLOCKS"].UL_LIST]: (node, children)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "list-disc list-inside mb-4 space-y-2 text-gray-700 ml-4",
                    children: children
                }, void 0, false, {
                    fileName: "[project]/Documents/React apps/lfas-training-next/src/app/specialists/[slug]/page.tsx",
                    lineNumber: 71,
                    columnNumber: 17
                }, this),
            [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$contentful$2f$rich$2d$text$2d$types$2f$dist$2f$esm$2f$blocks$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BLOCKS"].OL_LIST]: (node, children)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                    className: "list-decimal list-inside mb-4 space-y-2 text-gray-700 ml-4",
                    children: children
                }, void 0, false, {
                    fileName: "[project]/Documents/React apps/lfas-training-next/src/app/specialists/[slug]/page.tsx",
                    lineNumber: 74,
                    columnNumber: 17
                }, this),
            [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$contentful$2f$rich$2d$text$2d$types$2f$dist$2f$esm$2f$blocks$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BLOCKS"].LIST_ITEM]: (node, children)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    className: "text-gray-700",
                    children: children
                }, void 0, false, {
                    fileName: "[project]/Documents/React apps/lfas-training-next/src/app/specialists/[slug]/page.tsx",
                    lineNumber: 77,
                    columnNumber: 17
                }, this),
            [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$contentful$2f$rich$2d$text$2d$types$2f$dist$2f$esm$2f$inlines$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INLINES"].HYPERLINK]: (node, children)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: node.data.uri,
                    className: "underline font-medium hover:opacity-80 transition-opacity",
                    style: {
                        color: '#238DC1'
                    },
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: children
                }, void 0, false, {
                    fileName: "[project]/Documents/React apps/lfas-training-next/src/app/specialists/[slug]/page.tsx",
                    lineNumber: 80,
                    columnNumber: 17
                }, this)
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 py-12 px-4 sm:px-6 lg:px-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-5xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    href: "/specialists",
                    className: "inline-flex items-center font-medium mb-6 hover:opacity-80 transition-opacity",
                    style: {
                        color: '#238DC1'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-4 h-4 mr-2",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M15 19l-7-7 7-7"
                            }, void 0, false, {
                                fileName: "[project]/Documents/React apps/lfas-training-next/src/app/specialists/[slug]/page.tsx",
                                lineNumber: 103,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/React apps/lfas-training-next/src/app/specialists/[slug]/page.tsx",
                            lineNumber: 102,
                            columnNumber: 21
                        }, this),
                        "Back to Specialists"
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/React apps/lfas-training-next/src/app/specialists/[slug]/page.tsx",
                    lineNumber: 97,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-8 py-10",
                            style: {
                                background: 'linear-gradient(to right, #238DC1, #1a7ba0)'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight",
                                children: specialistName || 'Unnamed Specialist'
                            }, void 0, false, {
                                fileName: "[project]/Documents/React apps/lfas-training-next/src/app/specialists/[slug]/page.tsx",
                                lineNumber: 111,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/React apps/lfas-training-next/src/app/specialists/[slug]/page.tsx",
                            lineNumber: 110,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-8",
                            children: [
                                imageUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-center mb-8",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative w-64 h-64 rounded-xl overflow-hidden shadow-lg",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            src: imageUrl,
                                            alt: specialistName || 'Specialist',
                                            fill: true,
                                            className: "object-cover"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/React apps/lfas-training-next/src/app/specialists/[slug]/page.tsx",
                                            lineNumber: 120,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/React apps/lfas-training-next/src/app/specialists/[slug]/page.tsx",
                                        lineNumber: 119,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/React apps/lfas-training-next/src/app/specialists/[slug]/page.tsx",
                                    lineNumber: 118,
                                    columnNumber: 29
                                }, this),
                                specialistBio && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-2xl font-bold text-gray-900 mb-4",
                                            children: "About"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/React apps/lfas-training-next/src/app/specialists/[slug]/page.tsx",
                                            lineNumber: 133,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "prose max-w-none",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$contentful$2f$rich$2d$text$2d$react$2d$renderer$2f$dist$2f$rich$2d$text$2d$react$2d$renderer$2e$es5$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["documentToReactComponents"])(specialistBio, renderOptions)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/React apps/lfas-training-next/src/app/specialists/[slug]/page.tsx",
                                            lineNumber: 134,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/React apps/lfas-training-next/src/app/specialists/[slug]/page.tsx",
                                    lineNumber: 132,
                                    columnNumber: 29
                                }, this),
                                (newConsultationFee || insuranceCompanies) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-8",
                                    children: [
                                        newConsultationFee && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-green-50 rounded-xl p-6 border border-green-200",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3 mb-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold",
                                                            children: "£"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/React apps/lfas-training-next/src/app/specialists/[slug]/page.tsx",
                                                            lineNumber: 147,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-xl font-semibold text-gray-900",
                                                            children: "Consultation Fee"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/React apps/lfas-training-next/src/app/specialists/[slug]/page.tsx",
                                                            lineNumber: 148,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/React apps/lfas-training-next/src/app/specialists/[slug]/page.tsx",
                                                    lineNumber: 146,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-3xl font-bold text-green-700 ml-13",
                                                    children: [
                                                        "£",
                                                        newConsultationFee.toLocaleString()
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/React apps/lfas-training-next/src/app/specialists/[slug]/page.tsx",
                                                    lineNumber: 150,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/React apps/lfas-training-next/src/app/specialists/[slug]/page.tsx",
                                            lineNumber: 145,
                                            columnNumber: 37
                                        }, this),
                                        insuranceCompanies && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-purple-50 rounded-xl p-6 border border-purple-200",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3 mb-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                className: "w-6 h-6",
                                                                fill: "currentColor",
                                                                viewBox: "0 0 20 20",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    fillRule: "evenodd",
                                                                    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                                                                    clipRule: "evenodd"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/React apps/lfas-training-next/src/app/specialists/[slug]/page.tsx",
                                                                    lineNumber: 160,
                                                                    columnNumber: 53
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/React apps/lfas-training-next/src/app/specialists/[slug]/page.tsx",
                                                                lineNumber: 159,
                                                                columnNumber: 49
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/React apps/lfas-training-next/src/app/specialists/[slug]/page.tsx",
                                                            lineNumber: 158,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-xl font-semibold text-gray-900",
                                                            children: "Insurance Accepted"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/React apps/lfas-training-next/src/app/specialists/[slug]/page.tsx",
                                                            lineNumber: 163,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/React apps/lfas-training-next/src/app/specialists/[slug]/page.tsx",
                                                    lineNumber: 157,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-lg text-purple-900 font-medium",
                                                    children: insuranceCompanies
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/React apps/lfas-training-next/src/app/specialists/[slug]/page.tsx",
                                                    lineNumber: 165,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/React apps/lfas-training-next/src/app/specialists/[slug]/page.tsx",
                                            lineNumber: 156,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/React apps/lfas-training-next/src/app/specialists/[slug]/page.tsx",
                                    lineNumber: 142,
                                    columnNumber: 29
                                }, this),
                                treatments && treatments.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-blue-50 rounded-xl p-6 border border-blue-100",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-semibold text-gray-900 mb-4",
                                            children: "Treatments Offered"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/React apps/lfas-training-next/src/app/specialists/[slug]/page.tsx",
                                            lineNumber: 174,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3",
                                            children: treatments.map((treatment, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-white border-2 px-4 py-2 rounded-lg text-sm font-medium shadow-sm flex items-center",
                                                    style: {
                                                        borderColor: '#238DC1',
                                                        color: '#157091'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            className: "w-4 h-4 mr-2",
                                                            fill: "currentColor",
                                                            viewBox: "0 0 20 20",
                                                            style: {
                                                                color: '#238DC1'
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                fillRule: "evenodd",
                                                                d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                                                                clipRule: "evenodd"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/React apps/lfas-training-next/src/app/specialists/[slug]/page.tsx",
                                                                lineNumber: 183,
                                                                columnNumber: 49
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/React apps/lfas-training-next/src/app/specialists/[slug]/page.tsx",
                                                            lineNumber: 182,
                                                            columnNumber: 45
                                                        }, this),
                                                        treatment
                                                    ]
                                                }, index, true, {
                                                    fileName: "[project]/Documents/React apps/lfas-training-next/src/app/specialists/[slug]/page.tsx",
                                                    lineNumber: 177,
                                                    columnNumber: 41
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/React apps/lfas-training-next/src/app/specialists/[slug]/page.tsx",
                                            lineNumber: 175,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/React apps/lfas-training-next/src/app/specialists/[slug]/page.tsx",
                                    lineNumber: 173,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/React apps/lfas-training-next/src/app/specialists/[slug]/page.tsx",
                            lineNumber: 115,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/React apps/lfas-training-next/src/app/specialists/[slug]/page.tsx",
                    lineNumber: 109,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/React apps/lfas-training-next/src/app/specialists/[slug]/page.tsx",
            lineNumber: 95,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/React apps/lfas-training-next/src/app/specialists/[slug]/page.tsx",
        lineNumber: 94,
        columnNumber: 9
    }, this);
}
}),
"[project]/Documents/React apps/lfas-training-next/src/app/specialists/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/src/app/specialists/[slug]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__44c6fd8e._.js.map