import { AppBar, Toolbar, Typography } from "@mui/material"


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


