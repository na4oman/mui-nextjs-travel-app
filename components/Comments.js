import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import useSwr from 'swr'
import * as React from 'react'
import { styled } from '@mui/material/styles'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}))

const fetcher = (...args) => fetch(...args).then(res => res.json())

function Comments({ tourId }) {
  const [showComments, setShowComments] = React.useState(true)

  const { data, error } = useSwr(`/api/comments/${tourId}`, fetcher, {
    refreshInterval: 10,
  })

  if (error) return <Box>Failed to load</Box>
  if (!data) return <Box>Loading...</Box>

  const { comments } = data

  if (comments.length === 0) {
    return (
      <Stack>
        {/* <Box textAlign='center'>
          <Button
            variant='outlined'
            onClick={() => setShowComments(prevState => !prevState)}
          >
            {showComments ? 'Hide Comments' : 'Show Comments'}
          </Button>
        </Box> */}
        {!showComments && (
          <Box mt={5} textAlign='center'>
            No comments yet. Be the first to add a comment!
          </Box>
        )}
      </Stack>
    )
  }

  return (
    <Stack>
      <Box textAlign='center'>
        <Button
          variant='outlined'
          onClick={() => setShowComments(prevState => !prevState)}
        >
          {showComments ? 'Hide Comments' : 'Show Comments'}
        </Button>
      </Box>
      <Stack sx={{ px: { sm: 5 } }}>
        <Demo>
          {!showComments && (
            <Box my={5} textAlign='center'>
              Click the button to load comments.
            </Box>
          )}
          {showComments && (
            <List>
              {comments.map(comment => (
                <ListItem
                  key={comment._id}
                  sx={{
                    '&:hover': {
                      backgroundColor: 'background.light',
                    },
                  }}
                >
                  <ListItemAvatar>
                    <Avatar src={comment.image} alt={comment.image} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={comment.message}
                    secondary={comment.author}
                  />
                </ListItem>
              ))}
            </List>
          )}
        </Demo>
      </Stack>
    </Stack>
  )
}

export default Comments
