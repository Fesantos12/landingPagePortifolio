import Ilustration from '../assets/Illustration1.svg';

export const HeroSection = () => {
  return (
    <div className="w-full  flex flex-row py-24 px-36 items-center justify-around gap-28 bg-neutral-silver max-lg:flex-col">
      <div className="h-full flex flex-col items-start justify-center gap-8">
        <div className="flex flex-col">
          <div className="text-6xl font-semibold leading-20 text-neutral-Dgray">
            Lessons and insights
          </div>
          <div className="text-6xl font-semibold leading-20 text-primary-primary">
            from 8 years
          </div>
        </div>
        <div className="font-normal leading-6 text-neutral-gray">
          Where to grow your business as a photographer: site or social media?
        </div>
        <button className="w-32 h-14 bg-primary-primary rounded-sm text-neutral-white cursor-pointer hover:bg-colorShade1 transition-colors">
          Register
        </button>
      </div>
      <div className="h-full flex items-center justify-center">
        <img
          src={Ilustration}
          alt="An illustration of a man and a computer screen"
        />
      </div>
    </div>
  );
};
