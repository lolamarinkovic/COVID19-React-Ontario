import {caseData} from './caseData';
import {testingData} from './testingData';
import React from 'react';
import ReactDOM from 'react-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Brush} from 'recharts';


class Chart extends React.Component {
    render() {
        return (
            <div>
                <h2 style={{textAlign: "center", fontFamily: "Sans-Serif", paddingTop: "25px"}}>COVID-19 Numbers In Ontario</h2>
                <ResponsiveContainer width="100%" height={500}>
                    <LineChart data={caseData} margin={{top: 50, right: 80, left: 20, bottom: 5}}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                        <Legend payload={[{id: 'cases', value: 'Number of cases', type: 'square', color: '#2e86c1'}]}/>
                        <Brush dataKey="date" height={30} stroke="#2e86c1" />
                        <Line name="Cases" type="monotone" dataKey="cases" stroke="#2e86c1" />
                    </LineChart>
                </ResponsiveContainer>

                <ResponsiveContainer width="100%" height={500}>
                    <LineChart data={testingData} margin={{top: 50, right: 80, left: 20, bottom: 5}}>
                       <CartesianGrid strokeDasharray="3 3" /> 
                       <XAxis dataKey="date" />
                       <YAxis />
                       <Tooltip formatter={(value) => `${value} %`}/>
                       <Legend payload={[{id: 'positivity', value: 'Percentage of positivity', type: 'square', color: '#B81D13'}]}/>
                       <Brush dataKey="date" height={30} stroke="#B81D13" />
                       <Line name="Percentage of Positivity" type="monotone" dataKey="positivity" stroke="#B81D13" />
                    </LineChart>
                </ResponsiveContainer>

                <ResponsiveContainer width="100%" height={500}>
                    <LineChart data={testingData} margin={{top: 50, right: 80, left: 20, bottom: 5}}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip formatter={(value) => new Intl.NumberFormat('en').format(value)}/>
                        <Legend payload={[{id: 'tests', value: 'Number of tests', type: 'square', color: '#7d3c98'}]}/>
                        <Brush dataKey="date" height={30} stroke="#7d3c98" />
                        <Line name="Number of Tests Completed" type="monotone" dataKey="tests" stroke="#7d3c98" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        );
    }
}

ReactDOM.render(<Chart />, document.getElementById("root"));