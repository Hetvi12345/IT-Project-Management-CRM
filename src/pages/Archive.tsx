import { useState } from 'react';
import { Archive as ArchiveIcon, RefreshCcw, Trash2 } from 'lucide-react';

const Archive = () => {
  const [archivedItems] = useState([
    {
      id: 1,
      title: 'Q4 2023 Marketing Campaign',
      type: 'Project',
      archivedDate: '2024-01-15',
      status: 'Completed',
    },
    {
      id: 2,
      title: 'Website Redesign',
      type: 'Board',
      archivedDate: '2024-02-01',
      status: 'Completed',
    },
  ]);

  return (
    <div className="p-6">
      <div className="flex items-center mb-6">
        <ArchiveIcon className="w-8 h-8 text-primary mr-3" />
        <h1 className="text-2xl font-bold">Archive</h1>
      </div>

      <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b">
                <th className="text-left py-3 px-4">Title</th>
                <th className="text-left py-3 px-4">Type</th>
                <th className="text-left py-3 px-4">Archived Date</th>
                <th className="text-left py-3 px-4">Status</th>
                <th className="text-left py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {archivedItems.map((item) => (
                <tr key={item.id} className="border-b">
                  <td className="py-3 px-4">{item.title}</td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-1 bg-gray-100 rounded-full text-sm">
                      {item.type}
                    </span>
                  </td>
                  <td className="py-3 px-4">{item.archivedDate}</td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                      {item.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-2">
                      <button className="p-1 hover:text-primary" title="Restore">
                        <RefreshCcw className="w-4 h-4" />
                      </button>
                      <button className="p-1 hover:text-red-500" title="Delete">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Archive;