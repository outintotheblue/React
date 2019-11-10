import React, {Component} from 'react';
import Image from './Image.js';

class NasaImages extends Component {

    displayNasaImages = () => {
        return this.props.results.map(item => {
            const image = item.links.find(link => link.rel === "preview")
            return <Image whatevs = {image} item = {item} />
        })
    }

    render() {
        return (
            <div>
                {this.displayNasaImages()}
            </div>
        );
    }
}

export default NasaImages;