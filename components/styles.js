import { css } from '@emotion/core'

export const ContainerStyle = css`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  max-width: 600px;
`

export const Homepage = {
  textAlign: 'center',
  paddingTop: 'calc(50vh - 166px)',

  '& .topHeader': {
    '& .title': {
      fontWeight: 600,
      marginBottom: 50,
      fontSize: 40,
      color: '#333'
    },

    '& img': {
      width: 300,
      marginBottom: 15
    }
  },

  '@media (max-width: 599px)': {
    textAlign: 'center',
    paddingTop: 'calc(50vh - 230px)',

    '& .topHeader': {
      '& .title': {
        fontSize: 40
      }
    },

    '& img': {
      width: '100%',
      maxWidth: 200
    }
  }
}

export const AmountTableRoot = {
  width: '100%',
  maxWidth: 500,
  margin: '0 auto',
  marginTop: 30,
  overflowX: 'auto'
}

export const AmountTable = {
  width: '100%',
  maxWidth: 500
}
