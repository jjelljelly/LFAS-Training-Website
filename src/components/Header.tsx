import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 shadow-lg" style={{ backgroundColor: '#1C355E' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex items-center gap-6">
                        <div className="flex-shrink-0 flex items-center">
                            <Link href="/" className="flex items-center gap-3 group">
                                <div className="bg-white rounded-lg p-1.5 shadow-md transition-transform group-hover:scale-105">
                                    <Image
                                        src="/LFAS_LOGO.png"
                                        alt="London Foot and Ankle Surgery"
                                        width={100}
                                        height={60}
                                        priority
                                        style={{ objectFit: 'contain' }}
                                    />
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <Link
                            href="/"
                            className="inline-flex items-center px-4 py-2 rounded-lg text-white font-medium hover:bg-white/10 transition-all duration-200 border border-transparent hover:border-white/30"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>
                            Home
                        </Link>
                        <Link
                            href="/specialists"
                            className="inline-flex items-center px-4 py-2 rounded-lg text-white font-medium hover:bg-white/10 transition-all duration-200 border border-transparent hover:border-white/30"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                            </svg>
                            Specialists
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;