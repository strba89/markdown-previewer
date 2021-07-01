import React from "react";
import {Box, Container} from "@material-ui/core";
import Textarea from "./Textarea.component";
import MarkdownComponent from "./Markdown.component";
import {makeStyles} from "@material-ui/core/styles";
import {connect} from "react-redux";
const useStyles = makeStyles((theme) => ({
    box: {
        overflowY: "scroll",
        overflowX: "hidden",
        backgroundColor:'#D1FAFF',
        height: '100%'
    },
    boxWrapper:{
        padding: 0,
        height: '100%',
        '& img':{
            width: '100%'
        }
    }
}));
const BoxComponent = ({title}) => {
    const classes = useStyles()
    return(
        <Container className={classes.boxWrapper}>
            <Box style={{height:'100%'}}>
                {
                    title === 'Editor'?<Textarea />:
                        <Container  className={classes.box}>
                            <Box my={0} id="preview">
                                <MarkdownComponent />
                            </Box>
                        </Container>
                }
            </Box>
        </Container>
    )
}
const mapStateToProps = (state) => {
    return {store: state}
};


export default connect(
    mapStateToProps,
    null
)(BoxComponent)

