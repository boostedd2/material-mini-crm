import {Box, Button, Container, Paper, Typography} from "@mui/material";
import {theme} from "@/_themes/ThemeProvider";
import React from "react";
import {styled} from "@mui/material/styles";
import withAuth from "@/_context/withAuth";
import Link from "next/link";
import ReadOnlyFieldLabel from "@/_components/common/Text/ReadOnlyFieldLabel";
import DescriptionText from "@/_components/common/Text/DescriptionText";
import HeadingMain from "@/_components/common/Text/HeadingMain";
import Grid from "@mui/material/Grid";

const TicketHeadingSection = styled(Paper)(({theme}) => ({
  marginTop: '20px',
  height: '300px',
  backgroundColor: 'rgba(76, 175, 80, 0.04)',
}));

const CustomReadOnlyFieldLabel = styled(ReadOnlyFieldLabel)(({ theme }) => ({
  marginTop: '0px !important',
}));

const TicketDetail = ({ ticketId }) => {
  return (
    <main>
      <Container sx={{marginTop: '35px'}}>
        <HeadingMain>Ticket #{ticketId}</HeadingMain>

        <TicketHeadingSection elevation={0}>
          <Box p={'0 20px 0 20px'}>
            <Grid container>
              <Grid item xs={6}>
                <CustomReadOnlyFieldLabel>Customer:</CustomReadOnlyFieldLabel>
                <DescriptionText>Vance Garner</DescriptionText>
              </Grid>
              <Grid item xs={6}>
                <CustomReadOnlyFieldLabel>Contact:</CustomReadOnlyFieldLabel>
                <DescriptionText>111-222-3333</DescriptionText>
                <DescriptionText>Vance@example.com</DescriptionText>
              </Grid>
              <Grid item xs={6}>
                <CustomReadOnlyFieldLabel>Address:</CustomReadOnlyFieldLabel>
                <DescriptionText>214 53rd Lane</DescriptionText>
                <DescriptionText>Redford, MI</DescriptionText>
                <DescriptionText>48239</DescriptionText>
              </Grid>
            </Grid>
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
