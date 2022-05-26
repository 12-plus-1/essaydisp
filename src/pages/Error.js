import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className='container px-5'>
      <div className='row justify-content-center'>
        <div className='col-lg-8'>
          <h1 className='mt-5'>404 PAGE NOT FOUND</h1>
          <p className='display-6'>不存在的页面</p>
          <Link to='/' className='btn btn-outline-dark'>返回主页</Link> 
        </div>
      </div>
    </section>
  )
}

export default Error