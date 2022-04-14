import { createTheme } from '@mui/material'

const theme = createTheme({
  palette: {
    primary: {
      main: '#403c37',
    },
    secondary: {
      main: '#1f93a5',
    },
    background: {
      light: '#ececeb',
    },
  },
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: 'body2',
          },
          style: {
            fontSize: 11,
          },
        },
        {
          props: {
            variant: 'body3',
          },
          style: {
            fontSize: 10,
          },
        },
      ],
    },
  },
  // components: {
  //   MuiTypography: {
  //     variants: [
  //       {
  //         props: {
  //           variant: 'button',
  //         },
  //         style: {
  //           backgroundColor: 'primary.main',
  //         },
  //       },
  //     ],
  //   },
  // },
})

export default theme
