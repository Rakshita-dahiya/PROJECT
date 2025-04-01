import Sidebar from '../../components/Sidebar';

export default function DashboardLayout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-8 min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20" />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="relative">
          {children}
        </div>
      </main>
    </div>
  );
} 