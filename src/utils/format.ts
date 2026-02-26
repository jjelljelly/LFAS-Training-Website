// src/utils/format.ts

export const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
};

export const truncateString = (str: string, length: number): string => {
    if (str.length <= length) return str;
    return str.substring(0, length) + '...';
};