import React, { Component } from 'react';
import axios from 'axios';
import './addNewCake.css'

class AddNewCake extends Component {
    constructor(props){
        super(props);
        this.state = {
            cake: {
                name: '',
                varient: [],
                isEggless: true,
                availableAt: [],
                chefsWord: '',
                flavor: '',
                cakeImgs: []
            }
        }
    }

    handleSelect = (e) => {
        console.log(e, e.target)
    }

    handleOnChange = (e, i) => {
        let inputValue = e.target.value;
        let key = e.target.name;
        let { cake } = this.state;
        
        if(key == 'cakeImgs') {
            cake.cakeImgs[i] = inputValue;
        }else if (key == 'unitValue' || key =='price'){
            let varient = cake.varient[i];
            varient[key] = inputValue;
        }else if(key == 'availableAt'){
            let availableAt = cake[key];
            if(inputValue != 'Select Your City') availableAt.push(inputValue)
            availableAt = Array.from(new Set(availableAt));
            cake[key] = availableAt;
        } else {
            cake[key] = inputValue;
        }

        this.setState({cake});
    }
    
    handleIncInput = (e, key) => {
        e.preventDefault();
        let {cake} = this.state;
        if(key == 'cakeImgs') cake[key].push('');
        else {
            let newVarient = {
                unitValue :'',
                price: ''
            }
            cake[key].push(newVarient);
        }
        this.setState({cake})
    }

    handleOnSave = (e) => {
        e.preventDefault();
        console.log('cake', this.state.cake);
        let url = 'http://localhost:5000/cake'
        
        axios.post(url, this.state.cake).then(data => {
            console.log(data);
        }).catch(err => {
            console.log(err);
        })
    }
    
    render() { 
        return (
            <div className='container'>
                <form className='main-container'>
                    <label>Enter name</label>
                    <input className='input-tag' name='name' onChange={this.handleOnChange} placeholder='Enter Cake Name'/>
                    
                    <label>Enter flavor</label>
                    <input className='input-tag' onChange={this.handleOnChange} name='flavor' placeholder='Enter Cake Flavor'/>
                    
                    <label>Enter cakeDesc</label>
                    <input className='input-tag' onChange={this.handleOnChange} name='cakeDesc' placeholder='Description of your lovely Cake'/>
                    
                    <label>Enter chefsWord</label>
                    <input className='input-tag' onChange={this.handleOnChange} name='chefsWord' placeholder="Enter chef's Words "/>
                    
                    <label>Enter city</label>
                    <span>{this.state.cake.availableAt.join(', ')}</span>
                    <select className='input-tag' list='city' name='availableAt' onChange={this.handleOnChange}>
                        <option>Select Your City</option>
                        <option>Delhi</option>
                        <option>Bangalore</option>
                        <option>Pune</option>
                        <option>Mumbai</option>
                    </select>  
                    <label>Enter Cake Image url</label>
                    <button className='mbtn mbtn-success' onClick={(e) => this.handleIncInput(e, 'cakeImgs')}>+</button>
                    <div className='df aic jcc fdc'>
                        {this.state.cake.cakeImgs.map((item, index)=>(
                            <input className='input-tag f1' onChange={(e) => this.handleOnChange(e, index)} name='cakeImgs' placeholder='Enter the cake url'/>
                        ))}
                    </div>

                    <label>Cake Varients</label>
                    <button className='mbtn mbtn-success' onClick={(e)=>this.handleIncInput(e, 'varient')}>+</button>
                    <div className='df aic jcc fdc'>
                        {this.state.cake.varient.map((item, index)=>(
                            <div className='df'>
                                <input className='input-tag f1' onChange={(e)=>this.handleOnChange(e, index)}  name='unitValue' placeholder='Enter the cake Unit Value. Eg. 1kg, 100gm'/>
                                <input className='input-tag f1' onChange={(e)=>this.handleOnChange(e, index)} name='price' placeholder='Enter the cake price'/>
                            </div>
                        ))}
                    </div>
                    <button onClick={this.handleOnSave}>Save</button>
                </form>
            </div>
        );
    }
}
 
export default AddNewCake;