import { useState } from 'react';
import { UserPlus, Mail, Shield } from 'lucide-react';

const Members = () => {
  const [members] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      role: 'Admin',
      status: 'Active',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      role: 'Editor',
      status: 'Active',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ]);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Team Members</h1>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 flex items-center">
            <UserPlus className="w-5 h-5 mr-2" />
            Invite Member
          </button>
        </div>
      </div>

      <div className="grid gap-4">
        {members.map((member) => (
          <div key={member.id} className="bg-white p-4 rounded-lg shadow-sm border flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img
                src={member.avatar}
                alt={member.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h3 className="font-medium">{member.name}</h3>
                <div className="flex items-center text-sm text-gray-500">
                  <Mail className="w-4 h-4 mr-1" />
                  {member.email}
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-1 text-primary" />
                <span className="text-sm">{member.role}</span>
              </div>
              <span className={`px-2 py-1 text-xs rounded-full ${
                member.status === 'Active'
                  ? 'bg-green-100 text-green-800'
                  : 'bg-gray-100 text-gray-800'
              }`}>
                {member.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Members;