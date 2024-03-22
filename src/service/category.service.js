import axios from "axios";

const API_URL = "http://localhost:8080"; 

class CategoryService {

    saveCategory(category) {
        return axios.post(API_URL + "/saveCategory", category);
    }

    getAllCategory() {
        return axios.get(API_URL + "/category");
    }

    getCategoryById(id) {
        return axios.get(API_URL + "/category" + id);
    }

    deleteCategory(id) {
        return axios.delete(API_URL + "/deleteCategory/" + id);
    }

    editCategory(category) {
        return axios.patch(API_URL + "/editCategory/" + category.id, category);
    }

}

export default new CategoryService;