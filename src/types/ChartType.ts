export type ChartType = {
  labels: string[];
  datasets: DatasetsType[];
};

type DatasetsType = {
  label: string;
  data: number[];
  backgroundColor: string[];
  borderColor: string;
  borderWidth: number;
};
