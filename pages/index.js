import Graph from '../components/graph'

export default function Home() {
  return (
    <div>
    <h2>recharts react component</h2>
    <Graph />
    <h2>svg</h2>
    <img src="/api/recharts-to-image.svg" />
    <h2>png</h2>
    <img src="/api/recharts-to-image.png" />
    </div>
  )
}
