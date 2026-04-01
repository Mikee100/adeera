import { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { CreditCard, User, Percent, ShoppingCart, Trash2 } from "lucide-react";

type Variant = {
  id: string;
  name: string;
};

type Product = {
  id: string;
  name: string;
  sku: string;
  barcode: string;
  price: number;
  variants?: Variant[];
};

type CartItem = {
  product: Product;
  variant?: Variant;
  quantity: number;
};

const MOCK_PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "T-Shirt",
    sku: "TSHIRT-001",
    barcode: "100001",
    price: 1200,
    variants: [
      { id: "v1", name: "S / Blue" },
      { id: "v2", name: "M / Blue" },
      { id: "v3", name: "L / Black" },
    ],
  },
  {
    id: "p2",
    name: "Jeans",
    sku: "JEANS-002",
    barcode: "100002",
    price: 2800,
    variants: [
      { id: "v4", name: "32 / Dark" },
      { id: "v5", name: "34 / Dark" },
    ],
  },
  {
    id: "p3",
    name: "Sneakers",
    sku: "SNKR-003",
    barcode: "100003",
    price: 4200,
  },
  {
    id: "p4",
    name: "Cap",
    sku: "CAP-004",
    barcode: "100004",
    price: 800,
  },
];

const fuzzyMatch = (query: string, product: Product) => {
  const q = query.toLowerCase().trim();
  if (!q) return true;
  const haystack = `${product.name} ${product.sku} ${product.barcode}`.toLowerCase();
  // simple token-based fuzzy match
  return q
    .split(" ")
    .filter(Boolean)
    .every((token) => haystack.includes(token));
};

