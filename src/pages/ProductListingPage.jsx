// ================= ProductListingPage.jsx =================
import { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';

import Section from '../components/Section';
import ProductListing from '../components/ProdutoListing';
import ProductFilter from '../components/ProductFilter';

import products from '../components/data/products';

/* ----------------------------------------------------------
 * helpers
 * -------------------------------------------------------- */
const normalize = (txt = '') =>
  txt.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '');

const uniqByValue = (arr) => {
  const map = new Map();
  arr.forEach(({ name, value }) => {
    if (!map.has(value)) map.set(value, name);
  });
  return [...map.entries()].map(([value, name]) => ({ name, value }));
};

const buildFilterLists = (items) => ({
  brand:     uniqByValue(items.map((p) => p.brand)),
  category:  uniqByValue(items.map((p) => p.category)),
  gender:    uniqByValue(items.map((p) => p.gender)),
  condition: uniqByValue(items.map((p) => p.condition)),
});

/* ----------------------------------------------------------
 * COMPONENT
 * -------------------------------------------------------- */
export default function ProductListingPage() {
  /* raw data */
  const items = products.items || [];
  const lists = useMemo(() => buildFilterLists(items), [items]);

  /* routing */
  const { category = '' } = useParams();
  const navigate  = useNavigate();
  const location  = useLocation();

  /* state */
  const [sortOption, setSortOption] = useState('relevantes');
  const [filters, setFilters]       = useState({
    categorys: [],
    brand:     [],
    gender:    [],
    condition: '',
  });
  const [searchText, setSearchText] = useState('');
  const [filtered,   setFiltered]   = useState(items);

  /* ------------------------------------------------------
   * sync filters with URL
   * ---------------------------------------------------- */
  useEffect(() => {
    const sp = new URLSearchParams(location.search);
    setFilters({
      categorys: [category, ...sp.getAll('cat')].filter(Boolean),
      brand:     sp.getAll('brand'),
      gender:    sp.getAll('gender'),
      condition: sp.get('condition') || '',
    });
    setSearchText(sp.get('filter') || '');
  }, [category, location.search]);

  /* ------------------------------------------------------
   * filter + sort list
   * ---------------------------------------------------- */
  useEffect(() => {
    let list = [...items];

    if (filters.categorys.length)
      list = list.filter((p) => filters.categorys.includes(p.category.value));

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

    if (sortOption === 'menor-preco')      list.sort((a, b) => a.price - b.price);
    else if (sortOption === 'maior-preco') list.sort((a, b) => b.price - a.price);

    setFiltered(list);
  }, [items, filters, searchText, sortOption]);

  /* ------------------------------------------------------
   * helpers
   * ---------------------------------------------------- */
  const toggleInArray = (arr, val) =>
    arr.includes(val) ? arr.filter((v) => v !== val) : [...arr, val];

  const updateFilter = (key, value) => {
    const sp   = new URLSearchParams(location.search);
    const next = { ...filters };

    switch (key) {
      case 'categorys':
        next.categorys = toggleInArray(next.categorys, value);
        sp.delete('cat');
        next.categorys.slice(1).forEach((c) => sp.append('cat', c));
        break;
      case 'brand':
        next.brand = toggleInArray(next.brand, value);
        sp.delete('brand');
        next.brand.forEach((b) => sp.append('brand', b));
        break;
      case 'gender':
        next.gender = toggleInArray(next.gender, value);
        sp.delete('gender');
        next.gender.forEach((g) => sp.append('gender', g));
        break;
      case 'condition':
        next.condition = next.condition === value ? '' : value;
        next.condition ? sp.set('condition', next.condition) : sp.delete('condition');
        break;
      case 'sort':
        setSortOption(value);
        return; // dropdown só altera sortOption
      default:
        return;
    }

    const path = `/produtos${next.categorys[0] ? `/${next.categorys[0]}` : ''}`;
    setFilters(next);
    navigate({ pathname: path, search: sp.toString() });
  };

  /* ------------------------------------------------------
   * render
   * ---------------------------------------------------- */
  return (
    <Section sectionMb={2}>
      {/* --- TÍTULO + DROPDOWN (fora da sidebar) --- */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-base font-bold text-dark-gray-2">
          Resultados para todos os produtos – {filtered.length} produto
          {filtered.length !== 1 && 's'}
        </h2>
        <div className="flex items-center gap-2">
          <label htmlFor="sort" className="text-sm font-medium text-dark-gray-2">
            Ordenar por:
          </label>
          <select
            id="sort"
            value={sortOption}
            onChange={(e) => updateFilter('sort', e.target.value)}
            className="border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none"
          >
            <option value="relevantes">Mais relevantes</option>
            <option value="menor-preco">Menor preço</option>
            <option value="maior-preco">Maior preço</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-[308px_1fr] gap-6">
        {/* ------ SIDEBAR ------ */}
        <ProductFilter
          lists={lists}
          filters={filters}
          updateFilter={updateFilter}
          sortOption={sortOption}
          setSortOption={(val) => updateFilter('sort', val)}
        />

        {/* ------ LISTAGEM DE CARDS (sem grid duplo) ------ */}
        {filtered.length > 0 ? (
          <ProductListing data={filtered} cols={[6,4]} />
        ) : (
          <div className="bg-indigo-50 text-indigo-600 px-4 py-3 rounded-md border-l-4 border-indigo-600">
            Produto não encontrado.
          </div>
        )}
      </div>
    </Section>
  );
}