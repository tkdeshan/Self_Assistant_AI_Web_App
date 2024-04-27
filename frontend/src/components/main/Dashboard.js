import React, { useState, useEffect } from "react";
import axios from "axios";

function Dashboard(props) {
  const [guideAnnalys, setGuideAnnalys] = useState(null);

  useEffect(() => {
    fetchChats();
  }, []);

  const fetchChats = async () => {
    try {
      const email = localStorage.getItem("email");
      const response = await axios.get(`https://self-assistant-ai-web-app-backend.vercel.app/chat-guide`, {
        params: { email: email },
      });

      setGuideAnnalys(response.data?.annalys);
    } catch (error) {
      console.error("Failed to fetch chats:", error);
    }
  };

  return (
    <div className="flex flex-col p-8 h-screen overflow-auto" style={{ maxHeight: "100%" }}>
      <div>
        <div className="flex justify-center mb-5">
          <h1 className="text-blue-500 font-bold tracking-wider underline text-xl">
            Career Guidance Analysis
          </h1>
        </div>
        <div>
          {guideAnnalys
            ? guideAnnalys.split("\n").map((line, idx) => {
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
            : "Please first go to chat and follow the steps"}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
