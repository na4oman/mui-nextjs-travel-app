import * as React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import AppContext from '../src/context/state'
import Typography from '@mui/material/Typography'
import { useRouter } from 'next/router'
import DeleteIcon from '@mui/icons-material/Delete'

export default function BookmarksList() {
  const router = useRouter()
  const appCtx = React.useContext(AppContext)

  const bookmarks = appCtx.bookmarks

  return (
    <List sx={{ width: '160%', maxWidth: 900, bgcolor: 'background.paper' }}>
      {bookmarks.map(bookmark => (
        <ListItem
          onClick={() => router.push(`/${bookmark.id}`)}
          key={bookmark.id}
          sx={{
            transition: 'all .3s',
            '&:hover': {
              backgroundColor: 'background.light',
              // transform: 'translateY(-2px)',
            },
          }}
        >
          <ListItemAvatar>
            <Avatar alt={bookmark.name} src={bookmark.image} />
          </ListItemAvatar>
          <ListItemText
            primary={bookmark.name}
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component='span'
                  variant='body2'
                  color='text.primary'
                >
                  $
                </Typography>
                {bookmark.price}
                <Typography
                  sx={{ display: 'inline' }}
                  component='span'
                  variant='body2'
                  color='text.primary'
                >
                  {` - rating ${bookmark.rating}`}
                </Typography>
              </React.Fragment>
            }
          />
          <DeleteIcon
            onClick={event => {
              event.stopPropagation()
              appCtx.deleteFromBookmark(bookmark.id)
            }}
          />
        </ListItem>
      ))}
    </List>
  )
}
