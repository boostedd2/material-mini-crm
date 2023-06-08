import React, {useContext} from 'react';
import withAuth from "@/_context/withAuth";
import {Container} from "@mui/material";
import TicketTabs from "@/_components/Dashboard/TabMenu";

const styles = {

};

const Dashboard = () => {
  return (
      <main>
        <Container>
          <TicketTabs />
        </Container>
      </main>
  );
};

export default withAuth(Dashboard);
