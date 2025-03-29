import { useState } from 'react';
import { Plus, Image, MessageSquare } from 'lucide-react';

const UiUxDesign = () => {
  const [tasks] = useState([
    {
      id: 1,
      title: 'Homepage Redesign',
      status: 'In Progress',
      assignee: 'John Doe',
      comments: 5,
      attachments: 3,
    },
    {
      id: 2,
      title: 'Mobile App Wireframes',
      status: 'Under Review',
      assignee: 'Jane Smith',
      comments: 3,
      attachments: 2,
    },
  ]);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">UI/UX Design Board</h1>
        <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 flex items-center">
          <Plus className="w-5 h-5 mr-2" />
          New Design Task
        </button>
      </div>

      <div className="grid gap-4">
        {tasks.map((task) => (
          <div key={task.id} className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-medium text-lg mb-2">{task.title}</h3>
                <p className="text-sm text-gray-500">Assigned to {task.assignee}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm ${
                task.status === 'In Progress'
                  ? 'bg-blue-100 text-blue-800'
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                {task.status}
              </span>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center">
                <MessageSquare className="w-4 h-4 mr-1" />
                {task.comments} comments
              </div>
              <div className="flex items-center">
                <Image className="w-4 h-4 mr-1" />
                {task.attachments} attachments
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UiUxDesign;