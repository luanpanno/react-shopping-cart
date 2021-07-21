import {
  RiCloseFill,
  RiCloseCircleFill,
  RiHeartLine,
  RiHeartFill,
  RiSearch2Line,
  RiShoppingCart2Fill,
} from 'react-icons/ri';

const Icons = {
  HeartLine: () => <RiHeartLine />,
  HeartFill: () => <RiHeartFill />,
  CartFill: () => <RiShoppingCart2Fill />,
  Search: () => <RiSearch2Line />,
  Close: () => <RiCloseFill />,
  Remove: () => <RiCloseCircleFill />,
};

export default Icons;
