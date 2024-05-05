import React, { useState, useEffect } from "react";
import axios from "axios";
import Chart from "../Chart";

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
    <div className="flex flex-row gap-4 px-8 py-4 h-screen overflow-auto" style={{ maxHeight: "100%" }}>
      <div className="flex flex-col w-1/2 p-4 bg-green-200 rounded-md shadow-md overflow-auto">
        <h1 className="text-gray-500 font-bold tracking-wider underline text-xl text-center">
          Career Guidance Analysis
        </h1>

        {careerAnnalys?.length > 0 ? (
          <div className="flex flex-col ml-4 mt-2">
            {careerAnnalys?.map((item, idx) => (
              <div>
                <div className="flex flex-row gap-10 mt-2 mb-5" key={idx}>
                  <div>
                    <div>
                      {new Date(item?.date).toLocaleDateString(undefined, { day: "numeric", month: "long" })},{" "}
                      {new Date(item?.date).toLocaleTimeString(undefined, {
                        hour: "numeric",
                        minute: "numeric",
                        hour12: true,
                      })}
                    </div>
                  </div>
                  <div className="">
                    {item.summary.split("\n").map((line, index) => {
                      if (line.startsWith("**")) {
                        return (
                          <div key={index}>
                            <strong>{line.trim().replace(/\*+/g, "")}</strong>
                            <br />
                          </div>
                        );
                      } else {
                        return (
                          <div className="" key={index}>
                            {line}
                          </div>
                        );
                      }
                    })}
                  </div>
                </div>
                <Chart type="pie" chartData={careerAnnalys} />
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-1">Please first go to chat and follow the steps...</div>
        )}
      </div>

      <div className="flex flex-col w-1/2 p-4 bg-green-200 rounded-md shadow-md overflow-auto">
        <h1 className="text-gray-500 font-bold tracking-wider underline text-xl text-center">
          Knowledge Test Analysis
        </h1>

        {testAnnalys?.length > 0 ? (
          <div className="flex flex-col ml-4 mt-2">
            {testAnnalys?.map((item, idx) => (
              <div className="flex flex-row gap-10" key={idx}>
                <div>
                  <div>
                    {new Date(item?.date).toLocaleDateString(undefined, { day: "numeric", month: "long" })},{" "}
                    {new Date(item?.date).toLocaleTimeString(undefined, {
                      hour: "numeric",
                      minute: "numeric",
                      hour12: true,
                    })}
                  </div>
                </div>
                <div>{item?.summary}</div>
              </div>
            ))}
            <div className="mt-4">
              <Chart type="column" chartData={testAnnalys} />
            </div>
          </div>
        ) : (
          <div className="mt-1">Please first go to chat and follow the steps...</div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
