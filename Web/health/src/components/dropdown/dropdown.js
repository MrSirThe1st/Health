import React, { useState } from "react";

const CustomDropdown = ({ options, label, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (option) => {
    setSelected(option);
    onSelect(option); // Send selected option to parent component
    setIsOpen(false);
  };

  return (
    <div className="dropdown-container">
      <label>{label}</label>
      <div className="dropdown-header" onClick={toggleDropdown}>
        {selected || "Select..."}
      </div>
      {isOpen && (
        <ul className="dropdown-list">
          {options.map((option) => (
            <li key={option} onClick={() => handleSelect(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomDropdown;
