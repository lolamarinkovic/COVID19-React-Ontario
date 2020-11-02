import {caseData} from './caseData';
import {testingData} from './testingData';
import React from 'react';
import ReactDOM from 'react-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';


class Chart extends React.Component {
    render() {
        return (
            <div>
                <ResponsiveContainer width="80%" height={500}>
                    <LineChart data={caseData} margin={{top: 50, right: 50, left: 20, bottom: 5}}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="cases" stroke="#8884d8" />
                    </LineChart>
                </ResponsiveContainer>

                <ResponsiveContainer width="80%" height={500}>
                    <LineChart data={testingData} margin={{top: 50, right: 50, left: 20, bottom: 5}} >
                       <CartesianGrid strokeDasharray="3 3" /> 
                       <XAxis dataKey="date" />
                       <YAxis />
                       <Tooltip />
                       <Legend payload={[{id: 'positivity', value: 'Positivity of Cases based on testing numbers', type: 'square', color: '#B81D13'}]}/>
                       <Line type="monotone" dataKey="positivity" stroke="#B81D13" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        );
    }
}

ReactDOM.render(<Chart />, document.getElementById("root"));