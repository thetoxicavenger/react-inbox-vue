const getCheckedMessagesIds = messages => {
    return messages.reduce((acc, msg) => {
        if (msg.checked) return [...acc, msg.id]
        return acc
    }, [])
}

export default getCheckedMessagesIds