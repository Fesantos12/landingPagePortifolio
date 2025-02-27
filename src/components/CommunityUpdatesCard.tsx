import RightArrow from '../assets/RightArrow.svg';

interface CommunityUpdatesCardProps {
  img: string;
  textH2: string;
  textAlt: string;
}

export const CommunityUpdatesCard = ({
  img,
  textH2,
  textAlt,
}: CommunityUpdatesCardProps) => {
  return (
    <div className="w-[23rem] h-[22rem] flex flex-col justify-center items-center relative max-md:w-64 max-md:h-72">
      <img src={img} alt={textAlt} className="relative" />
      <div className="w-[19rem] h-[11rem] bg-neutral-silver rounded-lg shadow-[0px_8px_16px_0px_rgba(171,190,209,1)] flex flex-col items-center gap-4 p-4 absolute bottom-0 translate-y-1/4">
        <h2 className="text-center text-xl font-semibold leading-7 text-neutral-gray">
          {textH2}
        </h2>
        <button className="flex items-center gap-2 text-xl font-semibold leading-7 text-primary-primary">
          Readmore <img src={RightArrow} alt="" />
        </button>
      </div>
    </div>
  );
};
