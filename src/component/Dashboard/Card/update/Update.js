import React from "react";
import Select from "react-select";
import "./Update.scss";

function Update({ adminLabels, cardLabels, UpdateCard, CardID }) {
  var options = adminLabels.map((item, i) => ({ value: item, label: item }));
  console.log(options);

  var defaultOptions = cardLabels.map((item, i) => ({
    value: item,
    label: item,
  }));

  const handleChange = (selected) => {
    // console.log(selected);
    var updatedLabels = selected.map((item, key) => item.value);
    UpdateCard(updatedLabels, CardID);

    // console.log(updatedLabels);
  };

  return (
    <div>
      <Select
        options={options}
        onChange={handleChange}
        defaultValue={defaultOptions}
        isMulti
      />
    </div>
  );
}

export default Update;
