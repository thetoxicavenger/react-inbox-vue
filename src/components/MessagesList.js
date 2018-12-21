import React from 'react'
import Message from './Message'

function MessagesList({ messages, setChecked, setUnread, setStarred }) {
    const messagesList = messages.length ? messages.map(message => 
    <Message key={message.id} message={message} setChecked={setChecked} 
        setUnread={setUnread}
        setStarred={setStarred}
    />) : null
    return (
        <>
            {messagesList}
        </>
    )
}

export default MessagesList