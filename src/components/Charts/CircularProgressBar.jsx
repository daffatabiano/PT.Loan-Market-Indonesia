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

const CircularProgressBar = ({ subtitle, percentage }) => {
  const data = {
    datasets: [
      {
        data: [percentage, 280 - percentage],
        backgroundColor: ['#007bff', '#e0e0e0'],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: '80%',
    rotation: 0,
    circumference: 360,
    plugins: {
      tooltip: { enabled: true },
    },
  };

  return (
    <div className="text-center relative flex flex-col place-items-center">
      <div className="relative w-[200px]">
        <Doughnut data={data} options={options} />
        <h1 className="absolute text-2xl font-bold top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {percentage}%
        </h1>
      </div>
      <h1 className="font pt-4 text-[#4F5051] w-full">{subtitle}</h1>
    </div>
  );
};

export default CircularProgressBar;
