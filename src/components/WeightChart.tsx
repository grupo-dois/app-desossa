import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { ChartType } from "../types/ChartType";
import { Cattle as CattleType } from '../types/Cattle';
import theme from '../theme';

interface Props {
  data?: CattleType[],
}

const WeightChart: React.FC<Props> = (props) => {
  const { data } = props;
  const [chartData, setChartData] = useState<ChartType>({
    labels: [] ,
    datasets: [
      {
        label: "",
        data: [],
        backgroundColor: [],
        borderColor: "",
        borderWidth: 0,
      }
    ]
  });

  const calculateWeightWithFleshExtraction = (cattles: CattleType[]) => {
    const dateSum = {} as { [key: string]: any };
    cattles.forEach(cattle => {
      const fleshDate = `${cattle.data_desossa.toString().slice(6,8)}/${cattle.data_desossa.toString().slice(4,6)}`
      if (!dateSum[fleshDate]) {
        dateSum[fleshDate] = cattle.peso_carcaca;
      } else {
        dateSum[fleshDate] += cattle.peso_carcaca;
      }
    });
    return dateSum;
  }

  useEffect(() => {
    if (data) {
      const calculatedData = calculateWeightWithFleshExtraction(data)
      setChartData({
        labels: Object.keys(calculatedData),
        datasets: [
          {
            label: "Peso (kg)",
            data: Object.values(calculatedData),
            backgroundColor: [
              theme.palette.primary.main,
            ],
            borderColor: theme.palette.secondary.main,
            borderWidth: 2
          }
        ]
      })
    }
  }, [data])

  return (
    <div className="home-chart w-1/2 m-auto mt-16">
      <Bar
        data={chartData}
        options={{
          plugins: {
            legend: {
              display: false
            }
          }
        }}
      />
    </div>
  )
}

export default WeightChart;
