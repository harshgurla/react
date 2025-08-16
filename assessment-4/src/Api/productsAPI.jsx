import { apiClient } from "../apiClient";


 export const getProducts = async () => {
    try {
        const response = await apiClient.get('/products');
        return response.data.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw new Error ('failed to fetch products')
 }
 }

  