import Image from "next/image";

interface CardTailwindProps {
  nickname: string;
  logos: {
    href: string;
  };
}

const CardTailwind = (props: CardTailwindProps): JSX.Element => {
  const { nickname, logos } = props;
  return (
    <div className=" w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 m-[20px] px-4 pt-4">
      <div className="flex flex-col items-center pb-10">
        <Image
          className="w-24 h-24 mb-3 rounded-full shadow-lg"
          src={logos.href}
          alt="Coffee grinder"
          width={100}
          height={100}
        />

        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {nickname}
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Visual Designer
        </span>
      </div>
    </div>
  );
};
export default CardTailwind;
