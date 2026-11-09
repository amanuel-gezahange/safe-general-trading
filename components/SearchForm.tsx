import { businessFields, products } from "@/lib/data";
import "./SearchForm.css";

export const productGroups = Array.from(
  new Set(products.map((product) => product.group))
);

/**
 * Product search form (keywords + business field + product line + product name).
 * Plain GET form to /product-search — works without JavaScript.
 */
export default function SearchForm() {
  return (
    <form action="/product-search" method="get" role="search" className="sgt-searchform">
      <div className="sgt-searchform-row sgt-searchform-row--full">
        <label htmlFor="sf-q">Search Keywords</label>
        <input id="sf-q" type="search" name="q" autoComplete="off" />
      </div>

      <div className="sgt-searchform-grid">
        <div className="sgt-searchform-row">
          <label htmlFor="sf-field">Business Field</label>
          <select id="sf-field" name="field" defaultValue="">
            <option value="">All</option>
            {businessFields.map((field) => (
              <option key={field.slug} value={field.slug}>
                {field.title}
              </option>
            ))}
          </select>
        </div>

        <div className="sgt-searchform-row">
          <label htmlFor="sf-group">Product Line</label>
          <select id="sf-group" name="group" defaultValue="">
            <option value="">All</option>
            {productGroups.map((group) => (
              <option key={group} value={group}>
                {group}
              </option>
            ))}
          </select>
        </div>

        <div className="sgt-searchform-row sgt-searchform-row--wide">
          <label htmlFor="sf-product">Product Name</label>
          <select id="sf-product" name="product" defaultValue="">
            <option value="">All</option>
            {products.map((product) => (
              <option key={product.slug} value={product.slug}>
                {product.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="sgt-searchform-submit">
        <button type="submit" className="sgt-btn sgt-btn--pill">
          Refine Results
        </button>
      </div>
    </form>
  );
}
