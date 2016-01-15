import React, { Component, PropTypes } from 'react'
import { TextField, Divider, Card, CardActions, CardHeader, CardTitle, CardText, FlatButton } from 'material-ui'
import { queryIndeed } from '../lib/indeed'

MainSearch = class MainSearch extends Component {

    constructor (props) {
        super(props)
        this.state = {
            open: false,
            results: [],
            searchQuery: ''
        }
    }

    componentDidMount() {
        this.search("")
    }

    search(query) {
        Meteor.call('queryIndeed', query, (err, result) => {
            let xml = $.parseXML(result.content)
            let $results = $(xml).find('result')
            let results = []
            $results.toArray().map((result) => {
                let resultObject = {}
                let $attributes = $(result).children().toArray().map((attr) => {
                    resultObject[attr.tagName] = attr.innerHTML
                })
                results.push(resultObject)
            })
            console.log(results)
            this.setState({
                results
            })
        })
    }

    handleToggle(e) {
        console.log('clicked')
        console.log(e)
        this.setState({
            open: !this.state.open
        })
    }

    handleClose() {
        this.setState({
            open: false
        })
    }

    handleChange(event) {
        newValue = event.target.value
        this.setState({
            value: newValue
        })
        this.search(newValue)
    }

    render () {

        return (
            <div
                className="main-search"
                style={{
                    maxWidth: '1024px',
                    margin: 'auto'
                }}
                >
                <TextField
                    hintText=""
                    fullWidth={true}
                    floatingLabelText="Lets Find a Job!"
                    onChange={(e) => this.handleChange(e) }
                    value={this.state.value}
                />
                <ResultList results={this.state.results} />
            </div>
        )
    }
}
