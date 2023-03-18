import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import CreatableSelect from "react-select/creatable";
import "./Admin.scss";

function Admin({ adminLabels, setAdminLabels, user, admin }) {
  var options = adminLabels.map((item, i) => ({ value: item, label: item }));
  const navigate = useNavigate();
  useEffect(() => {
    if (!admin || !user) {
      navigate("/");
    }
  }, [admin, navigate, user]);

  const handleChange = (selected) => {
    var updatedLabels = selected.map((item, key) => item.value);
    setAdminLabels(updatedLabels);
  };

  return (
    <div className="admin">
      <div className="admin-container">
        <div className="heading">
          <h2>Manage Tags</h2>
        </div>
        <div className="manage-tags">
          <CreatableSelect
            defaultValue={options}
            placeholder={"Type new tag."}
            isMulti
            onChange={handleChange}
          />
        </div>
        <div className="current-tags">
          <div className="heading">
            <h2>Current Tags</h2>
          </div>
          {adminLabels.map((label, key) => (
            <p key={key}>{label}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Admin;
