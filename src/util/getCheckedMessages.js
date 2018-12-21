const getCheckedMessages = messages => {
    return messages.reduce((acc, msg) => {
        if (msg.checked) return [...acc, msg]
        return acc
    }, [])
}

export default getCheckedMessages