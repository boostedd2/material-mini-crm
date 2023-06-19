import { Typography } from "@mui/material";
import {styled} from "@mui/material/styles";

const StyledDescription = styled(Typography)(({theme}) => ({
  display: '-webkit-box',
  overflow: 'hidden',
  '-webkit-box-orient': 'vertical',
  '-webkit-line-clamp': 3,
  maxHeight: '3.4em',
  lineHeight: '1.2em',
  textOverflow: 'ellipsis'
}));

const DescriptionText = ({ children }) => {
  return (
    <StyledDescription>{children}</StyledDescription>
  );
};

export default DescriptionText;
