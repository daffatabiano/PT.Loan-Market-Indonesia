import DashboardLayout from '../layouts/DashboardLayout';
import { useState } from 'react';
import CardWrapper from '../components/Cards/CardWrapper';
import { cardSummaryBank } from '../datas/card-summary.data';
import { TiHome } from 'react-icons/ti';
import { FaRegChartBar, FaUserTie } from 'react-icons/fa';
import { CiClock2, CiCreditCard1, CiUser } from 'react-icons/ci';
import { BsBuilding, BsCoin, BsPiggyBank } from 'react-icons/bs';
import HeaderProductBank from '../components/Cards/HeaderProductBank';
import { IoMdStar } from 'react-icons/io';
import { PiClockCountdownBold } from 'react-icons/pi';
import { IoShieldCheckmark } from 'react-icons/io5';
import { mandiri } from '../assets';

export default function BankProduct() {
  const [section, setSection] = useState('bank');
  return (
    <DashboardLayout>
      <div className="w-full ps-[22%] h-16 bg-white flex justify-center">
        <TabsProduct setSection={setSection} section={section} />
      </div>
      {section === 'bank' ? (
        <div className="ps-[22%] pt-4 pe-4 w-full h-full flex flex-col justify-center">
          <div className="grid grid-cols-5 gap-4 justify-center items-center">
            {cardSummaryBank.map((item) => (
              <CardSummaryBank
                key={item.title}
                title={item.name}
                icon={item.icon}
              />
            ))}
          </div>
          <HeaderProductBank />
          <div className="pt-4">
            <CardProduct />
          </div>
        </div>
      ) : (
        section === 'developer' && (
          <div className="ps-[22%] w-full h-full flex justify-center">
            <h1>Developer</h1>
          </div>
        )
      )}
    </DashboardLayout>
  );
}

function CardProduct() {
  return (
    <CardWrapper>
      <div className="flex gap-2 w-full justify-between px-2">
        <div className="flex flex-col gap-2 justify-center w-1/3 ">
          <img src={mandiri} alt="" className="w-40 m-auto" />
          <div className="flex gap-4 justify-between">
            <div className="flex flex-col text-center gap-2">
              <p>Rating :</p>
              <div className="flex gap-1 jusify-center ">
                {new Array(5).fill(0).map((i) => (
                  <i key={i}>
                    <IoMdStar className="text-2xl text-[#d9d9d9] " />
                  </i>
                ))}
              </div>
              <p>14 reviews</p>
            </div>
            <hr className="w-[1px] h-full bg-[#d9d9d9] " />
            <div className="flex flex-col text-center gap-2">
              <p>User :</p>
              <p>220</p>
              <p>User Yearly</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-primary">
            <span className="text-slate-600">{'Mandiri'}</span> Bunga Special
            Tengah Imlek 2023
          </h1>

          <div className="flex gap-4">
            <div className="flex-col flex gap-2">
              <p className="flex items-center gap-2">
                <FaRegChartBar /> Fix Rate Year : 3.88
              </p>
              <p className="flex items-center gap-2">
                <CiClock2 /> Max Tenor : 12
              </p>
              <p className="flex items-center gap-2">
                <PiClockCountdownBold /> Loan To Value: 1
              </p>
            </div>
            <div className="flex-col flex gap-2">
              <p className="flex items-center gap-2">
                <IoShieldCheckmark /> Jaminan : Ruko, Rukan, Rumah
              </p>
              <p className="flex items-center gap-2">
                <CiUser /> Target Karyawan : pengusaha
              </p>
              <p className="flex items-center gap-2">
                <BsCoin />
                Komisi: 1
              </p>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="drop-shadow-lg w-24 h-10 my-auto text-primary rounded bg-white">
          Detail
        </button>
      </div>
    </CardWrapper>
  );
}

function CardSummaryBank({ title, icon }) {
  const icons = {
    kpr: <TiHome />,
    refinancing: <FaUserTie />,
    kmu: <CiCreditCard1 />,
    deposito: <BsPiggyBank />,
    takeover: <BsBuilding />,
  };
  return (
    <CardWrapper>
      <div className="flex flex-col gap-6 text-slate-600 justify-center items-center">
        <p className="text-6xl">{icons[icon]}</p>
        <p className="text-center">{title}</p>
      </div>
    </CardWrapper>
  );
}

function TabsProduct({ section, setSection }) {
  return (
    <div className="w-full flex gap-4 justify-center items-end">
      <button
        type="button"
        onClick={() => setSection('bank')}
        className={` text-2xl w-36 pb-4 ${
          section === 'bank' && 'border-primary border-b-4 '
        } bg-transparent`}>
        Bank
      </button>
      <button
        type="button"
        onClick={() => setSection('developer')}
        className={` text-2xl w-36 pb-4 ${
          section === 'developer' && 'border-primary border-b-4 '
        } bg-transparent`}>
        Developer
      </button>
    </div>
  );
}
