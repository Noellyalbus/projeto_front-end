import { useState, useEffect, useMemo } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import clsx from "clsx";

import Section        from "../components/Section";
import ProductListing from "../components/ProdutoListing";
import ProductFilter  from "../components/ProductFilter";
import products       from "../components/data/products";

/* ---------------------------------------------------------------- helpers */
const normalize = (txt = "") =>
  txt.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "");

const uniq = (arr) =>
  [...new Map(arr.map(({ value, name }) => [value, name]))].map(([value, name]) => ({
    value,
    name,
  }));

const buildFilterLists = (items) => ({
  brand:     uniq(items.map((p) => p.brand)),
  category:  uniq(items.map((p) => p.category)),
  gender:    uniq(items.map((p) => p.gender)),
  condition: uniq(items.map((p) => p.condition)),
});

/* ------------------------------------------------------------------ page */
export default function ProductListingPage() {
  /* ---------- dados brutos ---------- */
  const items = products.items;
  const lists = useMemo(() => buildFilterLists(items), [items]);

  /* ---------- routing ---------- */
  const { category = "" } = useParams();
  const navigate  = useNavigate();
  const location  = useLocation();

  /* ---------- state ---------- */
  const [sortOption,  setSortOption] = useState("relevantes");
  const [filters,     setFilters]    = useState({
    category:  [],
    brand:     [],
    gender:    [],
    condition: "",
  });
  const [searchText,  setSearchText] = useState("");
  const [filtered,    setFiltered]   = useState(items);
  const [showFilters, setShowFilters] = useState(false); // ⬅ controla drawer mobile

  /* ---------- lê URL ---------- */
  useEffect(() => {
    const sp = new URLSearchParams(location.search);

    setFilters({
      category:  [category, ...sp.getAll("cat")].filter(Boolean),
      brand:     sp.getAll("brand"),
      gender:    sp.getAll("gender"),
      condition: sp.get("condition") || "",
    });
    setSearchText(sp.get("filter") || "");
  }, [category, location.search]);

  /* ---------- filtra + ordena ---------- */
  useEffect(() => {
    let list = [...items];

    if (filters.category.length)
      list = list.filter((p) => filters.category.includes(p.category.value));
    if (filters.brand.length)
      list = list.filter((p) => filters.brand.includes(p.brand.value));
    if (filters.gender.length)
      list = list.filter((p) => filters.gender.includes(p.gender.value));
    if (filters.condition)
      list = list.filter(
        (p) => normalize(p.condition.value) === normalize(filters.condition)
      );

    if (searchText.trim()) {
      const t = normalize(searchText);
      list = list.filter(
        (p) =>
          normalize(p.name).includes(t) ||
          normalize(p.brand.value).includes(t) ||
          normalize(p.category.value).includes(t)
      );
    }

    if (sortOption === "menor-preco")      list.sort((a, b) => a.price - b.price);
    else if (sortOption === "maior-preco") list.sort((a, b) => b.price - a.price);

    setFiltered(list);
  }, [items, filters, searchText, sortOption]);

  /* ---------- helpers ---------- */
  const toggle = (arr, v) => (arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v]);

  const updateFilter = (key, value) => {
    if (key === "sort") { setSortOption(value); return; }

    const sp   = new URLSearchParams(location.search);
    const next = { ...filters };

    switch (key) {
      case "category":
        next.category = toggle(next.category, value);
        sp.delete("cat");
        next.category.slice(1).forEach((c) => sp.append("cat", c));
        break;
      case "brand":
        next.brand = toggle(next.brand, value);
        sp.delete("brand");
        next.brand.forEach((b) => sp.append("brand", b));
        break;
      case "gender":
        next.gender = toggle(next.gender, value);
        sp.delete("gender");
        next.gender.forEach((g) => sp.append("gender", g));
        break;
      case "condition":
        next.condition = next.condition === value ? "" : value;
        next.condition ? sp.set("condition", next.condition) : sp.delete("condition");
        break;
      default:
        return;
    }

    setFilters(next);
    const path = `/produtos${next.category[0] ? `/${next.category[0]}` : ""}`;
    navigate({ pathname: path, search: sp.toString() });
  };

  /* ---------------------------------------------------------------- render */
  return (
    <Section sectionMb={2}>
      {/* ---------- TOP BAR MOBILE ---------- */}
      <div className="xl:hidden flex items-center gap-3 mb-4 px-5">
        {/* dropdown */}
        <select
          value={sortOption}
          onChange={(e) => updateFilter("sort", e.target.value)}
          className="w-full h-[60px] px-4 text-sm rounded-md
                     border border-dark-gray-2 text-dark-gray-2
                     transition-colors
                     hover:border-[#b5b6f2] hover:text-primary
                     focus:outline-none focus:border-primary focus:text-primary cursor-pointer"
        >
          <option value="relevantes">Mais relevantes</option>
          <option value="menor-preco">Menor preço</option>
          <option value="maior-preco">Maior preço</option>
        </select>

        {/* botão filtro */}
        <button
          onClick={() => setShowFilters(true)}
          className="w-[60px] h-[60px] flex items-center justify-center
                     bg-primary rounded-md text-white text-2xl shadow
                     hover:brightness-110 active:scale-95 cursor-pointer"
          aria-label="Abrir filtros"
        >
          <i className="pi pi-filter" />
        </button>
      </div>

      {/* título mobile */}
      <h2 className="xl:hidden text-base font-bold text-dark-gray-2 mb-6 px-5">
        Resultados para todos os produtos – {filtered.length} produto
        {filtered.length !== 1 && "s"}
      </h2>

      {/* ---------- TOP BAR DESKTOP ---------- */}
      <div className="hidden xl:flex justify-between items-center mb-6">
        <h2 className="text-base font-bold text-dark-gray-2">
          Resultados para todos os produtos – {filtered.length} produto
          {filtered.length !== 1 && "s"}
        </h2>

        <div className="flex items-center gap-2">
          <label htmlFor="sort" className="text-sm font-medium text-dark-gray-2">
            Ordenar por:
          </label>
          <select
            id="sort"
            value={sortOption}
            onChange={(e) => updateFilter("sort", e.target.value)}
            className="w-[332px] h-[40px] border border-dark-gray-2 text-dark-gray-2
                       rounded-md px-2 py-1 text-sm
                       focus:outline-none
                       cursor-pointer"
          >
            <option value="relevantes">Mais relevantes</option>
            <option value="menor-preco">Menor preço</option>
            <option value="maior-preco">Maior preço</option>
          </select>
        </div>
      </div>

      {/* ---------- GRID PRINCIPAL ---------- */}
      <div className="grid grid-cols-1 xl:grid-cols-[308px_1fr] gap-6">
        {/* Sidebar permanente no desktop */}
        <div className="hidden xl:block">
          <ProductFilter lists={lists} filters={filters} updateFilter={updateFilter} />
        </div>

        {/* Cards */}
        {filtered.length > 0 ? (
          <ProductListing data={filtered} cols={[4, 6]} />
        ) : (
          <div className="inline-flex lg:inline-flex items-center gap-2 px-4 py-3 lg:h-fit bg-indigo-50 text-indigo-600 border-l-4 border-indigo-600 rounded-md font-semibold">
            <i className="pi pi-info-circle text-base" />
            Produto não encontrado.
          </div>
        )}
      </div>

      {/* ---------- FILTRO MOBILE ---------- */}
      {showFilters && (
        <>
          {/* overlay */}
          <div
            className="fixed inset-0 z-40 bg-black/50 lg:hidden"
            onClick={() => setShowFilters(false)}
          />

          {/* painel lateral */}
          <aside
            className={clsx(
              "fixed right-0 top-[100px] z-50 w-[308px] max-w-full",
              "h-[calc(100vh-100px)] bg-white shadow-lg",
              "transform transition-transform duration-300 lg:hidden",
              showFilters ? "translate-x-0" : "translate-x-full"
            )}
          >
            <div className="p-6 h-full overflow-y-auto">
              <button
                className="text-2xl text-dark-gray-2 mb-4 cursor-pointer"
                onClick={() => setShowFilters(false)}
                aria-label="Fechar filtros"
              >
                <i className="pi pi-times" />
              </button>

              <ProductFilter
                lists={lists}
                filters={filters}
                updateFilter={updateFilter}
                closeDrawer={() => setShowFilters(false)}
              />
            </div>
          </aside>

        </>
      )}
    </Section>
  );
}
