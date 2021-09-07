import { useState, useEffect } from 'react'
import { useChatContext } from 'stream-chat-react'

import { SearchIcon } from '../assets'
const ChannelSearch = () => {
    const [query, setQuery] = useState('')
    const [loading, setLoading] = useState(false)

    const getChannels = async (text) => {
        try {
            //TODO Fetch Channels
        } catch (error) {
            setQuery('')
        }
    }

    const onSearch = (events) => {
        events.preventDefault()
        setLoading(true)
        setQuery(events.target.value)
        getChannels(events.target.value)
    }
    return (
        <div className="channel-search__container">
            <div className="channel-search__input__wrapper">
                <div className="channel-search__input__icon">
                    <SearchIcon />
                </div>
                <input
                    className="channel-search__input__text"
                    placeholder="Search"
                    type="text"
                    value={query}
                    onChange={onSearch}
                />
            </div>
        </div>
    )
}

export default ChannelSearch
