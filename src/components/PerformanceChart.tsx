import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import { Cattle as CattleType } from '../types/Cattle';
import { ChartType } from "../types/ChartType";
import theme from '../theme';

interface Props {
  data?: CattleType[],
}

const PerformanceChart: React.FC<Props> = (props) => {
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

  const calculateEmployeePerformance = (cattles: CattleType[]) => {
    const employeeSum = {} as { [key: string]: any };

    cattles.forEach(cattle => {
        const responsavelDesossa = cattle.responsavel_desossa;
        if (!employeeSum[responsavelDesossa]) {
            employeeSum[responsavelDesossa] = cattle.peso_carcaca;
        } else {
            employeeSum[responsavelDesossa] += cattle.peso_carcaca;
        }
    });

    return employeeSum;
  }

  useEffect(() => {
    if (data) {
      const calculatedData = calculateEmployeePerformance(data)
      setChartData({
        labels: Object.keys(calculatedData),
        datasets: [
          {
            label: "Peso extraído (kg)",
            data: Object.values(calculatedData),
            backgroundColor: [
              theme.palette.primary.main,
              theme.palette.secondary.main,
              '#3C1C08',
              '#a1a1aa',
              '#991b1b'
            ],
            borderColor: theme.palette.secondary.main,
            borderWidth: 2
          }
        ]
      })
    }
  }, [data])

  return (
    <div className="performance-chart w-96 m-auto mt-8">
      <Pie
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

export default PerformanceChart;
