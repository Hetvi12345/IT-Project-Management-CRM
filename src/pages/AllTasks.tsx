import { useState } from 'react';
import { Search, Filter, Plus } from 'lucide-react';

const AllTasks = () => {
  const [tasks] = useState([
    {
      id: 1,
      title: 'Update Design System',
      assignee: 'John Doe',
      priority: 'High',
      dueDate: '2024-03-15',
      status: 'In Progress',
      project: 'Design',
    },
    {
      id: 2,
      title: 'User Research',
      assignee: 'Jane Smith',
      priority: 'Medium',
      dueDate: '2024-03-20',
      status: 'To Do',
      project: 'Research',
    },
  ]);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">All Tasks</h1>
        <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 flex items-center">
          <Plus className="w-5 h-5 mr-2" />
          New Task
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm border p-4 mb-6">
        <div className="flex gap-4 mb-4">
          <div className="flex-1 relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search tasks..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <button className="px-4 py-2 border rounded-lg hover:bg-gray-50 flex items-center">
            <Filter className="w-5 h-5 mr-2" />
            Filters
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4">Task</th>
                <th className="text-left py-3 px-4">Assignee</th>
                <th className="text-left py-3 px-4">Priority</th>
                <th className="text-left py-3 px-4">Due Date</th>
                <th className="text-left py-3 px-4">Status</th>
                <th className="text-left py-3 px-4">Project</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => (
                <tr key={task.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">{task.title}</td>
                  <td className="py-3 px-4">{task.assignee}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      task.priority === 'High' 
                        ? 'bg-red-100 text-red-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {task.priority}
                    </span>
                  </td>
                  <td className="py-3 px-4">{task.dueDate}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      task.status === 'Completed'
                        ? 'bg-green-100 text-green-800'
                        : task.status === 'In Progress'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {task.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">{task.project}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllTasks;