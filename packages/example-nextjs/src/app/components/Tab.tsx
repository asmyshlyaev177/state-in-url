export const Tag = ({
  text,
  onClick,
  active,
}: {
  text: string;
  onClick: () => void;
  active: boolean;
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1 text-grey-600 rounded-full
        text-sm font-medium hover:bg-orange-100
        focus:outline-none focus:ring-2 focus:ring-offset-2
        focus:ring-orange-500
        ${
          active
            ? `bg-orange-100 text-orange-800
             hover:text-white hover:bg-[#ad6400]`
            : 'bg-gray-100 '
        }`}
    >
      {text}
    </button>
  );
};
