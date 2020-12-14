import { Component } from 'react';
import './menu.css';
import MenuItem from '../MenuItem/MenuItem'

export default class Menu extends Component {
    
    constructor(props) {
        super(props);
    }

    render = () => {
        return (
            <aside className="menu">
                <div className="title-section">
                    <h2 className="caldAr-title">CaldAr</h2>
                </div>
                <div className="menu-options-section">
                    <MenuItem img="boiler" label='Boilers'/>
                    <MenuItem img="technician" label='Technicians'/>
                </div>
            </aside>
        );
    }
}