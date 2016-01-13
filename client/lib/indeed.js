export function queryIndeed(search) {
    Meteor.call('queryIndeed', (err, result) => {
        let xml = $.parseXML(result.content)
        return $(xml).find('result').toArray()
    })
}
