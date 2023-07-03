import {Box, TextField, Typography} from "@mui/material";
import React, {useEffect, useState} from "react";
import {styled} from "@mui/material/styles";
import {getCurrentDateTime, scrollToBottom} from "@/utils/constants";



const mockData = [
  {
    user: 'Admin',
    dateTime: '7/15/2023 - 8:17',
    message: 'Customer requested frontend style updates'
  },
  {
    user: 'John',
    dateTime: '7/16/2023 - 9:32',
    message: 'Implemented responsive design for mobile devices'
  },
  {
    user: 'Sarah',
    dateTime: '7/17/2023 - 14:58',
    message: 'Refactored CSS code for improved maintainability'
  },
  {
    user: 'Admin',
    dateTime: '7/18/2023 - 11:21',
    message: 'Added new UI component library for consistent styling'
  },
  {
    user: 'Michael',
    dateTime: '7/19/2023 - 16:45',
    message: 'Optimized page load time by compressing images'
  },
  {
    user: 'Admin',
    dateTime: '7/15/2023 - 8:17',
    message: 'Customer requested frontend style updates'
  },
  {
    user: 'John',
    dateTime: '7/16/2023 - 9:32',
    message: 'Implemented responsive design for mobile devices'
  },
  {
    user: 'Sarah',
    dateTime: '7/17/2023 - 14:58',
    message: 'Refactored CSS code for improved maintainability'
  },
  {
    user: 'Admin',
    dateTime: '7/18/2023 - 11:21',
    message: 'Added new UI component library for consistent styling'
  },
  {
    user: 'Michael',
    dateTime: '7/19/2023 - 16:45',
    message: 'Optimized page load time by compressing images'
  }
];



const NotesBox = styled(Box)(({ theme }) => ({
  padding: 20,
  height: 500,
  overflowY: 'scroll',
  scrollbarWidth: 'thin',
  scrollbarColor: `${theme.palette.secondary.main} ${theme.palette.primary.light}`,
  '&::-webkit-scrollbar': {
    width: '8px',
  },
  '&::-webkit-scrollbar-track': {
    background: theme.palette.secondary.light,
  },
  '&::-webkit-scrollbar-thumb': {
    background: theme.palette.primary.light,
    borderRadius: '8px',
  },
}));

const StyledNote = styled(Box)(({ theme }) => ({
  padding: '10px 10px',
  marginTop: '5px',
  borderRadius: 5,

  '& .user': {
    fontSize: 10,
    fontWeight: 500,
    textTransform: 'uppercase',
    color: theme.palette.primary.darkHeading,
  },

  '& .dateTime': {
    fontSize: 14,
    fontStyle: 'italic',
    color: theme.palette.primary.darkHeading,
  },

  '& .message': {
    fontSize: 16,
  },

  '&:nth-child(odd)': {
    backgroundColor: theme.palette.secondary.darker,
  },

  '&:nth-child(even)': {
    backgroundColor: theme.palette.primary.light,
  },
}));

const InputField = styled(TextField)(({ theme }) => ({
  marginTop: theme.spacing(2),
  width: '100%',
}));


const Note = ({ user, dateTime, message }) => {
  return (
    <StyledNote>
      <Typography className={'user'}>{user}</Typography>
      <Typography className={'dateTime'}>{dateTime}</Typography>
      <Typography className={'message'}>{message}</Typography>
    </StyledNote>
  )
}


const NotesTab = () => {
  const [ticketNotes, setTicketNotes] = useState(mockData);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const submitNote = (event) => {
    if (event.key === 'Enter' && event.shiftKey) {
      event.preventDefault();
      console.log(inputValue)

      const newNote = {
        user: 'Admin',
        dateTime: getCurrentDateTime(),
        message: inputValue
      }

      setTicketNotes(prevState => [...prevState, newNote])

      setInputValue('');
    }
  };


  useEffect(() => {
    const notesBoxInstance = document.getElementById('notesBox')

    scrollToBottom({targetElement: notesBoxInstance})
  }, [ticketNotes])



  return (
    <Box>
      <NotesBox id={'notesBox'}>
        {ticketNotes?.map((note, index) =>
          <Note key={`${note.dateTime}-${index}`} user={note.user} dateTime={note.dateTime} message={note.message} />
        )}
      </NotesBox>
      <InputField
        multiline
        rows={4}
        variant="outlined"
        placeholder="Hold shift and press enter to submit"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={submitNote}
      />
    </Box>
  )
}

export default NotesTab;