const SalesDemo = () => {
  const [query, setQuery] = useState("");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [customerName, setCustomerName] = useState<string>("");
  const [discountPercent, setDiscountPercent] = useState<number>(0);
  const searchInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "d") {
        e.preventDefault();
        const next = discountPercent === 0 ? 5 : discountPercent === 5 ? 10 : 0;
        setDiscountPercent(next);
      }
      if (e.key === "F2") {
        e.preventDefault();
        const newName = customerName || "Walk-in customer";
        setCustomerName(newName);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [discountPercent, customerName]);

  const results = useMemo(
    () => MOCK_PRODUCTS.filter((p) => fuzzyMatch(query, p)).slice(0, 6),
    [query]
  );

  const addToCart = (product: Product, variant?: Variant) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (item) =>
          item.product.id === product.id && item.variant?.id === variant?.id
      );
      if (existingIndex >= 0) {
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + 1,
        };
        return updated;
      }
      return [...prev, { product, variant, quantity: 1 }];
    });
    setQuery("");
    searchInputRef.current?.focus();
  };

  const removeFromCart = (index: number) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const total = useMemo(
    () => cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0),
    [cart]
  );

  const discountAmount = (total * discountPercent) / 100;
  const grandTotal = total - discountAmount;

  return (
    <div className="grid gap-6 md:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)]">
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <ShoppingCart className="h-4 w-4 text-primary" />
            <span>Checkout demo</span>
          </div>
          <div className="flex flex-wrap gap-2 text-[11px] text-muted-foreground">
            <span className="rounded border px-1.5 py-0.5">
              ⌘ / Ctrl + K → Search
            </span>
            <span className="rounded border px-1.5 py-0.5">
              ⌘ / Ctrl + D → Cycle discount
            </span>
            <span className="rounded border px-1.5 py-0.5">F2 → Set customer</span>
          </div>
        </div>

        <div className="flex gap-3">
          <div className="flex-1">
            <Input
              ref={searchInputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Scan barcode or search by name / SKU..."
              className="h-11"
              onKeyDown={(e) => {
                if (e.key === "Enter" && results[0]) {
                  addToCart(results[0]);
                }
              }}
            />
          </div>
          <Input
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            placeholder="Customer (inline)"
            className="h-11 max-w-[180px]"
          />
        </div>

        <div className="rounded-xl border bg-background/60 p-3 md:p-4 space-y-3">
          {results.length ? (
            <div className="space-y-2">
              {results.map((product) => (
                <div
                  key={product.id}
                  className="flex flex-col gap-1 rounded-lg border border-muted/60 bg-card/60 p-2.5 md:p-3"
                >
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <div className="font-medium text-sm md:text-[15px]">
                        {product.name}
                      </div>
                      <div className="text-[11px] text-muted-foreground">
                        {product.sku} · Barcode {product.barcode}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-sm font-semibold">
                        KES {product.price.toLocaleString()}
                      </div>
                      {!product.variants && (
                        <Button
                          size="sm"
                          className="h-8 px-3"
                          onClick={() => addToCart(product)}
                        >
                          Add
                        </Button>
                      )}
                    </div>
                  </div>
                  {product.variants && (
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {product.variants.map((v) => (
                        <Button
                          key={v.id}
                          size="xs"
                          variant="outline"
                          className="h-7 rounded-full px-2.5 text-[11px]"
                          onClick={() => addToCart(product, v)}
                        >
                          {v.name}
                        </Button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-xs text-muted-foreground">
              Start typing to search products. Barcode scanners can type into the
              same field and hit Enter to add the best match.
            </p>
          )}
        </div>
      </div>

      <div className="rounded-xl border bg-card/80 p-4 md:p-5 flex flex-col gap-3">
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center gap-2 text-sm font-medium">
            <User className="h-4 w-4 text-primary" />
            <span>{customerName || "Walk-in customer"}</span>
          </div>
          {discountPercent > 0 && (
            <Badge variant="secondary" className="flex items-center gap-1 text-xs">
              <Percent className="h-3 w-3" />
              {discountPercent}% cart discount
            </Badge>
          )}
        </div>

        <div className="flex-1 min-h-[140px] max-h-[220px] overflow-y-auto rounded-lg border bg-background/60 p-2 space-y-1.5 text-xs">
          {cart.length ? (
            cart.map((item, index) => (
              <div
                key={`${item.product.id}-${item.variant?.id ?? "base"}-${index}`}
                className="flex items-center justify-between gap-2 rounded-md bg-card/80 px-2 py-1.5"
              >
                <div className="min-w-0">
                  <div className="truncate font-medium text-[12px]">
                    {item.product.name}
                  </div>
                  {item.variant && (
                    <div className="text-[11px] text-muted-foreground">
                      {item.variant.name}
                    </div>
                  )}
                  <div className="text-[11px] text-muted-foreground">
                    {item.quantity} × KES{" "}
                    {item.product.price.toLocaleString()}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-[12px] font-semibold">
                    KES{" "}
                    {(item.product.price * item.quantity).toLocaleString()}
                  </div>
                  <button
                    type="button"
                    onClick={() => removeFromCart(index)}
                    className="text-muted-foreground hover:text-destructive"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="h-full flex items-center justify-center text-muted-foreground/80 text-[11px]">
              Cart is empty. Search above to add items.
            </div>
          )}
        </div>

        <div className="space-y-1.5 text-xs border-t pt-2 mt-1">
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Subtotal</span>
            <span className="font-medium">
              KES {total.toLocaleString()}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">Discount</span>
              <Input
                type="number"
                min={0}
                max={50}
                value={discountPercent}
                onChange={(e) =>
                  setDiscountPercent(
                    Math.min(50, Math.max(0, Number(e.target.value) || 0))
                  )
                }
                className="h-7 w-16 px-1 text-[11px]"
              />
              <span className="text-[11px] text-muted-foreground">%</span>
            </div>
            <span className="font-medium text-amber-600 dark:text-amber-400">
              - KES {discountAmount.toLocaleString()}
            </span>
          </div>
          <div className="flex items-center justify-between pt-1 border-t">
            <span className="text-[13px] font-semibold">Total due</span>
            <span className="text-[15px] font-bold">
              KES {grandTotal.toLocaleString()}
            </span>
          </div>
        </div>

        <div className="mt-2 flex gap-2">
          <Button
            className="flex-1 h-10"
            disabled={!cart.length}
          >
            <CreditCard className="mr-2 h-4 w-4" />
            Pay (Cash / M-Pesa)
          </Button>
          <Button
            variant="outline"
            className="h-10"
            size="icon"
            disabled={!cart.length}
            onClick={() => {
              setCart([]);
              setDiscountPercent(0);
            }}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SalesDemo;

