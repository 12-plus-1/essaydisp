import React, {useState, useEffect} from 'react'
// import { useFetch } from '../utils/useFetch'
import { SingleCard } from '../components/SingleCard'
import data from '../data/testData2' 
import { Footer } from '../components/Footer'
import { useGlobalContext } from '../context'

const EssayList = () => {
  // const [loading, setLoading] = useState(true)
  const [curList, setCurlist] = useState([])
  const {page, setPage} = useGlobalContext()

  useEffect(() => {
    setCurlist(data[page])
    console.log(location.hostname);
  }, [page])

  const handlePage = (index) => {
    setPage(index)
  }

  const handleSwitch = (commmand) => {
    if (commmand === 0 && page !== 0) {
      setPage(page - 1)
    }else if (commmand === 1 && page !== data.length - 1) {
      setPage(page + 1)
    }
  }

  return (
    <>

      <div className='container px-3 pt-5 pb-3'>
        <h2 className='display-6 text-center pb-4'>论文列表</h2>

        <nav aria-label="...">
          <ul className="pagination justify-content-center">
            <li className="page-item"><button className='page-link' onClick={() => handleSwitch(0)}><span aria-hidden="true">&laquo;</span></button></li>
            {
              data.map((item, index) => {
                console.log(index)
                return (
                  <li className={`page-item ${index === page && 'active'}`} key={index}><button className='page-link' onClick={() => handlePage(index)}>{index + 1}</button></li>
                )
              })
            }
            <li className="page-item"><button className='page-link' onClick={() => handleSwitch(1)}><span aria-hidden="true">&raquo;</span></button></li>
          </ul>
        </nav>

        <div className='row gx-5 gy-4 justify-content-center mt-2 mb-5'>
            {
              curList.map((item) => {
                return (
                  <div className='col-md-5'>
                    <SingleCard key={item.id} {...item} />
                  </div>
                )
              })
            }
        </div>

        <nav aria-label="...">
          <ul className="pagination justify-content-center">
            <li className="page-item"><button className='page-link' onClick={() => handleSwitch(0)}><span aria-hidden="true">&laquo;</span></button></li>
            {
              data.map((item, index) => {
                console.log(index)
                return (
                  <li className={`page-item ${index === page && 'active'}`} key={index}><button className='page-link' onClick={() => handlePage(index)}>{index + 1}</button></li>
                )
              })
            }
            <li className="page-item"><button className='page-link' onClick={() => handleSwitch(1)}><span aria-hidden="true">&raquo;</span></button></li>
          </ul>
        </nav>
        
      </div>
      <Footer useSize={false}/>
    </>
  )
}

export default EssayList