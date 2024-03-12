import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import productService from "../service/product.service";
import './EditProduct.css'

const EditProduct = () => {
    const [product, setProduct] = useState({
        id: "",
        productName: "",
        description: "",
        price: "",
        status: "",
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
        productService
          .getProductById(id)
          .then((res) => {
            setProduct(res.data);
          
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);
    
      const handleChange = (e) => {
        const value = e.target.value;
        setProduct({ ...product, [e.target.name]: value });
      };
    
      const ProductUpdate = (e) => {
        e.preventDefault();
    
        productService
          .editProduct(product)
          .then((res) => {
            navigate("/Products");
            
          })
          .catch((error) => {
            console.log(error);
          });
          }


  return (
    <>
      <div>
            <div className="edi">
              <div className="edipro">Edit Product</div><br></br>
              {msg && <p className="msg">{msg}</p>}<br></br>

              <div>
                <form onSubmit={(e) => ProductUpdate(e)}>
                  <div>
                    <label>Enter Product Name</label>
                    <input
                      type="text"
                      name="productName"
                      onChange={(e) => handleChange(e)}
                      value={product.productName}
                    />
                  </div><br></br>

                  <div>
                    <label>Enter Description</label>
                    <input
                      type="text"
                      name="description"
                      onChange={(e) => handleChange(e)}
                      value={product.description}
                    />
                  </div><br></br>
                  <div>
                    <label>Enter Price</label>
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
                  <button className='btn'>Update</button>
                </form>
              </div>
            </div>
      </div>
    </>
  )
}

export default EditProduct