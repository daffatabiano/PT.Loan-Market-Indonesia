import DashboardLayout from '../../layouts/DashboardLayout';
import { useState } from 'react';
import { cardSummaryBank } from '../../datas/card-summary.data';
import HeaderProductBank from '../../components/Cards/HeaderProductBank';
import useGet from '../../hooks/useGet';
import { styles } from '../../utils/helper';
import { CardProduct } from '../../components/Cards/CardProduct';
import CardSummaryBank from '../../components/Cards/CardSummaryBank';
import { TabsProduct } from '../../components/TabsProduct';

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
        <div className={styles.container_dashboard}>
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
