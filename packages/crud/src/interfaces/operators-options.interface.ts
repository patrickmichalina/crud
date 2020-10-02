export interface OperatorsOptions {
  custom?: CustomOperators;
}

export type CustomOperatorQuery = (field: string, param: string, val?: string) => string;

export interface CustomOperators {
  [key: string]: {
    query: CustomOperatorQuery;
    params?: { [field: string]: any };
    isArray?: boolean;
  };
}
