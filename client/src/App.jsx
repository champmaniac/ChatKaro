import React from 'react'
import{StreamChat} from 'stream-chat';
import {Chat} from 'stream-chat-react';
import Cookies from 'universal-cookie';

import {ChannelListContainer,ChannelContainer } from './components';
import './App.css';

const ApiKey = 'mg535w2ewtrw';

const client = StreamChat.getInstance(ApiKey);
const App = () => {
    return (
        <div className="app__wrapper">

        <Chat client={client} theme="team light">
            <ChannelListContainer

            />
            <ChannelContainer

            />

        </Chat>
            
        </div>
    )
}

export default App
