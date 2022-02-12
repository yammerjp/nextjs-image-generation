import { LineChart, Line } from 'recharts';
const data02 = [
  { name: 'Page A', uv: 300, pv: 2600, amt: 3400 },
  { name: 'Page B', uv: 400, pv: 4367, amt: 6400 },
  { name: 'Page C', uv: 300, pv: 1398, amt: 2400 },
  { name: 'Page D', uv: 200, pv: 9800, amt: 2400 },
  { name: 'Page E', uv: 278, pv: 3908, amt: 2400 },
  { name: 'Page F', uv: 189, pv: 4800, amt: 2400 },
  { name: 'Page G', uv: 189, pv: 4800, amt: 2400 },
];

const renderLineChart = (
  <LineChart width={400} height={400} data={data02} isAnimationActive={false} animationDuration={0}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8"  isAnimationActive={false}/>
    <Line type="monotone" dataKey="pv" stroke="#82ca9d"  isAnimationActive={false}/>
  </LineChart>
);

export default function rechartElement() {
  return renderLineChart
}
