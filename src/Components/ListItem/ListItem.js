import { Component } from 'react';
import './list-item.css';
import deleteIcon from '../../Assets/delete.svg'
import editIcon from '../../Assets/edit.svg'


export default class ListItem extends Component {

    constructor(props) {
        super(props);
    }

    render = () => {
        return (
            <tr className="list-item-row">
                <th>{this.props.technician.name}</th>
                <th>{this.props.technician.email}</th>
                <th>{this.props.technician.boilers}</th>
                <th className="action-cell">
                    <div onClick={() => this.props.removeFromListCallback(this.props.technician.id)}>
                        <img src={deleteIcon}></img>
                    </div>                    <div>
                        <img src={editIcon}></img>
                    </div>
                </th>
            </tr>
        );
    }
}