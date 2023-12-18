export declare type ApiServiceResponse = {
    statusCode: number,
    response: {
        status: boolean,
        message: string,
        data?: [] | object;
    }
}

export declare type loggerResponse = {
    statusCode: number;
    status: boolean;
    message: string;
}