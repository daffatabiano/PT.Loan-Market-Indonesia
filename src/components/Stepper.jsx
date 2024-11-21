import { TiTick } from 'react-icons/ti';
import '../styles/tailwind.css';
import { GrShareRounded } from 'react-icons/gr';
const Stepper = ({ currentStep, setCurrentStep, complete, setComplete }) => {
  const steps = [
    'Pinjaman ',
    'Pekerjaan',
    'Alamat',
    'Informasi Paket',
    'Informasi Tambahan',
    'Upload Dokumen',
    'Review',
    'Pilihan Produk & Bank',
    'Bank Officer',
    'Surat Keterangan',
    'PDF CPA',
    'Summary',
  ];

  return (
    <>
      <div className="flex justify-between w-full">
        {steps?.map((step, i) => (
          <div
            key={i}
            className={`step-item ${currentStep === i + 1 && 'active'} ${
              (i + 1 < currentStep || complete) && 'complete'
            } `}>
            <div
              onClick={() => {
                currentStep === steps.length
                  ? setComplete(true)
                  : setCurrentStep(i + 1);
              }}
              className="step relative mb-10">
              {i + 1 < currentStep || complete ? <GrShareRounded /> : ''}
              <p className="text-gray-500 text-[10px] w-full h-full text-center flex justify-center items-start absolute bottom-[-25px]">
                {step}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* {!complete && (
        <button
          className="btn"
          onClick={() => {
            currentStep === steps.length
              ? setComplete(true)
              : setCurrentStep((prev) => prev + 1);
          }}>
          {currentStep === steps.length ? 'Finish' : 'Next'}
        </button>
      )} */}
    </>
  );
};

export default Stepper;
