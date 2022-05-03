import { Button, TextareaAutosize, Box, TextField } from '@mui/material'
import Stack from '@mui/material/Stack'
// import { borderRadius } from '@mui/system'
import React from 'react'

const CommentForm = ({ tourId }) => {
  const [showForm, setShowForm] = React.useState(false)

  const handleSubmit = event => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = formData.get('name')
    const text = formData.get('text')
    const newCommentData = { name, text }

    fetch(`/api/comments/${tourId}`, {
      method: 'POST',
      body: JSON.stringify(newCommentData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        if (response.ok) {
          return response.json()
        }
      })
      .then(data => {
        console.log(data)
      })
      .catch(error => {
        console.log(error.message || 'Something went wrong.')
      })

    setShowForm(false)
  }

  return (
    <Stack px={3}>
      <Button
        onClick={e => setShowForm(prevState => !prevState)}
        variant='contained'
        sx={{
          display: 'inline-block',
          width: { xs: '100%', sm: '50%' },
          margin: 'auto',
        }}
      >
        Add a Comment
      </Button>
      {showForm && (
        <Box onSubmit={handleSubmit} mt={3} component='form' autoComplete='off'>
          <TextField
            required
            size='small'
            id='name'
            name='name'
            label='Your name'
            variant='outlined'
            // color='secondary'
          />
          <TextareaAutosize
            aria-required
            id='text'
            name='text'
            aria-label='comment textarea'
            placeholder='Leave a Comment'
            minRows={5}
            style={{
              display: 'block',
              width: '100%',
              margin: 'auto',
              padding: '7px 12px',
              fontSize: '1rem',
              color: '#666',
              backgroundColor: '#fefefe',
              lineHeight: 1.4,
              borderRadius: '3px',
              boxShadow: '0 1 2 rgba(0,0,0, 0.25)',
              marginTop: '1rem',
            }}
          />
          <Stack mt={1} direction='row' spacing={1}>
            <Button variant='contained' type='submit'>
              Publish
            </Button>
            <Button variant='outlined'>Cancel</Button>
          </Stack>
        </Box>
      )}
    </Stack>
  )
}

export default CommentForm
