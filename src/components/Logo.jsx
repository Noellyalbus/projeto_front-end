import logoHeader from "../../assets/logo-header.svg";
import logoFooter from "../../assets/logo-footer.svg";
import classNames from "classnames";

const Logo = ({ location }) => {
  const logoClass = classNames({
    "w-16rem h-3rem": location === "header",
    "w-7rem h-2.5rem border-round-sm": location === "footer",
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
