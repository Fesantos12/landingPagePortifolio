import { CommunityUpdatesCard } from './CommunityUpdatesCard';

import Image1 from '../assets/cardCommunityImg/image 1.png';
import Image2 from '../assets/cardCommunityImg/image 2.png';
import Image3 from '../assets/cardCommunityImg/image 3.png';

export const CommunityUpdates = () => {
  return (
    <div className="w-full py-20 px-36 flex flex-col items-center">
      <div className="flex flex-col gap-2 items-center w-1/2">
        <h2 className="text-4xl font-semibold leading-11 text-neutral-Dgray">
          Caring is the new marketing
        </h2>
        <h4 className="text-center font-normal leading-6 text-neutral-gray">
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who's joining the community, read about
          how our community are increasing their membership income and lot's
          more.
        </h4>
      </div>
      <div className="w-full flex items-center justify-around max-2xl:flex-col max-2xl:gap-14">
        <CommunityUpdatesCard
          img={Image1}
          textH2="Creating Streamlined Safeguarding Processes with OneRen"
          textAlt="A asian woman using a computer in your house"
        />
        <CommunityUpdatesCard
          img={Image2}
          textH2="What are your safeguarding responsibilities and how can you manage them?"
          textAlt="A person's arm using a computer at a desk"
        />
        <CommunityUpdatesCard
          img={Image3}
          textH2="Revamping the Membership Model with Triathlon Australia"
          textAlt="another person's arm using a computer at a desk"
        />
      </div>
    </div>
  );
};
