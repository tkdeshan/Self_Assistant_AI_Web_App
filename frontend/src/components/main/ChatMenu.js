import React, { useState } from "react";
import Button from "../Button";
import ChatGuide from "./chat/ChatGuide";
import ChatTest from "./chat/ChatTest";

const ChatMenu = () => {
  const [chatType, setChatType] = useState(null);

  return (
    <div className="py-4 px-10 overflow-auto h-full">
      <div className="flex flex-row gap-10 mb-2">
        <div className="w-1/2">
          <Button type="button" name="Career Guidence" onClick={() => setChatType("guidance")} />
        </div>
        <div className="w-1/2">
          <Button type="button" name="knowledge Testing" onClick={() => setChatType("testing")} />
        </div>
      </div>

      {chatType === "guidance" && (
        <div>
          <div className="flex justify-center">
            <h1 className="text-blue-500 font-bold tracking-wider text-xl">Get Career Guidence</h1>
          </div>
          <ChatGuide />
        </div>
      )}
      {chatType === "testing" && (
        <div>
          <div className="flex justify-center">
            <h1 className="text-blue-500 font-bold tracking-wider text-xl">Knowledge Level Testing</h1>
          </div>
          <ChatTest />
        </div>
      )}
    </div>
  );
};

export default ChatMenu;
