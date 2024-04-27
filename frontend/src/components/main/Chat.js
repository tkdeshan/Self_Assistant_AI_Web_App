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
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/chat`, {
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
        response = await axios.put(`${process.env.REACT_APP_BASE_URL}/chat`, {
          email: email,
          message: chat.message,
          response: [...chat.response, chatInput],
        });
      } else {
        response = await axios.post(`${process.env.REACT_APP_BASE_URL}/chat`, {
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
            {chat.message.map((message, index) => (
              <div key={index}>
                <div className={"flex justify-start"}>
                  <div className={"rounded-lg p-2 bg-green-200 w-2/3"}>
                    {message.includes("\n**") ? (
                      message.split("\n").map((line, idx) => {
                        if (line.startsWith("**")) {
                          return (
                            <div key={idx}>
                              <strong>{line.trim().replace(/\*+/g, "")}</strong>
                              <br />
                            </div>
                          );
                        } else if (line.startsWith("*")) {
                          return (
                            <div key={idx}>
                              {line.substring(0, 2)}
                              <strong>{line.substring(2, line.lastIndexOf(":") + 1)}</strong>
                              {line.substring(line.lastIndexOf(":") + 1)}
                              <br />
                            </div>
                          );
                        } else {
                          return (
                            <div key={idx}>
                              {line.trim()}
                              <br />
                            </div>
                          );
                        }
                      })
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
