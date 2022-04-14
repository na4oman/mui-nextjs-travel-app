import Image from 'next/image'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import CustomizedAccordions from '../components/FAQ'
import BasicModal from '../components/Modal'
import QuiltedImageList from '../components/QuiltedImageList'
import { useRouter } from 'next/router'
import cities from '../src/data.json'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import Rating from '@mui/material/Rating'
import Spinner from '../components/Spinner'

function TourDetail() {
  const router = useRouter()
  let { id } = router.query
  id = +id

  if (!id) {
    return <Spinner />
  }

  const tour = cities.tours.find(tour => tour.id === id)

  return (
    <Container maxWidth='md'>
      <Typography component='h1' variant='h3' my={1.5}>
        {tour.name}
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 1,
        }}
      >
        <Box sx={{ gridColumn: 'span 3' }}>
          <Image src={tour.image} alt={tour.name} width={600} height={300} />
        </Box>
        <Box sx={{ gridColumn: '4' }}>
          <QuiltedImageList />
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          my: 2,
          pl: 2,
          pr: 4,
        }}
      >
        <Box sx={{ display: 'flex' }}>
          <AccessTimeIcon fontSize='small' color='action' />
          <Typography component='p' variant='body2' ml={1}>
            {tour.duration} hours
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Rating
            name='read-only'
            value={tour.rating}
            precision={0.5}
            readOnly
          />
          <Typography component='p' variant='body2' ml={1} mr={2}>
            {tour.rating.toFixed(1)}
          </Typography>
          <Typography component='p' variant='body3'>
            ({tour.numberOfReviews} reviews)
          </Typography>
        </Box>
        <Typography component='p' variant='h5'>
          $ {tour.price}
        </Typography>
      </Box>
      <Box mb={5}>
        <Typography component='h2' variant='h6' my={2}>
          About this ticket
        </Typography>
        <Typography component='p' variant='body1'>
          {tour.description}
        </Typography>
      </Box>
      <Box mb={10}>
        <Typography component='h2' variant='h6' my={2}>
          Frequently Asked Questions
        </Typography>
        <CustomizedAccordions />
      </Box>
      <Paper
        sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation showLabels>
          <BottomNavigationAction icon={<BasicModal />} />
        </BottomNavigation>
      </Paper>
    </Container>
  )
}

export default TourDetail
