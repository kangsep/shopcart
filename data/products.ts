export interface Product {
  id: number;
  name: string;
  price: number;
  desc: string;
  image: string;
  rating: number;
  buyed: number;
  colors?: string[];
  stock?: number;
}

export const deals: Product[] = [
    {
    id: 1,
    name: "HomePod mini",
    price: 239.00,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus eius minus tempora.",
    image: "/placeholder/homepod.png",
    rating: 4,
    buyed: 121,
    colors: ["#F2EAE0","#B4D3D9","#687FE5"],
    stock: 13,
    },

    {
    id: 2,
    name: "Instax Mini 9",
    price: 99.00,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus eius minus tempora.",
    image: "/placeholder/instax.png",
    rating: 4,
    buyed: 121,
    colors: ["#F2EAE0","#B4D3D9","#687FE5"],
    stock: 13,
    },

    {
    id: 3,
    name: "Base Camp Duffle M",
    price: 159.00,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus eius minus tempora.",
    image: "/placeholder/duffle.png",
    rating: 5,
    buyed: 121,
    colors: ["#F2EAE0","#B4D3D9","#687FE5"],
    stock: 13,
    },

    {
    id: 4,
    name: "Tot e large",
    price: 231.00,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus eius minus tempora.",
    image: "/placeholder/tote.png",
    rating: 5,
    buyed: 121,
    colors: ["#F2EAE0","#B4D3D9","#687FE5"],
    stock: 13,
    },

    {
    id: 5,
    name: "Gaming Headphone",
    price: 78.00,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus eius minus tempora.",
    image: "/placeholder/headphone.png",
    rating: 5,
    buyed: 121,
    colors: ["#F2EAE0","#B4D3D9","#687FE5"],
    stock: 13,
    },

    {
    id: 6,
    name: "Tomford Watch",
    price: 85.00,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus eius minus tempora.",
    image: "/placeholder/watch.png",
    rating: 5,
    buyed: 121,
    colors: ["#F2EAE0","#B4D3D9","#687FE5"],
    stock: 13,
    },
]

export const trending: Product[] = [
    {
    id: 31,
    name: "Cabin",
    price: 239.00,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus eius minus tempora.",
    image: "/placeholder/cabin.png",
    rating: 5,
    buyed: 121,
    colors: ["#F2EAE0","#B4D3D9","#687FE5"],
    stock: 13,
    },

    {
    id: 32,
    name: "Laptop sleeve MacBook",
    price: 59.00,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus eius minus tempora.",
    image: "/placeholder/sleeve.png",
    rating: 4,
    buyed: 121,
    colors: ["#F2EAE0","#B4D3D9","#687FE5"],
    stock: 13,
    },

    {
    id: 33,
    name: "Supreme Water Bottle",
    price: 59.00,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus eius minus tempora.",
    image: "/placeholder/supreme.png",
    rating: 5,
    buyed: 121,
    colors: ["#F2EAE0","#B4D3D9","#687FE5"],
    stock: 13,
    },

    {
    id: 34,
    name: "Laptop sleeve MacBook",
    price: 59.00,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus eius minus tempora.",
    image: "/placeholder/sleeve-orange.png",
    rating: 5,
    buyed: 121,
    colors: ["#F2EAE0","#B4D3D9","#687FE5"],
    stock: 13,
    },

    {
    id: 35,
    name: "Flower Laptop Sleeve",
    price: 39.00,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus eius minus tempora.",
    image: "/placeholder/flower-sleeve.png",
    rating: 5,
    buyed: 121,
    colors: ["#F2EAE0","#B4D3D9","#687FE5"],
    stock: 13,
    },

]

export const mostSelling: Product[] = [
    {
    id: 71,
    name: "Instax Mini 11",
    price: 89.00,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus eius minus tempora.",
    image: "/placeholder/mini11.png",
    rating: 4,
    buyed: 176,
    colors: ["#F2EAE0","#B4D3D9","#687FE5"],
    stock: 9,
    },

    {
    id: 72,
    name: "Hand Watch",
    price: 59.00,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus eius minus tempora.",
    image: "/placeholder/hwatch.png",
    rating: 4,
    buyed: 122,
    colors: ["#F2EAE0","#B4D3D9","#687FE5"],
    stock: 6,
    },

    {
    id: 73,
    name: "adidas Sneakers",
    price: 159.00,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus eius minus tempora.",
    image: "/placeholder/adidas.png",
    rating: 4,
    buyed: 142,
    colors: ["#F2EAE0","#B4D3D9","#687FE5"],
    stock: 8,
    },

    {
    id: 74,
    name: "Pendleton Water Bottle",
    price: 89.00,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus eius minus tempora.",
    image: "/placeholder/pendleton.png",
    rating: 4,
    buyed: 136,
    colors: ["#F2EAE0","#B4D3D9","#687FE5"],
    stock: 21,
    },

    {
    id: 75,
    name: "Macbook Pro 13",
    price: 1089.00,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus eius minus tempora.",
    image: "/placeholder/macbook-13.png",
    rating: 4,
    buyed: 136,
    colors: ["#F2EAE0","#B4D3D9","#687FE5"],
    stock: 17,
    },
]

export const allProducts = [
  ...deals,
  ...trending,
  ...mostSelling,
];