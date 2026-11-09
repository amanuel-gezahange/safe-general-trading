"use client";

import { useEffect, useMemo, useState } from "react";
import { Search, X } from "lucide-react";

import ProductCard from "@/components/ProductCard";
import { businessFields, products } from "@/lib/data";
import "@/components/SearchForm.css";
import "./product-search.css";

const productGroups: string[] = Array.from(
  new Set(products.map((product) => product.group))
);

type Props = {
  initialQuery?: string;
  initialGroup?: string;
  initialField?: string;
};

export default function ProductSearch({
  initialQuery = "",
  initialGroup = "",
  initialField = "",
}: Props) {
  const [query, setQuery] = useState(initialQuery);
  const [group, setGroup] = useState(
    productGroups.includes(initialGroup) ? initialGroup : ""
  );
  const [fieldSlug, setFieldSlug] = useState(
    businessFields.some((field) => field.slug === initialField) ? initialField : ""
  );

  const field = businessFields.find((item) => item.slug === fieldSlug);

  // Keep the URL in sync so filtered results can be shared or bookmarked.
  useEffect(() => {
    const params = new URLSearchParams();
    if (query.trim()) params.set("q", query.trim());
    if (group) params.set("group", group);
    if (fieldSlug) params.set("field", fieldSlug);

    const search = params.toString();
    window.history.replaceState(null, "", search ? `?${search}` : window.location.pathname);
  }, [query, group, fieldSlug]);

  const results = useMemo(() => {
    const search = query.trim().toLowerCase();

    return products.filter((product) => {
      if (group && product.group !== group) return false;
      if (field && !(field.products as readonly string[]).includes(product.slug)) {
        return false;
      }

      const searchableText = [
        product.name,
        product.fullName,
        product.category,
        product.group,
        product.short,
        product.description,
        product.function,
        ...product.uses,
        ...product.packaging,
      ]
        .join(" ")
        .toLowerCase();

      return searchableText.includes(search);
    });
  }, [query, group, field]);

  const hasFilters = Boolean(query || group || fieldSlug);

  const clearFilters = () => {
    setQuery("");
    setGroup("");
    setFieldSlug("");
  };

  return (
    <section className="sgt-section sgt-section--tight" aria-label="Search products">
      <div className="sgt-wrap">
        <form
          className="sgt-searchform"
          role="search"
          onSubmit={(event) => event.preventDefault()}
        >
          <div className="sgt-searchform-row sgt-searchform-row--full">
            <label htmlFor="ps-q">Search Keywords</label>
            <input
              id="ps-q"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="e.g. LABSA, glycerin, soap"
              autoComplete="off"
            />
          </div>

          <div className="sgt-searchform-grid">
            <div className="sgt-searchform-row">
              <label htmlFor="ps-field">Business Field</label>
              <select
                id="ps-field"
                value={fieldSlug}
                onChange={(event) => setFieldSlug(event.target.value)}
              >
                <option value="">All</option>
                {businessFields.map((item) => (
                  <option key={item.slug} value={item.slug}>
                    {item.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="sgt-searchform-row">
              <label htmlFor="ps-group">Product Line</label>
              <select
                id="ps-group"
                value={group}
                onChange={(event) => setGroup(event.target.value)}
              >
                <option value="">All</option>
                {productGroups.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </form>

        <div className="sgt-results-head" aria-live="polite">
          <h2>
            {results.length} {results.length === 1 ? "Product" : "Products"} Found
          </h2>

          {hasFilters && (
            <button type="button" className="sgt-results-clear" onClick={clearFilters}>
              Clear filters
              <X size={15} aria-hidden="true" />
            </button>
          )}
        </div>

        {results.length > 0 ? (
          <div className="sgt-tilegrid sgt-results">
            {results.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        ) : (
          <div className="sgt-results-empty">
            <Search size={36} aria-hidden="true" />
            <h3>No matching products found</h3>
            <p>Try searching for another chemical name or manufacturing application.</p>
            <button type="button" className="sgt-btn" onClick={clearFilters}>
              Show all products
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
