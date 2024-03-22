import axios from "axios";

const API_URL = "http://localhost:8080"; 

class ProductService {

    saveProduct(product) {
        return axios.post(API_URL + "/saveProduct/13", product);
    }

    getAllProduct() {
        return axios.get(API_URL + "/");
    }

    getProductById(id) {
        return axios.get(API_URL + "/" + id);
    }

    deleteProduct(id) {
        return axios.delete(API_URL + "/deleteProduct/" + id);
    }

    editProduct(product) {
        return axios.patch(API_URL + "/editProduct/" + product.id, product);
    }

    getProductsByCategory(categoryId) {
        return axios.get(API_URL + "/getProductsByCategory/" +categoryId);
    }

}

export default new ProductService;