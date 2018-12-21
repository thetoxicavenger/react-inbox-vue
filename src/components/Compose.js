import React, { useState } from 'react'

function Compose({ newMessage }) {
    const [subject, setSubject] = useState("")
    const [body, setBody] = useState("")
    const _onSubmit = e => {
        e.preventDefault()
        if (body && subject) {
            newMessage(subject, body)
        }
    }
    return (
        <>
            <form
                className="form-horizontal well"
                onSubmit={_onSubmit}
            >
                <div className="form-group">
                    <div className="col-sm-8 col-sm-offset-2">
                        <h4>Compose Message</h4>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="subject" className="col-sm-2 control-label">Subject</label>
                    <div className="col-sm-8">
                        <input type="text" className="form-control" id="subject" placeholder="Enter a subject" name="subject" value={subject} onChange={e => setSubject(e.target.value)} />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="body" className="col-sm-2 control-label">Body</label>
                    <div className="col-sm-8">
                        <textarea name="body" id="body" className="form-control" value={body} onChange={e => setBody(e.target.value)}></textarea>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-8 col-sm-offset-2">
                        <input type="submit" value="Send" className="btn btn-primary" />
                    </div>
                </div>
            </form>
        </>
    )
}

export default Compose