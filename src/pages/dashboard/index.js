import React, {useContext} from 'react';
import withAuth from "@/_context/withAuth";
import {Container, Typography} from "@mui/material";
import TicketTabs from "@/_components/Dashboard/TabMenu";
import DashboardActions from "@/_components/Dashboard/DashboardActions";
import {theme} from "@/_themes/ThemeProvider";

const styles = {

};

const Dashboard = () => {
  return (
      <main>
        <Container sx={{marginTop: '35px'}}>
          <Typography variant="h4" sx={{color: theme.palette.primary.darkHeading}}>Dashboard</Typography>
          <DashboardActions />
          <TicketTabs />
        </Container>
      </main>
  );
};

export default withAuth(Dashboard);
