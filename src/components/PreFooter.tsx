import RightArrowWhite from '../assets/RightArrowWhite.svg';

export const PreFooter = () => {
  return (
    <div className="w-full py-8 px-36 flex flex-col items-center gap-8 bg-neutral-silver">
      <h2 className="text-6xl font-semibold leading-20 text-neutral-black text-center max-md:text-5xl">
        Pellentesque suscipit <br /> fringilla libero eu.
      </h2>
      <button className="w-44 h-14 bg-primary-primary text-neutral-white font-medium leading-6 flex items-center justify-center gap-2 rounded-sm cursor-pointer hover:bg-colorShade1 transition-colors">
        Get a Demo <img src={RightArrowWhite} alt="A Arrow turn to right" />
      </button>
    </div>
  );
};
