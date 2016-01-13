import React, { Component, PropTypes } from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { AppBar, LeftNav, MenuItem, RaisedButton } from 'material-ui'

App = class App extends Component {

    constructor (props) {
        injectTapEventPlugin()
        super(props)
        this.state = {
            open: false
        }
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

    render () {

        return (
            <div className="app">
                <AppBar
                    onLeftIconButtonTouchTap={(e) => this.handleToggle(e)}
                />
                <LeftNav
                    docked={false}
                    open={this.state.open}
                    onRequestChange={open => this.setState({open})}
                    >
                    <MenuItem onTouchTap={this.handleClose}>Menu Item</MenuItem>
                    <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
                </LeftNav>
                <main>
                    <pre>{JSON.stringify(this.state, null, 2)}</pre>
                    <h1>Welcome To Za Warudo</h1>
                    <MainSearch />
                </main>
            </div>
        )
    }
}

export default App
