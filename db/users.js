const { v4: uuid } = require("uuid");

const userdata = {
    "users": [
        {
            id: uuid(),
            username: "salonibindal",
            password: "saloni",
            emailId: "salonibindal@gmail.com",
        },
    ]
}

module.exports = userdata;