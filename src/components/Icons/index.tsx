import {
  RiCloseFill,
  RiCloseCircleFill,
  RiHeartLine,
  RiHeartFill,
  RiSearch2Line,
  RiShoppingCart2Fill,
  RiShoppingBagFill,
} from 'react-icons/ri';

const Icons = {
  HeartLine: () => <RiHeartLine />,
  HeartFill: () => <RiHeartFill />,
  CartFill: () => <RiShoppingCart2Fill />,
  Search: () => <RiSearch2Line />,
  Close: () => <RiCloseFill />,
  Remove: () => <RiCloseCircleFill />,
  Shop: () => <RiShoppingBagFill />,
};

export default Icons;
