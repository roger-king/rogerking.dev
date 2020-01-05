import { Box } from 'grommet';
import styled from 'styled-components';

const Columns = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: row !important;
    max-width: 1200px;
`;

export default Columns;
