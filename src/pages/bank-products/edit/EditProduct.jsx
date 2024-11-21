import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../../../layouts/DashboardLayout';
import { styles } from '../../../utils/helper';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import CardWrapper from '../../../components/Cards/CardWrapper';
import { useState } from 'react';
import { CiCalendar } from 'react-icons/ci';
import { IoIosSave } from 'react-icons/io';

export default function EditProduct() {
  const [check, setCheck] = useState(false);
  const navigate = useNavigate();
  const checkJaminan = {
    ruko: true,
    rumah: true,
    rukan: true,
    kendaraanPribadi: false,
    apartemen: false,
    sertifikatPerusahaan: false,
    slipGaji: false,
  };

  const checkTargetMarket = {
    pengusaha: true,
    professional: true,
    ASN: false,
    TNI: false,
    karyawan: true,
    milenial: false,
    POLRI: false,
    Lainnya: false,
  };

  return (
    <DashboardLayout>
      <div
        className={`${styles.headers_additional} ps-4 flex md:gap-6 gap-2 items-center`}>
        <div className="flex gap-4 items-center justify-start w-full">
          <button
            onClick={() => navigate(-1)}
            type="button"
            className="sm:text-3xl text-xl text-white bg-primary rounded-full p-2">
            <FaArrowLeft />
          </button>
          <p className="md:text-2xl">Edit Product</p>
        </div>
      </div>

      <div className={styles.container_dashboard}>
        <CardWrapper>
          <div className="flex gap-4 md:flex-row flex-col h-full ">
            <div className="flex flex-col w-full md:gap-4 gap-2">
              <InputEditWrapper label="Bank">
                <select name="bank" id="bank" className={styles.input_edit}>
                  <option value="mandiri">Mandiri</option>
                  <option value="OCBC">OCBC</option>
                  <option value="UOB">UOB</option>
                </select>
              </InputEditWrapper>

              <InputEditWrapper label="Jenis Product">
                <select
                  name="jenis_product"
                  id="jenis_product"
                  className={styles.input_edit}>
                  <option value="KPR_Secondary">
                    Kepemilikan Rumah Secondary (KPR Secondary)
                  </option>
                  <option value="KPR_Primary">
                    Kepemilikan Rumah Primary (KPR Primary)
                  </option>
                  <option value="KPR_Pernikahan">
                    Kepemilikan Rumah Pernikahan (KPR Pernikahan)
                  </option>
                </select>
              </InputEditWrapper>

              <InputEditWrapper
                checked={() => setCheck(!check)}
                label="Promotional Product">
                <DateRangePicker />
              </InputEditWrapper>

              <InputEditWrapper label="Jaminan">
                <CheckboxList checkItemsProps={checkJaminan} />
              </InputEditWrapper>

              <InputEditWrapper label="Target Market">
                <CheckboxList checkItemsProps={checkTargetMarket} />
              </InputEditWrapper>

              <InputEditWrapper label="Komisi">
                <AdjustableSettings />
              </InputEditWrapper>

              <InputEditWrapper label="Appraisal">
                <AdjustableSettings />
              </InputEditWrapper>

              <InputEditWrapper label="Floating">
                <AdjustableSettings />
              </InputEditWrapper>
            </div>

            <div className="flex flex-col w-full md:gap-4 gap-2">
              <InputEditWrapper label="Loan To Value">
                <AdjustableSettings />
              </InputEditWrapper>

              <InputEditWrapper label="Penalty Fee">
                <AdjustableSettings def={0} />
              </InputEditWrapper>

              <InputEditWrapper label="Interest Rate">
                <AdjustableSettings def={3.65} />
              </InputEditWrapper>

              <InputEditWrapper label="Fix Rate">
                <AdjustableSettings def={3.88} />
              </InputEditWrapper>

              <InputEditWrapper label="Fix Rate (year)">
                <AdjustableSettings def={3} />
              </InputEditWrapper>

              <InputEditWrapper label="Max Tenor (year)">
                <AdjustableSettings def={12} />
              </InputEditWrapper>

              <InputEditWrapper label="Keterangan ">
                <input type="text" className={styles.input_edit} />
              </InputEditWrapper>

              <InputEditWrapper label="URL">
                <input type="text" className={styles.input_edit} />
              </InputEditWrapper>
            </div>
          </div>

          <button
            type="button"
            className="p-2 bg-[#005274] rounded text-white flex gap-2 items-center uppercase mt-4 md:mt-0 sm:w-1/5 w-full justify-center md:absolute bottom-4 right-4">
            <IoIosSave /> update
          </button>
        </CardWrapper>
      </div>
    </DashboardLayout>
  );
}

function CheckboxList({ checkItemsProps = {} }) {
  const [checkedItems, setCheckedItems] = useState(checkItemsProps);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckedItems((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  return (
    <div className="grid grid-cols-2">
      {Object.keys(checkedItems).map((item) => (
        <div key={item} className="flex items-center mb-2">
          <input
            type="checkbox"
            name={item}
            checked={checkedItems[item]}
            onChange={handleCheckboxChange}
            className={styles.checkbox}
          />
          <label htmlFor={item} className="capitalize">
            {item.replace(/([A-Z])/g, ' $1').toLowerCase()}
          </label>
        </div>
      ))}
    </div>
  );
}

function DateRangePicker() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  return (
    <div className="flex items-center sm:space-x-2 space-x-0 sm:text-md text-sm flex-wrap bg-slate-200 border border-slate-300 rounded-lg">
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        className="p-2 rounded bg-transparent border-none"
      />
      <span>
        <FaArrowRight className="text-slate-600" />
      </span>
      <input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        className="p-2 rounded bg-transparent border-none"
      />
      <button
        onClick={() => {
          setStartDate('');
          setEndDate('');
        }}
        className="p-2 bg-transparent text-slate-600 ">
        <CiCalendar />
      </button>
    </div>
  );
}

function InputEditWrapper(prop) {
  const { label, children, checked } = prop;

  return (
    <div className="flex flex-col">
      <label htmlFor={label}>
        {label === 'Promotional Product' && (
          <input type="checkbox" name="promotional_product" checked={checked} />
        )}{' '}
        {label}
      </label>
      {children}
    </div>
  );
}

const AdjustableSettings = ({ def = 1 }) => {
  const [loanToValue, setLoanToValue] = useState(def);

  return (
    <div className="p-4 w-full">
      <div className="flex items-center w-full">
        <button
          className="py-2 px-4 bg-primary text-white rounded"
          onClick={() => setLoanToValue(loanToValue - 1)}>
          -
        </button>
        <span className="p-2 w-full rounded border text-center">
          {loanToValue}%
        </span>
        <button
          className="py-2 px-4 bg-primary text-white rounded"
          onClick={() => setLoanToValue(loanToValue + 1)}>
          +
        </button>
      </div>
    </div>
  );
};
