import http from "../../../shared/services/http-common.js";

export class ClientsService{
    /**
     * API endpoint for clients
     * @type {string}
     */
    resourceEndpoint = '/clients';

    /**
     * Gets all clients
     * @returns {Promise<axios.AxiosResponse<any>>}
     * @method getAll
     */
    getAll() {
        console.log(http.defaults.baseURL);
        console.log(this.resourceEndpoint);
        return http.get(this.resourceEndpoint);
    }

    /**
     * Updates a client by id
     * @param id
     * @param data
     * @returns {Promise<axios.AxiosResponse<any>>}
     */
    update(id, data) {
        return http.put(`${this.resourceEndpoint}/${id}`, data);
    }
}