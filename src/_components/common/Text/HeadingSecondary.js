import { Typography } from "@mui/material";
import {styled} from "@mui/material/styles";

const StyledHeading = styled(Typography)(({theme}) => ({
  color: theme.palette.primary.darkHeading,
  fontSize: 20
}));

const HeadingSecondary = ({ children }) => {
  return (
    <StyledHeading variant="h6">{children}</StyledHeading>
  );
};

export default HeadingSecondary;
