import React, { Component } from 'react';
import StudentListItem from './student-list-item/StudentListItem';
import './StudentsList.css';

class StudentsList extends Component {
    constructor() {
        super();
        this.state = {
            searchText: undefined
        }
    }

    selectStudentCallback(studentId) {
        this.props.selectStudentCallback(studentId);
    }

    searchStudent(event) {
        this.setState({searchText: event.target.value});
    }

    render() {
        console.log('stud list render');
        this.studentsList = this.props.studentsList.map((student) => {
            if (!this.state.searchText || student.name.indexOf(this.state.searchText) != -1) {   
                return (
                    <li key={student.id}>
                        <StudentListItem selectedStudentId={this.props.selectedStudentId} student={student} selectStudentCallback={this.selectStudentCallback.bind(this)}/>
                    </li>
                );
            }
        });
        return (
            <div>
                <div className="list-header p-2">
                    <input className="student-search" type="text" placeholder="SEARCH" value={this.state.searchText} onChange={this.searchStudent.bind(this)}/>
                </div>
                <div className="student-list">
                    <ul className="list-unstyled">
                        {this.studentsList}
                    </ul>   
                </div>
            </div>
        );
    }
}

export default StudentsList;