import { useState } from 'react';
import Stepper from '../components/Stepper';
import DashboardLayout from '../layouts/DashboardLayout';
import { styles } from '../utils/helper';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import CardWrapper from '../components/Cards/CardWrapper';

export default function EditApplication() {
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);

  return (
    <DashboardLayout>
      <div className={`${styles.headers_additional} h-24`}>
        <Stepper
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          complete={complete}
          setComplete={setComplete}
        />
      </div>
      <div className={`${styles.container_dashboard}`}>
        <div className=" flex flex-col gap-4">
          <div className="justify-between items-center flex">
            <button
              onClick={() =>
                setCurrentStep((prev) => (prev === 1 ? prev : prev - 1))
              }
              type="button"
              className={`${styles.button_back_rounded}`}>
              <FaArrowLeft />
            </button>
            <h1 className="text-2xl font-bold">Alamat</h1>
            <button
              onClick={() =>
                setCurrentStep((prev) =>
                  prev === currentStep.length ? prev : prev + 1
                )
              }
              type="button"
              className={`${styles.button_back_rounded}`}>
              <FaArrowRight />
            </button>
          </div>
          <CardWrapper>
            <div className="w-full h-full flex flex-col gap-4">
              <FormApplicatioFilled
                titleForm={'Data KTP'}
                labelOptional={'Domisili Sesuai KTP'}
                optional={true}
                textButton={'CLEAR'}
              />
              <FormApplicatioFilled
                titleForm={'Data DOMISILI'}
                labelOptional={'Alamat Tempat Bekerja/ Perusahaan Sesuai KTP'}
                optional={true}
                textButton={'CLEAR'}
              />
              <FormApplicatioFilled
                titleForm={'Data Alamat Tempat Kerja'}
                optional={false}
                textButton={'UPDATE'}
              />
            </div>
          </CardWrapper>
        </div>
      </div>
    </DashboardLayout>
  );
}

function FormApplicatioWrapper({
  children,
  title,
  label,
  optional = false,
  textButton,
}) {
  return (
    <div className="w-full h-full ">
      <div className="border-[1px] border-slate-300">
        <h1 className="py-2 px-4 bg-[#005274] text-white">{title}</h1>
        <div className="flex gap-4 p-4">{children}</div>
      </div>

      <div className="flex justify-between pt-4">
        {optional ? (
          <div className="flex gap-2 items-center ">
            <input type="checkbox" className={styles.checkbox} />
            <label htmlFor="" className="flex items-center font-bold">
              {label}
            </label>
          </div>
        ) : (
          <div>{''}</div>
        )}

        <button
          type="button"
          className={`rounded uppercase text-white py-2 px-4  ${
            textButton === 'UPDATE' ? 'bg-[#005274]' : 'bg-[#FF0000]'
          }`}>
          {textButton}
        </button>
      </div>
    </div>
  );
}

function FormApplicatioFilled({
  titleForm,
  labelOptional,
  optional,
  textButton,
}) {
  const optionSelectProvinsi = [
    { name: 'Provinsi', value: 'provinsi' },
    { name: 'DKI Jakarta', value: 'dki jakarta' },
    { name: 'Jawa Barat', value: 'jawa barat' },
    { name: 'Jawa Tengah', value: 'jawa tengah' },
  ];

  const optionSelectKecamatan = [
    { name: 'Kecamatan', value: 'kecamatan' },
    { name: 'Tanah Abang', value: 'tanah abang' },
    { name: 'Sukabumi', value: 'sukabumi' },
    { name: 'Cengkareng', value: 'cengkareng' },
    { name: 'Jatinegara', value: 'jatinegara' },
    { name: 'Pondok Cabe', value: 'pondok cabe' },
  ];

  const optionSelectKabupaten = [
    { name: 'Kabupaten', value: 'kabupaten' },
    { name: 'Bekasi', value: 'bekasi' },
    { name: 'Bogor', value: 'bogor' },
    { name: 'Depok', value: 'depok' },
    { name: 'Tangerang', value: 'tangerang' },
    { name: 'Tangerang Selatan', value: 'tangerang selatan' },
  ];

  const optionSelectKelurahan = [
    {
      name: 'Kelurahan',
      value: 'kelurahan',
    },
    {
      name: 'Kebon Melati',
      value: 'kebon melati',
    },
    {
      name: 'Cempaka Putih',
      value: 'cempaka putih',
    },
    {
      name: 'Menteng',
      value: 'menteng',
    },
  ];

  return (
    <FormApplicatioWrapper
      title={titleForm}
      label={labelOptional}
      optional={optional}
      textButton={textButton}>
      <div className="flex flex-col gap-2 w-full">
        <InputForm
          label="Alamat Lengkap (Jalan, komplek, RT/RW)"
          type="text"
          placeholder="--Isi Alamat Lengkap--"
        />
        <InputForm
          label="Provinsi"
          type={'select'}
          selectName={'provinsi'}
          optionSelect={optionSelectProvinsi}
        />
        <InputForm
          label="Kecamatan"
          type="select"
          selectName="kecamatan"
          optionSelect={optionSelectKecamatan}
        />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <InputForm
          label="Kode POS"
          type="text"
          placeholder="--Isi Kode POS--"
        />
        <InputForm
          label="Kabupaten/Kota"
          type="select"
          selectName={'kabupaten'}
          optionSelect={optionSelectKabupaten}
        />
        <InputForm
          label="Kelurahan"
          type="select"
          selectName={'kelurahan'}
          optionSelect={optionSelectKelurahan}
        />
      </div>
    </FormApplicatioWrapper>
  );
}

function InputForm({ label, type, selectName, optionSelect = [], ...rest }) {
  const styleReforming = `${styles.input_edit} bg-transparent`;
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      {type === 'text' ? (
        <input type={type} {...rest} className={styleReforming} />
      ) : (
        <select name={selectName} id={selectName} className={styleReforming}>
          {optionSelect?.map((item) => (
            <option key={item.value} value={item.value}>
              {item.name}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}
