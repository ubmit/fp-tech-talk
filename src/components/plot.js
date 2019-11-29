import Plot from 'react-plotly.js'

export default ({ x, y, title }) => (
  <Plot
    data={[
      {
        x,
        y,
        type: 'scatter',
        mode: 'lines',
        marker: { color: '#ff00ff' },
      },
    ]}
    layout={{
      width: 560,
      height: 480,
      title,
    }}
  />
)
