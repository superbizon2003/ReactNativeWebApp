// не обязательно использовать в таком виде
// во всех компонентах можно вызывать этот хук, а сам хук менять по обстоятельствам

import React, {useState, useEffect} from 'react'

const useFetchData = ({storageKey, url}) => {
  const cachedData = JSON.parse(localStorage.getItem(storageKey))
  const [data, setData] = useState(cachedData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!data) {
      setLoading(true)
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          localStorage.setItem(storageKey, JSON.stringify(data))
          return setData(data)
        })
        .catch((error) => setError(error))
        .finally(() => setLoading(false))
    }
  }, [storageKey, url, data])

  return {data, loading, error}
}

export default useFetchData

// const SomeComponent = (props) => {
//   const {data, loading, error} = useFetchData()
//   return (
//     <React.Fragment>
//       {loading && <div>{'Loading...'}</div>}
//       {!loading && error && <div>{`Error: ${error}`}</div>}
//       {!loading && !error && data && (
//         <div>{/* INSERT SOME AMAZING UI */}</div>
//       )}
//     </React.Fragment>
//   )
// }
