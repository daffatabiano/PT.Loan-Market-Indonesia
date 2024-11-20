import CardWrapper from '../components/Cards/CardWrapper';
import DashboardLayout from '../layouts/DashboardLayout';
import { cardSummaryData } from '../datas/card-summary.data';
import { FaRegEdit } from 'react-icons/fa';
import CardSummaryInfo from '../components/Cards/CardSummaryInfo';
import BarChart from '../components/Charts/BankChart';
import CircularProgressBar from '../components/Charts/CircularProgressBar';
import TimelineComponent from '../components/Timelines/TimelineComponent';

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="flex gap-4 md:ps-[22%] ps-4 pt-8 flex-col md:flex-row xl:gap-8 pe-4">
        <div className=" flex flex-col gap-8">
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
            <div className="flex gap-4 md:flex-row flex-col">
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

          <CardWrapper>
            <h1 className="text-2xl font-bold text-center pb-16 pt-4">
              Top 5 Bank Approval Tinggi
            </h1>

            <div className="w-full flex pb-8 justify-center items-center place-items-center">
              <BarChart />
            </div>
          </CardWrapper>
        </div>

        <CardWrapper>
          <TimelineComponent />
        </CardWrapper>
      </div>
    </DashboardLayout>
  );
}
