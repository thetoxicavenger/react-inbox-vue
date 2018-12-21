import React from 'react'
import Message from './Message'

function MessagesList({ messages, setChecked, setUnread, toggleStarred }) {
    const messagesList = messages.length ? messages.map(message => 
    <Message key={message.id} message={message} setChecked={setChecked} 
        setUnread={setUnread}
        toggleStarred={toggleStarred}
    />) : null
    return (
        <>
            {messagesList}
        </>
    )
}

export default MessagesList