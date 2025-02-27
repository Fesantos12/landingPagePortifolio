import Pana from '../assets/pana.svg';

import { LearnMoreButton } from './LearnMoreButton';

export const Calender = () => {
  return (
    <div className="py-20 px-36 flex items-center justify-between max-md:flex-col max-md:gap-12">
      <div className="w-full flex items-center justify-center">
        <img src={Pana} alt="A widframe of a woman using one big smartphone" />
      </div>
      <div className="w-full flex flex-col justify-center gap-8">
        <h2 className="text-4xl font-semibold leading-11 text-neutral-Dgray">
          How to design your site footer like <br /> we did
        </h2>
        <h4 className="text-sm font-normal leading-5 text-neutral-gray">
          Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
          augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
          elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
          habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
          facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet
          urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur
          quis massa. Praesent felis est, finibus et nisi ac, hendrerit
          venenatis libero. Donec consectetur faucibus ipsum id gravida.
        </h4>
        <LearnMoreButton />
      </div>
    </div>
  );
};
