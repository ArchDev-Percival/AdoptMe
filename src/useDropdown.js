import React, { useState } from "react";

const useDropdown = (label, defaultState, options) => {
  const [state, updateState] = useState(defaultState);
  const id = `use-dropdown-${label.replace(" ", "").toLowerCase()}`;
  const Dropdown = () => (
    <label htmlFor={id}>
      {label}
      <select
        id={id}
        value={state}
        disabled={!options.length}
        onChange={(e) => {
          updateState(e.target.value);
        }}
        onBlur={(e) => {
          updateState(e.target.value);
        }}
      >
        <option />
        {options.map((optionString) => (
          <option key={optionString} value={optionString}>
            {optionString}
          </option>
        ))}
      </select>
    </label>
  );
  return [state, Dropdown];
};

export default useDropdown;
