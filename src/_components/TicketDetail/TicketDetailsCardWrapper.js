import {Paper, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";

const TicketDetailWrapper = styled(Paper)(({theme}) => ({
  width: '100%',
  minHeight: 600,
  padding: 0,
}));

const TicketDetailsCardWrapper = ({ children }) => {
  return (
    <TicketDetailWrapper elevation={2}>
      {children}
    </TicketDetailWrapper>
  )
}

export default TicketDetailsCardWrapper;
