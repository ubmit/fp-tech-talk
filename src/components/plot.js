import Plot from "react-plotly.js";
import palette from "../themes/palette";

const { primary, secondary } = palette;

export default ({ x, y, title }) => (
  <Plot
    data={[
      {
        x,
        y,
        type: "scatter",
        mode: "lines",
        marker: { color: secondary }
      }
    ]}
    layout={{
      width: 560,
      height: 480,
      title,
      titlefont: {
        color: secondary
      },
      paper_bgcolor: primary,
      plot_bgcolor: primary
    }}
  />
);
