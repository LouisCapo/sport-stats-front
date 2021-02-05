export interface IErrorRequest {
  error: IErrorAnswer;
}


interface IErrorAnswer {
	code: number;
	msg: string;
}