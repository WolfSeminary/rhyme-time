import AppBar from './AppBar';
import WriteSong from './WriteSong';
import NumOfSyllables from './NumOfSyllables ';
import FindRhyme from './FindRhyme';
import PrintSong from './PrintSong';
import FetchMoreRhymes from './FetchMoreRhymes';
// import ClearSong
// // const HomePage = () => {
// //     return (<>
// //         <FindRhyme></FindRhyme>
// //         <NumOfSyllables></NumOfSyllables>
// //         <FetchMoreRhymes></FetchMoreRhymes>
// //         <ClearSong></ClearSong>
// //         <PrintSong></PrintSong>
// //     </>);
// // }
// // export default HomePage;


// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';

// const useStyles = makeStyles((theme) => ({
//     root: {
//         flexGrow: 1,
//     },
//     paper: {
//         padding: theme.spacing(2),
//         padding: theme.spacing(2),
//         margin: 'auto',
//         maxWidth: 500,
//     },
//     main: {
//         height: '60vh',
//         textAlign: 'center',
//         color: theme.palette.text.secondary,
//     },
//     col: {

//     }
// }));

// export default function CenteredGrid() {
//     const classes = useStyles();

//     return (
//         <div className={classes.root}>
//             <Grid container spacing={3}>
//                 <Grid item xs={12}>
//                     <Paper className={classes.paper}>
//                         <AppBar />
//                     </Paper>
//                 </Grid>

//                 <Grid item xs={6}>
//                     <Paper className={classes.paper}>
//                         <WriteSong  />
//                     </Paper>
//                 </Grid>
//                 <Grid item xs={2}>
//                     <Paper className={classes.paper} >
//                         <NumOfSyllables />
//                     </Paper>
//                 </Grid>

//                 <Grid item xs={2}>
//                     <Paper className={classes.paper} >
//                         <FindRhyme />
//                     </Paper>
//                 </Grid>

//                 <Grid item xs={2}>
//                     <Paper className={classes.paper} >
//                         type a word
//                     </Paper>
//                 </Grid>
//                 <Grid item xs={6}>
//                     <Paper className={classes.paper}>
//                         back ground component
//                     </Paper>
//                 </Grid>



//                 <Grid item xs={6}>
//                     <Paper className={classes.paper}>
//                         list of fetched rhymes first 10
//                     </Paper>
//                 </Grid>

//                 <Grid item xs={6}>
//                     <Paper className={classes.paper}>
//                         <FetchMoreRhymes />
//                     </Paper>
//                 </Grid>

//             <Grid item xs={12}>
//                 <Paper className={classes.paper}>
//                     <PrintSong />
//                 </Paper>
//             </Grid>
//         </Grid>

//         </div >
//     );
// }

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

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

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <AppBar />
                    </Grid>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item>
                            {/* <ClearSong/> */}
                            <p>clear song</p>
                        </Grid>
                        <Grid item>
                            <WriteSong />
                        </Grid>
                        <Grid item>
                        <p>backgroundgit che</p>
                        </Grid>
                    </Grid>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs={12} sm container spacing={10}>
                            <Grid item>
                                <NumOfSyllables />
                            </Grid>
                            <Grid item>
                                <FindRhyme />
                            </Grid>
                            <Grid item>
                                <p>type a word</p>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <p>list of fetched rhymes first 10</p>
                        </Grid>
                        <Grid item>
                            <FetchMoreRhymes />
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <p>background</p>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}

// {/* <Grid item xs={12}>
// <Paper className={classes.paper}>
//     <AppBar />
// </Paper>
// </Grid>
// <Grid item>
// <WriteSong />
// </Grid>
// <Grid item xs={12} sm container>

// {/* <Grid item>
//     <FindRhyme />
// </Grid> */}
// <Grid item xs container direction="column" spacing={2}>
//     <Grid item xs>
//         <Typography gutterBottom variant="subtitle1">
//             Standard license
//         </Typography>
//         <Typography variant="body2" gutterBottom>
//             Full resolution 1920x1080 • JPEG
//         </Typography>
//         <Typography variant="body2" color="textSecondary">
//             ID: 1030114
//         </Typography>
//     </Grid>
//     <Grid item>
//         <Typography variant="body2" style={{ cursor: 'pointer' }}>
//             Remove
//         </Typography>
//     </Grid>
// </Grid>
// <Grid item>
//     <NumOfSyllables />
// </Grid>
// </Grid> */}