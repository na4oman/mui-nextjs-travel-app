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

function Comments({ tourId }) {
  const [showComments, setShowComments] = React.useState(false)

  const { data, error } = useSwr(`/api/comments/${tourId}`)

  if (error) return <Box>Failed to load</Box>
  if (!data) return <Box>Loading...</Box>
  console.log(data)

  return (
    <Stack>
      <Box textAlign='center'>
        <Button
          variant='outlined'
          onClick={() => setShowComments(prevState => !prevState)}
        >
          Load Comments
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
              <ListItem
                sx={{
                  '&:hover': {
                    backgroundColor: 'background.light',
                  },
                }}
              >
                <ListItemAvatar>
                  <Avatar
                    src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
                    alt='Photo of Person one'
                  />
                </ListItemAvatar>
                <ListItemText
                  primary='I like this place very much. It is one of my favourites.'
                  secondary='Antony Michaels'
                />
              </ListItem>
              <ListItem
                sx={{
                  '&:hover': {
                    backgroundColor: 'background.light',
                  },
                }}
              >
                <ListItemAvatar>
                  <Avatar src='https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' />
                </ListItemAvatar>
                <ListItemText
                  primary='I like this place very much. It is one of my favourites.'
                  secondary='Antony Michaels'
                />
              </ListItem>
              <ListItem
                sx={{
                  '&:hover': {
                    backgroundColor: 'background.light',
                  },
                }}
              >
                <ListItemAvatar>
                  <Avatar src='https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' />
                </ListItemAvatar>
                <ListItemText
                  primary='I like this place very much. It is one of my favourites.'
                  secondary='Antony Michaels'
                />
              </ListItem>
            </List>
          )}
        </Demo>
      </Stack>
    </Stack>
  )
}

export default Comments
