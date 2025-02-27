import Rafiki from '../assets/rafiki.svg';
import { LearnMoreButton } from './LearnMoreButton';

export const Unlock = () => {
  return (
    <div className="w-full py-20 px-36 flex items-center justify-around max-md:flex-col">
      <div className="flex flex-1/2 items-center justify-center">
        <img
          src={Rafiki}
          alt="An image of a man and a woman looking at a card"
        />
      </div>
      <div className="flex flex-1/2 flex-col gap-8 items-start">
        <h2 className="text-4xl font-semibold leading-11 text-neutral-Dgray">
          The unseen of spending three <br /> years at Pixelgrade
        </h2>
        <h4 className="text-sm font-normal leading-5 text-neutral-gray">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          justo ipsum. Sed accumsan quam vitae est varius fringilla.
          Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
          tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
          Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
          elementum pulvinar odio.
        </h4>
        <LearnMoreButton />
      </div>
    </div>
  );
};
