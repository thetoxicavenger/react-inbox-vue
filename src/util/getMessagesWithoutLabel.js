const getMessagesWithoutLabel = (messages, label) => {
    return messages.reduce((acc, msg) => {
        if (msg.labels.indexOf(label) === -1) {
            return [...acc, msg.id]
        }
        return acc
    }, [])
}

export default getMessagesWithoutLabel