import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const StyledNav = () => {

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary">
      <div className="container">
        <Link to='/' className='navbar-brand'>论文展示项目</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className='nav-item'>
              <NavLink to='/' className={({ isActive }) => 
                isActive ? 'nav-link active' : 'nav-link'
                }>主页</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='about' className={({ isActive }) => 
                isActive ? 'nav-link active' : 'nav-link'
                }>活动详情</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='essay' className={({ isActive }) => 
                isActive ? 'nav-link active' : 'nav-link'
                }>论文列表</NavLink>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="搜索标题或者作者" aria-label="Search" />
            <button className="btn btn-primary" type="submit"><i className="bi bi-search"></i></button>
          </form>
        </div>
      </div>
    </nav>
  )
}
