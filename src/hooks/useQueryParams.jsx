import { useLocation, useNavigate, matchPath } from "react-router-dom";
import products from "../components/data/products";

/* utilidades*/
const normalize = (txt = "") =>
  txt.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "");

const uniq = (arr) => [...new Set(arr)];

/* gera listas conhecidas de brand / gender / condition ------------- */
const items = products.items || [];

const KNOWN = {
  brand:     uniq(items.map((p) => p.brand.value)),
  gender:    uniq(items.map((p) => p.gender.value)),
  condition: uniq(items.map((p) => p.condition.value)),
};

/* hook*/
export function useQueryParams() {
  const location = useLocation();
  const navigate = useNavigate();
  const search   = new URLSearchParams(location.search);

  /* 1) categoria “primária” vem da própria rota  (/produtos/:cat)  */
  const match = matchPath({ path: "/produtos/:cat" }, location.pathname);
  const primaryCategory = match?.params?.cat || "";

  /* 2) interpreta o parâmetro &filter=                             */
  /*    (transforma em brand / gender / condition, se couber)       */
  const parseGenericFilter = () => {
    const raw = search.get("filter") || "";
    const txt = normalize(raw);

    if (KNOWN.gender.includes(txt))    return { gender:    [txt] };
    if (KNOWN.condition.includes(txt)) return { condition: txt   };
    if (KNOWN.brand.includes(txt))     return { brand:     [txt] };
    if (txt)                           return { text:      txt   };
    return {};
  };

  /* 3) devolve os filtros atuais em um objeto único                */
  const getAll = () => {
    const generic = parseGenericFilter();

    return {
      category : [primaryCategory, ...search.getAll("cat")].filter(Boolean),
      brand    : search.getAll("brand").length
                   ? search.getAll("brand")
                   : generic.brand     || [],
      gender   : search.getAll("gender").length
                   ? search.getAll("gender")
                   : generic.gender    || [],
      condition: search.get("condition") || generic.condition || "",
      text     : generic.text || "",
      /* se precisar dos params “crus”, exponha também: */
      raw      : Object.fromEntries(search),
    };
  };

  /* -------------------------------------------------------------- */
  /* 4) helpers para atualizar a URL                                */
  /* -------------------------------------------------------------- */
  const setParam = (key, val) => {
    if (val === "" || val === undefined || val === null) {
      search.delete(key);
    } else {
      search.set(key, val);
    }
    navigate({ pathname: location.pathname, search: search.toString() }, { replace: true });
  };

  const setMany = (obj = {}) => {
    /* apaga & reaplica */
    Object.keys(obj).forEach((k) => search.delete(k));
    Object.entries(obj).forEach(([k, v]) => {
      if (Array.isArray(v)) v.forEach((i) => search.append(k, i));
      else if (v !== "" && v !== null && v !== undefined) search.set(k, v);
    });
    navigate({ pathname: location.pathname, search: search.toString() }, { replace: true });
  };

  const removeParam = (key) => {
    search.delete(key);
    navigate({ pathname: location.pathname, search: search.toString() }, { replace: true });
  };

  return {
    /* leitura */
    getQueryParam  : (key) => search.get(key),
    getAllQueryParams: getAll,

    /* escrita */
    setQueryParam  : setParam,
    setMultipleQueryParams: setMany,
    removeQueryParam: removeParam,
  };
}
