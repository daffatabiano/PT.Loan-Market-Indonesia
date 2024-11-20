import CardWrapper from '../components/Cards/CardWrapper';
import DashboardLayout from '../layouts/DashboardLayout';
import { cardSummaryData } from '../datas/card-summary.data';
import { MdOutlineContactMail, MdOutlineShoppingBag } from 'react-icons/md';
import { CiBank } from 'react-icons/ci';
import { LuStickyNote } from 'react-icons/lu';
import { FaRegEdit } from 'react-icons/fa';
import { Chart as ChartJS, ArcElement } from 'chart.js';
ChartJS.register(ArcElement);
import { Doughnut } from 'react-chartjs-2';

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="pe-[22%] flex flex-col gap-8">
        <div className="grid grid-cols-4 gap-4">
          {cardSummaryData.map((item) => (
            <CardSummaryInfo
              key={item.name}
              icon={item.icon}
              text={item.name}
              total={item.total}
            />
          ))}
        </div>
        <CardWrapper>
          <button
            type="button"
            className="absolute top-4 right-4 p-1 rounded-md bg-transparent text-2xl border-2 border-primary text-primary">
            <FaRegEdit className="text-2xl" />
          </button>
          <div className="flex gap-4">
            <div className="flex flex-col place-items-center gap-2 w-full">
              <h1 className="text-xl font-bold uppercase text-center">
                pinjaman disetujui
              </h1>
              <div>
                <CircularProgressBar
                  subtitle="2/5 Pinjaman telah disetujui"
                  percentage={40}
                />
              </div>
            </div>
            <hr className="w-[2px] h-auto bg-[#d9d9d9]" />
            <div className="flex flex-col gap-2 w-full">
              <h1 className="text-xl font-bold uppercase text-center">
                target
              </h1>
              <CircularProgressBar
                subtitle="Rp14.000.000.000,00 / Rp5.000.000.000"
                percentage={280}
              />
            </div>
          </div>
        </CardWrapper>
      </div>
    </DashboardLayout>
  );
}

function CardSummaryInfo({ text, total }) {
  const icons = {
    contact: <MdOutlineContactMail />,
    loan: <LuStickyNote />,
    product: <MdOutlineShoppingBag />,
    bank: <CiBank />,
  };
  return (
    <CardWrapper>
      <div className="flex justify-around place-items-center">
        <p className="p-2 rounded-full text-2xl bg-primary/20 text-primary">
          {icons[text]}
        </p>
        <div className="flex flex-col gap-2 text-center font-bold  ">
          <p className="text-xl text-black uppercase">{text}</p>
          <p className="text-2xl font-bold text-primary">{total}</p>
        </div>
      </div>
    </CardWrapper>
  );
}

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
