export class APIError extends Error {
    statusCode: number;
    statusText: string;
    constructor(message: string | undefined, statusCode: number) {
        super(message);
        this.statusCode = statusCode;
        this.statusText =
            statusCode == 401
                ? "unauthorized"
                : statusCode == 403
                    ? "forbidden"
                    : statusCode == 404
                        ? "not found"
                        : "Internal Server Error.";
    }
}
