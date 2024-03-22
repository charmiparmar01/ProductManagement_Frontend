import React,{useState} from 'react'
import './Navbar.css'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
      <div className='title'>Product Management</div>

      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
              <a href="/Home">Home</a>
        </li>
        
        <li>
              <a href="/Category">Category</a>
        </li>
        <li>
          <a href="/AddCategory">Add Category</a>
        </li>
        <li>
          <a href="/AddProduct">Add Product</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar