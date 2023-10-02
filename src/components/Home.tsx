import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { subDays, format } from "date-fns";
import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { getCattleCarcassExtractionByDay } from "../services/cattle"
import { ChartType } from "../types/ChartType"
import { InputLabel, Select, MenuItem } from '@mui/material';
import theme from '../theme';

Chart.register(CategoryScale);
 
export default function Home() {
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

  const [chartInterval, setChartInterval] = useState<number>(7)

  useEffect(() => {
    async function getCattleDataForChart() {
      const cattleByDay = await getCattleCarcassExtractionByDay();

      const dataChart = []
      for (let i = 0; i < chartInterval; i++) {
        const currentDayData = cattleByDay.filter(
          (cat: { [key: string]: any }) => cat.data_abate.toString() === format(subDays(new Date(), i), 'yyyyMMdd')
        );

        dataChart.push({
          date: format(subDays(new Date(), i), 'dd/MM'),
          count: currentDayData[0]?._count?._all,
        })
      }

      setChartData({
        labels: dataChart.map((cattle: { [key: string]: any }) => cattle.date),
        datasets: [
          {
            label: "Abates Diários",
            data: dataChart.map((data: any) => data.count),
            backgroundColor: [
              theme.palette.primary.main,
            ],
            borderColor: theme.palette.secondary.main,
            borderWidth: 2
          }
        ]
      })
    }

    getCattleDataForChart();
  }, [chartInterval]);

  const handleChange = (event: { [key: string]: any }) => {
    setChartInterval(event.target.value as number);
  };
 
  return (
    <>
      <div className="m-12 flex justify-between">
        <h1 className="text-xl mt-8">Quantidade de Abates Diários</h1>
        <div>
          <InputLabel>Intervalo</InputLabel>
          <Select
            value={chartInterval}
            label="Intervalo"
            onChange={handleChange}
          >
            <MenuItem value={7}>7 dias</MenuItem>
            <MenuItem value={15}>15 dias</MenuItem>
            <MenuItem value={30}>30 dias</MenuItem>
          </Select>
        </div>
      </div>
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
    </>
  );
}