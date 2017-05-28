import React, { Component } from 'react';
import BarChartComponent from '../bar-chart/BarChart';
import './StudentsInfo.css';

class StudentsInfo extends Component {
    constructor() {
        super();
    }

    render() {
        this.data = [{
            name: 'subjects',
            maths:  this.props.studentInfo.marks.maths,
            science:  this.props.studentInfo.marks.science,
            english:  this.props.studentInfo.marks.english,
        }];
        console.log('stud info render');
        return (
            <div>
                <div className="list-header p-2">{this.props.studentInfo.name} details</div>
                <div className="details-pane p-2">
                    <ul className="mb-0">
                        <li>Date of Birth: {this.props.studentInfo.dob}</li>
                        <li>Gender: {this.props.studentInfo.gender}</li>
                        <li>Parent/Guardian: {this.props.studentInfo.parentGuardian}</li>
                    </ul>
                </div>
                <BarChartComponent data={this.data}/>
            </div>
        );
    }
}

export default StudentsInfo;