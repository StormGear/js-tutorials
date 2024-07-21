// This is a simple library for making HTTP requests


/**
 * The `myHTTP` defines a custom HTTP client in JavaScript that provides methods for making GET,
 * POST, PUT, and DELETE requests.
 */
// This is a simple library for making HTTP requests
/**
 * The `myHTTP` defines a custom HTTP client in JavaScript that provides methods for making GET,
 * POST, PUT, and DELETE requests.
 */
export default class myHTTP {
    constructor() {
        this.http = new XMLHttpRequest();
    }
/**
 * The function performs a GET request to a specified URL and executes a callback function with the
 * response data or an error message based on the HTTP status.
 * @param url - The `url` parameter in the `get` function is the URL of the resource you want to make a
 * GET request to. It specifies the location of the resource on the web server that you want to
 * retrieve data from.
 * @param cb - The `cb` parameter in the `get` function is a callback function that will be called once
 * the HTTP request is completed. It takes two parameters: an error (if any) and the response text from
 * the request.
 */
    get(url, cb) {
        this.http.open('GET', url, true);
        this.http.onload = function () {
            if (this.status === 200) {
                cb(null, this.responseText);
            } else {
                cb('There are errors ' + this.status);
            }
        };
        this.http.send();
    }
    post(url, data, cb) {
        this.http.open('POST', url, true);
        this.http.setRequestHeader('Content-type', 'application/json');
        this.http.onload = function () {

            cb(null, this.responseText);

        };
        this.http.send(JSON.stringify(data));
    }
    put(url, data, cb) {
        this.http.open('PUT', url, true);
        this.http.setRequestHeader('Content-type', 'application/json');
        this.http.onload = function () {

            cb(null, this.responseText);

        };
        this.http.send(JSON.stringify(data));
    }
    delete(url, cb) {
        this.http.open('DELETE', url, true);
        this.http.onload = function () {
            if (this.status === 200) {
                cb(null, 'The post is deleted');
            } else {
                cb('There are errors ' + this.status);
            }
        };
        this.http.send();
    }
}

