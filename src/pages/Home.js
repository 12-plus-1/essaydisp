import { Link } from 'react-router-dom'
import demoimg from '../image/demoImg.png'
import { Footer } from '../components/Footer'

const Home = () => {

  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener, noreferrer')
    if (newWindow) newWindow.opener = null
  }

  return (
    <main>
      <div class="container col-xxl-8 px-4 py-5">
        <div class="row flex-lg-row align-items-center g-5 py-5 mt-2">
          <div class="col-lg-6">
            <h1 class="display-5 fw-bold lh-1 mb-3">2022 北京大学夏季 event</h1>
            <p class="lead">活动简介</p>
            <div class="justify-content-md-start">
              <Link to='essay' className='btn btn-primary btn-lg px-4 me-md-2'>浏览论文</Link>
              <span>{' '}</span>
              <Link to='about' className='btn btn-outline-secondary btn-lg px-4 me-md-2'>活动详情</Link>
            </div>
          </div>
          <div class="col-10 col-sm-8 col-lg-6">
            <img src={demoimg} class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" onClick={() => openInNewTab(require('../image/demoImg.png'))} />
          </div>
        </div>
        
      </div>
      <Footer useSize={true}/>
    </main>
  )
}

export default Home