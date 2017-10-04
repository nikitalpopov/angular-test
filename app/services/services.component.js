angular.
module('services').
component('services', {
    templateUrl: 'services/services.template.html',
    controller: function ServicesListController() {
        this.services = [
            {
                name: 'Web Development',
                price: 300,
                currency: '$'
            },
            {
                name: 'Design',
                price: 400,
                currency: '$'
            },
            {
                name: 'Integration',
                price: 250,
                currency: '$'
            },
            {
                name: 'Training',
                price: 220,
                currency: '$'
            }
        ];
    }
});