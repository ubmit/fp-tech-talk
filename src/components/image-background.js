import Box from "./box";
import { Image } from "@mdx-deck/components";

export default ({ src, children }) => (
  <Image
    src={src}
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}
  >
    <Box>{children}</Box>
  </Image>
);
