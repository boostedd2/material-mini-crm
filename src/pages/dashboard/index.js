import React, {useContext, useState} from 'react';
import withAuth from "@/_context/withAuth";
import {Container, Typography} from "@mui/material";
import TicketTabs from "@/_components/Dashboard/TabMenu";
import DashboardActions from "@/_components/Dashboard/DashboardActions";
import {theme} from "@/_themes/ThemeProvider";
import NewTicketDialog from '@/_components/common/Dialogs/NewTicketDialog';
import NewCustomerDialog from '@/_components/common/Dialogs/NewCustomerDialog';

const styles = {

};

const Dashboard = () => {
  const [openNewTicketDialog, setOpenNewTicketDialog] = useState(false)
  const [openNewCustomerDialog, setOpenNewCustomerDialog] = useState(false)

  const handleNewTicketDialogOpen = () => {
    setOpenNewTicketDialog(true);
  };

  const handleNewTicketDialogClose = () => {
    setOpenNewTicketDialog(false);
  };

  const handleNewCustomerDialogOpen = () => {
    setOpenNewCustomerDialog(true);
  };

  const handleNewCustomerDialogClose = () => {
    setOpenNewCustomerDialog(false);
  };

  return (
      <main>
        <Container sx={{marginTop: '35px'}}>
          <Typography variant="h4" sx={{color: theme.palette.primary.darkHeading}}>Dashboard</Typography>

          <DashboardActions 
            openNewTicketDialog={handleNewTicketDialogOpen} 
            openNewCustomerDialog={handleNewCustomerDialogOpen} 
          />

          <TicketTabs />
          
          <NewTicketDialog open={openNewTicketDialog} onClose={handleNewTicketDialogClose} />
          <NewCustomerDialog open={openNewCustomerDialog} onClose={handleNewCustomerDialogClose} />
        </Container>
      </main>
  );
};

export default withAuth(Dashboard);
