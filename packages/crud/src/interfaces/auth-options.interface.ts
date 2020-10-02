import { SCondition } from 'nestjsx-tmp-crud-request';
import { ObjectLiteral } from 'nestjsx-tmp-util';

export interface AuthGlobalOptions {
  property?: string;
}

export interface AuthOptions {
  property?: string;
  filter?: (req: any) => SCondition | void;
  or?: (req: any) => SCondition | void;
  persist?: (req: any) => ObjectLiteral;
}
