interface TrashCanProps {
  className: string;
}
const TrashCan = ({ className }: TrashCanProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M10.5 9H9v9h1.5V9Z"></path>
      <path d="M15 9h-1.5v9H15V9Z"></path>
      <path d="M3 4.5V6h1.5v15A1.5 1.5 0 0 0 6 22.5h12a1.5 1.5 0 0 0 1.5-1.5V6H21V4.5H3ZM6 21V6h12v15H6Z"></path>
      <path d="M15 1.5H9V3h6V1.5Z"></path>
    </svg>
  );
};

export default TrashCan;
