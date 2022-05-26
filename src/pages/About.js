import React from 'react'
import { Link } from 'react-router-dom'
import { Footer } from '../components/Footer'

const About = () => {
  return (
    <>
      <section className='container px-4'>
        <div className='row justify-content-center'>
          <div className='col-lg-10'>
            <h1 className='mt-5'>关于本项目</h1>
            <p>关于本项目</p>
            <Link to='/'>返回主页</Link>
          </div>
        </div>
      </section>
      <Footer useSize={true}/>
    </>

  )
}

export default About