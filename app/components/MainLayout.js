import Navbar from './Navbar';
import Sidebar from './Sidebar';

export default function MainLayout({ children }) {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="ml-64 p-4">
        {children}
      </div>
    </div>
  );
}
