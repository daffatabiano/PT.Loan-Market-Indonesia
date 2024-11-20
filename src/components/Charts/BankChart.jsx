import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const data = {
    labels: ['BRI', 'Bank 2', 'Bank 3', 'Bank 4', 'Bank 5'],
    datasets: [
      {
        label: 'Approval Rate',
        data: [30, 25, 20, 15, 10],
        backgroundColor: [
          '#4A3764',
          '#1FFFE1',
          '#51C4E9',
          '#146C94',
          '#6150C1',
        ],
        borderColor: ['#4A3764', '#1FFFE1', '#51C4E9', '#146C94', '#6150C1'],
        borderWidth: 1,
        spacing: 20,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    annotation: {
      annotations: data.labels.map((label, index) => ({
        type: 'label',
        xValue: index,
        yValue: data.datasets[0].data[index],
        backgroundColor: 'rgba(0,0,0,0.8)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 1,
        content: `${data.datasets[0].data[index]}% ${label}`,
        position: 'center',
        enabled: true,
      })),
    },
  };

  return (
    <div className="p-4 bg-white shadow-[0px_0px_20px_2px_rgba(0,0,0,0.1)] rounded-full justify-center items-center w-96 h-96 flex place-items-center">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default BarChart;
