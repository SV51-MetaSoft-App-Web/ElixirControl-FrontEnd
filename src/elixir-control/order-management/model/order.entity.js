export class Order {
    constructor(
        id,
        business,
        requestedDate,
        quantity,
        phone,
        status,
        contact,
        products,
        transportConditions,
        paymentTerms,
        name,
        address,
        email,
        ruc,
        wineType,
        paymentMethod,
        deliveryDate
    ) {
        this.id = id;
        this.business = business;
        this.requestedDate = requestedDate;
        this.quantity = quantity;
        this.phone = phone;
        this.status = status;
        this.contact = contact;
        this.products = products;
        this.transportConditions = transportConditions;
        this.paymentTerms = paymentTerms;
        this.name = name;
        this.address = address;
        this.email = email;
        this.ruc = ruc;
        this.wineType = wineType;
        this.paymentMethod = paymentMethod;
        this.deliveryDate = deliveryDate;
    }
}

