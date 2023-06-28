import { Typography } from "@mui/material";
import {styled} from "@mui/material/styles";

const StyledLabel = styled(Typography)(({theme}) => ({
  marginTop: '25px',
  fontSize: 14,
  fontWeight: '800',
  color: '#4c4c4c',
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
}));

const ReadOnlyFieldLabel = ({ children, noMargin }) => {
  return (
    <StyledLabel sx={noMargin ? {marginTop: 0} : undefined}>{children}</StyledLabel>
  );
};

export default ReadOnlyFieldLabel;
