import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {CssBaseline} from "@material-ui/core";
import SettingsOverscanTwoToneIcon from '@material-ui/icons/SettingsOverscanTwoTone';
import IconButton from '@material-ui/core/IconButton';
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';
import RateReviewTwoToneIcon from '@material-ui/icons/RateReviewTwoTone';
import BoxComponent from "./Box.component";
import {connect} from "react-redux";
import {resizeEditor, resizePreviewer} from "../../store/resize/actions";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: "none",
    },
    title: {
        flexGrow: 1,
        marginLeft: '1em',
    },
    box: {
        overflowY: "scroll",
        overflowX: "hidden",
        height: '500px',
    },
    boxWrapper: {
        padding: 0,
        '& img': {
            width: '100%'
        }
    },
    header:{
        backgroundColor: '#6A8EAE'
    }
}));
function AppBarComponent({title, resizeEditor, resizePreviewer}){
    const classes = useStyles();

    function handleClick(){
        console.log(title)
        if(title === 'Editor'){
            resizeEditor()
        }else {
            resizePreviewer()
        }
    }
    return (
        <React.Fragment>
            <CssBaseline/>
            <AppBar position="static" className={classes.header}>
                <Toolbar>
                    {title === 'Editor' ? <EditTwoToneIcon/> : <RateReviewTwoToneIcon/>}
                    <Typography variant="h6" className={classes.title}>
                        {title}
                    </Typography>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleClick}>
                        <SettingsOverscanTwoToneIcon/>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <BoxComponent title={title}/>
        </React.Fragment>
    );
}


const mapDispatchToProps = dispatch => ({
    resizeEditor: e => dispatch(resizeEditor(e)),
    resizePreviewer: e => dispatch(resizePreviewer(e))
});



export default connect(
    null,
    mapDispatchToProps
)(AppBarComponent)