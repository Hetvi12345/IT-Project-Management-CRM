import { Bell, CheckCircle, AlertCircle } from 'lucide-react';

const SoftwareUpdates = () => {
  const updates = [
    {
      id: 1,
      version: 'v2.1.0',
      date: 'March 15, 2024',
      type: 'Feature',
      title: 'New Kanban Board View',
      description: 'Added a new Kanban board view for better task visualization',
      status: 'New',
    },
    {
      id: 2,
      version: 'v2.0.9',
      date: 'March 10, 2024',
      type: 'Bug Fix',
      title: 'Performance Improvements',
      description: 'Fixed loading issues and improved overall performance',
      status: 'Released',
    },
  ];

  return (
    <div className="p-6">
      <div className="flex items-center mb-6">
        <Bell className="w-8 h-8 text-primary mr-3" />
        <h1 className="text-2xl font-bold">Software Updates</h1>
      </div>

      <div className="space-y-6">
        {updates.map((update) => (
          <div key={update.id} className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h2 className="text-lg font-semibold">{update.version}</h2>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    update.status === 'New' 
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {update.status}
                  </span>
                </div>
                <p className="text-sm text-gray-500">{update.date}</p>
              </div>
              {update.type === 'Feature' ? (
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  Feature
                </span>
              ) : (
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                  Bug Fix
                </span>
              )}
            </div>
            <h3 className="text-lg font-medium mb-2">{update.title}</h3>
            <p className="text-gray-600">{update.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SoftwareUpdates;