import React, { useState, useEffect } from "react";
import TextBox from "../TextBox";
import { PencilIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import Button from "../Button";

function Chat() {
  const [chats, setChats] = useState([]);
  const [chatInput, setChatInput] = useState("");

  useEffect(() => {
    async function fetchChats() {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/chat/661bd6dc3fa4ae8bdd9f7654`);
        setChats(response.data.chats);
      } catch (error) {
        console.error("Failed to fetch chats:", error);
      }
    }

    fetchChats();
  }, []);

  const handleSend = async () => {
    try {
      await axios.post(`${process.env.REACT_APP_BASE_URL}/chat`, {
        userId: "661bd6dc3fa4ae8bdd9f7654",
        message: chatInput,
      });

      setChatInput("");
    } catch (error) {
      console.error("Failed to send chat:", error);
    }
  };

  return (
    <div className="flex flex-col px-10 mt-5">
      <div className="flex flex-col gap-4">
        {chats.map((chat, index) => (
          <div key={index} className="flex flex-col gap-4 w-full">
            <div className="flex justify-end">
              <div className="rounded-lg p-2 bg-green-200 text-right mr-2 w-1/3">{chat.message}</div>
            </div>
            {chat.response && (
              <div className="flex justify-start">
                <div className="rounded-lg p-2 bg-blue-200 w-1/3">{chat.response}</div>
              </div>
            )}
          </div>
        ))}
      </div>

      <form className="flex flex-row mt-10" onSubmit={handleSend}>
        <TextBox
          type="text"
          Icon={PencilIcon}
          value={chatInput}
          setValue={setChatInput}
          placeholder="Type your message..."
          required={true}
        />
        <div className="w-20">
          <Button type="submit" name="Send" />
        </div>
      </form>
    </div>
  );
}

export default Chat;
