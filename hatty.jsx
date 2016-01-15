import React from 'react'
import ReactDOM from 'react-dom'

if (Meteor.isClient) {
    Meteor.startup(() => {
        ReactDOM.render(<App />, document.getElementById('app'))
    })
}

if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    })

    Meteor.methods({
        evan() {
            call = HTTP.call(
                'get',
                'http://www.evanlouie.com'
            )
            return call
        }
    })
    Meteor.methods({
        queryIndeed (searchQuery) {
            console.log(`Searching Indeed for: ${searchQuery}`)
            this.unblock()
            return HTTP.call(
                'GET',
                'http://api.indeed.com/ads/apisearch',
                {
                    params: {
                        publisher: '1780328710393860',
                        q: searchQuery,
                        l: 'vancouver',
                        co: 'ca',
                        v: '2'
                    }
                }
            )
        },

        curlUrl (url, params) {
            console.log(`Curling: ${url}`)
            this.unblock()
            return HTTP.call(
                'GET',
                url,
                params
            )
        }
    })
}
