export interface IErrorBody {
  code: string;
  message: string;
  shortMessage: string;
  [index: string]: unknown;
}
