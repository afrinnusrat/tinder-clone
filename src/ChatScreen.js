import React, { useState } from "react";
import "./ChatScreen.css";

function ChatScreen() {
  const [messages, setMessages] = useState([
    {
      name: "Ellen",
      image:
        "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ed560d07fe4060006bbce1e%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D422%26cropX2%3D1300%26cropY1%3D0%26cropY2%3D879",
      message: "Whats up 💌",
    },
    {
      name: "Ellen",
      image:
        "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ed560d07fe4060006bbce1e%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D422%26cropX2%3D1300%26cropY1%3D0%26cropY2%3D879",
      message: "Whats it going 💏 ",
    },
    {
      message: "Mantul",
    },
  ]);

  return (
    <div className="chatScreen">
      <p>YOU MATCHED WITH ELLEN ON 10/08/20</p>
    </div>
  );
}

export default ChatScreen;
