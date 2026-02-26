import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ThemeRegistry from '../components/ThemeRegistry';
import '../styles/globals.css';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <html lang="en">
            <body className="min-h-screen bg-gray-50 flex flex-col pt-20">
                <ThemeRegistry>
                    <Header />

                    <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
                        {children}
                    </main>

                    <Footer />
                </ThemeRegistry>
            </body>
        </html>
    );
};

export default Layout;