/* import external modules */
import { createTheme } from '@mui/material'

/** @description This is a functional component for configuration theme Material UI
 *  @version 1.0.0
 *  @since 19/07/2022
 *  @author Jaime Andrés Gómez Gutiérrez <g.gutierrez.j.andres@gmail.com>
 *
 *  @function
 *  @name theme
 *  @returns {Component} Returns the configuration theme of Material UI component
 **/

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#ff586b',
    },
    secondary: {
      main: '#212121',
    },
    action: {
      disabledBackground: '#ff586b26',
      disabled: '#fff',
    },
  },
})

export default theme
