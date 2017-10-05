angular.
module('services').
component('services', {
    templateUrl: 'services/services.template.html',
    controller: function ServicesListController() {
        this.services = [
            {
                name: 'Web Development',
                price: 300,
                currency: '$',
                isChosen: false
            },
            {
                name: 'Design',
                price: 400,
                currency: '$',
                isChosen: false
            },
            {
                name: 'Integration',
                price: 250,
                currency: '$',
                isChosen: false
            },
            {
                name: 'Training',
                price: 220,
                currency: '$',
                isChosen: false
            }
        ];

        this.total = 0;

        var self = this;

        self.updateTotal = function setTotal(service) {
            service.isChosen = !service.isChosen;
            if (service.isChosen)
                self.total += service.price;
            else
                self.total -= service.price;
        };

    }
});