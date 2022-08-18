/* import external modules */
import {
  CardMedia,
  Typography,
  CardActions,
  CardContent,
  Card as MuiCard,
} from '@mui/material'
import React from 'react'
import { PropTypes } from 'prop-types'

/* import internal modules */

/** @description This is a functional component card
 *  @version 1.0.0
 *  @since 17/08/2022
 *  @author Jaime Andrés Gómez Gutiérrez <g.gutierrez.j.andres@gmail.com>
 *
 *  @function
 *  @name Card
 *  @returns {Component} Returns the card view
 **/

const Card = ({ image, title, description, actionButton }) => {
  return (
    <MuiCard sx={{ maxWidth: 500 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>{actionButton}</CardActions>
    </MuiCard>
  )
}

Card.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  actionButton: PropTypes.element,
}

export default Card
