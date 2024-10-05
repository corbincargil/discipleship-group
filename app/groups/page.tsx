import React from "react";

const GroupsPage: React.FC = () => {
  // Mock data for groups (replace with actual data fetching logic later)
  const groups = [
    { id: 1, name: "Group A", memberCount: 10 },
    { id: 2, name: "Group B", memberCount: 15 },
    { id: 3, name: "Group C", memberCount: 8 },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Groups</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {groups.map((group) => (
          <div key={group.id} className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-semibold">{group.name}</h2>
            <p className="text-gray-600">Members: {group.memberCount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GroupsPage;
