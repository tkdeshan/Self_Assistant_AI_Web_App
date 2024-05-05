import React, { useState, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const Chart = ({ type, chartData }) => {
  const [chartConfig, setChartConfig] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (type === "column") {
      const summaries = chartData.map((item) => item.summary);
      const summaryData = summaries.map((summary, index) => {
        const [skill, level] = summary.split(" : ");
        let x = 0;
        if (level === "Beginner") {
          x = 1;
        } else if (level === "Intermediate") {
          x = 2;
        } else if (level === "Advanced") {
          x = 3;
        } else if (level === "Expert") {
          x = 4;
        }

        return { name: skill, y: x };
      });

      setData(summaryData);
    }

    const chartConfig = {
      chart: {
        type: type,
      },
      xAxis: {
        xAxis: {
          type: "category",
        },
        title: {
          text: null,
        },

        min: 0,
        max: 5,
        scrollbar: {
          enabled: true,
        },
        tickLength: 0,
      },
      yAxis: {
        title: {
          text: null,
        },
      },

      series: [
        {
          name: "Skills",
          colorByPoint: true,
          data: data,
        },
      ],
    };

    setChartConfig(chartConfig);

    // eslint-disable-next-line
  }, [chartData, type]);

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={chartConfig} />
    </div>
  );
};

export default Chart;
