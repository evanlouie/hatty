import React, { Component, PropTypes } from 'react'

ResultList = class ResultList extends Component {

    constructor(props) {
        super(props)
    }

    render () {

        let results = <div>NO RESULTS</div>
        if (this.props.results) {
            results = this.props.results.map((result) => {
                return <Result key={result.jobkey} {... result} />
            })
        }

        return (
            <div className="search-result-list">
                {results}
            </div>
        )
    }
}
