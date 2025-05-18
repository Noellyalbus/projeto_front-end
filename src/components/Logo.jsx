import logoHeader from "../../assets/logo-header.svg";
import logoFooter from "../../assets/logo-footer.svg";
import classNames from "classnames";

const Logo = ({ location }) => {
  const logoClass = classNames({
    "w-15rem h-3rem ml-5": location === "header", // 240x48px aproximado
    "w-7rem h-2.5rem border-round-sm": location === "footer", // 112x40px aproximado
  });

  return (
    <img
      src={location === "header" ? logoHeader : logoFooter}
      alt="Logo"
      className={logoClass}
    />
  );
};

export default Logo;
