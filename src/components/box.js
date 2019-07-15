import { Box } from "@rebass/emotion";
import palette from "../themes/palette";
const { primary, secondary } = palette;

export default props => (
  <Box fontSize={[6, 7]} p={4} color={secondary} bg={primary}>
    {props.children}
  </Box>
);
