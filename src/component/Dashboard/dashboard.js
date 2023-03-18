import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Filter from "./Filter/filter";
import { getData } from "../Data/data";
import Card from "./Card/Card";
import "./dashboard.scss";

function Dashboard({ adminLabels, user }) {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [activeCard, setActiveCard] = useState(null);
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    // console.log("once");
    setData(getData());
    setFilteredData(getData());
    if (!user) {
      navigate("/");
    }
  }, [navigate, user]);

  const UpdateCard = (newLabels, CardId) => {
    const updatedCards = data.map((card) => {
      if (card.id === CardId) {
        return { ...card, labels: newLabels };
      }
      return card;
    });
    setData(updatedCards);
    setFilteredData(updatedCards);
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-filter">
        <div className="head">Filter</div>
        <div className="comp">
          <Filter
            adminLabels={adminLabels}
            data={data}
            setFilteredData={setFilteredData}
          />
        </div>
      </div>
      <div className="dashboard-main">
        {filteredData.map((item, key = item.id) => (
          <div key={key}>
            <Card
              key={key}
              item={item}
              adminLabels={adminLabels}
              activeCard={activeCard}
              setActiveCard={setActiveCard}
              UpdateCard={UpdateCard}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
