import React from 'react';
import {ipcRenderer as ipc} from 'electron';

export default class App extends React.Component {
    btnClick()
    {      
       ipc.send('write-log',{message:'Well done!'});
    }
    render() {
        return (<div>
                    <h2>Hello Hugo!</h2>
                    <button className="btn btn-success" onClick={this.btnClick}>Send message</button>
                </div>);
    }
}