const ReportBugModel = require('./report-bug.model')
const Boom = require('@hapi/boom')

// ---------------------   REGISTER REPROT-BUG  PRICE CONTROLLER    ----------------------------
const registerreportbug = async (req, res, next) => {
    try {
        console.log(req.body)
        console.log(req.file)
        const { name, email, page, issue } = req.body
        const newReportBug = new ReportBugModel({
            name,
            email,
            page,
            issue
        })

        await newReportBug.save()

        return res.status(200).json({
            success: true,
            message: ' Issue Added successfully'
        })
    } catch (err) {
        next(err)
    }
}

// ----------------------------   ALL REPORT PRICE CONTROLLER    ----------------------------
const allreportbug = async (req, res, next) => {
    try {
        const reportbugExist = await ReportBugModel.find({})
        return res.json({
            success: true,
            message: 'Complete Issues List',
            data: reportbugExist
        })
    } catch (err) {
        next(err)
    }
}

// ----------------------------   DELETE SINGLE REPORT-BUG CONTROLLER    ----------------------------

const deletereportbug = async (req, res, next) => {
    try {
        const id = req.params.id
        let reportbugExist = await ReportBugModel.findByIdAndRemove({ _id: id })
        return res.json({
            success: true,
            message: 'Issue Deleted',
            data: reportbugExist
        })
    } catch (err) {
        next(err)
    }
}

module.exports = {
    registerreportbug,
    allreportbug,
    deletereportbug
}
