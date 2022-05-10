export interface IErrorResponse {
    message: string,
    status: number | null,
    errorList: IErrorItemResponse[]
}

export interface IErrorItemResponse {
    message: string,
    property: string
}