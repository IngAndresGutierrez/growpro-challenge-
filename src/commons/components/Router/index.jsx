/* import external modules */
import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

/* import internal modules */
import Loading from '../../../commons/components/Loading'
const LazyLanding = lazy(() =>
  import('../../../modules/landing/components/pages/landing')
)
const LazyPageNotFound = lazy(() =>
  import('../../../modules/notFound/components/pages/notFound')
)

/** @description This is a functional component for main router app
 *  @version 1.0.0
 *  @since 19/07/2022
 *  @author Jaime Andrés Gómez Gutiérrez <g.gutierrez.j.andres@gmail.com>
 *
 *  @function
 *  @name Router
 *  @returns {Component} Returns the main router component
 **/

const RouterComponent = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<LazyLanding />} />
          <Route path="*" element={<LazyPageNotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default RouterComponent
