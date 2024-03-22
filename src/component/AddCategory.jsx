import React, { useState } from "react";
import categoryService from "../service/category.service";
import './AddProduct.css'

const AddCategory = () => {

    const [category, setCategory] = useState({
        categoryName: "",
        description: "",
        
      });

      const options = [
        {label1: 'Available'},
        {label2: 'Not Available'}
      ]
      
    
      const [msg, setMsg] = useState("");
    
      const handleChange = (e) => {
        const value = e.target.value;
        setCategory({ ...category, [e.target.name]: value });
      };

      const CategoryRegsiter = (e) => {
        e.preventDefault();
    
        categoryService
          .saveCategory(category)
          .then((res) => {
            console.log("Category Added Sucessfully");
            setMsg("Category Added Sucessfully");
            setCategory({
              categoryName: "",
              description: "",
             
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
              <div className="addpro">Add Category</div><br></br>
              {msg && <p className="msg">{msg}</p>}<br></br>
              <div>
                <form onSubmit={(e) => CategoryRegsiter(e)}>
                  <div>
                    <label>Enter Category Name:</label>
                    <input
                      type="text"
                      name="categoryName"
                      onChange={(e) => handleChange(e)}
                      value={category.categoryName}
                    />
                  </div><br></br>

                  <div>
                    <label>Enter Description:</label>
                    <input
                      type="text"
                      name="description"
                      onChange={(e) => handleChange(e)}
                      value={category.description}
                      
                    />
                  </div><br></br>
                 
                  <button className="btn">Add</button>
                </form>
              </div>
            </div>
      </div>
    </>
  );
};

export default AddCategory;