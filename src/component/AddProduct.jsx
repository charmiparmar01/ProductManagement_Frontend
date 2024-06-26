import React, { useState, useEffect } from "react";
import productService from "../service/product.service";
import categoryService from "../service/category.service";
import './AddProduct.css'

const AddProduct = () => {

    const [product, setProduct] = useState({
        productName: "",
        description: "",
        price: "",
        status: "",
        categoryId: "",
      });

      const [categories, setCategories] = useState([]);

      const options = [
        {label1: 'Available'},
        {label2: 'Not Available'}
      ]
      
    
      const [msg, setMsg] = useState("");

      useEffect(() => {
        // Fetch categories when component mounts
        categoryService
          .getAllCategory()
          .then((res) => {
            setCategories(res.data); // Set category options
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);
    
      const handleChange = (e) => {
        const value = e.target.value;
        setProduct({ ...product, [e.target.name]: value });
      };

      const ProductRegsiter = (e) => {
        e.preventDefault();
    
        productService
          .saveProduct(product,product.categoryId)
          .then((res) => {
            console.log("Product Added Sucessfully");
            setMsg("Product Added Sucessfully");
            setProduct({
              productName: "",
              description: "",
              price: "",
              status: "",
              categoryId: "", 
            });
          })
          .catch((error) => {
            console.log(error);
          });
      };
    



  return (
    <>
      <div>
            <div className="add">
              <div className="addpro">Add Product</div><br></br>
              {msg && <p className="msg">{msg}</p>}<br></br>
              <div>
                <form onSubmit={(e) => ProductRegsiter(e)}>
                  <div>
                    <label>Enter Product Name:</label>
                    <input
                      type="text"
                      name="productName"
                      onChange={(e) => handleChange(e)}
                      value={product.productName}
                    />
                  </div><br></br>

                  <div>
                    <label>Enter Description:</label>
                    <input
                      type="text"
                      name="description"
                      onChange={(e) => handleChange(e)}
                      value={product.description}
                      
                    />
                  </div><br></br>
                  <div>
                    <label>Enter Price:</label>
                    <input
                      type="text"
                      name="price"
                      onChange={(e) => handleChange(e)}
                      value={product.price}
                    />
                  </div><br></br>

                  <div>
                    <label>Enter Status:</label><br></br>
                    <select name='status' value={product.status} onChange={(e) => handleChange(e)}>
              {options.map(option => (
                <option value={option.value} name='type'>{option.label1}{option.label2}</option>
              ))}
            </select>
                  </div><br></br>
                  <div>
              <label>Select Category:</label>
              <select
                name="categoryId"
                value={product.categoryId}
                onChange={(e) => handleChange(e)}
              >
                <option value="">Select Category</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.categoryName}
                  </option>
                ))}
              </select>
            </div><br></br>
                  
                  <button className="btn">Add</button>
                </form>
              </div>
            </div>
      </div>
    </>
  );
};

export default AddProduct;