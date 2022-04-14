import * as React from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'

export default function Spinner() {
  return (
    <Box
      sx={{
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        transform: 'scale(2)',
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <CircularProgress />
    </Box>
  )
}
