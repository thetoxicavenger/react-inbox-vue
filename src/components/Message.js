import React from 'react'

function Message({ message, setChecked, setUnread, setStarred }) {
    return (
        <div className={`row message ${message.read ? "read" : "unread"} ${message.checked ? "selected" : ""}`}>
            <div className="col-xs-1">
                <div className="row">
                    <div className="col-xs-2">
                        <input
                            type="checkbox"
                            checked={message.checked}
                            onChange={e => setChecked(message.id)}
                        />
                    </div>
                    <div className="col-xs-2">
                        <i
                            className={message.starred ? "star fa fa-star" : "star fa fa-star-o"}
                            onClick={() => setStarred(message.id)}
                        ></i>
                    </div>
                </div>
            </div>
            <div className="col-xs-11">
                {message.labels.length ? message.labels.map(label => <span key={label} className="label label-warning">{label}</span>) : null}
                <a
                    href="/"
                    style={{ fontWeight: message.read ? "normal" : "bold" }}
                    onClick={e => {
                        e.preventDefault()
                        setUnread(message.id)
                    }}
                >
                    {message.subject}
                </a>
            </div>
        </div>
    )
}

export default Message