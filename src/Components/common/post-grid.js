import React, {useState, useMemo, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Pagination} from 'antd'

export default function PostGrid({posts}) {
const [pageSize, setPageSize] = useState(9)

  return (
    <section className="grid-pagination-container">
          <section className="post-grid container">

          </section>\
          <Pagination simple showSizeChanger onShowSizeChange onShowSizeChange={setPageSize} pageSize={pageSize} />
    </section>
  )
}
