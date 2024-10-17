import { Product } from './product.entity';
export class Order extends  Product {
    constructor(
        id,
        businessName,
        contactName,
        email,
        address,
        ruc,
        quantity,
        phone,
        name,
        paymentMethod,
        paymentTerms,
        date,
        deliveryDate,
        orderStatus
    ) {
        super(name);
        this.id = id; // Identificador único del pedido / nro solicitud
        this.businessName = businessName; // Nombre del negocio
        this.contactName = contactName; // Nombre del contacto
        this.email = email; // Correo electrónico del contacto
        this.address = address; // Dirección del contacto
        this.ruc = ruc; // RUC del negocio o contacto
        this.quantity = quantity; // Cantidad de productos
        this.phone = phone; // Teléfono del contacto
        this.paymentMethod = paymentMethod; // Metodo de pago utilizado
        this.paymentTerms = paymentTerms; // Plazo de pago
        this.date = date; // Fecha del pedido
        this.deliveryDate = deliveryDate; // Fecha de entrega
        this.orderStatus = orderStatus; // Estado del pedido
    }
}
