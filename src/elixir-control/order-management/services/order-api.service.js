import axios from "axios";
import { Order } from "../model/order.entity.js";

const http = axios.create({ baseURL: "https://my-json-server.typicode.com/SV51-MetaSoft-App-Web/endpoint-order-management" });

export class OrderProcessApiService {
    constructor() {
        this.resourceEndpoint = '/order';
    }

    async getAllOrders() {
        const response = await http.get(this.resourceEndpoint);

        // Mapear los datos de respuesta a instancias de Order
        return response.data.map(item => new Order(
            item.id,
            item.businessName,
            item.requestedDate,
            item.quantity,
            item.phone,
            item.status,
            item.contact
        ));
    }

    getOrderById(id) {
        return http.get(`${this.resourceEndpoint}/${id}`);
    }

    create(order) {
        return http.post(this.resourceEndpoint, order);
    }

    update(id, order) {
        return http.put(`${this.resourceEndpoint}/${id}`, order);
    }

    async delete(id) {
        return await http.delete(`${this.resourceEndpoint}/${id}`);
    }

    findOrderById(id) {
        return http.get(`${this.resourceEndpoint}?id=${id}`);
    }
}

export default new OrderProcessApiService();