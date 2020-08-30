import React, { useState, useMemo, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Pagination } from 'antd'

export default function PostGrid({ posts }) {
  const [pageSize, setPageSize] = useState
  const [current, setCurrent] = useState(1)

  return (
    <section className="grid-pagination-container">
      <section className="post-grid container">

      </section>\
      <Pagination
        simple
        showSizeChanger
        onShowSizeChange
        onShowSizeChange={setPageSize}
        pageSize={pageSize}
        total = {posts.length}
        defaultCurrent = {current}
        onChange = {setCurrent}
      />
    </section>
  )
}
