import Logo1 from '../assets/iconsLogo/Logo1.svg';
import Logo2 from '../assets/iconsLogo/Logo2.svg';
import Logo3 from '../assets/iconsLogo/Logo3.svg';
import Logo4 from '../assets/iconsLogo/Logo4.svg';
import Logo5 from '../assets/iconsLogo/Logo5.svg';
import Logo6 from '../assets/iconsLogo/Logo6.svg';
import Logo7 from '../assets/iconsLogo/Logo7.svg';

export const Clients = () => {
  return (
    <div className="w-full h-72 py-10 px-36 flex flex-col items-center justify-center gap-10 max-sm:block max-sm:mb-14">
      <div className="w-full flex flex-col gap-2 justify-center items-center">
        <h2 className="text-4xl font-semibold text-neutral-Dgray leading-11 max-sm:text-2xl">
          Our Clients
        </h2>
        <h4 className="font-normal leading-6 text-neutral-gray max-sm:text-sm">
          We have been working with some Fortune 500+ clients
        </h4>
      </div>
      <div className="w-full flex justify-around max-sm:flex-col max-sm:items-center">
        <img
          src={Logo1}
          alt="A icon of a generic logo"
          className="animate-bounce max-sm:w-8"
          style={{ animationDelay: '0ms' }}
        />
        <img
          src={Logo2}
          alt="A icon of a generic logo"
          className="animate-bounce max-sm:w-8"
          style={{ animationDelay: '200ms' }}
        />
        <img
          src={Logo3}
          alt="A icon of a generic logo"
          className="animate-bounce max-sm:w-8"
          style={{ animationDelay: '400ms' }}
        />
        <img
          src={Logo4}
          alt="A icon of a generic logo"
          className="animate-bounce max-sm:w-8"
          style={{ animationDelay: '600ms' }}
        />
        <img
          src={Logo5}
          alt="A icon of a generic logo"
          className="animate-bounce max-sm:w-8"
          style={{ animationDelay: '800ms' }}
        />
        <img
          src={Logo6}
          alt="A icon of a generic logo"
          className="animate-bounce max-sm:w-8"
          style={{ animationDelay: '1000ms' }}
        />
        <img
          src={Logo7}
          alt="A icon of a generic logo"
          className="animate-bounce max-sm:w-8"
          style={{ animationDelay: '1200ms' }}
        />
      </div>
    </div>
  );
};
