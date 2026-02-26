
import type { Course, CourseCollection, Asset, Specialist, SpecialistCollection } from '../types/contentful';

const ENVIRONMENT = 'master';
const CONTENT_TYPE = 'course';
const SPECIALIST_CONTENT_TYPE = 'specialistsPage';

function ensureAuth() {
    const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
    const token = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;
    if (!space || !token) {
        throw new Error(
            'Missing Contentful env vars. Set NEXT_PUBLIC_CONTENTFUL_SPACE_ID and NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN'
        );
    }
    return { space, token };
}

/**
 * Resolve asset links in course entries.
 */
function resolveAssets(courses: Course[], assets: Asset[] = []): Course[] {
    const assetMap = new Map(assets.map(asset => [asset.sys.id, asset]));

    return courses.map(course => {
        const resolvedFields = { ...course.fields };

        // Resolve imageOfIssue array
        if (course.fields.imageOfIssue && Array.isArray(course.fields.imageOfIssue)) {
            resolvedFields.imageOfIssue = course.fields.imageOfIssue.map(img => {
                if (img && 'sys' in img && img.sys.id) {
                    return assetMap.get(img.sys.id) || img;
                }
                return img;
            }) as any;
        }

        // Resolve video array
        if (course.fields.video && Array.isArray(course.fields.video)) {
            resolvedFields.video = course.fields.video.map(vid => {
                if (vid && 'sys' in vid && vid.sys.id) {
                    return assetMap.get(vid.sys.id) || vid;
                }
                return vid;
            }) as any;
        }

        return {
            ...course,
            fields: resolvedFields,
        };
    });
}

/**
 * Fetch a single course by slug from Contentful (returns first match or null).
 */
export async function fetchCourseBySlug(slug: string): Promise<Course | null> {
    if (!slug) return null;

    const { space, token } = ensureAuth();

    // Always use the collection endpoint with include parameter for proper asset resolution
    try {
        // Try by entry ID first
        const idUrl = `https://cdn.contentful.com/spaces/${space}/environments/${ENVIRONMENT}/entries?sys.id=${encodeURIComponent(slug)}&limit=1&include=2&access_token=${token}`;
        const idRes = await fetch(idUrl);

        if (idRes.ok) {
            const data: CourseCollection = await idRes.json();
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
            const data: CourseCollection = await slugRes.json();
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

/**
 * Fetch all courses.
 */
export async function fetchAllCourses(): Promise<Course[]> {
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
            const data: CourseCollection = await fallbackRes.json();
            // Filter entries that look like courses (have pageTitle or slug)
            const filteredItems = Array.isArray(data?.items)
                ? data.items.filter((item: any) => item?.fields?.pageTitle || item?.fields?.slug)
                : [];
            const assets = data.includes?.Asset || [];
            return resolveAssets(filteredItems, assets);
        }
        const data: CourseCollection = await res.json();
        const items = Array.isArray(data?.items) ? data.items : [];
        const assets = data.includes?.Asset || [];
        return resolveAssets(items, assets);
    } catch (err) {
        console.error('Contentful fetch error:', err);
        return [];
    }
}

export default {
    fetchCourseBySlug,
    fetchAllCourses,
};

/**
 * Resolve asset links in specialist entries.
 */
function resolveSpecialistAssets(specialists: Specialist[], assets: Asset[] = []): Specialist[] {
    const assetMap = new Map(assets.map(asset => [asset.sys.id, asset]));

    return specialists.map(specialist => {
        const resolvedFields = { ...specialist.fields };

        // Resolve specialistPicture
        if (specialist.fields.specialistPicture && 'sys' in specialist.fields.specialistPicture && specialist.fields.specialistPicture.sys.id) {
            resolvedFields.specialistPicture = assetMap.get(specialist.fields.specialistPicture.sys.id) || specialist.fields.specialistPicture;
        }

        return {
            ...specialist,
            fields: resolvedFields,
        };
    });
}

/**
 * Fetch all specialists.
 */
export async function fetchAllSpecialists(): Promise<Specialist[]> {
    const { space, token } = ensureAuth();
    const url = `https://cdn.contentful.com/spaces/${space}/environments/${ENVIRONMENT}/entries?content_type=${SPECIALIST_CONTENT_TYPE}&include=2&access_token=${token}`;

    try {
        const res = await fetch(url);
        if (!res.ok) {
            console.error(`Contentful fetch failed: ${res.status}`);
            return [];
        }
        const data: SpecialistCollection = await res.json();
        const items = Array.isArray(data?.items) ? data.items : [];
        const assets = data.includes?.Asset || [];
        return resolveSpecialistAssets(items, assets);
    } catch (err) {
        console.error('Contentful fetch error:', err);
        return [];
    }
}

/**
 * Fetch a single specialist by slug from Contentful (returns first match or null).
 */
export async function fetchSpecialistBySlug(slug: string): Promise<Specialist | null> {
    if (!slug) return null;

    const { space, token } = ensureAuth();

    // Always use the collection endpoint with include parameter for proper asset resolution
    try {
        // Try by entry ID first
        const idUrl = `https://cdn.contentful.com/spaces/${space}/environments/${ENVIRONMENT}/entries?sys.id=${encodeURIComponent(slug)}&limit=1&include=2&access_token=${token}`;
        const idRes = await fetch(idUrl);

        if (idRes.ok) {
            const data: SpecialistCollection = await idRes.json();
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
            const data: SpecialistCollection = await slugRes.json();
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
