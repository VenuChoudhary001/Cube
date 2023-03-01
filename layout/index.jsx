import React from 'react'
import Navbar from '../components/navbar'

const Layout = ({children}) => {
  return (
    <>
    <section  className='font-primary'>
<Navbar/>
    {children}
    </section>
    </>
  )
}

export default Layout