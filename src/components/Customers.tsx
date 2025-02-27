import Frame from '../assets/image 9.png';
import LogoFundoVerde from '../assets/LogoFundoVerde.svg';
import Logo2 from '../assets/iconsLogo/Logo2.svg';
import Logo3 from '../assets/iconsLogo/Logo3.svg';
import Logo4 from '../assets/iconsLogo/Logo4.svg';
import Logo5 from '../assets/iconsLogo/Logo5.svg';
import Logo6 from '../assets/iconsLogo/Logo6.svg';
import RightArrow from '../assets/RightArrow.svg';

export const Customers = () => {
  return (
    <div className="w-full py-8 px-36 flex items-center justify-around gap-20 bg-neutral-silver max-xl:flex-col">
      <img src={Frame} alt="a image of something like a Tesla logo" />
      <div className="w-1/2 flex flex-col justify-center gap-8">
        <div className="flex flex-col justify-center gap-4">
          <h4 className="font-medium leading-6 text-neutral-gray">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique quam in, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit
            at ligula molestie, nec molestie mi blandit. Suspendisse cursus
            tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
            eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
            Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
            Quisque vulputate odio neque, eget efficitur libero condimentum id.
            Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </h4>
          <h2 className="text-xl font-semibold leading-7 text-primary-primary">
            Tim Smith
          </h2>
          <h4 className="font-normal leading-6 text-neutral-Lgray">
            British Dragon Boat Racing Association
          </h4>
        </div>
        <div className="flex gap-8 max-lg:flex-col max-lg:items-center">
          <img
            src={LogoFundoVerde}
            alt="A icon of a generic logo"
            className="max-lg:w-12"
          />
          <img
            src={Logo2}
            alt="A icon of a generic logo"
            className="max-lg:w-12"
          />
          <img
            src={Logo3}
            alt="A icon of a generic logo"
            className="max-lg:w-12"
          />
          <img
            src={Logo4}
            alt="A icon of a generic logo"
            className="max-lg:w-12"
          />
          <img
            src={Logo5}
            alt="A icon of a generic logo"
            className="max-lg:w-12"
          />
          <img
            src={Logo6}
            alt="A icon of a generic logo"
            className="max-lg:w-12"
          />
          <button className="group flex items-center gap-2 text-xl font-semibold leading-7 text-primary-primary cursor-pointer">
            Meet all customers{' '}
            <img
              src={RightArrow}
              alt=""
              className="transition-transform duration-300  group-hover:animate-bounce-right"
            />
          </button>
        </div>
      </div>
    </div>
  );
};
