/* import external modules */
import { PropTypes } from 'prop-types'
import { useDispatch } from 'react-redux'
import React, { useState, useEffect } from 'react'
import { Grid, Slider, TextField, Typography } from '@mui/material'
import { setDisableRentButton } from '../../../../../redux/slices/commonsSlice'

/** @description This is a functional component rent bike form page
 *  @version 1.0.0
 *  @since 17/08/2022
 *  @author Jaime Andrés Gómez Gutiérrez <g.gutierrez.j.andres@gmail.com>
 *
 *  @function
 *  @name RentBikeForm
 *  @returns {Component} Returns the rent bike form
 **/

const marks = [
  {
    value: 10,
    label: '10 Dias',
  },
  {
    value: 50,
    label: '50 Dias',
  },
  {
    value: 100,
    label: '100 Dias',
  },
]

const RentBikeForm = ({ type }) => {
  const dispatch = useDispatch()
  const [days, setDays] = useState(1)
  const [totalRent, setTotalRent] = useState(0)
  const [dataInputs, setDataInputs] = useState({
    date: '',
    name: '',
    email: '',
    celphone: '',
  })

  useEffect(() => {
    totalRentFunction()
  }, [dataInputs, days])

  const totalRentFunction = () => {
    switch (type) {
      case 'Eléctricas':
        electricBikePrice()
        break

      case 'Normales':
        normalBikePrice()
        break

      case 'Antiguas':
        oldBikePrice()
        break
    }

    enableRentButton()
  }

  const saveData = () => {
    window.localStorage.setItem(
      'rentBike',
      JSON.stringify({ ...dataInputs, days })
    )
  }

  const electricBikePrice = () => {
    const dayOfMont = dataInputs.date.split('-')[2]
    const basePrice = dayOfMont >= 15 ? 12 : 10
    const total = basePrice * days

    setTotalRent(total)
  }

  const normalBikePrice = () => {
    const dayOfMont = dataInputs.date.split('-')[2]
    const basePrice = dayOfMont >= 15 ? 12 : 10
    const total = basePrice * days

    setTotalRent(total)
  }

  const oldBikePrice = () => {
    const dayOfMont = dataInputs.date.split('-')[2]
    const basePrice = dayOfMont >= 15 ? 12 : 10
    const total = basePrice * days

    setTotalRent(total)
  }

  const enableRentButton = () => {
    const { date, name, email, celphone } = dataInputs

    if (totalRent > 0 && date && name && email && celphone && days) {
      dispatch(setDisableRentButton({ disableRentButton: false }))
      saveData()
    }
  }

  const onChangeDataInputs = (event) => {
    const nameInput = event.target.name
    const valueInput = event.target.value

    setDataInputs({ ...dataInputs, [nameInput]: valueInput })
  }

  const handleChangeDays = (event, newValue) => {
    setDays(newValue)
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          name="name"
          label="Nombre"
          variant="standard"
          sx={{ width: '90%' }}
          value={dataInputs.name}
          onChange={onChangeDataInputs}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          name="email"
          label="Correo"
          variant="standard"
          sx={{ width: '90%' }}
          value={dataInputs.email}
          onChange={onChangeDataInputs}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          name="celphone"
          label="Celular"
          variant="standard"
          sx={{ width: '90%' }}
          value={dataInputs.celphone}
          onChange={onChangeDataInputs}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          name="date"
          type="date"
          variant="standard"
          value={dataInputs.date}
          onChange={onChangeDataInputs}
          sx={{ width: '90%', marginTop: 1 }}
        />
      </Grid>
      <Grid item xs={12}>
        <Slider
          min={1}
          value={days}
          marks={marks}
          valueLabelDisplay="auto"
          onChange={handleChangeDays}
          sx={{ width: '90%', marginTop: 1 }}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5" sx={{ color: 'gray', marginTop: 1 }}>
          Precio
        </Typography>
        ${totalRent}
      </Grid>
    </Grid>
  )
}

RentBikeForm.propTypes = {
  type: PropTypes.string,
}

export default RentBikeForm
