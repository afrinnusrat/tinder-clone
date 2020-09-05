import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "The Professor",
      url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Premios_Goya_2020_-_%C3%81lvaro_Morte_%28Cropped%29.jpg/1200px-Premios_Goya_2020_-_%C3%81lvaro_Morte_%28Cropped%29.jpg",
    },
    {
      name: "Denver",
      url:
        "https://pley.today/__export/1585133520847/sites/mui/img/2020/03/25/jaime-lorente-la-casa-de-papel-kzxc--1248x698xabc.jpg_1276763261.jpg",
    },
  ]);

  // setPeople([...people, "wilden", "ali"]); // ini contoh cara pake useState

  return (
    <div>
      <h1>Ini Tinder Cards</h1>
      {people.map((person) => (
        <TinderCard
          className="swipe"
          key={person.name}
          preventSwipe={["up", "down"]}
        >
          <div
            style={{ backgroundImage: `url(${person.url})` }}
            className="card"
          >
            <h3>{person.name}</h3>
          </div>
        </TinderCard>
      ))}
    </div>
  );
}

export default TinderCards;
