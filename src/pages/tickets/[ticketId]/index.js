import {Box, Button, Container, Paper, Typography} from "@mui/material";
import {theme} from "@/_themes/ThemeProvider";
import React from "react";
import {styled} from "@mui/material/styles";
import withAuth from "@/_context/withAuth";
import Link from "next/link";
import HeadingSecondary from "@/_components/common/Text/HeadingSecondary";
import ReadOnlyFieldLabel from "@/_components/common/Text/ReadOnlyFieldLabel";
import DescriptionText from "@/_components/common/Text/DescriptionText";

const TicketHeadingSection = styled(Paper)(({theme}) => ({
  marginTop: '20px',
  height: '300px',
  backgroundColor: 'rgba(76, 175, 80, 0.04)',
}));

const TicketDetail = ({ ticketId }) => {
  return (
    <main>
      <Container sx={{marginTop: '35px'}}>
        <Typography variant="h4" sx={{color: theme.palette.primary.darkHeading}}>Ticket #{ticketId}</Typography>

        <TicketHeadingSection elevation={0}>
          <Box p={2}>
            <Box sx={{display: 'flex'}}>
              <Box>
                <ReadOnlyFieldLabel>Customer:</ReadOnlyFieldLabel>
                <DescriptionText>Vance Garner</DescriptionText>
                <ReadOnlyFieldLabel>Title:</ReadOnlyFieldLabel>
                <DescriptionText>Frontend Updates</DescriptionText>
                <ReadOnlyFieldLabel>Description:</ReadOnlyFieldLabel>
                <DescriptionText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</DescriptionText>
              </Box>
            </Box>
          </Box>
        </TicketHeadingSection>

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
