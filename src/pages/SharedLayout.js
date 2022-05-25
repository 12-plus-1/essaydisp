import React from 'react'
import { Outlet } from 'react-router-dom'
import { StyledNav } from '../components/StyledNav'

const SharedLayout = () => {
  return (
    <>
      <StyledNav />
      <Outlet />
    </>
  )
}

export default SharedLayout