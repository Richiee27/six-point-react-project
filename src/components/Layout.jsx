import React from 'react'
import First from './First'
import { Outlet } from 'react-router-dom'
import FooterComp from './FooterComp'

const Layout = () => {
  return (
    <>
        <First />
        <Outlet />

        <FooterComp />
    </>
  )
}

export default Layout