function receiveApiMessage(msg) {
    return {
        ...msg,
        checked: false
    }
}

export default receiveApiMessage