export const transformCurrencyToBrl = (transformValue: number) => {
  return transformValue.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
};

export const removeBrlCurrency = (stringValue: string) => {
  return Number(stringValue.replace(/[^0-9,]*/g, "").replace(",", "."));
};
