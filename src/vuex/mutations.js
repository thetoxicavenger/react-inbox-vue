export const RECEIVE_MESSAGES = "RECEIVE_MESSAGES"

export default {
    [RECEIVE_MESSAGES](state, incomingMessages) {
        state.messages = incomingMessages
    }
}