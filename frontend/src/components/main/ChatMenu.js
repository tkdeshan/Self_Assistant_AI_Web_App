import React, { useState } from "react";
import Button from "../Button";
import ChatGuide from "./chat/ChatGuide";
import ChatTest from "./chat/ChatTest";

const ChatMenu = () => {
  const [chatType, setChatType] = useState(null);
  const [isChatVisible, setIsChatVisible] = useState(false);

  return (
    <div className="py-4 px-10 overflow-auto h-full">
      {!chatType && (
        <div className="flex flex-row gap-10 mb-2">
          <div className="w-1/2">
            <div className="h-40 border border-gray-500 p-4 mb-5 rounded-md shadow-md bg-green-300 bg-opacity-80">
              <p className="text-black text-md text-justify">
                Do you want career guidance?
                <br />
                <br />
                "We provide personalized career guidance and advice based on your interests and skills with AI
                technology. Additionally, we provide recommendations to help you navigate and excel in your
                career path."
              </p>
            </div>

            <Button
              type="button"
              name="Career Guidance"
              onClick={() => {
                setChatType("guidance");
                setIsChatVisible(true);
              }}
            />
          </div>
          <div className="w-1/2">
            <div className="h-40 border border-gray-500 p-4 mb-5 rounded-md shadow-md bg-green-300 bg-opacity-80">
              <p className="text-black text-md text-justify">
                Do you want to test your knowledge level in skills?
                <br />
                <br />
                "We provide a facility to check your knowledge level through a chat interface with AI
                technology."
              </p>
            </div>

            <Button
              type="button"
              name="knowledge Testing"
              onClick={() => {
                setChatType("testing");
                setIsChatVisible(true);
              }}
            />
          </div>
        </div>
      )}

      {chatType === "guidance" && (
        <ChatGuide
          visible={isChatVisible}
          onClose={() => {
            setIsChatVisible(false);
            setChatType(null);
          }}
        />
      )}
      {chatType === "testing" && (
        <ChatTest
          visible={isChatVisible}
          onClose={() => {
            setIsChatVisible(false);
            setChatType(null);
          }}
        />
      )}
    </div>
  );
};

export default ChatMenu;
