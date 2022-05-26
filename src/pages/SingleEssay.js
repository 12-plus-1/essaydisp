import React from 'react'
import { useParams, Link } from 'react-router-dom'
import data from '../data/testData' 

const SingleEssay = () => {
  const {id} = useParams();
  const {name, department, title, abstract, mainContent, conclusion} = data.find((item) => item.id === id)
  return (
    <section className='container px-4'>
      <div className='row justify-content-center'>
        <div className='col-lg-10'>
          <h1 className='mt-5'>{title}</h1>
          <h6 className='mb-2 text-muted'>{name} {department}</h6>
          <h2>摘要</h2>
          <p className='lead'>{abstract}</p>
          <h2>正文</h2>
          <p>{mainContent}</p>
          <h2>结论</h2>
          <p>{conclusion}</p>
          <Link to='/'>返回主页</Link>
        </div>
      </div>
    </section>
  )
}

export default SingleEssay