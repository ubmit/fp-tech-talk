import { Box } from '@rebass/emotion'

export default props => (
  <Box fontSize={[6, 7]} p={4} color="#000" bg="#fff">
    {props.children}
  </Box>
)
