import Logo from '../assets/Logo.svg';

export const Header = () => {
  return (
    <>
      <div className="w-full h-20 px-36 flex flex-row items-center justify-between bg-neutral-silver">
        <img
          src={Logo}
          alt="Nexcent Logo"
          className="cursor-pointer hover:w-40 hover:h-10 transition-transform duration-700"
        />
        <div className="h-full flex flex-row items-center gap-x-14 text-textGray900 font-medium leading-6 max-xl:hidden">
          <a href="#" className="hover:text-xl transition-normal duration-500">
            Home
          </a>
          <a href="#" className="hover:text-xl transition-normal duration-500">
            Service
          </a>
          <a href="#" className="hover:text-xl transition-normal duration-500">
            Feture
          </a>
          <a href="#" className="hover:text-xl transition-normal duration-500">
            Product
          </a>
          <a href="#" className="hover:text-xl transition-normal duration-500">
            Testimonial
          </a>
          <a href="#" className="hover:text-xl transition-normal duration-500">
            FAQ
          </a>
        </div>
        <div className="flex flex-row items-center gap-3.5 max-sm:hidden">
          <button className="w-20 h-10 text-sm flex items-center justify-center text-primary-primary font-medium leading-5 cursor-pointer bg-transparent rounded-md hover:shadow transition-shadow">
            Login
          </button>
          <button className="w-20 h-10 flex items-center justify-center text-sm text-neutral-white font-medium leading-5 bg-primary-primary rounded-md cursor-pointer hover:bg-colorShade1 transition-colors">
            Sign up
          </button>
        </div>
      </div>
    </>
  );
};
