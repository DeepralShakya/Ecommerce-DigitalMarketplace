export const PRODUCT_CATEGORIES = [
    {
        label:"UI kits",
        value:"ui_kits" as const,
        featured: [
            {
                name: "Editor picks",
                href: "#",
                imageSrc: "/nav/ui-kits/mixed.jpg"
            },
            {
                name: "New Arrivals",
                href: "#",
                imageSrc: "/nav/ui-kits/blue.jpg"
            },
            {
                name: "Best Seller",
                href: "#",
                imageSrc: "/nav/ui-kits/purple.jpg"
            }
        ]
    },
    {
        label:"Icons",
        value:"icons" as const,
        featured: [
            {
                name: "Favourite Icon Picks",
                href: "#",
                imageSrc: "/nav/icons/picks.jpg"
            },
            {
                name: "New Arrivals",
                href: "#",
                imageSrc: "/nav/icons/new.jpg"
            },
            {
                name: "Best SellingIcons",
                href: "#",
                imageSrc: "/nav/icons/bestsellers.jpg"
            }
        ]
    }
]