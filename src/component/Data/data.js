import cat1 from "./../../Assets/RoleImages/images/cat1.jpg";
import cat2 from "./../../Assets/RoleImages/images/cat2.jpg";
import cat3 from "./../../Assets/RoleImages/images/cat3.jpg";
import cat4 from "./../../Assets/RoleImages/images/cat4.jpg";
import cat5 from "./../../Assets/RoleImages/images/cat5.jpg";

import dog1 from "./../../Assets/RoleImages/images/dog1.jpg";
import dog2 from "./../../Assets/RoleImages/images/dog2.jpg";
import dog3 from "./../../Assets/RoleImages/images/dog3.jpg";
import dog4 from "./../../Assets/RoleImages/images/dog4.jpg";

import horse1 from "./../../Assets/RoleImages/images/horse1.jpg";
import horse2 from "./../../Assets/RoleImages/images/horse2.jpg";
import horse3 from "./../../Assets/RoleImages/images/horse3.jpg";

export const getData = () => {
  return [
    {
      id: "1",
      img: cat1,
      labels: ["animal", "cat", "cute"],
    },
    {
      id: "2",
      img: cat2,
      labels: ["cat", "animal"],
    },
    {
      id: "3",
      img: cat3,
      labels: ["cat", "animal"],
    },
    {
      id: "4",
      img: cat4,
      labels: ["cat", "animal"],
    },
    {
      id: "5",
      img: cat5,
      labels: ["cat"],
    },

    {
      id: "6",
      img: dog1,
      labels: ["dog", "animal"],
    },

    {
      id: "7",
      img: dog2,
      labels: ["animal", "dog"],
    },

    {
      id: "8",
      img: dog3,
      labels: ["animal", "dog"],
    },

    {
      id: "9",
      img: dog4,
      labels: ["animal", "dog"],
    },

    {
      id: "10",
      img: horse1,
      labels: ["animal", "horse"],
    },

    {
      id: "11",
      img: horse2,
      labels: ["animal", "horse"],
    },

    {
      id: "12",
      img: horse3,
      labels: ["animal", "horse"],
    },
  ];
};
