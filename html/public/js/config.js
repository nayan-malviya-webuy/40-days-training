export const config = {
    header : {
        showIfOffline : true,
    },
    
    pages: [
        {
            name: "Gaming",
            slug: "gaming",
            enable: true,
            content: {
                banner: {
                    title: "Gaming",
                    description: "Explore gaming products",
                    image: "/assets/gaming.jpg",
                    enable: true
                },
                relatedCats: {
                    title: "Related Gaming Categories",
                    endpoint: "products/search?q=gaming&limit=19&select=category,thumbnail",
                    enable: true
                },
                sections: [
                    {
                        title: "Gaming Hot Products",
                        endpoint: "/products/search?q=gaming&limit=8",
                        enable: true
                    },
                    {
                        title: "Top Sellers",
                        endpoint: "/products?sortBy=rating&order=desc&limit=8",
                        enable: true
                    }
                ]
            }
        },
        {
            name: "Phones",
            slug: "phones",
            enable: true,
            content: {
                banner: {
                    title: "Phones",
                    description: "Shop Images",
                    image: "/assets/gaming.jpg",
                    enable: true
                },
                relatedCats: {
                    title: "Related Phone Categories",
                    endpoint: "products/category/smartphones?limit=19&select=category,thumbnail",
                    enable: true
                },
                sections: [
                    {
                        title: "Phones Hot Products",
                        endpoint: "/products/category/smartphones?limit=8",
                        enable: true
                    },
                    {
                        title: "Top Sellers",
                        endpoint: "/products/category/smartphones?sortBy=rating&order=desc&limit=8",
                        enable: true
                    }
                ]
            }
        },
        {
            name: "Computing",
            slug: "computing",
            enable: true,
            content: {
                banner: {
                    title: "Computing",
                    description: "Shop Images",
                    image: "/assets/gaming.jpg",
                    enable: true
                },
                relatedCats: {
                    title: "Related Computing Categories",
                    endpoint: "products/category/laptops?limit=19&select=category,thumbnail",
                    enable: true
                },
                sections: [
                    {
                        title: "Computing Hot Products",
                        endpoint: "/products/category/laptops?limit=8",
                        enable: true
                    },
                    {
                        title: "Top Sellers",
                        endpoint: "/products/category/laptops?sortBy=rating&order=desc&limit=8",
                        enable: true
                    }
                ]
            }
        },
        {
            name: "Electronics",
            slug: "electronics",
            enable: true,
            content: {
                banner: {
                    title: "Electronic Items",
                    description: "Shop Images",
                    image: "/assets/gaming.jpg",
                    enable: true
                },
                relatedCats: {
                    title: "Related Electronics Categories",
                    endpoint: "products/category/mobile-accessories?limit=19&select=category,thumbnail",
                    enable: true
                },
                sections: [
                    {
                        title: "Electronics Hot Products",
                        endpoint: "/products/category/mobile-accessories?limit=8",
                        enable: true
                    },
                    {
                        title: "Top Sellers",
                        endpoint: "/products?sortBy=rating&order=desc&limit=8",
                        enable: true
                    }
                ]
            }
        }
    ],

    homepage: {},

    leftsidebarjson: {}
};