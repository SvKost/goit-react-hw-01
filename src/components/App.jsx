// import { useState } from "react";
import "./App.css";
import userData from "../userData.json";
import friendsData from "../friendsData.json";
import Profile from "./Profile";
import FriendList from "./FriendList";

function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />

      <FriendList friends={friendsData} />
    </>
  );
}

export default App;
