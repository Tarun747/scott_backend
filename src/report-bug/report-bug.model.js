const { Schema, model } = require('mongoose')

const ReportBugModel = new Schema(
    {
        name: {
            type: String
        },
        email: {
            type: String
        },
        issue: {
            type: String
        },
        page: {
            type: String
        }
    },
    {
        minimize: true,
        timestamps: true
    }
)

module.exports = model('reportbug', ReportBugModel)
