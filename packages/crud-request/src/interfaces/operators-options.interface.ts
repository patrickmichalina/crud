export type CustomOperatorQuery = (field: string, param: string, val?: string) => string;

export interface CustomOperators {
  [key: string]: { isArray?: boolean };
}
