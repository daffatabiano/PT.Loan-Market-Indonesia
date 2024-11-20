import { IoMdStar } from 'react-icons/io';
import {
  cimb,
  commonwealth,
  mandiri,
  mnc,
  ocbc,
  panin,
  uob,
} from '../../assets';
import CardWrapper from './CardWrapper';
import { FaRegChartBar } from 'react-icons/fa';
import { CiClock2, CiUser } from 'react-icons/ci';
import { PiClockCountdownBold } from 'react-icons/pi';
import { IoShieldCheckmark } from 'react-icons/io5';
import { BsCoin } from 'react-icons/bs';

export function CardProduct(prop) {
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
          <h1 className="font-bold text-primary text-2xl text-center md:text-left">
            <span className="text-slate-600 capitalize">{bank}</span> {produk}
          </h1>

          <div className="flex md:flex-row flex-col gap-4">
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
