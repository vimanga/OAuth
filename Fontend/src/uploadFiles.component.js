import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

export default class UploadFiles extends Component {

    constructor(props){
        super(props);

        this.onChangeFile = this.onChangeFile.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            file: ''
        }
    }

    onChangeFile(e) {
        this.setState({
            file: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();

        const newFile = {
            file: this.state.file
        }

        axios.post('http://localhost:5000/upload', newFile)
            .then(res => console.log(res.data));

        this.setState({
            file: ''
        });
    }
    

    render() {
        return (
            <div i="body">
                
                <br/><br/><br/>
                <div className="card">     
                <br/>
                <h1>Upload to Google Drive</h1> 
                <h3>Please select a file!</h3> 

                <div> 
                    <form>
                        <input className="button"
                               type="file"
                               onChange ={this.onChangeFile} 
                        /> 
                        <br/><br/><br/>
                        <button className="btn">Submit</button>
                    </form>
                   
                </div>  
                 
                </div>
            </div> 
        )
    }
}