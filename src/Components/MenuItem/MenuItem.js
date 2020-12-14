import { Component } from 'react';
import boilerImg from '../../Assets/boilers.svg';
import technicianImg from '../../Assets/technicians.svg';
import './menuItem.css'

const imagesObj = {
    boiler: boilerImg,
    technician: technicianImg,
};

export default class MenuItem extends Component {

    constructor(props) {
        super(props);
    }

    render = () => {
        return (
            <div className="menu-item">
                <img src={imagesObj[this.props.img]}></img>
                <p>{this.props.label}</p>
            </div>
        );
    }
}
