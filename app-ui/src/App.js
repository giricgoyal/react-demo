import React, { Component } from 'react';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Main from './components/main/Main';
import DataService from './services/DataService';

import './App.css';

class App extends Component {
    
    constructor() {
        super();
        this.ds = new DataService();
        this.data = this.ds.getClasses();
        
        this.appTitle = 'ABC School';
        this.state = {
            selectedClassId: undefined,
            studentsList: undefined,
            main: () => <Main/>
        };
    }

    selectClassFn(selectedClassId) {
        this.setState({
            selectedClassId: selectedClassId,
            studentsList: this.ds.getStudents(selectedClassId),
            main: () => <Main studentsList={this.ds.getStudents(selectedClassId)} />
        });
    }

    render() {
        const MainObj = this.state.main;
        return (
            <div>
                <Header appTitle={this.appTitle}/>
                <div className="d-flex flex-row">
                    <Sidebar selectedClassId={this.state.selectedClassId} classList={this.data} selectClassCallback={this.selectClassFn.bind(this)}/>
                    <MainObj />
                </div>
            </div>
        );
    }
}

export default App;