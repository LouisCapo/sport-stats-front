export interface IErrorRequest {
  error: IErrorAnswer;
}

export interface IErrorDialog {
	error: boolean;
	errorMessage: string;
	closeButtonLabel: string;
}

interface IErrorAnswer {
	code: number;
	msg: string;
}