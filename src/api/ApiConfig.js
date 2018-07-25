const defaultMethod = 'GET';

/**
 * Build options
 */
export function buildRequestOptions(method = defaultMethod, body, customHeaders) {
    let token = getToken();
    return {
        method,
        headers: {
            ...{
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            ...customHeaders
        },
        data: body,
        params: body && body.params ? body.params : null
    };
}

function getToken() {
    return 'token';
}

/**
 * Build api server
 */
export function buildApiServer() {
    return 'http://yendangn.com/json';
}

/**
 * Build endpoints
 */
export function getEndPoints() {
    return {
        news: {
            get_news: `${buildApiServer()}/news.json`,
        },
        category: {
            get_categories: `${buildApiServer()}/categories.json`,
        }
    };
}
