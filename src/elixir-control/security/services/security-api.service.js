import http from "../../../shared/services/http-common.js";


export class SecurityApiService {

    constructor(_resourceEndpoint) {
        this.resourceEndpoint = _resourceEndpoint;
    }

    getAllResources() {
        return http.get(this.resourceEndpoint);
    }

    getResourceById(id) {
        return http.get(`${this.resourceEndpoint}/${id}`);
    }

    create(security) {
        return http.post(this.resourceEndpoint, security);
    }

    update(id, resource) {
        return http.put(`${this.resourceEndpoint}/${id}`, resource);
    }

    delete(id) {
        return http.delete(`${this.resourceEndpoint}/${id}`);
    }

}