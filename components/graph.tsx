
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';
export default function rechartElement() {
  return (
    <LineChart width={500} height={300} data={{}}>
      <XAxis dataKey="name"/>
      <YAxis/>
      <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
    </LineChart>
  )
}
