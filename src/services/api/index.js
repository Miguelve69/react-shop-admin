const API = process.env.NEXT_PUBLIC_API_URL;
const VERSION = process.env.NEXT_PUBLIC_API_VERSION;

const endPoints = {
    auth: {
        login: `${API}/api/${VERSION}/auth/login`,
        profile: `${API}/api/${VERSION}/auth/profile`,
    },
    products: {
        getProduct: (id) => `${API}/api/${VERSION}/products/${id}/`,
        allProducts: `${API}/api/${VERSION}/products`,
        getProducts: (limit, offset) => `${API}/api/${VERSION}/products?limit=${limit}&offset= ${offset}`,
        addProduct: `${API}/api/${VERSION}/products`,
        updateProduct: (id) => `${API}/api/${VERSION}/products/${id}/`,
        deleteProduct: (id) => `${API}/api/${VERSION}/products/${id}/`,
    },
}

export default endPoints;