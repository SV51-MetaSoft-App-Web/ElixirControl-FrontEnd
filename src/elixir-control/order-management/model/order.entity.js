export class Order {
    constructor(
        id,
        business,
        requestedDate,
        quantity,
        phone,
        status,
        contact
    ) {
        this.id = id;
        this.business = business;
        this.requestedDate = requestedDate;
        this.quantity = quantity;
        this.phone = phone;
        this.status = status;
        this.contact = contact;
    }
}

export class Contact {
    constructor(phone, address, email, ruc, wineType, paymentMethod, deliveryDate) {
        this.phone = phone;
        this.address = address;
        this.email = email;
        this.ruc = ruc;
        this.wineType = wineType;
        this.paymentMethod = paymentMethod;
        this.deliveryDate = deliveryDate;
    }
}