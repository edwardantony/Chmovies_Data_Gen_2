import React from "react";

interface UploadProgressProps {
    uploadImageProgress: Record<string, number>;    
    subHeader: string;
}

const progressColors: string[] = [
    "bg-blue-500", "bg-green-500", "bg-purple-500", "bg-pink-500",
    "bg-indigo-500", "bg-yellow-500", "bg-red-500", "bg-teal-500"
];

const UploadImageProgress: React.FC<UploadProgressProps> = ({ uploadImageProgress, subHeader }) => {
    const totalProgress = Object.values(uploadImageProgress).reduce((acc, curr) => acc + curr, 0);
    const totalFiles = Object.keys(uploadImageProgress).length;
    const avgProgress = totalFiles ? totalProgress / totalFiles : 0;

    return (
        <div className="p-2 bg-white shadow-md rounded-lg">
            <h2 className="text-sm font-semibold text-gray-800 mb-2">{subHeader} Upload Progress</h2>
            <div className="w-full h-3 bg-gray-200 rounded-md overflow-hidden flex">
                {Object.entries(uploadImageProgress).map(([key, value], index) => (
                    <div
                        key={key}
                        className={`h-full ${progressColors[index % progressColors.length]} transition-all duration-300`}
                        style={{ width: `${value / totalFiles}%` }}
                    />
                ))}
            </div>

            {avgProgress <= 0 && <p className="text-xs text-gray-700 mt-1">{Math.round(avgProgress)}% Complete</p>}
            {avgProgress === 100 && <div className="mt-2 text-xs text-green-600 font-semibold">Images uploaded successfully!</div>}
        </div>
    );
};

export default UploadImageProgress;
