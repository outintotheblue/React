import React, {Component} from 'react';


class Image extends Component {
    render () {
        return (
            <div>
            <img src = {this.props.whatevs.href}
                 alt = {this.props.item.data[0].description} 
            />
            <p> {this.props.item.data[0].description}</p>
            </div>
        )
    }
}


export default Image;