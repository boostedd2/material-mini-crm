import Grid from "@mui/material/Grid";
import {Box, Paper, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import NoteAddIcon from '@mui/icons-material/NoteAdd';





const RecentTicketCard = styled(Paper)(({theme}) => ({
  height: '300px',
  width: '100%'
}));

const DashboardActionButton = styled(Paper)(({theme}) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '150px',
  width: '100%',

  '& .MuiGrid-item': {
    flexDirection: 'row',

    [theme.breakpoints.up('sm')]: {
      flexDirection: 'column'
    },
  },
}));


const DashboardActions = () => {
  return (
    <Grid container mt={0} spacing={3}>
      <Grid item xs={12} sm={6}>
        <RecentTicketCard>
          <Box p={2}>
            <Typography variant="h6">Most Recent</Typography>
            <Box sx={{display: 'flex'}}>
              <Box>
                <Typography>Ticket: #245343</Typography>
                <Typography>Customer</Typography>
                <br/>
                <Typography>Title</Typography>
                <Typography>Description</Typography>
              </Box>
              <Box marginLeft={'auto'}>
                <Typography>STATUS</Typography>
              </Box>
            </Box>
          </Box>
        </RecentTicketCard>
      </Grid>
      <Grid item xs={6}>
        <DashboardActionButton>
          <Grid container direction="column" alignItems="center" justify="center">
            <NoteAddIcon />
            <Typography>Ticket</Typography>
          </Grid>
        </DashboardActionButton>
        <DashboardActionButton>
          <Grid container direction="column" alignItems="center" justify="center">
            <PersonAddIcon />
            <Typography>Customer</Typography>
          </Grid>
        </DashboardActionButton>
      </Grid>
    </Grid>
  );
};

export default DashboardActions;
