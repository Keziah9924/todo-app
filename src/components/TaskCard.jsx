const TaskCard = ({ title, desc, date, status, image }) => {
    const colorMap = {
      "Not Started": "text-red-500",
      "In Progress": "text-blue-500",
      "Completed": "text-green-500",
    };
  
    return (
      <div className="border rounded-lg p-4 flex justify-between items-center hover:shadow">
        <div>
          <h3 className="font-semibold">{title}</h3>
          <p className="text-sm text-gray-500">{desc}</p>
          <div className="text-xs mt-2 space-x-2">
            <span className={`font-medium ${colorMap[status]}`}>{status}</span>
            <span className="text-gray-400">• {date}</span>
          </div>
        </div>
        <img
          src={image}
          alt={title}
          className="w-16 h-16 object-cover rounded-lg ml-4"
        />
      </div>
    );
  };
  
  export default TaskCard;
  