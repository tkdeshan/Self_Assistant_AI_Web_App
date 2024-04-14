import React, { useState } from "react";
import TextBox from "../TextBox";
import { PencilIcon } from "@heroicons/react/24/outline";

function Chat(props) {
  const [chat, setChat] = useState("");

  return (
    <div className="flex flex-col px-10">
      <div className="flex flex-col">
        <div>Chat 1</div>
        <div>Chat 2</div>
        <div>Chat 3</div>
      </div>
      <div className="">
        <TextBox
          type="text"
          Icon={PencilIcon}
          value={chat}
          setValue={setChat}
        />
      </div>
    </div>
  );
}

export default Chat;
