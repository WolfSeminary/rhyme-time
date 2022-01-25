import AppBar from './AppBar';
import WriteSong from './WriteSong';
import NumOfSyllables from './NumOfSyllables ';
import FindRhyme from './FindRhyme';
import PrintSong from './PrintSong';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import RhymesList from './RhymesList';
import BackGround from './BackGround';
import WordToRhyme from './WordToRhyme';
import ClearSong from './ClearSong';
import { useState  } from 'react';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        // width:'50vw',
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: '100vw',
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));

export default function ComplexGrid() {
    const classes = useStyles();
    const [image, setImage] = useState([]);

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <AppBar />
                    </Grid>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item>
                            <ClearSong
                            />
                        </Grid>
                        <Grid item>
                            <WriteSong image={image}/>
                        </Grid>
                        <Grid item>
                            <BackGround setImage={setImage}/>
                        </Grid>
                    </Grid>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs={12} sm container spacing={10}>
                            <Grid item>
                                <NumOfSyllables />
                            </Grid>
                            <Grid item>
                                <WordToRhyme />
                            </Grid>
                        </Grid>
                        <Grid item>
                           
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <PrintSong />
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}
