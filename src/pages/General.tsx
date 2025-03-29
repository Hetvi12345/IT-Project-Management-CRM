import { useState } from 'react';
import { Plus, MoreVertical } from 'lucide-react';

const General = () => {
  const [tasks] = useState([
    {
      id: 1,
      title: 'Project Planning',
      status: 'To Do',
      assignee: 'John Doe',
      dueDate: '2024-03-20',
    },
    {
      id: 2,
      title: 'Team Meeting',
      status: 'In Progress',
      assignee: 'Jane Smith',
      dueDate: '2024-03-15',
    },
  ]);

  const columns = ['To Do', 'In Progress', 'Under Review', 'Completed'];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">General Board</h1>
        <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 flex items-center">
          <Plus className="w-5 h-5 mr-2" />
          Add Task
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {columns.map((column) => (
          <div key={column} className="bg-gray-50 p-4 rounded-lg">
            <h2 className="font-semibold mb-4">{column}</h2>
            <div className="space-y-3">
              {tasks
                .filter((task) => task.status === column)
                .map((task) => (
                  <div key={task.id} className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium">{task.title}</h3>
                      <button className="text-gray-400 hover:text-gray-600">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="text-sm text-gray-500">
                      <p>Assignee: {task.assignee}</p>
                      <p>Due: {task.dueDate}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default General;