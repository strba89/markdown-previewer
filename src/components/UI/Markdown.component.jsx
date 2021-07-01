import React from 'react'
import {connect} from "react-redux";
import ReactMarkdown from 'react-markdown'
const gfm = require('remark-gfm')


const MarkdownComponent = ({store}) => {
    let data = store.text.text
    return (
        <ReactMarkdown remarkPlugins={[gfm]} children={data}/>
    )
}


const mapStateToProps = (state) => {
    return {store: state}
};

export default  connect(
    mapStateToProps,
    null
) (MarkdownComponent)