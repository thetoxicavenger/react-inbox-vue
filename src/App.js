import React, { useState, useEffect } from 'react';
import MessagesList from './components/MessagesList'
import MessagesToolbar from './components/MessagesToolbar'
import Compose from './components/Compose'

function App() {

  /* state hooks */
  const [composing, setComposing] = useState(false)
  const [messages, setMessages] = useState([])
  const [mounted, setMounted] = useState(false)

  /* api hook */
  useEffect(() => {
    if (!mounted) {
      fetch("http://localhost:8082/api/messages")
        .then(res => res.json())
        .then(json => {
          setMessages(json.map(item => {
            return {
              ...item,
              checked: false
            }
          }))
          setMounted(true)
        })
        .catch(e => console.error(e))
    }
  })

  /* computed properties */
  const unreadCount = messages.length ? messages.filter(message => !message.read).length : 0
  const messagesCount = messages.length
  const checkedCount = messages.filter(message => message.checked).length

  /* state updaters */
  const setChecked = id => setMessages(messages.map(message => ({ ...message, checked: id === message.id ? !message.checked : message.checked })))
  const setUnread = id => setMessages(messages.map(message => ({ ...message, read: id === message.id ? true : message.read })))
  const setStarred = id => setMessages(messages.map(message => ({ ...message, starred: id === message.id ? !message.starred : message.starred })))
  const toggleAllChecked = checked => setMessages(messages.map(message => ({ ...message, checked: checked })))
  const setCheckedToRead = () => setMessages(messages.map(message => {
    if (message.checked) {
      return {
        ...message,
        read: true
      }
    }
    return message
  }))
  const setCheckedToUnread = () => setMessages(messages.map(message => {
    if (message.checked) {
      return {
        ...message,
        read: false
      }
    }
    return message
  }))
  const deleteMessages = async () => {
    try {
      const res = await fetch("http://localhost:8082/api/messages", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          command: "delete",
          messageIds: messages.reduce((acc, msg) => {
            if (msg.checked) return [...acc, msg.id]
            return acc
          }, [])
        })
      })
      if (!res.ok) {
        throw new Error("Bad res from API when trying to delete messages.")
      } else {
        setMessages(messages.reduce((acc, msg) => {
          if (!msg.checked) return [...acc, msg]
          return acc
        }, []))
      }
    } catch (e) {
      console.error(e)
      alert('Error! Could not delete message.')
    }
  }

  return (
    <>
      <MessagesToolbar
        unreadCount={unreadCount}
        checkedCount={checkedCount}
        messagesCount={messagesCount}
        toggleCompose={() => setComposing(!composing)}
        toggleAllChecked={toggleAllChecked}
        setCheckedToRead={setCheckedToRead}
        setCheckedToUnread={setCheckedToUnread}
        deleteMessages={deleteMessages}
      />
      {composing && <Compose />}
      <MessagesList
        messages={messages}
        setChecked={setChecked}
        setUnread={setUnread}
        setStarred={setStarred}
      />
    </>
  );
}

export default App;
