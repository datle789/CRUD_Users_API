// import connection from "../config/connectdb"
import userModel from "../models/home";

class userController {
    static async getAllUser(req, res) {
        var getUsers = await userModel.getAllUser();
        res.json(getUsers)
        //console.log(getUsers)
    }

    static async getUser(req, res) {
        let id = req.params.id
        var getUser = await userModel.getUser(id);
        res.json(getUser)
        //console.log(getUser)
    }

    static async addUser(req, res) {
        let name = req.body.name
        let address = req.body.address
        // console.log(name)
        // console.log(address)
        var addUser = await userModel.addUser(name, address);
        var getUsers = await userModel.getAllUser();
        res.json(getUsers)
        //console.log(addUser)
        // if (addUser == true) {
        //     console.log("success")
        // } else {
        //     console.log("fail")
        // }
        //console.log(getUser)
    }

    static async deleteUser(req, res) {
        let id = req.params.id
        var deleteUser = await userModel.deleteUser(id);
        // if (deleteUser == true) {
        //     console.log("success")
        // } else {
        //     console.log("fail")
        // }
        var getUsers = await userModel.getAllUser();
        res.json(getUsers)
    }

    static async updateUser(req, res) {
        let id = req.params.id;
        let name = req.body.name;
        let address = req.body.address;
        var updateUser = await userModel.updateUser(id, name, address)
        res.json(updateUser)
    }

}

export default userController



// let homelist = async (req, res) => {
//     try {
//         connection.query('SELECT * FROM practicenodejs.user', (err, getUsers) => {
//             res.json(getUsers)
//         })
//     } catch (error) {
//         console.error(error)
//     }
// }


// let homeid = async (req, res) => {
//     let id = req.params.id
//     try {
//         connection.query('SELECT * FROM practicenodejs.user where id = ?', [id], (err, getUser) => {
//             res.json(getUser)
//         })
//     } catch (error) {
//         console.error(error)
//     }
// }

// export { homelist, homeid }