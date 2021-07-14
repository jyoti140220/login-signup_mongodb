const db = require('../modal/dbmodal.js')

const signup = (req, res) => {
    var reqdata = req.body
    const createdocument = async () => {
        try {
            var check = true
            const data = await db.find({ email: req.body.email })
            if (data.length == 0) {
                const document = new db({
                    name: req.body.name,
                    password: req.body.password,
                    email: req.body.email
                })
                res.send("signup succesfully..")
                const result = await document.save()

            } else {
                res.send("this email is aleredy exists please do login.....")
            }
        } catch (err) {
            console.log(err);
        }

    }
    createdocument()
}

const login = (req, res) => {

    const dologin = async () => {
        const data1 = await db.find({ email: req.body.email })
        console.log(data1);
        if (data1.length == 0) {
            res.send("invalid email-id please do signup.....")
        } else {
            res.send("login succesfully")
        }
    }
    dologin()

}

module.exports = { signup, login }