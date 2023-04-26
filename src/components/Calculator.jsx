import React from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'
import { Close } from '@mui/icons-material'

const Calculator = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', rowGap: '1em', justifyContent: 'space-between', alignItems: 'flex-start', maxWidth: '300px', boxSizing: 'border-box', p: 2 }} >
      <Typography variant='h5' gutterBottom>
        Matrix dimension:
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} >
        <TextField required label='Row' />
        <Close sx={{ color: '#cfcfcf' }} />
        <TextField required label='Column' />
      </Box>
      <Button variant='outlined' size='large' fullWidth >Set matrix</Button>
    </Box>
  )
}

export default Calculator