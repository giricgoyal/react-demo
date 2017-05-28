import React, { Component } from 'react';
import StudentsList from '../students-list/StudentsList';
import StudentsInfo from '../students-info/StudentsInfo';
import DataService from '../../services/DataService';
import './Main.css';

class Main extends Component {

    constructor() {
        super();
        this.ds = new DataService();
        this.state = {
            studentInfo: undefined,
            selectedStudentId: undefined
        }
    }

    getStudentInfo(studentId) {
        this.setState({
            selectedStudentId: studentId,
            studentInfo: this.ds.getStudentInfo(studentId)
        });
    }

    getMessageRender() {
        return (
            <div className="flex-4 main justify-content-center align-items-center d-flex">
                <div className="messageMiddle">
                    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur maximus nunc sem, non laoreet ex ultricies volutpat. Sed eget justo vel nulla semper sagittis.
                    </h2>    
                </div>
            </div>
        );
    }

    getStudentInfoRender() {
        if (!this.state.studentInfo) {
            return null;
        }
        return (
            <StudentsInfo studentInfo={this.state.studentInfo}/>
        );
    }

    getMainRender() {
        return (
            <div className="flex-4 main justify-content-center d-flex">
                <div className="pl-5 pt-5 pr-0 flex-1">
                    <StudentsList selectedStudentId={this.state.selectedStudentId} studentsList={this.props.studentsList} selectStudentCallback={this.getStudentInfo.bind(this)}/>
                </div>
                <div className="p-5 flex-2">
                    {this.getStudentInfoRender()}
                </div>
            </div>
        );
    }

    render() {
        console.log('main render');
        return this.props.studentsList ? this.getMainRender() : this.getMessageRender();
    }
}

export default Main;