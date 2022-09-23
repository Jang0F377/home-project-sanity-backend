export default {
    name: 'user',
    title: 'User',
    type: 'document',
    fields: [
        {
            name: "email",
            title:"Email",
            type:"string",
        },
        {
            name:'image',
            title:"Image",
            type: 'string'
        },
        {
            name:"fistName",
            title:"First Name",
            type: "string"
        },
        {
            name:"lastName",
            title:"Last Name",
            type: "string"
        },
        {
            name:"gamesPlayed",
            title:"Games I play",
            type: "array",
            of: [
                {
                    type: "string"
                }
            ]
        },
        {
            name:"upcomingSeshes",
            title:"Upcoming Seshes",
            type: "array",
            of: [
                {
                    type: 'reference',
                    to: {type: 'sesh'}
                }
            ]
        },
        {
            name:"seshInvites",
            title:"Sesh Invites",
            type: "array",
            of: [
                {
                    type: 'reference',
                    to: {type: 'sesh'}
                }
            ]
        },
        {
            name:"friends",
            title:"Friends",
            type: "array",
            of: [
                {
                    type: 'reference',
                    to: {type: 'user'}
                }
            ]
        },
        {
            name:"friendRequests",
            title:"Friend Requests",
            type: "array",
            of: [
                {
                    type: 'reference',
                    to: {type: 'user'}
                }
            ]
        },
        {
            name: 'supporter',
            title: 'PFG Supporter',
            type: 'boolean',
        },
        {
            name: 'vip',
            title: 'PFG VIP',
            type: 'boolean',
        },
        {
            name:'firstTime',
            title:"First Time",
            type: 'boolean'
        }
    ],
    initialValue: {
        supporter: false,
        vip: false,
        firstTime:true,
    }
}