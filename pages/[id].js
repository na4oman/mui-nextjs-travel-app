import Image from 'next/image'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import BottomNavigation from '@mui/material/BottomNavigation'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import Rating from '@mui/material/Rating'
import CustomizedAccordions from '../components/FAQ'
import BasicModal from '../components/Modal'
import QuiltedImageList from '../components/QuiltedImageList'
import cities from '../src/data.json'
import Spinner from '../components/Spinner'
import DemoCarousel from '../components/Carousel'
import Mapbox from '../components/MapBox'
import Grid from '@mui/material/Grid'

function TourDetail() {
  const router = useRouter()
  let { id } = router.query
  id = +id

  if (!id) {
    return <Spinner />
  }

  const tour = cities.tours.find(tour => tour.id === id)
  let imagesArr = cities.tours.map(tour => tour.image)
  const tourImage = tour.image
  imagesArr.unshift(tourImage)
  const images = [...new Set(imagesArr)]
  const [lat, lng] = tour.location

  return (
    <>
      <Head>
        <title>{tour.name}</title>
        <meta name='description' content={tour.description} />
      </Head>
      <Container maxWidth='lg'>
        <Typography component='h1' variant='h3' my={1.5} textAlign='center'>
          {tour.name}
        </Typography>
        <Grid
          container
          spacing={2}
          // sx={{
          //   display: 'grid',
          //   gridTemplateColumns: 'repeat(6, 2fr)',
          //   gap: 2,
          // }}
        >
          <Grid item xs={6}>
            <Box
            // sx={{
            //   display: 'grid',
            //   gridTemplateColumns: 'repeat(4, 1fr)',
            //   gap: 1,
            // }}
            >
              {/* <Box sx={{ gridColumn: 'span 3' }}>
            <Image src={tour.image} alt={tour.name} width={600} height={300} />
          </Box>
          <Box sx={{ gridColumn: '4' }}>
            <QuiltedImageList />
          </Box> */}
              <DemoCarousel images={images} />
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
          </Grid>
          <Grid item xs={6}>
            <Mapbox lng={lng} lat={lat} />
          </Grid>
        </Grid>
        <Paper
          sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
          elevation={3}
        >
          <BottomNavigation showLabels>
            <BasicModal />
          </BottomNavigation>
        </Paper>
      </Container>
    </>
  )
}

export default TourDetail
