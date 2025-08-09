import React from 'react'

const Table = ({ data }) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Symbol</th>
                        <th>Price (USD)</th>
                        <th>24h Change (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data?.map((coin) => (
                            <tr key={coin?.id}>
                                <td>{coin.market_cap_rank}</td>
                                <td>{coin?.name}</td>
                                <td>{coin.symbol}</td>
                                <td>{coin.current_price}</td>
                                <td>{coin.price_change_percentage_24h}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table