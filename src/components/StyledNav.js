import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

export const StyledNav = () => {
  const nevigate = useNavigate()

  const handleNav = (target) => {
    nevigate(target)
  }

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary">
      <div className="container">
        <Link to='/' className='navbar-brand'>论文展示项目</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div class="offcanvas offcanvas-end text-white bg-primary" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">论文展示项目</h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <ul className="navbar-nav me-auto mb-2 mb-md-0 text-white">
              <li className='nav-item'>
                <NavLink to='/' className={({ isActive }) => 
                  isActive ? 'nav-link active' : 'nav-link'
                  }
                  data-bs-dismiss="offcanvas"
                  onClick={() => handleNav('/')}
                  >主页</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='about' className={({ isActive }) => 
                  isActive ? 'nav-link active' : 'nav-link'
                  }
                  data-bs-dismiss="offcanvas"
                  onClick={() => handleNav('about')}
                  >活动详情</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='essay' className={({ isActive }) => 
                  isActive ? 'nav-link active' : 'nav-link'
                  }
                  data-bs-dismiss="offcanvas"
                  onClick={() => handleNav('essay')}
                  >论文列表</NavLink>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="搜索标题或者作者" aria-label="Search" />
              <button className="btn btn-primary" type="submit"><i className="bi bi-search"></i></button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  )
}
