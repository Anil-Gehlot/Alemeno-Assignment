const Progress = ({ value, className = "" }) => (
  <div className={`w-full bg-gray-200 rounded ${className}`}>
    <div
      className="bg-blue-500 h-2 rounded"
      style={{ width: `${value}%` }}
    ></div>
  </div>
);
export default Progress;
