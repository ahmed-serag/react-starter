/**
 * @author Ahmed Serag
 * @date 2019-07-16
 * @description implementation of network calls.
 * @filename network.ts
 */
import { Common } from "utilities/common";

/**
 * class responsible for executing network requests.
 *
 * @export
 * @class network
 */
export class Network {
  /**
   * execute a post request to a a given url with given options
   *
   * @static
   * @param {string} url url of the request.
   * @param {RequestInit} init set of options sent with the url.
   * @returns {Promise<any>} promise to return the Json response of the request.
   * @memberof Network
   */
  public static post(url: string, init: RequestInit): Promise<any> {
    return fetch(url, {
      method: "POST",
      mode: "cors",
      headers: Network.getHeaders(),
      ...init
    }).then((response: Response) => {
      let promise: Promise<any>;

      if (response.status !== 200) {
        promise = Network.handleErrorsBasedOnStatus(response);
      } else {
        promise = response.json();
      }
      return promise;
    });
  }

  /**
   * execute a get request to a a given url with given options
   *
   * @static
   * @param {string} url url of the request.
   * @param {RequestInit} init set of options sent with the url.
   * @returns {Promise<any>} promise to return the Json response of the request.
   * @memberof Network
   */
  public static get(url: string, init: RequestInit): Promise<any> {
    return fetch(url, {
      method: "GET",
      mode: "cors",
      headers: Network.getHeaders(),
      ...init
    }).then((response: Response) => {
      let promise: Promise<any>;

      if (response.status !== 200) {
        promise = Network.handleErrorsBasedOnStatus(response);
      } else {
        promise = response.json();
      }
      return promise;
    });
  }

  /**
   * get headers that should be added to the request.
   *
   * @static
   * @param {HeadersInit} [originalHeaders] optional headers to be added/overwrite the default headers.
   * @returns {HeadersInit} headers object that needs to be added to the request.
   * @memberof Network
   */
  public static getHeaders(originalHeaders?: HeadersInit): HeadersInit {
    let headers: HeadersInit = {
      "content-type": "application/json",
      accept: "application/json"
    };

    // Add External Headers if needed here

    headers = {
      ...headers,
      ...originalHeaders
    };

    return headers;
  }

  /**
   * handle various types of errors from network request based on response status.
   *
   * @static
   * @param {Response} response response from network request
   * @returns {Promise<any>} promise to return an error with a specific message
   * @memberof Network
   */
  public static handleErrorsBasedOnStatus(response: Response): Promise<any> {
    let promise: Promise<any>;

    switch (response.status) {
      case 400:
        promise = response.json().then(data => {
          return Common.exist(data, ["message"])
            ? Promise.reject({ message: data.message })
            : Promise.reject({ message: "Unexpected Error" });
        });
        break;
      default:
        promise = Promise.reject({ message: "Unexpected Error" });
    }

    return promise;
  }
}
