/* import external modules */
import React from 'react'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { PersistGate } from 'redux-persist/integration/react'

/* import internal modules */
import theme from '../Theme'
import Router from '../Router'
import { store } from '../../../redux/store'
import Loading from '../../components/Loading'
import SnackBar from '../../components/SnackBar'

/** @description This is a functional component for redux, redux persist configuration and rooter called
 *  @version 1.0.0
 *  @since 19/07/2022
 *  @author Jaime Andrés Gómez Gutiérrez <g.gutierrez.j.andres@gmail.com>
 *
 *  @function
 *  @name App
 *  @returns {Component} Returns the configuration and router
 **/

const persistor = persistStore(store)

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<Loading />}>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <Router />
          <SnackBar />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  )
}

export default App
