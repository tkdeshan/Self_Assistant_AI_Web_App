import React, { useState, useEffect } from "react";
import TextArea from "../TextArea";
import { PencilIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import Button from "../Button";
const { messageTest } = require("../../constants");

function Chat() {
  const [chat, setChat] = useState(null);
  const [chatInput, setChatInput] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchChats();
  }, []);

  const fetchChats = async () => {
    try {
      const email = localStorage.getItem("email");
      const response = await axios.get(`https://self-assistant-ai-web-app-backend.vercel.app/chat`, {
        params: { email: email },
      });

      setChat(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch chats:", error);
    }
  };

  const handleSend = async () => {
    try {
      const email = localStorage.getItem("email");
      setLoading(true);
      let response = null;
      if (chat) {
        response = await axios.put(`https://self-assistant-ai-web-app-backend.vercel.app/chat`, {
          email: email,
          message: chat.message,
          response: [...chat.response, chatInput],
        });
      } else {
        response = await axios.post(`https://self-assistant-ai-web-app-backend.vercel.app/chat`, {
          email: email,
          message: [messageTest.initial],
          response: [chatInput],
        });
      }
      if (response) {
        setChatInput("");
        fetchChats();
        setLoading(false);
      }
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
        {!chat && (
          <div className="flex justify-start">
            <div className="rounded-lg p-2 bg-green-200 text-left mr-2 w-2/3">{messageTest.initial}</div>
          </div>
        )}

        {chat && (
          <div className="flex flex-col gap-4 w-full">
            {chat.message &&
              chat.response &&
              chat.message.map((message, index) => (
                <div key={index}>
                  <div className={"flex justify-start"}>
                    <div className={"rounded-lg p-2 bg-green-200 w-2/3"}>
                      {message.includes("\n**") ? (
                        message
                          .split("\n")
                          .map((line, idx) => (
                            <div key={idx}>
                              {line.trim().startsWith("**") ? <strong>{line.trim()}</strong> : line.trim()}
                            </div>
                          ))
                      ) : (
                        <div>{message}</div>
                      )}
                    </div>
                  </div>
                  {chat.response[index] && (
                    <div className="flex justify-end mt-5">
                      <div className={"rounded-lg p-2 bg-blue-200 w-2/3"}>{chat.response[index]}</div>
                    </div>
                  )}
                </div>
              ))}
          </div>
        )}
      </div>

      {loading ? <div className="mt-10 text-blue-500">Waiting...</div> : null}

      <form
        className="flex flex-row mt-auto"
        onSubmit={async (e) => {
          e.preventDefault();
          await handleSend();
        }}>
        <TextArea
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
