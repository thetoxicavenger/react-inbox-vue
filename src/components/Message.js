import React from 'react'
import { Row, Col, Form, FormGroup, Input, Label } from 'reactstrap'

function Message({ message }) {
    console.log(message)
    return (
        <Row style={{paddingLeft: '32px'}}>
            <Col>
                <Input type="checkbox" />{' '}
                &nbsp;
            </Col>
        </Row>
    )
}

export default Message