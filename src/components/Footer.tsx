import LogoBranca from '../assets/LogoBranca.svg';

import SocialMedia1 from '../assets/Social Icons1.svg';
import SocialMedia2 from '../assets/Social Icons2.svg';
import SocialMedia3 from '../assets/Social Icons3.svg';
import SocialMedia4 from '../assets/Social Icons4.svg';

import Send from '../assets/send.svg';

export const Footer = () => {
  return (
    <div className="bg-neutral-black w-full flex items-center justify-around px-[10.313rem] py-16 gap-32 max-xl:flex-col">
      <div className=" flex flex-col gap-12">
        <img src={LogoBranca} alt="Nexcent Logo" />
        <div className="text-sm font-normal leading-5 text-neutral-silver flex flex-col gap-2">
          Copyright &copy; {new Date().getFullYear()} Unker. <br />
          <div>All rights reserved</div>
        </div>
        <div className="flex gap-4">
          <img src={SocialMedia1} alt="Instagram logo" />
          <img src={SocialMedia2} alt="dribbble logo" />
          <img src={SocialMedia3} alt="Twitter(X's) logo" />
          <img src={SocialMedia4} alt="Youtube Logo" />
        </div>
      </div>
      <div className="flex gap-24 items-start max-md:flex-col max-md:items-center">
        <div className="flex flex-col gap-6">
          <h3 className="text-xl font-semibold leading-7 text-neutral-white">
            Company
          </h3>
          <div className="flex flex-col gap-3">
            <a
              href="#"
              className="text-sm font-normal leading-5 text-neutral-silver"
            >
              About us
            </a>
            <a
              href="#"
              className="text-sm font-normal leading-5 text-neutral-silver"
            >
              Blog
            </a>
            <a
              href="#"
              className="text-sm font-normal leading-5 text-neutral-silver"
            >
              Contact us
            </a>
            <a
              href="#"
              className="text-sm font-normal leading-5 text-neutral-silver"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-sm font-normal leading-5 text-neutral-silver"
            >
              Testimonials
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h3 className="text-xl font-semibold leading-7 text-neutral-white">
            Support
          </h3>
          <div className="flex flex-col gap-3">
            <a
              href="#"
              className="text-sm font-normal leading-5 text-neutral-silver"
            >
              Help center
            </a>
            <a
              href="#"
              className="text-sm font-normal leading-5 text-neutral-silver"
            >
              Terms of service
            </a>
            <a
              href="#"
              className="text-sm font-normal leading-5 text-neutral-silver"
            >
              Legal
            </a>
            <a
              href="#"
              className="text-sm font-normal leading-5 text-neutral-silver"
            >
              Privacy policy
            </a>
            <a
              href="#"
              className="text-sm font-normal leading-5 text-neutral-silver"
            >
              Status
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start gap-8">
          <h3 className="text-xl font-semibold leading-7 text-neutral-white">
            Stay up to date
          </h3>
          <div className="w-64 h-10 flex items-center justify-around bg-neutral-white/20 rounded-lg">
            <input
              type="email"
              name="Email"
              id="Email"
              placeholder="Your email address"
              className="outline-0 text-textGray300 text-sm font-regular leading-5"
            />
            <img src={Send} alt="A send icon" className="opacity-100" />
          </div>
        </div>
      </div>
    </div>
  );
};
