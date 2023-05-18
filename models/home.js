import connection from "../config/connectdb"

class userModel {

    static async getAllUser() {
        return new Promise((resolve, reject) => {
            try {
                connection.query('SELECT * FROM practicenodejs.user', (err, getUsers) => {
                    // return getUsers;
                    resolve(getUsers)
                })
            } catch (error) {
                console.error(error)
            }
        })
    }

    static async getUser(id) {
        return new Promise((resolve, reject) => {

            try {
                connection.query('SELECT * FROM practicenodejs.user where id = ?', [id], (err, getUser) => {
                    resolve(getUser)
                })
            } catch (error) {
                console.error(error)
            }
        })
    }

    static async addUser(name, address) {
        return new Promise((resolve, reject) => {
            connection.query('INSERT INTO user(name,address) VALUES(?,?)', [name, address], (err, addUser) => {
                if (!err) {
                    resolve(true)
                } else {
                    console.log(err)
                    resolve(false)
                }
            })
        })
    }

    static async deleteUser(id) {
        return new Promise((resolve, reject) => {
            connection.query('DELETE FROM user WHERE id = ?', [id], (err, deleteUser) => {
                if (!err) {
                    resolve(true)
                } else {
                    console.log(err)
                    resolve(false)
                }
            })
        })
    }

    static async updateUser(id, name, address) {
        return new Promise((resolve, reject) => {
            connection.query('UPDATE user SET name = ?, address = ? WHERE id = ?; ', [name, address, id], (err, updateUser) => {
                resolve(updateUser)
            })
        })
    }

}

export default userModel