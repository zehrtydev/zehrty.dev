export const MONI_DEMO_SOURCE = "10000 en comida";

export type MoniDemoInterpretation = {
  source: typeof MONI_DEMO_SOURCE;
  amount: "10000";
  transactionType: "expense";
  category: "food";
  date: "inferred";
  review: "pending";
  persisted: false;
};

function normalizeDemoInput(input: string) {
  return input.trim().toLocaleLowerCase("es").replace(/\s+/g, " ");
}

export function parseMoniDemo(input: string): MoniDemoInterpretation | null {
  if (normalizeDemoInput(input) !== MONI_DEMO_SOURCE) {
    return null;
  }

  return {
    source: MONI_DEMO_SOURCE,
    amount: "10000",
    transactionType: "expense",
    category: "food",
    date: "inferred",
    review: "pending",
    persisted: false,
  };
}
