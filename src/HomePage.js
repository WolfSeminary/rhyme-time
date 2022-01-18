import AppBar from './AppBar';
import WriteSong from './WriteSong';
import NumOfSyllables from './NumOfSyllables ';
import FindRhyme from './FindRhyme';
import PrintSong from './PrintSong';
import FetchMoreRhymes from './FetchMoreRhymes';
// const HomePage = () => {
//     return (<>
//         <FindRhyme></FindRhyme>
//         <NumOfSyllables></NumOfSyllables>
//         <FetchMoreRhymes></FetchMoreRhymes>
//         <ClearSong></ClearSong>
//         <PrintSong></PrintSong>
//     </>);
// }
// export default HomePage;


import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    main: {
        height: '60vh',
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    col: {

    }
}));

export default function CenteredGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <AppBar />
                    </Paper>
                </Grid>
                
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <WriteSong  />
                    </Paper>
                </Grid>
                <Grid item xs={2}>
                    <Paper className={classes.paper}>
                        <NumOfSyllables />
                    </Paper>
                </Grid>

                <Grid item xs={2}>
                    <Paper className={classes.paper}>
                        <FindRhyme />
                    </Paper>
                </Grid>

                <Grid item xs={2}>
                    <Paper className={classes.paper}>
                        type a word
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        back ground component
                    </Paper>
                </Grid>

                

                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        list of fetched rhymes first 10
                    </Paper>
                </Grid>

                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <FetchMoreRhymes />
                    </Paper>
                </Grid>

            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <PrintSong />
                </Paper>
            </Grid>
        </Grid>

        </div >
    );
}
