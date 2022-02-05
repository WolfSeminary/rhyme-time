import AppBar from './AppBar';
import WriteSong from './WriteSong';
import NumOfSyllables from './NumOfSyllables ';
import FindRhymes from './FindRhymes';
import RhymesList from "./RhymesList";
import ThankYouModal from "./ThankYouModal";
import PrintSong from './PrintSong';
import FetchMoreRhymes from './FetchMoreRhymes';
import React, { useRef } from 'react';
import { Grid, Paper, makeStyles } from "@mui/material"
import BackGround from './Background';
import WordToRhyme from './WordToRhyme';
import ClearSong from './ClearSong';
import { useState, useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
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

export default function HomePage() {
    const [wordToRhyme, setWordToRhyme] = useState()
    const [currentRhymesRange, setCurrentRhymesRange] = useState(0)
    const [rhymes, setRhymes] = useState([])
    const classes = useStyles();
    const componentRef = useRef();
    const [selectedBackground, setSelectedBackground] = useState(null);
    const [song, setSong] = useState("");
    const [numOfSyllables, setNumOfSyllables] = useState(0);
    const [shouldShowThankYouModal, setShouldShowThankYouModal] = useState(false);
    const [rhymeListFilter, setRhymeListFilter] = useState([]);

    const onCloseModal = () => {
        setShouldShowThankYouModal(false);
    }
    useEffect(() => {
        if (numOfSyllables) {
            const arr = rhymes.filter(e => e.syllables === numOfSyllables)
            setRhymeListFilter(arr)
        }
    }, [numOfSyllables]);
    const fetchRhymes = (e) => {
        if (!wordToRhyme || !wordToRhyme.trim())
            e.preventDefault();
        fetch(`https://rhymebrain.com/talk?function=getRhymes&word=${wordToRhyme}`)
            .then(response => response.json())
            .then(data => {
                setRhymeListFilter(data);
                setRhymes(data)
                setCurrentRhymesRange(10);
            })
            ;
    }

    const onWordToRhymeChange = (value) => {
        setWordToRhyme(value);
    }
    const onWriteSong = (e) => {
        setSong(e.target.value)
    };
    const onClearSongClick = () => {
        setSong("");

    }
    const onNumOfSyllablesChange = (e) => {
        setNumOfSyllables(e.target.value);
    }
    const onBackgroundChange = (value) => {
        setSelectedBackground(value)
    }

    const onPrintSongClick = () => {
        setShouldShowThankYouModal(true)
    }
    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <AppBar />
                    </Grid>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item>
                            <ClearSong onClick={onClearSongClick} />
                        </Grid>
                        <Grid item>
                            <WriteSong onChange={onWriteSong} song={song} background={selectedBackground ? selectedBackground.url : null} ref={componentRef} song={song} setSong={setSong} />
                        </Grid>
                        <Grid item>
                            {/*
                          <BackGround setImage={setImage} />  */}
                            <BackGround onChange={onBackgroundChange} />
                        </Grid>

                    </Grid>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs={12} sm container spacing={10}>
                            <Grid item>
                                <NumOfSyllables numOfSyllables={numOfSyllables} onChange={onNumOfSyllablesChange} />
                            </Grid>
                            <Grid item>

                                <PrintSong onClick={onPrintSongClick} content={() => componentRef.current} />
                            </Grid>
                            <Grid item>
                                <WordToRhyme onChange={onWordToRhymeChange} />
                            </Grid>
                            <Grid item>
                                <FindRhymes onClick={fetchRhymes} />
                            </Grid>

                        </Grid>
                        <Grid item>

                            <RhymesList currentRange={currentRhymesRange} rhymes={rhymeListFilter} />

                            <FetchMoreRhymes setCurrentRhymesRange={setCurrentRhymesRange} currentRhymesRange={currentRhymesRange} rhymesLength={rhymes.length} />
                        </Grid>
                    </Grid>

                </Grid>
                {shouldShowThankYouModal && <ThankYouModal onClose={onCloseModal} />}

            </Paper>

        </div>

    );
}
