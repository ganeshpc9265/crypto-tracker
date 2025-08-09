import React from 'react'

const Searchbar = ({ searchText, setSearchText }) => {
    return (
        <div>
            <input
                className='searchbar'
                placeholder='Search a coin...'
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)} />
        </div>
    )
}

export default Searchbar