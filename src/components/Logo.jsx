import  logoHeader from  "../../assets/logo-header.svg";
import logoFooter from "../../assets/logo-footer.svg";

const Logo = ({ location }) => {
    return ( 
        <img src={location === "header" ? logoHeader : logoFooter} alt="Logo" />
     );
}
 
export default Logo;