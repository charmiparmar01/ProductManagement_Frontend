import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import categoryService from "../service/category.service";
import './Products.css'


const Category = () => {
    const [categoryList, setCategoryList] = useState([]);
    
  const [msg, setMsg] = useState("");
  useEffect(() => {
    init();
  }, []);

  const init = () => {
    categoryService
      .getAllCategory()
      .then((res) => {
        setCategoryList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  const deleteCategory = (id) => {
    categoryService
      .deleteCategory(id)
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
                All Category List<br></br>
                {msg && <p className='msg'>{msg}</p>}<br></br>
              </div>

              <div>
                <table>
                  <thead>
                    <tr>
                      <th>Sl No</th>
                      <th>Category Name</th>
                      <th>Description</th>
                    
                     
                    </tr><br></br>
                  </thead>
                  <tbody>
                    {categoryList.map((c, num) => (
                      <tr className='allitem' key={c.id}>
                        <td>{num + 1}</td>
                        <td><Link to={'/Products/' +c.id} className='catname'>{c.categoryName}</Link></td>
                        <td>{c.description}</td>
                       
                        <td>
                          {/* <button className='delete'><Link to={'editCategory/'+p.id} className='edit'>
                            Edit
                    </Link></button>*/}
                           
                          <button onClick={() => deleteCategory(c.id)} className='delete'>Delete</button>
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

export default Category