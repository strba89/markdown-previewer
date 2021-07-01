import React from "react";
import EditorComponent from "../components/Editor.component";
import PreviewerComponent from '../components/Previewer.component'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from "@material-ui/core/styles";
import {connect} from "react-redux";


const useStyles = makeStyles((theme) => ({
    fullHeight:{
        height: "100vh",
    }
}));

const MainPage = ({store}) => {
    const classes = useStyles();

    return(
        <Container maxWidth="xl" className={classes.fullHeight}>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                className={classes.fullHeight}
            >
                <Grid item xs={store.resizeReducer.boxOneResize?6:4} style={{ height: store.resizeReducer.boxOneResize?'100%':'300px'}}>
                    <EditorComponent/>
                </Grid>
                <Grid item xs={store.resizeReducer.boxSecondResize?6:5} style={{ height: store.resizeReducer.boxSecondResize?'100%':'500px'}}>
                    <PreviewerComponent/>
                </Grid>
            </Grid>
        </Container>

    )
}
const mapStateToProps = (state) => {
    return {store: state}
};


export default connect(
    mapStateToProps,
    null
)(MainPage)


