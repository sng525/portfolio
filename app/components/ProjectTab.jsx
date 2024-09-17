import React from "react";

const ProjectTab = ({ name, onClick, isSelected }) => {
  const tabClasses = isSelected
    ? "text-white border-b border-secondary-600"
    : "text-[#ADB7BE] border-slate-700 hover:border-white ";
  return (
    <button
      className={`${tabClasses} rounded-full border-2 px-6 py-3 cursor-pointer text-xl`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTab;
