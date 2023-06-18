import {Container, Typography} from "@mui/material";
import {theme} from "@/_themes/ThemeProvider";
import React from "react";

const TicketDetail = ({ ticketId }) => {
  return (
    <main>
      <Container sx={{marginTop: '35px'}}>
        <Typography variant="h4" sx={{color: theme.palette.primary.darkHeading}}>Ticket #{ticketId}</Typography>

      </Container>
    </main>
  )
}

export default TicketDetail;


export async function getServerSideProps(context) {
  const { ticketId } = context.query;

  return {
    props: {
      ticketId: ticketId || null,
    },
  };
}
