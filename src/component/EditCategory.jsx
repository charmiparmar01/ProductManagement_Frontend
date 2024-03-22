import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import './EditProduct.css'
import categoryService from '../service/category.service';

const EditCategory = () => {
    const [category, setCategory] = useState({
        id: "",
        categoryName: "",
        description: "",
       
      });

      
      const options = [
        {label1: 'Available'},
        {label2: 'Not Available'}
      ]
    
      const navigate = useNavigate();
    
      const { id } = useParams();
      console.log(id);
    
      const [msg, setMsg] = useState("");
    
      useEffect(() => {
        categoryService
          .getCategoryById(id)
          .then((res) => {
            setCategory(res.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);
    
      const handleChange = (e) => {
        const value = e.target.value;
        setCategory({ ...category, [e.target.name]: value });
      };
    
      const CategoryUpdate = (e) => {
        e.preventDefault();
    
        categoryService
          .editCategory(category)
          .then((res) => {
            navigate("/Category");
          })
          .catch((error) => {
            console.log(error);
          });
          }


  return (
    <>
      <div>
            <div className="edi">
              <div className="edipro">Edit Category</div><br></br>
              {msg && <p className="msg">{msg}</p>}<br></br>

              <div>
                <form onSubmit={(e) => CategoryUpdate(e)}>
                  <div>
                    <label>Enter Category Name</label>
                    <input
                      type="text"
                      name="categoryName"
                      onChange={(e) => handleChange(e)}
                      value={category.categoryName}
                    />
                  </div><br></br>

                  <div>
                    <label>Enter Description</label>
                    <input
                      type="text"
                      name="description"
                      onChange={(e) => handleChange(e)}
                      value={category.description}
                    />
                  </div><br></br>
                 
                  <button className='btn'>Update</button>
                </form>
              </div>
            </div>
      </div>
    </>
  )
}

export default EditCategory