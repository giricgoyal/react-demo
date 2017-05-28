import React, { Component } from 'react';
import { BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar } from 'recharts';
import './BarChart.css';

class BarChartComponent extends Component {
    
    render() {
        return (
            <div>
                <h3 className="heading">Marks List</h3>
                <BarChart width={600} height={300} data={this.props.data} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                    <XAxis dataKey="name"/>
                    <YAxis domain={[0, 100]}/>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Tooltip/>
                    <Legend />
                    <Bar dataKey="maths" fill="rgb(66, 132, 209)" />
                    <Bar dataKey="science" fill="rgb(235, 125, 60)" />
                    <Bar dataKey="english" fill="rgb(165, 165, 165)" />
                </BarChart>
            </div>
        )
    }
}

export default BarChartComponent;