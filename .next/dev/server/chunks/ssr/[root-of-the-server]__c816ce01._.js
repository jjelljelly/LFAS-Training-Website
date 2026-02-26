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
    "fetchCourseBySlug",
    ()=>fetchCourseBySlug
]);
const ENVIRONMENT = 'master';
const CONTENT_TYPE = 'course';
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
}),
"[project]/Documents/React apps/lfas-training-next/src/app/courses/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CoursesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$src$2f$lib$2f$contentful$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/src/lib/contentful.ts [app-rsc] (ecmascript)");
;
;
;
async function CoursesPage() {
    let courses = [];
    try {
        courses = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$src$2f$lib$2f$contentful$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fetchAllCourses"])();
    } catch (err) {
        console.error('Failed to fetch courses', err);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-4xl font-bold text-gray-900 mb-4",
                children: "Courses"
            }, void 0, false, {
                fileName: "[project]/Documents/React apps/lfas-training-next/src/app/courses/page.tsx",
                lineNumber: 15,
                columnNumber: 13
            }, this),
            courses.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-600",
                children: "No courses available."
            }, void 0, false, {
                fileName: "[project]/Documents/React apps/lfas-training-next/src/app/courses/page.tsx",
                lineNumber: 17,
                columnNumber: 17
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-8",
                children: courses.map((course)=>{
                    const title = course.fields?.pageTitle ?? 'Untitled course';
                    const slug = course.fields?.slug ?? course.sys.id;
                    const getIntroText = ()=>{
                        const introDoc = course.fields?.introductionNew;
                        if (!introDoc?.content) return '';
                        const firstParagraph = introDoc.content.find((node)=>node.nodeType === 'paragraph');
                        return firstParagraph?.content?.[0]?.value || '';
                    };
                    const intro = getIntroText();
                    const procedureFee = course.fields?.procedureFee;
                    const bilatProcedureFee = course.fields?.bilatProcedureFee;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        className: "bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-semibold text-gray-900 mb-2",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/Documents/React apps/lfas-training-next/src/app/courses/page.tsx",
                                lineNumber: 35,
                                columnNumber: 33
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 mb-4",
                                children: intro
                            }, void 0, false, {
                                fileName: "[project]/Documents/React apps/lfas-training-next/src/app/courses/page.tsx",
                                lineNumber: 36,
                                columnNumber: 33
                            }, this),
                            (procedureFee || bilatProcedureFee) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-4 bg-green-50 rounded-lg p-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs font-semibold text-green-800 mb-1",
                                        children: "Pricing:"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/React apps/lfas-training-next/src/app/courses/page.tsx",
                                        lineNumber: 39,
                                        columnNumber: 41
                                    }, this),
                                    procedureFee && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-green-700",
                                        children: [
                                            "Unilateral: £",
                                            procedureFee.toLocaleString()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/React apps/lfas-training-next/src/app/courses/page.tsx",
                                        lineNumber: 41,
                                        columnNumber: 45
                                    }, this),
                                    bilatProcedureFee && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-green-700",
                                        children: [
                                            "Bilateral: £",
                                            bilatProcedureFee.toLocaleString()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/React apps/lfas-training-next/src/app/courses/page.tsx",
                                        lineNumber: 44,
                                        columnNumber: 45
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/React apps/lfas-training-next/src/app/courses/page.tsx",
                                lineNumber: 38,
                                columnNumber: 37
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: `/courses/${slug}`,
                                className: "inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium",
                                children: "View course"
                            }, void 0, false, {
                                fileName: "[project]/Documents/React apps/lfas-training-next/src/app/courses/page.tsx",
                                lineNumber: 48,
                                columnNumber: 33
                            }, this)
                        ]
                    }, course.sys.id, true, {
                        fileName: "[project]/Documents/React apps/lfas-training-next/src/app/courses/page.tsx",
                        lineNumber: 34,
                        columnNumber: 29
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/Documents/React apps/lfas-training-next/src/app/courses/page.tsx",
                lineNumber: 19,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/React apps/lfas-training-next/src/app/courses/page.tsx",
        lineNumber: 14,
        columnNumber: 9
    }, this);
}
}),
"[project]/Documents/React apps/lfas-training-next/src/app/courses/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/src/app/courses/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__c816ce01._.js.map