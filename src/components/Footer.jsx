import Logo from "./Logo";

const InfoCol = ({title, info}) => {
    return ( 
        <div>
            <h3> {title} </h3>
            <ul>
                {info.map((item, index) =>(
                    <li key={index}>
                        <a href={item.link}>
                            {item.text}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
     );
}

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
        <>
            <footer>
                <div>
                    <div>
                        <Logo location={"footer"}/>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur voluptate at dolore, amet est reiciendis, minus dicta dolor, repellendus sit ad. Culpa, nulla consequuntur, veniam voluptas magni doloremque beatae, deleniti vel error nam repellat aspernatur commodi porro necessitatibus aliquid saepe voluptatum non atque eos. Vitae.</p>
                        <div>
                            <img src="../../assets/facebook.svg" alt="Facebook" />
                            <img src="../../assets/instagram.svg" alt="Instagram" />
                            <img src="../../assets/twitter.svg" alt="Twitter" />
                        </div>
                    </div>
                    <div>
                        {infoData.map((section, idx) =>(
                            <InfoCol key={idx} {...section}/>
                        ))}
                    </div>
                </div>

                <hr />
                <p>&copy; 2024 Digital Store</p>
            </footer>
        </>
     );
}
 
export default Footer;