// ================= ProductFilter.jsx =================
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Checkbox from '../components/Checkbox/Checkbox';
import Radio    from '../components/Radio/Radio';

const ProductFilter = ({
  lists   = { brand: [], category: [], gender: [], condition: [] },
  filters,
  updateFilter,
}) => {
  /* texto de categorias selecionadas (fora da caixa) */
  const location = useLocation();
  const [selectedCats, setSelectedCats] = useState([]);

  useEffect(() => {
    const sp = new URLSearchParams(location.search);
    const catsUrl = [sp.get('category'), ...sp.getAll('cat')].filter(Boolean);
    setSelectedCats(catsUrl);
  }, [location.search]);

  return (
    <aside className="flex flex-col gap-6">
      {/* CAIXA BRANCA COM TÍTULO + FILTROS */}
      <div className="bg-white w-full xl:w-[308px] rounded-md p-[30px] flex flex-col gap-6 shadow-sm">
        <h2 className="text-sm font-bold text-dark-gray-2 mb-4">Filtrar por</h2>

        {/* ---------------- MARCA ---------------- */}
        <div>
          <h3 className="text-sm font-bold mb-2">Marca</h3>
          <div className="flex flex-col gap-2">
            {lists.brand.map((b) => (
              <Checkbox
                key={b.value}
                label={b.name}
                checked={filters.brand.includes(b.value)}
                onChange={() => updateFilter('brand', b.value)}
              />
            ))}
          </div>
        </div>

        {/* ---------------- CATEGORIA ---------------- */}
        <div>
          <h3 className="text-sm font-bold mb-2">Categoria</h3>
          <div className="flex flex-col gap-2">
            {lists.category.map((c) => (
              <Checkbox
                key={c.value}
                label={c.name}
                checked={filters.category.includes(c.value)}
                onChange={() => updateFilter('category', c.value)}
              />
            ))}
          </div>
        </div>

        {/* ---------------- GÊNERO ---------------- */}
        <div>
          <h3 className="text-sm font-bold mb-2">Gênero</h3>
          <div className="flex flex-col gap-2">
            {lists.gender.map((g) => (
              <Checkbox
                key={g.value}
                label={g.name}
                checked={filters.gender.includes(g.value)}
                onChange={() => updateFilter('gender', g.value)}
              />
            ))}
          </div>
        </div>

        {/* ---------------- CONDIÇÃO ---------------- */}
        <div>
          <h3 className="text-sm font-bold mb-2">Condição</h3>
          <div className="flex flex-col gap-2">
            {lists.condition.map((c) => (
              <Radio
                key={c.value}
                name="condition"
                label={c.name}
                checked={filters.condition === c.value}
                onChange={() => updateFilter('condition', c.value)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* texto fora da caixa */}
      <p className="text-sm text-gray-700">
        {selectedCats ? selectedCats.join(', ') : 'Nenhuma categoria selecionada'}
      </p>
    </aside>
  );
};

export default ProductFilter;
