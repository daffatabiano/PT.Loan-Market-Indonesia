import { CiBank, CiCircleQuestion } from 'react-icons/ci';
import { FaWhatsapp } from 'react-icons/fa';
import { IoLayersOutline, IoSpeedometerOutline } from 'react-icons/io5';
import { LuStickyNote } from 'react-icons/lu';
import { MdOutlineContactMail, MdOutlineShoppingBag } from 'react-icons/md';
import { RiChatSettingsLine, RiHome2Line } from 'react-icons/ri';

export const sidebarItems = [
  { name: 'dashboard', path: '/dashboard', icon: RiHome2Line },
  { name: 'contact', path: '/contact', icon: MdOutlineContactMail },
  { name: 'loan', path: '/loan', icon: LuStickyNote },
  {
    name: 'product',
    path: '',
    icon: MdOutlineShoppingBag,
    additional: [
      {
        name: 'bank product',
        path: '/bank-product',
      },
      {
        name: 'product',
        path: '/product',
      },
      {
        name: 'category product',
        path: '/category-product',
      },
    ],
  },
  { name: 'bank', path: '/bank', icon: CiBank },
  {
    name: 'credit scoring',
    path: '/credit-scoring',
    icon: IoSpeedometerOutline,
  },
  { name: "FAQ's", path: '/faqs', icon: CiCircleQuestion },
  { name: 'pipeline', path: '/pipeline', icon: IoLayersOutline },
  {
    name: 'pipeline developer',
    path: '/pipeline-developer',
    icon: IoLayersOutline,
  },
  {
    name: 'marketing tools',
    path: '/marketing-tools',
    icon: RiChatSettingsLine,
  },
  { name: 'whatsapp', path: '/whatsapp', icon: FaWhatsapp },
];
