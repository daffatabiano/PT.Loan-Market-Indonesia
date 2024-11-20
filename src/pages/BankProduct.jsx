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
import { cimb, commonwealth, mandiri, mnc, ocbc, panin, uob } from '../assets';
import useGet from '../hooks/useGet';

export default function BankProduct() {
  const [section, setSection] = useState('bank');
  const { data, loading, error } = useGet(
    `${import.meta.env.VITE_SERVER_URL}/products`
  );

  console.log(data);

  return (
    <DashboardLayout>
      <div className="w-full md:ps-[22%] h-16 bg-white flex justify-center">
        <TabsProduct setSection={setSection} section={section} />
      </div>
      {section === 'bank' ? (
        <div className="md:ps-[22%] xs:ps-4 pt-4 xs:pe-4 px-2 w-full h-full flex flex-col justify-center">
          <div className="grid md:grid-cols-5 grid-cols-3 md:gap-6 gap-2 mx-auto justify-center items-center">
            {cardSummaryBank.map((item) => (
              <CardSummaryBank
                key={item.title}
                title={item.name}
                icon={item.icon}
              />
            ))}
          </div>
          <HeaderProductBank />
          <div className="pt-4 flex flex-col gap-4">
            {data.map((item) => (
              <CardProduct key={item.id} {...item} />
            ))}
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

function CardProduct(prop) {
  const imagePath = {
    mandiri: mandiri,
    panin: panin,
    MNC: mnc,
    commonwealth: commonwealth,
    'OCBC NISP': ocbc,
    UOB: uob,
    'CIMB Niaga': cimb,
  };

  const {
    bank,
    produk,
    rating,
    review,
    user,
    fix_rate,
    max_tenor,
    loan,
    jaminan,
    target,
    komisi,
  } = prop;

  return (
    <CardWrapper>
      <div className="flex gap-4 w-full md:justify-between place-items-center  px-2 md:h-48 md:flex-row flex-col">
        <div className="flex flex-col gap-2 justify-center w-1/3 ">
          <img
            src={imagePath[bank]}
            alt={`bank-${bank}-logo`}
            className="w-40 m-auto"
          />
          <div className="flex gap-4 justify-between sm:flex-row flex-col">
            <div className="flex flex-col text-center gap-2 items-center">
              <p>Rating :</p>
              <div className="flex gap-1 jusify-center">
                {new Array(5).fill(0).map((_, i) => (
                  <i key={i}>
                    <IoMdStar
                      className={`text-2xl ${
                        i < rating ? 'text-primary' : 'text-[#d9d9d9] '
                      }`}
                    />
                  </i>
                ))}
              </div>
              <p>{review} reviews</p>
            </div>

            <hr className="md:w-[2px] w-full h-[2px] md:h-24 bg-[#d9d9d9]" />

            <div className="flex flex-col text-center gap-2">
              <p>User :</p>
              <p>{user}</p>
              <p>User Yearly</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 justify-center">
          <h1 className="font-bold text-primary text-2xl">
            <span className="text-slate-600 capitalize">{bank}</span> {produk}
          </h1>

          <div className="flex gap-4">
            <div className="flex-col flex gap-2">
              <p className="flex items-center gap-2">
                <FaRegChartBar /> Fix Rate Year : {fix_rate}%
              </p>
              <p className="flex items-center gap-2">
                <CiClock2 /> Max Tenor : {max_tenor}
              </p>
              <p className="flex items-center gap-2">
                <PiClockCountdownBold /> Loan To Value: {loan}
              </p>
            </div>
            <div className="flex-col flex gap-2">
              <p className="flex items-center gap-2">
                <IoShieldCheckmark /> Jaminan : {jaminan?.map((j) => `${j}, `)}
              </p>
              <p className="flex items-center gap-2">
                <CiUser /> Target Karyawan : {target}
              </p>
              <p className="flex items-center gap-2">
                <BsCoin />
                Komisi: {komisi}
              </p>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="drop-shadow-lg md:w-24 w-full md:h-10 h-14 my-auto text-primary rounded bg-white">
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
        <p className="text-center hidden sm:block">{title}</p>
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
        className={` md:text-2xl text-lg w-36 pb-4 ${
          section === 'bank' && 'border-primary border-b-4 '
        } bg-transparent`}>
        Bank
      </button>
      <button
        type="button"
        onClick={() => setSection('developer')}
        className={` md:text-2xl text-lg w-36 pb-4 ${
          section === 'developer' && 'border-primary border-b-4 '
        } bg-transparent`}>
        Developer
      </button>
    </div>
  );
}
