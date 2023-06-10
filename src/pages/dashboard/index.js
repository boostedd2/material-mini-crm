import React, {useContext} from 'react';
import withAuth from "@/_context/withAuth";
import {Container, Typography} from "@mui/material";
import TicketTabs from "@/_components/Dashboard/TabMenu";
import DashboardActions from "@/_components/Dashboard/DashboardActions";

const styles = {

};

const Dashboard = () => {
  return (
      <main>
        <Container sx={{marginTop: '35px'}}>
          <Typography variant="h4">Dashboard</Typography>
          <DashboardActions />
          <TicketTabs />
        </Container>
      </main>
  );
};

export default withAuth(Dashboard);
