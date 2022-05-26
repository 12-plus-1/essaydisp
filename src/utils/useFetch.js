import { useState, useEffect } from 'react'
import paginate from './paginate'
import essays from '../data/testData' 

export const useFetch = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

  const getEssays = async () => {
    setLoading(true)
    const localData = await essays
    const newData = paginate(localData)
    setData(newData)
    setLoading(false)
  }

  useEffect(() => {
    getEssays()
  }, [loading])
  return { loading, data }
}
