import Logo from "../../assets/logo-header.svg";

const HeaderLogin = () => {
  return (
    <div className="flex flex-col items-center lg:items-start py-5 lg:py-6 px-20 ">

        <div className="w-36 h-6 lg:w-44 lg:h-8 ">
          <img src={Logo} alt="Logo" />
        </div>

    </div>
  );
}
export default HeaderLogin;