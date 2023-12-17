export const BASE_URL = "http://localhost:3001";

export function formatCurrency(value: number) {
  return new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}
