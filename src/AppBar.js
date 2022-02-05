import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function AppBarPage() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{ 'textAlign': 'left' }}>
          Time to Rhyme
          </Typography>
      </Toolbar>
    </AppBar>
  );
}


