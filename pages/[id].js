import fs from 'fs/promises'
import path from 'path'

import Image from 'next/image'
import Head from 'next/head'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import BottomNavigation from '@mui/material/BottomNavigation'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import Rating from '@mui/material/Rating'
import CustomizedAccordions from '../components/FAQ'
import BasicModal from '../components/Modal'
// import QuiltedImageList from '../components/QuiltedImageList'
import cities from '../data/data.json'
import Spinner from '../components/Spinner'
import DemoCarousel from '../components/Carousel'
import Mapbox from '../components/Mapbox'
import Grid from '@mui/material/Grid'
import Comments from '../components/Comments'
import CommentForm from '../components/CommentForm'
import { Divider } from '@mui/material'

function TourDetail({ tour }) {
  if (!tour) {
    return <Spinner />
  }

  // const tour = cities.tours.find(tour => tour.id === id)
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
        <Typography
          component='h1'
          my={1.5}
          textAlign='center'
          sx={{
            typography: {
              xs: 'h5',
              sm: 'h4',
              md: 'h3',
            },
          }}
        >
          {tour.name}
        </Typography>
        <Grid container spacing={2} mb={10}>
          <Grid item xs={12} md={6}>
            <Box>
              <DemoCarousel images={images} />
            </Box>
            <Grid container alignItems='center'>
              <Grid item xs={3}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <AccessTimeIcon fontSize='small' color='action' />
                  <Typography component='p' variant='body2' ml={1}>
                    {tour.duration} hours
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={7}>
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
                  <Typography component='p' variant='body2' ml={1} mr={1}>
                    {tour.rating.toFixed(1)}
                  </Typography>
                  <Typography component='p' variant='body3'>
                    ({tour.numberOfReviews} reviews)
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={2}>
                <Typography
                  component='p'
                  sx={{ typography: { xs: 'h6', sm: 'h5' } }}
                >
                  $ {tour.price}
                </Typography>
              </Grid>
              {/* </Box> */}
            </Grid>
            <Box mb={5}>
              <Typography component='h2' variant='h6' my={2}>
                About this ticket
              </Typography>
              <Typography component='p' variant='body1'>
                {tour.description}
              </Typography>
            </Box>
            <Box mb={2}>
              <Typography component='h2' variant='h6' my={2}>
                Frequently Asked Questions
              </Typography>
              <CustomizedAccordions />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Mapbox lng={lng} lat={lat} />
            <Box mt={5}>
              <Comments tourId={tour.id} />
            </Box>
            <Divider />
            <Box mt={5}>
              <CommentForm tourId={tour.id} />
            </Box>
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

async function getData() {
  const filePath = path.join(process.cwd(), 'data', 'data.json')
  const jsonData = await fs.readFile(filePath)
  const data = JSON.parse(jsonData)

  return data
}

export async function getStaticProps(context) {
  const { params } = context

  const tourId = params.id

  const data = await getData()

  const tour = data.tours.find(tour => tour.id.toString() === tourId)

  if (!tour) {
    return { notFound: true }
  }

  return {
    props: {
      tour,
    },
  }
}

export async function getStaticPaths() {
  const data = await getData()

  const ids = data.tours.map(tour => tour.id.toString())

  return {
    paths: ids.map(curId => ({ params: { id: curId } })),
    fallback: true,
  }
}

export default TourDetail
