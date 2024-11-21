import { useNavigate, useParams } from 'react-router-dom';
import DashboardLayout from '../../layouts/DashboardLayout';
import { styles } from '../../utils/helper';
import { FaArrowLeft, FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';
import CardWrapper from '../../components/Cards/CardWrapper';
import useGet from '../../hooks/useGet';

export default function BankProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data } = useGet(`${import.meta.env.VITE_SERVER_URL}/products/${id}`);

  return (
    <DashboardLayout>
      <div className={`${styles.headers_additional} justify-between px-4`}>
        <div className="flex gap-4 items-center">
          <button
            onClick={() => navigate(-1)}
            type="button"
            className={styles.button_back_rounded}>
            <FaArrowLeft />
          </button>
          <p className="md:text-2xl">Bank Product Detail</p>
        </div>

        <div className="flex md:gap-4 gap-1 items-center md:w-1/3">
          <button
            type="button"
            onClick={() => navigate(`/bank-product/edit/${id}`)}
            className="p-2 md:px-4 md:text-lg text-xl w-full text-white bg-[#005274] rounded flex items-center gap-2">
            <FaRegEdit />{' '}
            <span className="md:block hidden md:text-sm">Edit Product</span>
          </button>
          <button
            type="button"
            className="py-2 px-4 md:text-lg text-xl w-full text-white bg-[#FF0000] rounded flex items-center gap-2">
            <FaRegTrashAlt />{' '}
            <span className="md:block hidden md:text-sm md:w-full">
              Delete Product
            </span>
          </button>
        </div>
      </div>
      <div className={styles.container_dashboard}>
        <CardWrapper>
          <div className="flex flex-col gap-4">
            <InputField label="Bank" type="text" />
            <InputField label="Nama Product" type="text" />
            <InputField label="Jaminan" type="text" />
            <InputField label="Target Market" type="text" />
            <InputField label="Komisi" type="text" />
            <InputField label="Appraisal" type="text" />
            <InputField label="Floating" type="text" />
            <InputField label="Loan to Value" type="text" />
            <InputField label="Penalty Fee" type="text" />
            <InputField label="Interest Rate" type="text" />
            <InputField label="Fix Rate %" type="text" />
            <InputField label="Fix Rate (year)" type="text" />
            <InputField label="Max Tenor (year)" type="text" />
            <InputField label="Keterangan" type="text" />
            <InputField label="URL" type="text" />
          </div>
        </CardWrapper>
      </div>
    </DashboardLayout>
  );
}

function InputField(prop) {
  const { label, type, ...rest } = prop;
  return (
    <div className="flex items-center gap-2">
      <label htmlFor="" className="w-48 font-bold">
        {label}{' '}
      </label>
      <input
        disabled
        type={type}
        {...rest}
        className="w-full p-2 rounded-lg bg-[#c1c1c1]/50 text-white placeholder:text-white focus:outline-none border-none"
      />
    </div>
  );
}