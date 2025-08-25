import React from 'react';
import Nav from '@/Components/Nav';
import Footer from '@/Components/Footer';
import PublicContent from '@/Components/ContentPublic/PublicContent';
import Sidebar from '@/Components/Sidebar';

const Public = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col">
      {/* Navigation */}
      <Nav />

      {/* Main Layout: Sidebar + Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-1/4 bg-gray-800 p-6 sticky top-0 h-screen">
          <Sidebar />
        </div>

        {/* Content Area */}
        <div className="flex-1 p-6">
          <PublicContent />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Public;
