import Iconbookings from '../assets/achievementsLogo/IconBookings.svg';
import IconClubs from '../assets/achievementsLogo/IconClubs.png';
import IconMembers from '../assets/achievementsLogo/IconMembers.png';
import IconPayments from '../assets/achievementsLogo/IconPayments.svg';

import { AchievementsCounts } from './AchievementsCounts';

export const Achievements = () => {
  return (
    <div className="w-full px-36 py-16 bg-neutral-silver flex items-center justify-around max-xl:flex-col max-xl:gap-14">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col">
          <h2 className="text-4xl font-semibold leading-11 text-neutral-Dgray">
            Helping a local
          </h2>
          <h2 className="text-4xl font-semibold leading-11 text-primary-primary">
            business reinvent itself
          </h2>
        </div>
        <h5 className="font-normal leading-6 text-textGray900">
          We reached here with our hard work and dedication
        </h5>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-10 max-md:flex max-md:flex-col max-md:items-start">
        <AchievementsCounts
          icon={IconMembers}
          numberCount="2,245,341"
          nameCount="Members"
          altCount="A members icon with two persons in green color"
        />
        <AchievementsCounts
          icon={IconClubs}
          numberCount="46,328"
          nameCount="clubs"
          altCount="A icon of three hands forming a circle in a green color"
        />
        <AchievementsCounts
          icon={Iconbookings}
          numberCount="828,867"
          nameCount="Event Bookings"
          altCount="A icon of one hand making a click with a finger in a green color"
        />
        <AchievementsCounts
          icon={IconPayments}
          numberCount="1,926,436"
          nameCount="Payments"
          altCount="A icon of a card in a green color"
        />
      </div>
    </div>
  );
};
