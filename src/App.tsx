import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import AllTasks from './pages/AllTasks';
import Members from './pages/Members';
import MyBoards from './pages/MyBoards';
import SoftwareUpdates from './pages/SoftwareUpdates';
import General from './pages/General';
import UiUxDesign from './pages/UiUxDesign';
import Archive from './pages/Archive';
import Trash from './pages/Trash';
import Settings from './pages/Settings';

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <main className="flex-1 overflow-x-hidden overflow-y-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/all-tasks" element={<AllTasks />} />
            <Route path="/members" element={<Members />} />
            <Route path="/my-boards" element={<MyBoards />} />
            <Route path="/software-updates" element={<SoftwareUpdates />} />
            <Route path="/general" element={<General />} />
            <Route path="/ui-ux-design" element={<UiUxDesign />} />
            <Route path="/archive" element={<Archive />} />
            <Route path="/trash" element={<Trash />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;