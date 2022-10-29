import axios from "axios";

const ProductService = {

    getMany: async () => {

        try {
            const req = await fetch(`${import.meta.env.VITE_URL}`);
            const product = await req.json();
            return product;
        }
        catch {
            return{Message: "Ops, algo deu errado"}
        }
    },
    getById: async (idProduct) => {

        try {
            const req = await fetch(`${import.meta.env.VITE_URL}${idProduct}`);
            const currentProduct = await req.json();
            return currentProduct;
        }
        catch {
            return{Message: "Ops, algo deu errado"}
        }
    },
    getByCategory: async (categoryName) => {

        try {
            const req = await fetch(`https://fakestoreapi.com/products/category/${categoryName}`);
            const productsFound = await req.json();
            return productsFound;
        }
        catch {
            return{Message: "Ops, algo deu errado"}
        }

    }
}

export default ProductService;