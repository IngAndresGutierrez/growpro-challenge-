/* import external modules */
import React from 'react'
import { Typography } from '@mui/material'

/** @description This is a functional component for footer
 *  @version 1.0.0
 *  @since 17/08/2022
 *  @author Jaime Andrés Gómez Gutiérrez <g.gutierrez.j.andres@gmail.com>
 *
 *  @function
 *  @name Footer
 *  @returns {Component} Returns the footer
 **/

const Footer = () => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      sx={{ pt: 4, margin: 5 }}
      onClick={() => alert('Alejandra Pachón Vargas - Te quiero mucho :D')}
    >
      {'A.P.V © '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

export default Footer
