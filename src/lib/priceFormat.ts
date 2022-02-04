import { ILocale } from "../types/locale";
import { ICurrency } from "../types/currency";

export type IPriceFormat = {
  style?: "decimal" | "currency" | "percent";
  locale?: ILocale;
  currency?: ICurrency;
  decimals?: number;
  currencyDisplay?: "symbol" | "name" | "code";
};

export function priceFormat(
  price: number | string,
  options?: IPriceFormat
): string {
  return new Intl.NumberFormat(options?.locale || "pt-BR", {
    style: options?.style || "currency",
    currency: options?.currency || "BRL",
    currencyDisplay: options?.currencyDisplay,
    maximumFractionDigits: options?.decimals,
  }).format(Number(price));
}
