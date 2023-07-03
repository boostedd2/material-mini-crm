export const stateOptions = [
  { label: 'Alabama' },
  { label: 'Alaska' },
  { label: 'Arizona' },
  { label: 'Arkansas' },
  { label: 'California' },
  { label: 'Colorado' },
  { label: 'Connecticut' },
  { label: 'Delaware' },
  { label: 'Florida' },
  { label: 'Georgia' },
  { label: 'Hawaii' },
  { label: 'Idaho' },
  { label: 'Illinois' },
  { label: 'Indiana' },
  { label: 'Iowa' },
  { label: 'Kansas' },
  { label: 'Kentucky' },
  { label: 'Louisiana' },
  { label: 'Maine' },
  { label: 'Maryland' },
  { label: 'Massachusetts' },
  { label: 'Michigan' },
  { label: 'Minnesota' },
  { label: 'Mississippi' },
  { label: 'Missouri' },
  { label: 'Montana' },
  { label: 'Nebraska' },
  { label: 'Nevada' },
  { label: 'New Hampshire' },
  { label: 'New Jersey' },
  { label: 'New Mexico' },
  { label: 'New York' },
  { label: 'North Carolina' },
  { label: 'North Dakota' },
  { label: 'Ohio' },
  { label: 'Oklahoma' },
  { label: 'Oregon' },
  { label: 'Pennsylvania' },
  { label: 'Rhode Island' },
  { label: 'South Carolina' },
  { label: 'South Dakota' },
  { label: 'Tennessee' },
  { label: 'Texas' },
  { label: 'Utah' },
  { label: 'Vermont' },
  { label: 'Virginia' },
  { label: 'Washington' },
  { label: 'West Virginia' },
  { label: 'Wisconsin' },
  { label: 'Wyoming' }
];


export const getCurrentDateTime = () => {
  const currentDate = new Date();
  const formattedDate = `${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()}`;
  const formattedTime = `${currentDate.getHours()}:${currentDate.getMinutes().toString().padStart(2, '0')}`;
  return `${formattedDate} - ${formattedTime}`;
};


export const scrollToBottom = ({targetElement = null} = {}) => {
  targetElement.scrollTo({
    top: targetElement.scrollHeight,
    behavior: 'smooth'
  });
}
