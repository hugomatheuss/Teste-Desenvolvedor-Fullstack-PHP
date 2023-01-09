export interface HttpOptionsInterface {
    body?: any;
    headers?: any;
    observe?: 'events' | 'body' | 'response';
    params?: any;
    reportProgress?: boolean;
    responseType?: 'arraybuffer' | 'json' | 'text' | 'blob';
    withCredentials?: boolean;
}

export type RequestMethodType = 'get' | 'post' | 'put' | 'patch' | 'delete';
