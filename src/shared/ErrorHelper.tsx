/* eslint-disable @typescript-eslint/no-explicit-any */
import { IErrorResponse } from './ErrorResponse';

export function ErrorHelper(error: any): IErrorResponse {

    const errorResponse: IErrorResponse = {
        message: '',
        status: null,
        errorList: []
    };

    const getMessage = (errors: any) => {
        if (!Array.isArray(errors)) {
            return '';
        }

        return errors.reduce((acumulador: string, valorAtual: any) => {
            if (typeof valorAtual == 'string')
                return acumulador + valorAtual + '<br/>';

            return acumulador + valorAtual.message + '<br/>';
        }, '');
    };

    if (error.status) {
        errorResponse.status = error.status;
        if (error.status == 404) {
            errorResponse.message = 'Erro 404, rota não encontrada';
        }
        else if (error.data) {
            if (error.data.errors) {
                errorResponse.message = getMessage(error.data.errors);
                errorResponse.errorList = error.data.errors;
            } else if (error.data.notifications) {
                errorResponse.message = getMessage(error.data.notifications);
                errorResponse.errorList = error.data.notifications;
            }
        }
    } else {
        if (error.data) {
            if (error.data.errors) {
                errorResponse.message = getMessage(error.data.errors);
                errorResponse.errorList = error.data.errors;
            }
        }
    }
    return errorResponse;
}
