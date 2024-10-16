export class Clients {
    /**
     * Creates an instance of Clients.
     * @param {Object} params - The parameters to create an Clients
        * @param {number} [params.id=0] - The unique identifier of the Clients
     * @param {string} [params.person_name=''] - The first name of the Clients
     * @param {string} [params.dni=''] - The last name of the Clients
     * @param {string} [params.email=''] - The identifier of the Clients
     * @param {string} [params.business_name=''] - The ticket identifier of the Clients
     * @param {string} [params.phone=''] - The check-in date of the Clients
     * @param {string} [params.address=''] - The check-in date of the Clients
     * @param {string} [params.country=''] - The check-in date of the Clients
     * @param {string} [params.city=''] - The check-in date of the Clients
     * @param {string} [params.ruc=''] - The check-in date of the Clients
     * @returns {Clients} - An instance of Clients
     */

    constructor({id, person_name, dni, email, business_name, phone, address, country, city, ruc}) {
        this.id = id;
        this.person_name = person_name;
        this.dni = dni;
        this.email = email;
        this.business_name = business_name;
        this.phone = phone;
        this.address = address;
        this.country = country;
        this.city = city;
        this.ruc = ruc;

    }
}
