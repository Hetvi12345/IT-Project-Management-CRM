import { useState } from 'react';
import { Plus, Star, Clock } from 'lucide-react';

const MyBoards = () => {
  const [boards] = useState([
    {
      id: 1,
      name: 'Product Development',
      description: 'Main board for product development tasks',
      starred: true,
      lastAccessed: '2 hours ago',
    },
    {
      id: 2,
      name: 'Marketing Campaign',
      description: 'Q1 marketing initiatives and tasks',
      starred: false,
      lastAccessed: '1 day ago',
    },
  ]);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">My Boards</h1>
        <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 flex items-center">
          <Plus className="w-5 h-5 mr-2" />
          Create Board
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {boards.map((board) => (
          <div key={board.id} className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-medium">{board.name}</h3>
              <Star className={`w-5 h-5 ${board.starred ? 'fill-yellow-400 text-yellow-400' : 'text-gray-400'}`} />
            </div>
            <p className="text-sm text-gray-500 mb-4">{board.description}</p>
            <div className="flex items-center text-sm text-gray-500">
              <Clock className="w-4 h-4 mr-1" />
              Last accessed {board.lastAccessed}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBoards;