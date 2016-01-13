import React, { Component, PropTypes } from 'react'
import { Card, CardActions, CardHeader, CardTtile, CardText, FlatButton } from 'material-ui'

Result = class Result extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    learnMore(url) {
        var win = window.open(url, '_blank')
        win.focus()
    }

    render () {

        return (
            <div className="search-result" style={{
                margin: '2em'
            }}>
                <Card initiallyExpanded={false}>
                    <CardHeader
                        title={this.props.jobtitle}
                        subtitle={this.props.company}
                        actAsExpander={false}
                        showExpandableButton={false}
                    />
                    <CardText expandable={false}>
                        {this.props.snippet}
                    </CardText>
                    <CardActions expandable={false} >
                        <FlatButton label="Learn More" onClick={(e) => this.learnMore(this.props.url)} />
                        <FlatButton label="Save For Later" />
                    </CardActions>
                </Card>
            </div>
        )
    }
}
