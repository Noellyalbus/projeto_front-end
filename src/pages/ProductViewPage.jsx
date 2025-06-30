import { useParams, Link } from "react-router-dom";
import productsData from "../components/data/products";
import Section from "../components/Section";
import ProductSlider from "../components/ProductSlider";
import BuyBox from "../components/BuyBox";
import ProductListing from "../components/ProdutoListing";

/* breadcrumb simples */
const Breadcrumb = ({ product }) => (
  <nav className="text-sm mb-6">
    <Link to="/" className="text-dark-gray-2 font-bold hover:underline">Home</Link>
    <span className="mx-1">/</span>
    <Link to="/produtos" className="text-dark-gray-2 hover:underline">Produtos</Link>
    {product && (
      <>
        <span className="mx-1">/</span>
        <Link
          to={`/produtos/${product.category.value}`}
          className="text-dark-gray-2 hover:underline"
        >
          {product.category.name}
        </Link>
        <span className="mx-1">/</span>
        <span className="text-dark-gray-2 font-semibold">{product.name}</span>
      </>
    )}
  </nav>
);

export default function ProductViewPage() {
  const { id } = useParams();
  const product = productsData.items.find((p) => String(p.id) === id);

  // Proteção: se o produto não existir
  if (!product) return null;

  // Relacionados: mesmo categoria sem o atual
  const sameCategory = productsData.items.filter(
    (p) =>
      p.id !== product.id &&
      p.category?.value === product.category?.value
  );

  const complement = productsData.items.filter(
    (p) =>
      p.id !== product.id &&
      !sameCategory.includes(p)
  ).slice(0, 4 - sameCategory.length);

  const related = [...sameCategory, ...complement].slice(0, 4);

  return (
    <>
      <Section sectionMb={3}>
        <Breadcrumb product={product} />

        {/* grid principal */}
        <div className="grid xl:grid-cols-[1fr_360px] gap-8">
          <ProductSlider product={product} bgcolors={productsData.bgcolors} />
          <BuyBox product={product} general={productsData} />
        </div>
      </Section>

      {/* relacionados */}
      <Section
        title="Produtos Relacionados"
        sectionMb={2}
        link={{ text: "Ver todos", href: "/produtos" }}
      >
        <ProductListing cols={[12,6,3]} data={related} numProducts={3} />
      </Section>
    </>
  );
}
