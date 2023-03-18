import React from "react";
import Select from "react-select";

function Filter({ adminLabels, data, setFilteredData }) {
  var options = adminLabels.map((item, i) => ({ value: item, label: item }));

  const handleChange = (selected) => {
    // console.log(selected);
    var filteredLabels = selected.map((item, key) => item.value);
    // console.log(filteredLabels);
    if (filteredLabels.length === 0) {
      setFilteredData(data);
      return;
    }
    var filteredData = [];

    for (let i = 0; i < filteredLabels.length; i++) {
      const iterationData = data.filter((item) => {
        let tags = item.labels.some((label) => {
          // console.log(filteredLabels[i], label);
          return label === filteredLabels[i];
        });
        return tags;
      });
      filteredData = [...filteredData, ...iterationData];
      filteredData = [...Array.from(new Set([...filteredData]))];
      setFilteredData(filteredData);
      //   console.log(filteredData);
    }
  };
  return (
    <div>
      <Select options={options} onChange={handleChange} isMulti />
    </div>
  );
}

export default Filter;
