'use client'

import React, { useMemo } from 'react';

const Footer: React.FC = () => {
    const year = useMemo(() => new Date().getFullYear(), []);

    return (
        <footer className="bg-white border-t border-gray-200 text-gray-700 py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-sm">&copy; {year} London Foot and Ankle Surgery Ltd. </p>

            </div>
        </footer>
    );
};

export default Footer;