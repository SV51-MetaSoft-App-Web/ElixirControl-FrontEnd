export class Order {
    constructor(
        id,
        business,
        date,
        quantity,
        phone,
        contact
    ) {
        this.id = id;
        this.business = business;
        this.date = date;
        this.quantity = quantity;
        this.phone = phone;
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