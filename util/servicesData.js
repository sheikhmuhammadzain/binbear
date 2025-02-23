const servicesData = [
    {
        id: 1,
        title: "Junk Hauling",
        type: "self-service",
        description: "Select items for removal",
        items: [
            { id: "item1", name: "Furniture", price: 50 },
            { id: "item2", name: "Appliances", price: 75 },
            { id: "item3", name: "Electronics", price: 40 },
            { id: "item4", name: "Yard Waste", price: 35 },
            { id: "item5", name: "Construction Debris", price: 80 },
            // Add more items as needed
        ]
    },
    {
        id: 2,
        title: "Post Construction Cleanup & Hauling",
        type: "construction",
        description: "Estimate by truck load",
        pricePerLoad: 299,
        contact: {
            phone: "1-800-XXX-XXXX",
            email: "contact@example.com",
            text: "555-XXX-XXXX"
        }
    },
    {
        id: 3,
        title: "Apartment Trash Valet",
        type: "valet",
        description: "Contact us for valet service",
        contact: {
            phone: "1-800-XXX-XXXX",
            email: "contact@example.com",
            text: "555-XXX-XXXX"
        }
    }
];

export default servicesData; 