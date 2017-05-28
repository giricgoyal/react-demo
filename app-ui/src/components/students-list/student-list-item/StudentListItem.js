import React, { Component } from 'react';
import './StudentListItem.css';

var classNames = require('classnames');

class StudentListItem extends Component {
    constructor() {
        super();
    }

    selectStudentCallback() {
        this.props.selectStudentCallback(this.props.student.id);
    }

    render() {
        console.log('stud list item render');
        const classNameObj = classNames(
            'studentListItem',
            {
                'selected': this.props.selectedStudentId === this.props.student.id
            }
        );
        return (
            <a className={classNameObj} onClick={this.selectStudentCallback.bind(this)}>
                {this.props.student.name}
            </a>
        )
    }
}

export default StudentListItem;