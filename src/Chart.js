import {data} from './data';
import React from 'react';
import ReactDOM from 'react-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';


class Chart extends React.Component {
    render() {
        return (
            <LineChart width={1000} height={500} data={data} margin={{top: 50, right: 50, left: 20, bottom: 5}}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="cases" stroke="#8884d8" />
            </LineChart>
        )
    }
}

ReactDOM.render(<Chart />, document.getElementById("root"));