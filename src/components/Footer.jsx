import Logo from "./Logo";
import logoFacebook from "../../assets/facebook.svg";
import logoInstagram from "../../assets/instagram.svg";
import logoTwitter from "../../assets/twitter.svg";

const InfoCol = ({ title, info }) => {
  return (
    <div>
      <h3 className="font-semibold text-lg mb-3">{title}</h3>
      <ul className="space-y-2">
        {info.map((item, index) => (
          <li key={index}>
            <a
              href={item.link}
              className="text-gray-300 hover:underline transition-colors duration-200 text-sm"
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  const infoData = [
    {
      title: "Informações",
      info: [
        { text: "Sobre a Drip Store", link: "/about" },
        { text: "Segurança", link: "/security" },
        { text: "WishList", link: "/wishlist" },
        { text: "Blog", link: "/blog" },
        { text: "Trabalhe conosco", link: "/work_with_us" },
        { text: "Meus pedidos", link: "/my_orders" },
      ],
    },
    {
      title: "Categorias",
      info: [
        { text: "Camisetas", link: "/tshirts" },
        { text: "Calças", link: "/pants" },
        { text: "Bonés", link: "/caps" },
        { text: "Headphones", link: "/headphones" },
        { text: "Tênis", link: "/sneakers" },
      ],
    },
    {
      title: "Contatos",
      info: [
        {
          text:
            "Av. Santos Dumont, 1510 - 1° andar - Aldeota, Fortaleza - CE, 60150-161",
          link: "#",
        },
        { text: "(85) 3051-3411", link: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-dark-gray text-white px-6 py-10">
      <div className="max-w-[75rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-8 mx-auto">
        {/* Logo + descrição + redes sociais */}
        <div className="space-y-4">
          <Logo location="footer" />
          <p className="text-gray-300 text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur voluptate at dolore, amet est reiciendis, minus dicta dolor, repellendus sit ad.
          </p>
          <div className="flex gap-3 mt-4">
            <img src={logoFacebook} alt="Facebook" className="w-6 h-6" />
            <img src={logoInstagram} alt="Instagram" className="w-6 h-6" />
            <img src={logoTwitter} alt="Twitter" className="w-6 h-6" />
          </div>
        </div>

        {/* Colunas de informações */}
        {infoData.map((section, idx) => (
          <InfoCol key={idx} {...section} />
        ))}
      </div>

      <hr className="my-8 border-gray-700" />
      <p className="text-center text-gray-400 text-sm">&copy; 2024 Digital Store</p>
    </footer>
  );
};

export default Footer;
