import BankProductDetail from '../pages/bank-products/[id]';
import BankProduct from '../pages/bank-products/BankProduct';
import EditProduct from '../pages/bank-products/edit/EditProduct';
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
    path: '/bank-product/:id',
    element: <BankProductDetail />,
  },
  {
    path: '/bank-product/edit/:id',
    element: <EditProduct />,
  },
  {
    path: '*',
    element: <Dashboard />,
  },
];
