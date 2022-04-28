import * as React from 'react'
import Image from 'next/image'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import Box from '@mui/material/Box'
import Rating from '@mui/material/Rating'
import Grid from '@mui/material/Grid'
import { useRouter } from 'next/router'
import AppContext from '../src/context/state'
import FavoriteIcon from '@mui/icons-material/Favorite'
import SendIcon from '@mui/icons-material/Send'

function TourCard({ tour }) {
  const router = useRouter()

  const appCtx = React.useContext(AppContext)

  function handleLikes() {
    appCtx.addToBookmark(tour)
  }

  return (
    <Grid item xs='auto' sm={6} md={4} lg={3}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia>
          <Image
            src={`${tour.image}`}
            alt={tour.name}
            width={345}
            height={150}
          />
        </CardMedia>
        <CardContent sx={{ marginBottom: -1 }}>
          <Typography gutterBottom component='h2' variant='h6'>
            {tour.name}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <AccessTimeIcon fontSize='small' color='action' />
            <Typography component='p' variant='body2' ml={1}>
              {tour.duration} hours
            </Typography>
            <Typography component='p' variant='h6' ml='auto'>
              ${tour.price}
            </Typography>
          </Box>
          <Box mb={2} sx={{ display: 'flex', alignItems: 'center' }}>
            <Rating
              name='read-only'
              value={tour.rating}
              precision={0.5}
              readOnly
            />
            <Typography component='p' variant='body2' ml={1}>
              {tour.rating.toFixed(1)}
            </Typography>
            <Typography component='p' variant='body3' ml='auto'>
              ({tour.numberOfReviews} reviews)
            </Typography>
          </Box>
          <Typography component='p' variant='body2'>
            {tour.excerpt}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size='small'
            onClick={handleLikes}
            // startIcon={<FavoriteIcon />}
            // variant='contained'
          >
            Like
          </Button>
          <Button
            size='small'
            onClick={() => router.push(`/${tour.id}`)}
            // variant='contained'
            // endIcon={<SendIcon />}
          >
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default TourCard
