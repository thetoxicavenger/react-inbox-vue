import React, { useState, useEffect } from 'react';
import MessagesList from './components/MessagesList'
import MessagesToolbar from './components/MessagesToolbar'
import Compose from './components/Compose'
import receiveApiMessage from './util/receiveApiMessage'
import getCheckedMessagesIds from './util/getCheckedMessagesIds'
import getMessagesWithoutLabel from './util/getMessagesWithoutLabel';
import getMessagesWithLabel from './util/getMessagesWithLabel'
import getCheckedMessages from './util/getCheckedMessages';

function App() {

  /* state hooks */
  const [composing, setComposing] = useState(false)
  const [messages, setMessages] = useState([])
  const [mounted, setMounted] = useState(false)
  const [selectedLabelToAdd, setSelectedLabeltoAdd] = useState("placeholder")
  const [selectedLabelToRemove, setSelectedLabeltoRemove] = useState("placeholder")

  /* api hook */
  useEffect(() => {
    if (!mounted) {
      fetch("http://localhost:8082/api/messages")
        .then(res => res.json())
        .then(json => {
          setMessages(json.map(item => {
            return receiveApiMessage(item)
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

  /* sync state updaters */
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

  /* async state updaters */
  const deleteMessages = async () => {
    try {
      const res = await fetch("http://localhost:8082/api/messages", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          command: "delete",
          messageIds: getCheckedMessagesIds(messages)
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
  const newMessage = async (subject, body) => {
    try {
      const res = await fetch("http://localhost:8082/api/messages", {
        method: "POST",
        body: JSON.stringify({ subject, body }),
        headers: {
          "Content-Type": "application/json",
          "accept": "application/json"
        },
      })
      if (!res.ok) {
        throw new Error("Bad res from API when trying to save a new message.")
      } else {
        const json = await res.json()
        setMessages([...messages, receiveApiMessage(json)])
        setComposing(false)
      }
    } catch (e) {
      console.error(e)
      alert('Error! Could not save new message.')
    }
  }
  const addLabel = async label => {
    const messageIdsToUpdate = getMessagesWithoutLabel(getCheckedMessages(messages), label)
    if (messageIdsToUpdate.length) {
      try {
        const res = await fetch("http://localhost:8082/api/messages", {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            "accept": "application/json"
          },
          body: JSON.stringify({
            command: "addLabel",
            label,
            messageIds: messageIdsToUpdate,
          })
        })
        if (!res.ok) {
          throw new Error("Bad res from API when trying to add label to message(s).")
        } else {
          setMessages(messages.map(msg => {
            if (msg.checked && messageIdsToUpdate.indexOf(msg.id) > -1) {
              return {
                ...msg,
                labels: [...msg.labels, label]
              }
            }
            return msg
          }))
        }
      } catch (e) {
        console.error(e)
        alert('Error! Could not add labels to selected message(s).')
      }
    }
  }
  const removeLabel = async label => {
    const messageIdsToUpdate = getMessagesWithLabel(getCheckedMessages(messages), label)
    if (messageIdsToUpdate.length) {
      try {
        const res = await fetch("http://localhost:8082/api/messages", {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            "accept": "application/json"
          },
          body: JSON.stringify({
            command: "removeLabel",
            label,
            messageIds: messageIdsToUpdate,
          })
        })
        if (!res.ok) {
          throw new Error("Bad res from API when trying to add label to message(s).")
        } else {
          setMessages(messages.map(msg => {
            if (msg.checked && messageIdsToUpdate.indexOf(msg.id) > -1) {
              return {
                ...msg,
                labels: msg.labels.reduce((acc, thisLabel) => {
                  if (thisLabel !== label) {
                    return [...acc, thisLabel]
                  }
                  return acc
                }, [])
              }
            }
            return msg
          }))
        }
      } catch (e) {
        console.error(e)
        alert('Error! Could not add labels to selected message(s).')
      }
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
        selectedLabelToAdd={selectedLabelToAdd}
        setSelectedLabelToAdd={label => {
          setSelectedLabeltoAdd(label)
          if (label !== "placeholder") {
            addLabel(label)
          }
        }}
        selectedLabelToRemove={selectedLabelToRemove}
        setSelectedLabelToRemove={label => {
          setSelectedLabeltoRemove(label)
          if (label !== "placeholder") {
            removeLabel(label)
          }
        }}
      />
      {composing && <Compose newMessage={newMessage} />}
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
