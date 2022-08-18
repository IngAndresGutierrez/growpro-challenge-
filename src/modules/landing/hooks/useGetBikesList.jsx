/* import external modules */
import { useEffect, useState } from 'react'

/* import internal modules */
import { getBikesService } from '../components/services/bikes'

const useGetBikesList = () => {
  const [bikes, setBikes] = useState([])

  useEffect(() => {
    getBikesFunction()
  }, [])

  const getBikesFunction = () => {
    const bikesList = getBikesService()
    setBikes(bikesList)
  }

  return { bikes }
}

export default useGetBikesList
