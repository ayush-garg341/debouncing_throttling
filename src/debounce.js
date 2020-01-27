import React, { Component } from 'react';
import {Row, Col, Button, Label, Input} from 'reactstrap';

export class Debounce extends Component {
    constructor(props){
        super(props);
        this.state={
            sessionRemainingSeconds: 5,
            running: false,
            reset_timer: false,
        }
        this.showAlertText = this.showAlertText.bind(this)
        this.debounce = this.debounce.bind(this)
        this.showTimer = this.showTimer.bind(this)
        this.resetTimer = this.resetTimer.bind(this)
        this.startStopTimer = this.startStopTimer.bind(this)
    }

    showTimer(){
        // console.log("key is pressed")
        var text = document.getElementById("some_text").value;
        if(text!==''){
            // console.log(text)
            this.setState({running: true, reset_timer:true}, ()=>{this.resetTimer();})
        }
        else if (text===''){
            this.setState({running: false}, ()=>{this.startStopTimer()})
        }
    }

    debounce(text){
        // alert(text);
        document.getElementById("repeated_text").innerText = text
    }

    showAlertText(){
        clearTimeout(this.timer);
        this.text = document.getElementById("some_text").value;
        this.timer = setTimeout(()=> this.debounce(this.text), 5000)
    }

    resetTimer(){
        this.setState({sessionRemainingSeconds:5}, ()=>{this.startStopTimer()})
    }

    startStopTimer(){
        const status = this.state.running;
        if(status){
            clearInterval(this.timerInterval)
            this.timerInterval = setInterval(() => {
                if (this.state.sessionRemainingSeconds > 0) {
                    this.setState({
                      sessionRemainingSeconds: this.state.sessionRemainingSeconds - 1,
                    });
                  }
            }, 1000)
        }

        else{
            clearInterval(this.timerInterval)
        }
    }



    render(){
        return(
            <div>
                <Row >
                    <Col sm='6'>
                    </Col>
                    <Col sm='6' >
                    <b>Debouncing</b>
                    </Col>
                </Row>
                <Row >
                    <Col sm="7">
                    <Row>
                        <Col sm='1'></Col>
                        <Col sm="5">
                            <Input type="text" id='some_text' onChange={this.showAlertText} onKeyUp={this.showTimer}></Input>
                        </Col>
                        <Col sm="1">
                            <h1>{this.state.sessionRemainingSeconds}</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="1"></Col>
                        <Col sm="4">
                            Text you type in above input box will be <b>displayed in red after 5 sec.</b> But if before 5 sec you press another key, then <b>delay restarts.</b>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="1"></Col>
                        <Col>
                            <Label id="repeated_text" style={{color:"red"}}></Label>
                        </Col>
                    </Row>
                    </Col>
                    <Col sm="5">
                    Debouncing in JavaScript is a practice used to <b>improve browser performance.</b><br/>
                    There might be some functionality in a web page which requires <b>time-consuming computations.</b><br/>
                    If such a method is invoked frequently, it might greatly affect the performance of the browser.<br/>
                    It limits the rate at which a function gets invoked.<br/>
                    If we are <b>invoking for the first time, our function will execute at the end of our delay.</b><br/>
                    If we invoke and then <b>invoke again before the end of our delay, the delay restarts.</b>
                    </Col>
                </Row>
            </div>
        )
    }
}


export default Debounce;

