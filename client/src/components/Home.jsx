import { useState } from "react";
import { useToggleState } from "../hooks";
import Popup from "./Popup";
import GameForm from "./GameForm";
import GameList from "./GameList";
import Button from "./Button";
import Heading from "./Heading";
import "../styles/Home.css";

const Home = () => {
  const [isPopupActive, toggleIsPopupActive] = useToggleState(false);

  return (
    <div>
      <Heading>Home</Heading>
      <GameList />
      <Button onClick={toggleIsPopupActive} className={"Home-create"}>
        Create
      </Button>
      <Popup show={isPopupActive}>
        <GameForm togglePopup={toggleIsPopupActive} />
      </Popup>
    </div>
  );
};

export default Home;
