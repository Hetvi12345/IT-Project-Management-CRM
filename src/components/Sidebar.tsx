import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  CheckSquare,
  Users,
  Kanban,
  Bell,
  FileText,
  Palette,
  Archive,
  Trash2,
  Settings,
} from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { path: '/', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/all-tasks', icon: CheckSquare, label: 'All Tasks' },
    { path: '/members', icon: Users, label: 'Members' },
    { path: '/my-boards', icon: Kanban, label: 'My Boards' },
    { path: '/software-updates', icon: Bell, label: 'Software Updates' },
    { path: '/general', icon: FileText, label: 'General' },
    { path: '/ui-ux-design', icon: Palette, label: 'UI/UX Design' },
    { path: '/archive', icon: Archive, label: 'Archive' },
    { path: '/trash', icon: Trash2, label: 'Trash' },
    { path: '/settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <div className="w-64 bg-white h-screen shadow-lg">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-primary">Task Manager</h1>
      </div>
      <nav className="mt-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 ${
                isActive ? 'bg-primary/10 text-primary' : ''
              }`}
            >
              <Icon className="w-5 h-5 mr-3" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;