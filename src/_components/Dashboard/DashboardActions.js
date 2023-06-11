import Grid from "@mui/material/Grid";
import {Box, Button, Paper, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import NoteAddIcon from '@mui/icons-material/NoteAdd';




const ActionHeader = styled(Typography)(({theme}) => ({
  color: theme.palette.primary.darkHeading
}));

const RecentTicketCard = styled(Paper)(({theme}) => ({
  height: '300px',
  width: '100%',
  backgroundColor: 'rgba(76, 175, 80, 0.04)',
}));

const DashboardActionButton = styled(Button)(({theme}) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '145px',
  width: '100%',
  backgroundColor: 'rgba(76, 175, 80, 0.04)',

  '& .MuiGrid-item': {
    flexDirection: 'row',

    [theme.breakpoints.up('sm')]: {
      flexDirection: 'column'
    },
  },
}));


const DashboardActions = () => {
  return (
    <Grid container mt={0} spacing={2}>
      <Grid item xs={12} sm={6}>
        <RecentTicketCard elevation={0}>
          <Box p={2}>
            <ActionHeader variant="h6">Most Recent</ActionHeader>
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
        <DashboardActionButton sx={{marginBottom: '10px'}}>
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
