import {Box, Button, Container, Paper, Typography} from "@mui/material";
import {theme} from "@/_themes/ThemeProvider";
import React from "react";
import {styled} from "@mui/material/styles";
import withAuth from "@/_context/withAuth";
import Link from "next/link";

const DetailHeadingSection = styled(Paper)(({theme}) => ({
  marginTop: '20px',
  height: '300px',
  backgroundColor: 'rgba(76, 175, 80, 0.04)',
}));

const TicketDetail = ({ ticketId }) => {
  return (
    <main>
      <Container sx={{marginTop: '35px'}}>
        <Typography variant="h4" sx={{color: theme.palette.primary.darkHeading}}>Ticket #{ticketId}</Typography>

        <DetailHeadingSection elevation={0}>
          <Box p={2}>
            <Box sx={{display: 'flex', alignItems: 'center'}}>
              <ActionHeader variant="h6">Resume Session</ActionHeader>
              <Button component={Link} href={`tickets/245343`} sx={{marginLeft: 'auto'}}>#245343</Button>
            </Box>
            <Box sx={{display: 'flex'}}>
              <Box>
                <Typography className={'smallLabel'}>Customer:</Typography>
                <Typography>Vance Garner</Typography>
                <Typography className={'smallLabel'}>Title:</Typography>
                <Typography>Frontend Updates</Typography>
                <Typography className={'smallLabel'}>Description:</Typography>
                <Typography className={'description'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</Typography>
              </Box>
            </Box>
          </Box>
        </DetailHeadingSection>

      </Container>
    </main>
  )
}

export default withAuth(TicketDetail);


export async function getServerSideProps(context) {
  const { ticketId } = context.query;

  return {
    props: {
      ticketId: ticketId || null,
    },
  };
}
