import React from 'react'
import useFetchData from './hooks/useFetchData'

const FetchDataWrapper = ({children, storageKey, url}) => {
  const {data, loading, error} = useFetchData({storageKey, url})
  return (
    <React.Fragment>
      {loading && <div>{'Loading...'}</div>}
      {!loading && error && <div>{`Error: ${error}`}</div>}
      {!loading &&
        !error &&
        data &&
        React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {data})
          }
          return child
        })}
    </React.Fragment>
  )
}

export default FetchDataWrapper
