export const getStats = () => {
  return {
    revenue: "$12,430",
    users: "1,245",
    conversion: "4.2%",
  };
};

export const getUsers = () => {
  return [
    { id: 1, name: "Alice Johnson", role: "Admin", status: "Active" },
    { id: 2, name: "Bob Smith", role: "User", status: "Suspended" },
    { id: 3, name: "Charlie Lee", role: "User", status: "Active" },
  ];
};