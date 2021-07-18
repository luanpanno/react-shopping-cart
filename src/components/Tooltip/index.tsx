import ReactTooltip from 'react-tooltip';

interface Props {
  id: string;
}

const Tooltip: React.FC<Props> = ({ id }) => {
  return (
    <ReactTooltip
      id={id}
      place="top"
      effect="solid"
      delayShow={250}
      multiline
    />
  );
};

export default Tooltip;
