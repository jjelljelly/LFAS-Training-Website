'use client'

import { useEffect, useState } from 'react';
import { createClient } from 'contentful';
import { Course } from '../types/contentful';

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
});

const useContentful = (contentType: string) => {
  const [data, setData] = useState<Course[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await client.getEntries({ content_type: contentType });
        setData(response.items as Course[]);
      } catch (err) {
        setError('Failed to fetch data from Contentful');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [contentType]);

  return { data, loading, error };
};

export default useContentful;