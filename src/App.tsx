import styled from '@emotion/styled';

import { Button } from '@components/Button';

const App = () => (
  <Box>
    <h1>App test</h1>
    <Button>Button</Button>
  </Box>
);

export default App;

const Box = styled('div')({
  width: 'max-content',
  padding: 20,
  backgroundColor: 'aliceblue',
});
