export default {
    name: 'sesh',
    title: 'Sesh',
    type: 'document',
    fields: [
        {
            name: "recipients",
            title: "Recipients",
            type: 'array',
            of:[
                {
                    type:'reference',
                    to: {type: 'user'}
                }
            ]
        },
        {
            name: "game",
            title: "Game",
            type: "string"
        },
        {
            name:"proposedTime",
            title:"Proposed Time",
            type: "string"
        },
        {
            name:"proposedDay",
            title:"Proposed Day",
            type: "string"
        },
        {
            name: "numberConfirmed",
            title: "Number Confirmed",
            type: 'number'
        },
        {
            name: "usersConfirmed",
            title:"Users Confirmed",
            type: 'array',
            of:[
                {type:'reference', to: {type: 'user'}
                }
            ]
        },
        {
            name: "usersDeclined",
            title:"Users Declined",
            type: 'array',
            of:[
                {type:'reference',
                    to: {type: 'user'}
                }
            ]
        },
        {
            name: 'sentFrom',
            title: "Sent From",
            type: 'reference',
            to: {type: 'user'}
        }


    ]}