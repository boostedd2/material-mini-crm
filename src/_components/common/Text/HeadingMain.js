import { theme } from "@/_themes/ThemeProvider";
import { Typography } from "@mui/material";

const HeadingMain = ({ children }) => {
  return (
    <Typography variant="h4" sx={{ color: theme.palette.primary.darkHeading }}>
      {children}
    </Typography>
  );
};

export default HeadingMain;
