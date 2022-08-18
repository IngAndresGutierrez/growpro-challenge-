/* import external modules */
import React from 'react'
import Footer from '../../../../commons/components/Footer'

/* import internal modules */
import BikesList from '../organisms/BikesList'

/** @description This is a functional component landing page
 *  @version 1.0.0
 *  @since 20/07/2022
 *  @author Jaime Andrés Gómez Gutiérrez <g.gutierrez.j.andres@gmail.com>
 *
 *  @function
 *  @name Landing
 *  @returns {Component} Returns the landing view
 **/

const LandingPage = () => {
  return (
    <>
      <BikesList />
      <Footer />
    </>
  )
}

export default LandingPage
