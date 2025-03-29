import { useState } from 'react';
import {
  CheckCircle,
  Clock,
  AlertCircle,
  Users,
  Calendar,
  BarChart2,
} from 'lucide-react';

const Dashboard = () => {
  const [tasks] = useState([
    {
      id: 1,
      title: 'Design System Update',
      status: 'In Progress',
      priority: 'High',
      assignee: 'John Doe',
      dueDate: '2024-03-15',
    },
    {
      id: 2,
      title: 'User Research',
      status: 'Completed',
      priority: 'Medium',
      assignee: 'Jane Smith',
      dueDate: '2024-03-10',
    },
    // Add more tasks as needed
  ]);

  const stats = [
    { label: 'Total Tasks', value: '48', icon: CheckCircle, color: 'text-blue-500' },
    { label: 'In Progress', value: '12', icon: Clock, color: 'text-yellow-500' },
    { label: 'Urgent', value: '5', icon: AlertCircle, color: 'text-red-500' },
    { label: 'Team Members', value: '8', icon: Users, color: 'text-green-500' },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="flex space-x-2">
          <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90">
            Add Task
          </button>
          <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90">
            Generate Report
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm border"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                  <p className="text-2xl font-bold mt-1">{stat.value}</p>
                </div>
                <Icon className={`w-8 h-8 ${stat.color}`} />
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Recent Tasks</h2>
            <Calendar className="w-5 h-5 text-gray-500" />
          </div>
          <div className="space-y-4">
            {tasks.map((task) => (
              <div
                key={task.id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div>
                  <h3 className="font-medium">{task.title}</h3>
                  <p className="text-sm text-gray-500">
                    Assigned to {task.assignee}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      task.status === 'Completed'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {task.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Activity Overview</h2>
            <BarChart2 className="w-5 h-5 text-gray-500" />
          </div>
          <div className="h-64 flex items-center justify-center text-gray-500">
            Activity chart will be displayed here
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;