import React, { useEffect, useState } from 'react';
import CattleTable from './CattleTable'
import { getAllCattle } from "../services/cattle"
import { Cattle as CattleType } from '../types/Cattle'
import {
  InputLabel, Select, MenuItem, FormControl,
} from '@mui/material';

interface Props {
}

enum ReportsType {
  CattleData = 'CATTLE',
  WeightData = 'WEIGHT',
  PerformanceData = 'PERFORMANCE',
}

const Reports: React.FC<Props> = () => {
  const [allCattleData, setAllCattleData] = useState<CattleType[]>();
  const [reportType, setReportType] = useState<ReportsType>();

  const loadCattleData = async () => {
    const allCattle = await getAllCattle();
    setAllCattleData(allCattle);
  }

  const showSelectedReport = (reportType: ReportsType) => {
    const reportsScreens = new Map();
    reportsScreens.set(ReportsType.CattleData, loadCattleData());

    return reportsScreens.get(reportType);
  }

  useEffect(() => {
    if (reportType) {
      showSelectedReport(reportType);
    }
  }, [reportType])

  const handleChange = (event: { [key: string]: any }) => {
    setReportType(event.target.value as ReportsType);
  };

  return (
    <div>
      <div className="m-8">
        <h1 className="text-xl mt-5 ml-2 mb-2">Selecione um relatório</h1>
        <FormControl sx={{ m: 1, minWidth: 320 }}>
          <InputLabel id="report-label">Relatório</InputLabel>
          <Select
            labelId="report-label"
            value={reportType}
            label="Relatório"
            onChange={handleChange}
          >
            <MenuItem value={ReportsType.CattleData}>Abates</MenuItem>
            <MenuItem value={ReportsType.WeightData}>Peso de carcaças</MenuItem>
            <MenuItem value={ReportsType.PerformanceData}>Performance por responsável</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div>
        {reportType === ReportsType.CattleData && (
          <CattleTable data={allCattleData} />
        )}
        {reportType === ReportsType.WeightData && (
          <div>
            Weight
          </div>
        )}
        {reportType === ReportsType.PerformanceData && (
          <div>
            Performance
          </div>
        )}
      </div>
    </div>
  )
}

export default Reports;
