import React, { useEffect } from 'react'
import axios from 'axios';

const Table = () => {
  useEffect(() => {
    const priceContainers = document.querySelectorAll('.price-container')
    const twentyFourChangeContainers = document.querySelectorAll('.twenty-four-container')
    const sevenChangeContainers = document.querySelectorAll('.seven-container')
    const percentageContainers = [twentyFourChangeContainers, sevenChangeContainers]
    const marketCapContainers = document.querySelectorAll('.market-cap-container')
    const volumeContainers = document.querySelectorAll('.volume-container')
    const supplyContainers = document.querySelectorAll('.supply-container')
    const coins = ['bitcoin', 'ethereum', 'binancecoin', 'tether', 'solana']

    const setCoinsPrices = async () => {
      for (let i = 0; i <= 4; i++) {
        const setValue = async () => {
          const response = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${coins[i]}&vs_currencies=usd`)
          const coinPrice = response.data[`${coins[i]}`].usd
          const toMoney = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(coinPrice)
          priceContainers[i].innerText = toMoney
        }
        setValue()
      }
      setTimeout(setCoinsPrices, 90000)
    }
    setCoinsPrices()

    const setPercentageChanges = async () => {
      for (let i = 0; i <= 4; i++) {
        const setValue = async () => {
          const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${coins[i]}`)
          let coin24HChange = response.data.market_data.price_change_percentage_24h
          let coin7DChange = response.data.market_data.price_change_percentage_7d
          const changes = [coin24HChange, coin7DChange]
          for (const [index, currentContainer] of percentageContainers.entries()) {
            let currentChange = changes[index]
            if (currentChange < 0) {
              currentChange *= -1
              currentContainer[i].previousElementSibling.remove()
              currentContainer[i].classList.remove('positive')
              currentContainer[i].classList.add('negative')
              const newCaret = document.createElement('i')
              newCaret.classList.add('fas', 'fa-caret-down', 'negative')
              currentContainer[i].insertAdjacentElement('beforebegin', newCaret)
            } else {
              currentContainer[i].previousElementSibling.remove()
              currentContainer[i].classList.remove('negative')
              currentContainer[i].classList.add('positive')
              const newCaret = document.createElement('i')
              newCaret.classList.add('fas', 'fa-caret-up', 'positive')
              currentContainer[i].insertAdjacentElement('beforebegin', newCaret)
            }
            currentContainer[i].innerText = `${currentChange.toFixed(2)}%`
          }
        }
        setValue()
      }
      setTimeout(setPercentageChanges, 90000)
    }
    setPercentageChanges()

    const setOtherData = async () => {
      for (let i = 0; i <= 4; i++) {
        const setValue = async () => {
          const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${coins[i]}`)
          const marketCap = response.data.market_data.market_cap.usd
          const capToMoney = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(marketCap)
          marketCapContainers[i].textContent = capToMoney
          const volume = response.data.market_data.total_volume.usd
          const volumeToMoney = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(volume)
          volumeContainers[i].textContent = volumeToMoney
          const circSupply = response.data.market_data.circulating_supply
          const circSupplyFormatted = new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }).format(circSupply)
          supplyContainers[i].textContent = circSupplyFormatted
        }
        setValue()
      }
      setTimeout(setOtherData, 90000)
    }
    setOtherData()
  }, [])

  return (
    <div className="table-wrapper">
      <table className="table">
        <thead>
          <tr>
            <th className="to-center">#</th>
            <th className="to-left">Name</th>
            <th className="to-right">Price</th>
            <th className="to-right">24h Change</th>
            <th className="to-right">7d Change</th>
            <th className="to-right">Market Cap</th>
            <th className="to-right">24h Volume</th>
            <th className="to-right">Circulating Supply</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="to-center"><span className="rank">1</span></td>
            <td>
              <div className="currency-container">
                <img className="image-container"
                  src="https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579"
                  alt="Bitcoin" />
                <span className="currency-name">Bitcoin</span>
                <span className="currency-symbol">BTC</span>
              </div>
            </td>
            <td className="to-right price">
              <span className='price-container'>$----------</span>
            </td>
            <td className="to-right twenty-four-hour">
              <span></span>
              <span className="twenty-four-container">----------</span>
            </td>
            <td className="to-right seven-day">
              <span></span>
              <span className="seven-container">----------</span>
            </td>
            <td className="to-right market-cap">
              <span className='market-cap-container'>$----------</span>
            </td>
            <td className="to-right twenty-four-hour-volume">
              <span className='volume-container'>$----------</span>
            </td>
            <td className="to-right circ-supply">
              <span className='supply-container'>---------</span><span className="currency-symbol circ-symbol">BTC</span>
            </td>
          </tr>
          <tr>
            <td className="to-center"><span className="rank">2</span></td>
            <td>
              <div className="currency-container">
                <img className="image-container"
                  src="https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880"
                  alt="Ethereum" />
                <span className="currency-name">Ethereum</span>
                <span className="currency-symbol">ETH</span>
              </div>
            </td>
            <td className="to-right price">
              <span className='price-container'>$----------</span>
            </td>
            <td className="to-right twenty-four-hour">
              <span></span>
              <span className="twenty-four-container">----------</span>
            </td>
            <td className="to-right seven-day">
              <span></span>
              <span className="seven-container">----------</span>
            </td>
            <td className="to-right market-cap">
              <span className='market-cap-container'>$----------</span>
            </td>
            <td className="to-right twenty-four-hour-volume">
              <span className='volume-container'>$----------</span>
            </td>
            <td className="to-right circ-supply">
              <span className='supply-container'>---------</span><span className="currency-symbol circ-symbol">ETH</span>
            </td>
          </tr>
          <tr>
            <td className="to-center"><span className="rank">3</span></td>
            <td>
              <div className="currency-container">
                <img className="image-container"
                  src="https://assets.coingecko.com/coins/images/825/small/binance-coin-logo.png?1547034615"
                  alt="Binance Coin" />
                <span className="currency-name">Binance Coin</span>
                <span className="currency-symbol">BNB</span>
              </div>
            </td>
            <td className="to-right price">
              <span className='price-container'>$----------</span>
            </td>
            <td className="to-right twenty-four-hour">
              <span></span>
              <span className="twenty-four-container">----------</span>
            </td>
            <td className="to-right seven-day">
              <span></span>
              <span className="seven-container">----------</span>
            </td>
            <td className="to-right market-cap">
              <span className='market-cap-container'>$----------</span>
            </td>
            <td className="to-right twenty-four-hour-volume">
              <span className='volume-container'>$----------</span>
            </td>
            <td className="to-right circ-supply">
              <span className='supply-container'>---------</span><span className="currency-symbol circ-symbol">BNB</span>
            </td>
          </tr>
          <tr>
            <td className="to-center"><span className="rank">4</span></td>
            <td>
              <div className="currency-container">
                <img className="image-container"
                  src="https://assets.coingecko.com/coins/images/325/small/Tether-logo.png?1598003707"
                  alt="Tether" />
                <span className="currency-name">Tether</span>
                <span className="currency-symbol">USDT</span>
              </div>
            </td>
            <td className="to-right price">
              <span className='price-container'>$----------</span>
            </td>
            <td className="to-right twenty-four-hour">
              <span></span>
              <span className="twenty-four-container">----------</span>
            </td>
            <td className="to-right seven-day">
              <span></span>
              <span className="seven-container">----------</span>
            </td>
            <td className="to-right market-cap">
              <span className='market-cap-container'>$----------</span>
            </td>
            <td className="to-right twenty-four-hour-volume">
              <span className='volume-container'>$----------</span>
            </td>
            <td className="to-right circ-supply">
              <span className='supply-container'>---------</span><span className="currency-symbol circ-symbol">USDT</span>
            </td>
          </tr>
          <tr>
            <td className="to-center"><span className="rank">5</span></td>
            <td>
              <div className="currency-container">
                <img className="image-container"
                  src="https://assets.coingecko.com/coins/images/4128/small/solana.png?1640133422"
                  alt="Solana" />
                <span className="currency-name">Solana</span>
                <span className="currency-symbol">SOL</span>
              </div>
            </td>
            <td className="to-right price">
              <span className='price-container'>$----------</span>
            </td>
            <td className="to-right twenty-four-hour">
              <span></span>
              <span className="twenty-four-container">----------</span>
            </td>
            <td className="to-right seven-day">
              <span></span>
              <span className="seven-container">----------</span>
            </td>
            <td className="to-right market-cap">
              <span className='market-cap-container'>$----------</span>
            </td>
            <td className="to-right twenty-four-hour-volume">
              <span className='volume-container'>$----------</span>
            </td>
            <td className="to-right circ-supply">
              <span className='supply-container'>---------</span><span className="currency-symbol circ-symbol">SOL</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )

}

export default Table