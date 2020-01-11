import React, {Component} from 'react';
import './App.css';
import Nasaimages from './Nasaimages.js';


const API_URL = 'https://images-api.nasa.gov/search?q='
class Nasa extends Component {
    constructor(props){
        super(props)
        this.state = {
            query: 'Earth',
            results: []

        }
    }



    handleQueryChange = (e) => {
        this.setState({
            query: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        this.fetchNasaImages()
    }


    fetchNasaImages = () => {
        fetch(API_URL+this.state.query)
        .then(res => {
            if (res.ok) {
                return res.json()
            }
            throw Error('something did not work')
        })
        .then(res => {
         this.setState({results: res.collection.items})    
    })
    }

    render() {
        return (
            <div>
            
            <h1>Nasa Cool Images</h1>
            <form onSubmit = {this.handleSubmit}>
            <input text = 'text'
                   value = {this.state.query}
                   onChange = {this.handleQueryChange}/>
            <button>Go!</button>
            </form>
            <Nasaimages results = {this.state.results}/>
            </div>
        )
    }
}


export default Nasa;