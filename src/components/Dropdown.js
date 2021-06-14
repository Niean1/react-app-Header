import React, { useState, useRef } from "react";

const Dropdown = ({ label, options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  const renderedOptions = options.map((options) => {
    if (options.value === selected.value) {
      return null;
    }

    return (
      <div
        onClick={() => onSelectedChange(options)}
        key={options.value}
        className="item"
      >
        {options.label}
      </div>
    );
  });
  const style = { color: selected.value };

  return (
    <div className="ui form" ref={ref}>
      <div className="field">
        <label className="label">{label}</label>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
        <div style={style}>The text is {selected.value}!</div>
      </div>
    </div>
  );
};

export default Dropdown;
