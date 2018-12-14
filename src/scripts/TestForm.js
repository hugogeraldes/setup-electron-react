import React from 'react';
import {ipcRenderer as ipc} from 'electron';

export default class TestForm extends React.Component {
    constructor(props){
        super(props);
        this.state={firstname:'',lastname:''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event){
        console.log(event.target);
    }

    handleSubmit(event){
        event.preventDefault();
        const payload={firstname:event.target.firstname,
        lastname: event.target.lastname 
    };
        ipc.send('write-log',{message:payload});
        
    }

    btnClick(event)
    {      
        event.preventDefault();
       ipc.send('write-log',{message:'Well done!'});
    }
    render() {
        return (<div className="container">

            <form onSubmit={this.handleSubmit}>
                <div className="form-group row">
                    <label htmlFor="firstname">First Name</label>
                    <input id="firstname"type="text" className="form-control"/>
                </div>
                <div className="form-group row">
                    <label htmlFor="lastname">Last Name</label>
                    <input id="lastname"type="text" className="form-control"/>
                </div>
                <div className="form-group row">
                <div className="offset-sm-2 col-sm-10">
                    <button type="submit" className="btn btn-primary">Sign in</button>
                </div>
                </div>
            </form>

            </div>
                
                );
    }
}