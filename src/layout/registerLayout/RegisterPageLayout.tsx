// import React from 'react'

import { Outlet } from "react-router-dom"
import { Header } from "../../components"

const RegisterPageLayout = () => {
  return (
    <div>

        <Header />

        <Outlet />

    </div>
  )
}

export default RegisterPageLayout