import React from 'react'
import FetchDataWrapper from '../best-practice/FetchDataWrapper'
import Receipts from '../components/Receipts'

function ReceiptsPage() {
  return (
    <div>
      <FetchDataWrapper>
        <Receipts />
      </FetchDataWrapper>
    </div>
  )
}

export default ReceiptsPage
