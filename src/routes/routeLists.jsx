import BankProduct from '../pages/BankProduct';
import Dashboard from '../pages/Dashboard';

export const routeLists = [
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/bank-product',
    element: <BankProduct />,
  },
  {
    path: '*',
    element: <Dashboard />,
  },
];
