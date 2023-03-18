import React from "react";
import "./card.scss";
import { AiOutlinePlusCircle as Assign } from "react-icons/ai";

import Update from "./update/Update";

function Card({ item, adminLabels, activeCard, setActiveCard, UpdateCard }) {
  const isUpdating = activeCard && activeCard.id === item.id;

  return (
    <div className="card">
      <div className="image">
        <img src={item.img} alt="animal" />
      </div>
      {!isUpdating && (
        <div className="description">
          <div className="labels">
            {item.labels.map((label, key) => {
              if (adminLabels.includes(label)) {
                return <p key={key}>{label}</p>;
              }
              return <></>;
            })}
          </div>
          <div className="buttons">
            <div
              className="button"
              onClick={() => {
                setActiveCard({ id: item.id });
              }}
            >
              <Assign />
            </div>
          </div>
        </div>
      )}
      {isUpdating && (
        <div className="update">
          <Update
            adminLabels={adminLabels}
            cardLabels={item.labels}
            UpdateCard={UpdateCard}
            CardID={item.id}
          />
          <div className="buttons">
            <div className="button" onClick={() => setActiveCard(null)}>
              Update
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;
