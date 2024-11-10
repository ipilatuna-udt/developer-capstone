import { Box,Container } from '@mui/material'

function HomeSection({background, color, children}) {
  return (
  <Box width={1} sx={{background, color}}>
    <Container>
        {children}
    </Container>
  </Box>
  );
}

export default HomeSection;