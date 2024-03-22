import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import productService from "../service/product.service";
import './Products.css'
import Category from './Category';


const ProductsByCategory = () => {

    const [productList, setProductList] = useState([]);
    
    const [msg, setMsg] = useState("");
    useEffect(() => {
      init();
    }, []);
  
    const init = (categoryId) => {
      productService
        .getProductsByCategory(categoryId)
        .then((res) => {
          setProductList(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
  
  
    const deleteProduct = (id) => {
      productService
        .deleteProduct(id)
        .then((res) => {
          setMsg("Delete Sucessfully");
          init();
        })
        .catch((error) => {
          console.log(error);
        });
      }



  return (
    <>
      <div>
            <div className="all">
              <div className="allpro">
                All Product List<br></br>
                {msg && <p className='msg'>{msg}</p>}<br></br>
              </div>

              <div>
                <table>
                  <thead>
                    <tr>
                      <th>Sl No</th>
                      <th>Product Name</th>
                      <th>Description</th>
                      <th>Price</th>
                      <th>Status</th>
                     
                    </tr><br></br>
                  </thead>
                  <tbody>
                    {productList.map((p, num) => (
                      <tr className='allitem'>
                        <td>{num + 1}</td>
                        <td>{p.productName}</td>
                        <td>{p.description}</td>
                        <td>{p.price}</td>
                        <td>{p.status}</td>
                        <td>
                          <button className='delete'><Link to={'editProduct/'+p.id} className='edit'>
                            Edit
                          </Link></button>
                          
                          <button onClick={() => deleteProduct(p.id)} className='delete'>Delete</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
      </div>
    </>
  )
}

export default ProductsByCategory