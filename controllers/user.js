const db = require('../modal/dbmodal.js')

const signup = (req, res) => {
    var reqdata = req.body
    const createdocument = async () => {
        try {
            var check = true
            const data = await db.find({})
            if (data.length > 0) {
                for (i in data) {
                    if (data[i].email == req.body.email) {
                        check = false
                    };
                } if (check == false) {
                    res.send("this email is aleredy exists please do login.....")
                } else {
                    const document = new db({
                        name: req.body.name,
                        password: req.body.password,
                        email: req.body.email
                    })
                    res.send("signup succesfully....")
                    const result = await document.save()

                }
            } else {
                const document = new db({
                    name: req.body.name,
                    password: req.body.password,
                    email: req.body.email
                })
                res.send("signup succesfully..")
                const result = await document.save()
            }


        } catch (err) {
            console.log(err);
        }

    }
    createdocument()
}

const login = (req, res) => {

    const dologin = async () => {
        const data1 = await db.find({})
        var check = true
        for (i in data1) {
            if (data1[i].email == req.body.email) {
                check = false
            }
        }
        if (check == true) {
            res.send("invalid email-id please do signup.....")
        } else {
            res.send("login successfully.....")
        }
    }
    dologin()

}

module.exports = { signup, login }