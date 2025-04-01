import React, { useState } from 'react';
import Sidebar from './MultipleFiles/Sidebar';
import HomeSection from './MultipleFiles/HomeSection';
import Interview from './MultipleFiles/Interview';
import JobAlerts from './MultipleFiles/JobAlerts';
import SkillAnalysis from './MultipleFiles/SkillAnalysis';
import ResumeAnalysis from './MultipleFiles/ResumeAnalysis';
import Profile from './MultipleFiles/Profile';

const Page = () => {
  const [activeSection, setActiveSection] = useState('home');

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'home':
        return <HomeSection />;
      case 'interview':
        return <Interview />;
      case 'alerts':
        return <JobAlerts />;
      case 'skills':
        return <SkillAnalysis />;
      case 'resume':
        return <ResumeAnalysis />;
      case 'profile':
        return <Profile />;
      default:
        console.warn(`Unknown section: ${activeSection}`);
        return <HomeSection />;
    }
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Content Area */}
      <div className="flex-1 p-6 bg-gray-100 dark:bg-gray-900">
        {renderActiveSection()}
      </div>
    </div>
  );
};

export default Page;