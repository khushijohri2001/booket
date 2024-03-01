import React, { useEffect } from 'react'
import { EmptyList } from '../components'

const Signin = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <div>
        <EmptyList label="Signin" />
    </div>
  )
}

export default Signin