/* import external modules */
import React from 'react'
import Box from '@mui/material/Box'
import { CircularProgress } from '@mui/material'

/* import internal modules */

/** @description This is a functional component loading
 *  @version 1.0.0
 *  @since 19/07/2022
 *  @author Jaime Andrés Gómez Gutiérrez <g.gutierrez.j.andres@gmail.com>
 *
 *  @function
 *  @name Loading
 *  @returns {Component} Returns the loading view
 **/

const Loading = () => {
  return (
    <Box>
      <CircularProgress />
    </Box>
  )
}

export default Loading
