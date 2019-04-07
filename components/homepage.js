import React, { useState, memo } from 'react'
import PropTypes from 'prop-types'
import {
  TextField,
  Button,
  Grid,
  Typography
} from '@material-ui/core'

import { Homepage } from './styles'

import MoneyTable from 'components/moneyTable'

const Index = memo(props => {
  const [ amount, setAmount ] = useState('')
  const [ amountLeft, setAmountLeft ] = useState(null)
  const [ , setProcess ] = useState(false)
  const [ error, setError ] = useState('')
  const [ result, setResult ] = useState([])

  // to change the values
  const handleChange = event => {
    setAmount(event.target.value)
  }

  // detect enter button
  const _handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      processMoney()
    }
  }

  const processMoney = () => {
    setProcess(true)
    setAmountLeft(null)
    setResult([])
    setError('')

    const fractions = [100000, 50000, 20000, 10000, 5000, 1000, 500, 100, 50]
    let amountMoney = parseInt(amount)
    let temp = []
    let result = []

    const validation = validationAmount(amount)

    if (validation) {
      amountMoney = validation

      // calculate the minimum number of rupiahs process
      while (amountMoney >= 50) {
        for (var i = 0; i < fractions.length; i++) {
          if (amountMoney >= fractions[i]) {
            temp[fractions[i]] = temp[fractions[i]] ? temp[fractions[i]] + 1 : 1
            amountMoney = amountMoney - fractions[i]
            break
          }
        }
      }

      // sort descending the result above
      let resultOrder = temp.length - 1
      temp.forEach((value, key) => {
        result[resultOrder] = { money: key, total: value }
        resultOrder--
      })

      setAmountLeft(amountMoney)
      setResult(result)
    }

    setProcess(false)
  }

  const validationAmount = (amount) => {
    amount = amount.toLowerCase()

    // check if there is 'rp' word
    if (amount.indexOf('rp') > -1) {
      const rpSplit = amount.split('rp')

      // check if amount is only Rp
      if (rpSplit[0].replace(/\s+/g, '') === '' && rpSplit[rpSplit.length - 1].replace(' ', '') === '') {
        setError('Missing value!')
        return false
      } else if (rpSplit[rpSplit.length - 1].replace(/\s+/g, '') === '') { // check if Rp is wrong position
        setError('Valid character in wrong position!')
        return false
      } else {
        amount = rpSplit[1].replace(/\s+/g, '')
      }
    }
    if (amount.indexOf('.') > -1) {
      amount = amount.replace('.', '')
    }

    // check if there are ',' & '.' in a input and after ',' is not 00
    if (amount.indexOf(',') > -1 || amount.indexOf(' ') > -1) {
      if (amount.split(',')[1] !== '00') {
        setError('Invalid separator!')
        return false
      }
    }

    return parseInt(amount)
  }

  return (
    <div css={Homepage}>
      <div className="topHeader">
        <Typography className="title" component="h2" variant="h1" gutterBottom>
           Rupiah Denominations
        </Typography>
      </div>
      <Grid container spacing={8}>
        <Grid item xs={9}>
          <TextField
            label="Amount"
            value={amount}
            onChange={handleChange}
            onKeyPress={_handleKeyPress}
            margin="normal"
            error={Boolean(error)}
            helperText={error}
            fullWidth
          />
        </Grid>
        <Grid item xs={3}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            disabled={amount === ''}
            onClick={processMoney}
            style={{ marginTop: 30 }}
          >
              Process
          </Button>
        </Grid>
      </Grid>

      <MoneyTable data={result} amountLeft={amountLeft} />
    </div>
  )
})

Index.propTypes = {
  classes: PropTypes.object.isRequired
}

export default Index
