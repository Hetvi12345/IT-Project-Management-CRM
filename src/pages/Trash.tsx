import { useState } from 'react';
import { Trash2, RefreshCcw } from 'lucide-react';

const Trash = () => {
  const [deletedItems] = useState([
    {
      id: 1,
      title: 'Bug Fix Documentation',
      type: 'Task',
      deletedDate: '2024-03-10',
      deleteBy: 'John Doe',
    },
    {
      id: 2,
      title: 'Feature Planning',
      type: 'Board',
      deletedDate: '2024-03-09',
      deleteBy: 'Jane Smith',
    },
  ]);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <Trash2 className="w-8 h-8 text-primary mr-3" />
          <h1 className="text-2xl font-bold">Trash</h1>
        </div>
        <button className="px-4 py-2 text-red-500 border border-red-500 rounded-lg hover:bg-red-50">
          Empty Trash
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b">
                <th className="text-left py-3 px-4">Title</th>
                <th className="text-left py-3 px-4">Type</th>
                <th className="text-left py-3 px-4">Deleted Date</th>
                <th className="text-left py-3 px-4">Deleted By</th>
                <th className="text-left py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {deletedItems.map((item) => (
                <tr key={item.id} className="border-b">
                  <td className="py-3 px-4">{item.title}</td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-1 bg-gray-100 rounded-full text-sm">
                      {item.type}
                    </span>
                  </td>
                  <td className="py-3 px-4">{item.deletedDate}</td>
                  <td className="py-3 px-4">{item.deleteBy}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-2">
                      <button 
                        className="px-3 py-1 text-sm bg-primary text-white rounded-lg hover:bg-primary/90 flex items-center"
                        title="Restore"
                      >
                        <RefreshCcw className="w-4 h-4 mr-1" />
                        Restore
                      </button>
                      <button 
                        className="px-3 py-1 text-sm text-red-500 hover:bg-red-50 rounded-lg flex items-center"
                        title="Delete Permanently"
                      >
                        <Trash2 className="w-4 h-4 mr-1" />
                        Delete
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

export default Trash;