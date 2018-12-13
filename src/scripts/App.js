import React from 'react';
import {ipcRenderer} from 'electron';

export default class App extends React.Component {
    btnClick()
    {
        console.log("Sending message");
       ipcRenderer.send('write-log',{message:'Well done!'});
       console.log("Message sent");
    }
    render() {
        return (<div>
                    <h2>Hello Electrate</h2>
                    <button className="btn" onClick={this.btnClick}>Send message</button>
                </div>);
    }
}