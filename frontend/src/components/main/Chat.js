import React, { useState, useEffect } from "react";
import TextBox from "../TextBox";
import { PencilIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import Button from "../Button";

function Chat() {
  const [chats, setChats] = useState([]);
  const [chatInput, setChatInput] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchChats();
  }, []);

  const fetchChats = async () => {
    try {
      const email = localStorage.getItem("email");
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/chat`, {
        params: { email: email },
      });

      setChats(response.data.chats);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch chats:", error);
    }
  };

  const handleSend = async () => {
    try {
      const email = localStorage.getItem("email");
      setLoading(true);
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/chat`, {
        email: email,
        message: chatInput,
      });
      setChatInput("");
      fetchChats();
      setLoading(false);
      return response.data;
    } catch (error) {
      console.error("Failed to send chat:", error);
      return null;
    }
  };

  return (
    <div
      className="flex flex-col px-10 mt-5 h-screen overflow-hidden mx-auto pb-5"
      style={{ maxHeight: "95%" }}>
      <div className="flex flex-col gap-4 overflow-y-auto mb-10">
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

      {loading ? <div className="mt-10 text-blue-500">Waiting...</div> : null}

      <form
        className="flex flex-row mt-auto"
        onSubmit={async (e) => {
          e.preventDefault();
          await handleSend();
        }}>
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
