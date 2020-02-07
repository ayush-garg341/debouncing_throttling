import React, { Component } from 'react';
import {Row, Col, Button, Label, Input} from 'reactstrap';

export class Throttle extends Component {
    constructor(props){
        super(props);
        this.state={
            sessionRemainingSeconds: 5,
            running: true,
        }
        this.showAlertText = this.showAlertText.bind(this)
        this.debounce = this.debounce.bind(this)
        this.resetTimer = this.resetTimer.bind(this)
        this.startStopTimer = this.startStopTimer.bind(this)
        this.enableInputBox = this.enableInputBox.bind(this)
    }

    enableInputBox(){
        document.getElementById('throttle_text').removeAttribute('disabled')
    }

    debounce(text){
        document.getElementById("repeated_throttle_text").innerText = text
        if(text!=''){
            document.getElementById('throttle_text').setAttribute('disabled', true)
            clearTimeout(this.timer);
            this.resetTimer();
            this.timer = setTimeout(()=> this.enableInputBox(), 5000)
            this.startStopTimer();
        }
    }

    showAlertText(){
        this.text = document.getElementById("throttle_text").value;
        this.debounce(this.text);
    }

    resetTimer(){
        this.setState({sessionRemainingSeconds:5})
    }

    startStopTimer(){
        const status = this.state.running;
        clearInterval(this.timerInterval)
        if(status){
            this.timerInterval = setInterval(() => {
                if (this.state.sessionRemainingSeconds > 0) {
                    this.setState({
                      sessionRemainingSeconds: this.state.sessionRemainingSeconds - 1,
                    });
                  }
            }, 1000)
        }
    }

    render(){
        return(
            <div>
                <Row >
                    <Col sm='6'>
                    </Col>
                    <Col sm='6' >
                    <b>Throttling</b>
                    </Col>
                </Row>
                <Row >
                    <Col sm="7">
                    <Row>
                        <Col sm='1'></Col>
                        <Col sm="5">
                            <Input type="text" id='throttle_text' onChange={this.showAlertText}></Input>
                        </Col>
                        <Col sm="1">
                            <h1>{this.state.sessionRemainingSeconds}</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="1"></Col>
                        <Col sm="4">
                            Text you type in above input box will be <b>displayed in red immediately.</b>But nothing will happen for the next 5 sec.<br/>
                            <b>You can fire an event only once in throttle period.</b>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="1"></Col>
                        <Col>
                            <Label id="repeated_throttle_text" style={{color:"red"}}></Label>
                        </Col>
                    </Row>
                    </Col>
                    <Col sm="5">
                    Throttle can be a little taxing as its desired behaviour has different interpretations.<br/>
                    <b>Let’s start by limiting the rate at which we execute a function.</b><br/>
                    The first call to our function will execute and sets the limit period<br/>
                    <b>We can call our function during this period but it will not fire until the limit period has passed.</b><br/>
                    If we invoke and then <b>invoke again before the end of our limit period, nothing happens</b>
                    </Col>
                </Row>
            </div>
        )
    }
}


export default Throttle;

