import React, { useState, useEffect } from "react";
import axios from "axios";

function Dashboard() {
  const [careerAnnalys, setCareerAnnalys] = useState(null);
  const [testAnnalys, setTestAnnalys] = useState(null);

  useEffect(() => {
    fetchAnnalys();
  }, []);

  const fetchAnnalys = async () => {
    try {
      const email = localStorage.getItem("email");
      const Annalys = await axios.get(`${process.env.REACT_APP_BASE_URL}/annalys`, {
        params: { email: email },
      });

      setCareerAnnalys(Annalys.data?.careerAnnalys);
      setTestAnnalys(Annalys.data?.testAnnalys);
    } catch (error) {
      console.error("Failed to fetch chats:", error);
    }
  };

  return (
    <div className="flex flex-col p-8 h-screen overflow-auto" style={{ maxHeight: "100%" }}>
      {!careerAnnalys && !testAnnalys && <div>Please first go to chat and follow the steps...</div>}
      {careerAnnalys && (
        <div>
          <div className="flex justify-center mb-5">
            <h1 className="text-blue-500 font-bold tracking-wider underline text-xl">
              Career Guidance Analysis
            </h1>
          </div>
          <div>
            {careerAnnalys.map((item, idx) => (
              <div key={idx}>
                {item?.summary}
                {item.date}
              </div>
            ))}
          </div>
        </div>
      )}

      {testAnnalys && (
        <div>
          <div className="flex justify-center mb-5">
            <h1 className="text-blue-500 font-bold tracking-wider underline text-xl">
              Knowledge Test Analysis
            </h1>
          </div>
          <div>
            {testAnnalys.map((item, idx) => (
              <div key={idx}>
                {item?.summary}
                {item?.date}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
