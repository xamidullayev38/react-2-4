import React from 'react'
import styled from 'styled-components'

const NotFoundWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
`

export default function NotFound() {
  return (
    <NotFoundWrapper>
        <h1 className='fs-1'>404 Not Found</h1>
    </NotFoundWrapper>
  )
}
