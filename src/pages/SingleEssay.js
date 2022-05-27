import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import data from '../data/testData' 
import { Footer } from '../components/Footer'

const SingleEssay = () => {
  const {id} = useParams();
  const {name, department, title, abstract, mainContent, conclusion} = data.find((item) => item.id === id)
  const navigate = useNavigate()

  useEffect(() => {
  window.scrollTo(0,0);
}, []);


  return (
    <>
      <section className='container px-4 pb-5'>
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
            <button className='btn btn-primary' onClick={() => navigate(-1)}>返回列表</button>
          </div>
        </div>
      </section>
      <Footer useSize={false} />
    </>

  )
}

export default SingleEssay