import { CommunityCard } from './CommunityCard';
import membershipIcon from '../assets/membershipIcon.svg';
import associationsIcon from '../assets/associationsIcon.svg';
import clubsIcon from '../assets/clubsIcon.svg';

export const Community = () => {
  return (
    <div className="w-full py-10 px-36 flex flex-col gap-7">
      <div className="w-ful flex flex-col items-center gap-2">
        <h2 className="text-4xl font-semibold leading-11 text-neutral-Dgray text-center">
          Manage your entire community <br /> in a single system
        </h2>
        <h4 className="text-md font-normal leading-6 text-neutral-gray">
          Who is Nextcent suitable for?
        </h4>
      </div>
      <div className="w-full flex items-center justify-around max-xl:flex-col">
        <CommunityCard
          icon={membershipIcon}
          h3Text="Membership Organisations"
          h5Text="Our membership management software provides full automation of membership renewals and payments"
          altText="A icon of a three people in formation"
        />

        <CommunityCard
          icon={associationsIcon}
          h3Text="National Associations"
          h5Text="Our membership management software provides full automation of membership renewals and payments"
          altText="A icon of a three buildings side by side"
        />
        <CommunityCard
          icon={clubsIcon}
          h3Text="Clubs And Groups"
          h5Text="Our membership management software provides full automation of membership renewals and payments"
          altText="A icon of three hands forming a circle in a green color"
        />
      </div>
    </div>
  );
};
