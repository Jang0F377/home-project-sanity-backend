export default {
    name: 'expenseByDate',
    title: "Expense By Date",
    type:'document',
    fields: [
        {
            // This is the Date
            name:"title",
            title:"Title",
            type: 'number'
        },
        {
            name:"expenses",
            title:"Expenses",
            type:'array',
            of: [{

            }]
        }
    ]
}