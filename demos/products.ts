import { Product } from "../models"

let productsDemo: Product[] = [
    {
        id: "1",
        name: "Samsung Galaxy A21s",
        price: 6000000,
        characteristic: [
            {
                name: "Тип",
                value: "Моноблок",
            },
            {
                name: "Стандарт",
                value: "2G, 3G, 4G (LTE), 5G",
            },
            {
                name: "Операционная система",
                value: "iOS 14",
            }
        ],
        sales: [
            {
                saleType: "bundle",
                description: "Наушники в подарок",
                value: "Apple AirPods",
            },
            {
                saleType: "discount",
                description: "Скидка 20% на смартфоны",
                value: "- 10 000 сум",
            },
        ],
        images: [
            "/img/image 21.png",
            "/img/image 21.png",
            "/img/image 21.png",
            "/img/image 21.png",
            "/img/image 21.png",
        ],
        installmentPlans: [
            {
                months: 3,
                markup: 5,
            },
            {
                months: 6,
                markup: 10,
            },
            {
                months: 12,
                markup: 15,
            },
            {
                months: 24,
                markup: 20,
            },
        ]
    },
    {
        id: "1",
        name: "Смартфон Apple iPhone 11 128 Gb Slim Box черный",
        price: 6000000,
        characteristic: [
            {
                name: "Тип",
                value: "Моноблок",
            },
            {
                name: "Стандарт",
                value: "2G, 3G, 4G (LTE), 5G",
            },
            {
                name: "Операционная система",
                value: "iOS 14",
            }
        ],
        sales: [
            {
                saleType: "tradeIn",
                description: "Обменяй свой старый айфон и получи скидку на новый",
                value: "- 400 000 сум",
            },
        ],
        images: [
            "/img/image 22.png",
            "/img/image 22.png",
            "/img/image 22.png",
            "/img/image 22.png",
            "/img/image 22.png",
        ],
        installmentPlans: [
            {
                months: 3,
                markup: 5,
            },
            {
                months: 6,
                markup: 10,
            },
            {
                months: 12,
                markup: 15,
            },
            {
                months: 24,
                markup: 20,
            },
        ]
    },
    {
        id: "1",
        name: "Наушники Apple AirPods",
        price: 6000000,
        characteristic: [
            {
                name: "Тип",
                value: "Моноблок",
            },
            {
                name: "Стандарт",
                value: "2G, 3G, 4G (LTE), 5G",
            },
            {
                name: "Операционная система",
                value: "iOS 14",
            }
        ],
        sales: [
            {
                saleType: "imei",
                description: "Скидка на айфоны",
                info: "IMEI 012345678901234",
                value: "- 10 000 сум",
            },
        ],
        images: [
            "/img/image 23.png",
            "/img/image 23.png",
            "/img/image 23.png",
            "/img/image 23.png",
            "/img/image 23.png",
        ],
        installmentPlans: [
            {
                months: 3,
                markup: 5,
            },
            {
                months: 6,
                markup: 10,
            },
            {
                months: 12,
                markup: 15,
            },
            {
                months: 24,
                markup: 20,
            },
        ]
    },
    {
        id: "1",
        name: "Samsung Galaxy Z Fold",
        price: 6000000,
        characteristic: [
            {
                name: "Тип",
                value: "Моноблок",
            },
            {
                name: "Стандарт",
                value: "2G, 3G, 4G (LTE), 5G",
            },
            {
                name: "Операционная система",
                value: "iOS 14",
            }
        ],
        sales: [
            {
                saleType: "bundle",
                description: "Наушники в подарок",
                value: "Apple AirPods",
            },
            {
                saleType: "discount",
                description: "Скидка 20% на смартфоны",
                value: "- 10 000 сум",
            },
        ],
        images: [
            "/img/image 26.png",
            "/img/image 26.png",
            "/img/image 26.png",
            "/img/image 26.png",
            "/img/image 26.png",
        ],
        installmentPlans: [
            {
                months: 3,
                markup: 5,
            },
            {
                months: 6,
                markup: 10,
            },
            {
                months: 12,
                markup: 15,
            },
            {
                months: 24,
                markup: 20,
            },
        ]
    },
    {
        id: "1",
        name: "Смартфон Apple iPhone 11 128 Gb Slim Box черный",
        price: 6000000,
        characteristic: [
            {
                name: "Тип",
                value: "Моноблок",
            },
            {
                name: "Стандарт",
                value: "2G, 3G, 4G (LTE), 5G",
            },
            {
                name: "Операционная система",
                value: "iOS 14",
            }
        ],
        sales: [
            {
                saleType: "tradeIn",
                description: "Обменяй свой старый айфон и получи скидку на новый",
                value: "- 400 000 сум",
            },
        ],
        images: [
            "/img/image 22.png",
            "/img/image 22.png",
            "/img/image 22.png",
            "/img/image 22.png",
            "/img/image 22.png",
        ],
        installmentPlans: [
            {
                months: 3,
                markup: 5,
            },
            {
                months: 6,
                markup: 10,
            },
            {
                months: 12,
                markup: 15,
            },
            {
                months: 24,
                markup: 20,
            },
        ]
    },
]

productsDemo = [
    ...productsDemo,
    ...productsDemo,
    ...productsDemo,
    ...productsDemo,
    ...productsDemo,
    ...productsDemo,
    ...productsDemo,
    ...productsDemo,
    ...productsDemo,
    ...productsDemo,
]

productsDemo = [
    ...productsDemo,
    ...productsDemo,
]

productsDemo = productsDemo.map<Product>((e,i) => {
    return {
        ...e,
        id: i.toString(),
    }
})

export default productsDemo;
