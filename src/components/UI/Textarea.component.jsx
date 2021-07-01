import React, {useEffect} from "react";
import {connect} from "react-redux";
import {makeStyles} from "@material-ui/core/styles";
import {setText} from "../../store/text/actions";

const useStyles = makeStyles((theme) => ({
    textarea:{
        width: "-webkit-fill-available",
        height: '100%',
        resize: 'none',
        border: 'none',
        backgroundColor: '#D1FAFF',
        "&:focus-visible":{
            outline: 'none'
        }
    }
}));
const Textarea = ({store, setText}) =>{
    const classes = useStyles();
    const [inputValue, setInputValue] = React.useState("");
    const [isChange, setIsChange] = React.useState(false);

    function handleInputChange(event) {
        setInputValue(event.target.value);
        setIsChange(true)
    }

    useEffect(() => {
        if(isChange){
            setText(inputValue)
        }
        // eslint-disable-next-line
    }, [inputValue]);
    return(
        <textarea
                id="editor"
                  value={ inputValue? inputValue: store.text.text }
                  onChange={ handleInputChange }
                  className={classes.textarea}>
            </textarea>
    )
}
const mapStateToProps = (state) => {
    return {store: state}
};
const mapDispatchToProps = dispatch => ({
    setText: text => dispatch(setText(text))
});



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Textarea)


