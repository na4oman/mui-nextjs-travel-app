import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'
import { keyframes } from '@emotion/react'

const slide = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`

export default function MaterialUIDrawer(props) {
  const [openDrawer, setOpenDrawer] = React.useState(props.state)

  function toggleDrawerHandler(event) {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setOpenDrawer(openDrawer => !openDrawer)
  }

  function openDrawerHandler() {
    setOpenDrawer(true)
  }

  function closeDrawerHandler() {
    // console.log('FROM DRAWER closeDrawerHandler function')
    setOpenDrawer(false)
    props.onCloseDrawer()
  }

  const list = (
    <Box
      sx={{ width: 250 }}
      // sx={{
      //   width: 250,
      //   animation: `${slide} 0.8s ease-out both`,
      // }}
      role='presentation'
      onClick={toggleDrawerHandler}
      onKeyDown={toggleDrawerHandler}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    // <div>
    //   <React.Fragment>
    //     <Button onClick={toggleDrawer}>Toggle Drawer</Button>
    <SwipeableDrawer
      open={openDrawer}
      onClose={closeDrawerHandler}
      onOpen={openDrawerHandler}
      sx={{
        // width: 250,
        animation: `${slide} 0.8s ease-out both`,
      }}
      role='presentation'
      onClick={toggleDrawerHandler}
      onKeyDown={toggleDrawerHandler}
    >
      {list}
    </SwipeableDrawer>
    //   </React.Fragment>
    // </div>
  )
}
