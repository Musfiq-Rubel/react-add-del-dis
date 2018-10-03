import React, { Component } from 'react';
import './form.css';

class Form extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            name: '',
            job: ''
        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const {name, value} = event.target;
    
        this.setState({
            [name] : value
        });
    }

    submitForm = () => {
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    styles = {
        margin:'30px' ,
        padding:'20px',
         border:'2px solid #ddd',
          width:'50%',
          boxShadow:'0 0 0 6px #ffebbb, 0 0 0 10px #f1ffab,0 0 0 20px  #fff,0px 0px 0px 24px #c4f0c5'
                   
                    
                     
                     
    }

    render() {
        const { name, job } = this.state; 
        
    
        return (
              
             
            <form className="form-group"  style={this.styles} id="myForm">
               <span style={{display:'block' , color:'#8cbeaa', fontFamily:'roboto',fontSize:'18px'}}> <label>Name</label>
                <input 
                    type="text" 
                    name="name" 
                    value={name} 
                    onChange={this.handleChange}
                    className='ml-2'
                    style={{border:'2px solid #bae2be'}}
                    />
                    </span>
                    <span style={{display:'block' , color:'#8cbeaa', fontFamily:'roboto',fontSize:'18px'}}>
                <label>Job </label>
                <input 
                    type="text" 
                    name="job" 
                    value={job} 
                    className='ml-4'
                    style={{border:'2px solid #bae2be'}}
                    onChange={this.handleChange}/>
                    
                    </span>

                    <input 
                       type="button" 
                        value="Submit"
                        className="btn btn-warning btn-sm ml-5" 
                        
                        onClick={this.submitForm} />
            </form>
        );
    }

    }

    export default Form;