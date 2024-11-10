import { Box,Container } from '@mui/material'

function HomeSection({background, color, children, ...props}) {
  return (
  <Box width={1} sx={{background, color, py: 4}} {...props}>
    <Container>
        {children}
    </Container>
  </Box>
  );
}

export default HomeSection;