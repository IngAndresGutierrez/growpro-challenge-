/* import external modules */
import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Grid, Typography } from '@mui/material'

/* import internal modules */
import RentBikeForm from '../RentBikeForm'
import {
  setSnackbar,
  getCommonsState,
} from '../../../../../redux/slices/commonsSlice'
import Card from '../../../../../commons/components/Card'
import useGetBikesList from '../../../hooks/useGetBikesList'
import Dialog from '../../../../../commons/components/Dialog'

/** @description This is a functional component bikes list page
 *  @version 1.0.0
 *  @since 17/08/2022
 *  @author Jaime Andrés Gómez Gutiérrez <g.gutierrez.j.andres@gmail.com>
 *
 *  @function
 *  @name BikesList
 *  @returns {Component} Returns the bikes list view
 **/

const BikesList = () => {
  const dispatch = useDispatch()
  const { bikes } = useGetBikesList()
  const { disableRentButton } = useSelector(getCommonsState)

  const onRentAction = () => {
    dispatch(
      setSnackbar({
        handleSnackbar: {
          message: 'Bicicleta alquilada',
          status: true,
          severity: 'success',
        },
      })
    )
  }

  const renderDialogFunction = (image, category, name) => {
    return (
      <Dialog
        title="Alquilar Bicicleta"
        content={
          <>
            <Card image={image} title={`${category} - ${name} `} />
            <RentBikeForm type={category} />
          </>
        }
        titleActionButton="Alquilar"
        disableActionButton={disableRentButton}
        onActionButton={onRentAction}
      />
    )
  }

  const renderBikes = (bikes, category) => {
    return (
      <>
        {bikes.map((bike) => {
          return (
            <Grid item xs={12} md={4} key={bike.id}>
              <Card
                image={bike.image}
                title={bike.name}
                actionButton={renderDialogFunction(
                  bike.image,
                  category,
                  bike.name
                )}
              />
            </Grid>
          )
        })}
      </>
    )
  }

  const renderBikesList = bikes.map((category) => {
    return (
      <Fragment key={category.category}>
        <Typography
          variant="h4"
          sx={{
            marginTop: 4,
            color: 'white',
            backgroundColor: 'black',
          }}
        >
          {category.category}
        </Typography>
        <Grid item xs={12}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              {renderBikes(category.bikes, category.category)}
            </Grid>
          </Box>
        </Grid>
      </Fragment>
    )
  })

  return (
    <Box sx={{ flexGrow: 1, margin: 3 }}>
      <Grid container spacing={2}>
        {renderBikesList}
      </Grid>
    </Box>
  )
}

export default BikesList
