import React, { Component } from 'react';
import './dataForm.scss';

class DataForm extends Component {
    render() {
        return (
            <form action="" className="form">
                <input type="text" className="form_input"/>
                <input type="text" className="form_input"/>
                <button className="form_button">Отправить</button>
            </form>
        );
    }
}

export default DataForm;