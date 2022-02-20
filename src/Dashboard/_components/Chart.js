import { React, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { getObservations } from "../_actions/DashboardActions";

const Chart = () => {
    let pressureObservations = []
    const dispatch = useDispatch();
    const { observations } = useSelector(({ dashboardReducer }) => ({
        observations: dashboardReducer.observations
    }))

    useEffect(() => {
        dispatch(getObservations())
    }, [dispatch, observations]);


    pressureObservations = observations?.map(obs => {
        return {
            "timestamp": new Date(obs.properties.timestamp),
            "barometricPressure": obs.properties.barometricPressure.value
        }
    })

    pressureObservations?.sort((a, b) => a.timestamp - b.timestamp)

    return (
        <div style={{ height: '500px', marginLeft: '-25px' }}>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    width={500}
                    height={300}
                    data={pressureObservations}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 30,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="timestamp" hide />
                    <YAxis domain={['auto', 'auto']} />
                    <Tooltip />
                    <Legend />

                    <Line type="monotone" dataKey="barometricPressure" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default Chart
