import { useState, useContext } from 'react'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import TourCard from '../components/TourCard'
import AppContext from '../src/context/state'
import usePagination from '../src/Pagination'

function Bookmarks() {
  const appCtx = useContext(AppContext)

  const tours = appCtx.bookmarks

  const [page, setPage] = useState(1)
  const PER_PAGE = 8

  const count = Math.ceil(tours.length / PER_PAGE)
  const _DATA = usePagination(tours, PER_PAGE)

  function handlePagination(e, p) {
    setPage(p)
    _DATA.jump(p)
  }

  if (!tours || tours.length === 0)
    return (
      <Box component='div'>
        <Typography
          component='h2'
          variant='h4'
          mt={5}
          mb={2}
          sx={{ textAlign: 'center' }}
        >
          No Tours found
        </Typography>
      </Box>
    )

  return (
    <Container maxWidth='lg'>
      <Box component='div'>
        <Typography
          component='h2'
          variant='h4'
          mt={5}
          mb={2}
          sx={{ textAlign: 'center' }}
        >
          My Bookmarks
        </Typography>
        <Grid
          mb={5}
          container
          direction='row'
          spacing={2}
          justifyContent='flex-start'
          alignItems='flex-start'
        >
          {_DATA.currentData().map(tour => (
            <TourCard tour={tour} key={tour.id} />
          ))}
        </Grid>
      </Box>
      <Stack spacing={2} mb={5}>
        <Pagination
          count={count}
          page={page}
          color='primary'
          size='small'
          showFirstButton
          showLastButton
          onChange={handlePagination}
        />
      </Stack>
    </Container>
  )
}

export default Bookmarks
