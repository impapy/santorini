const db = require('../config/db');
// const mysql = require('mysql2');
class users {
    constructor(name,title){
        this.name=name;
        this.title=title;
    }

     save(){
        let d=new Date();
        let y=d.getFullYear();
        let m=d.getMonth()+1;
        let dd=d.getDate();

        let createdAtDate=`${y}-${m}-${dd}`;

        let sql=`INSERT INTO users(
            name,
            title,
            created_at)
            values('${this.name}','${this.title}','${createdAtDate}');`

            return db.execute(sql);
            // return newUser;
    }

    static findAll(){
        let sql = "SELECT * FROM users;";
        return db.execute(sql);
    }
    static findUserById(id){
        let sql = `SELECT * FROM users WHERE id = ${id};`;
        return db.execute(sql);
    }
     updateUserById(id){
      
        let d=new Date();
        let y=d.getFullYear();
        let m=d.getMonth()+1;
        let dd=d.getDate();
        
        let createdAtDate=`${y}-${m}-${dd}`;
        console.log(id,this.name,this.title,createdAtDate)

        let sql = `UPDATE users
        SET
        name = '${this.name}',
        title = '${this.title}',
        updated_at='${createdAtDate}'
        WHERE id = ${id};`;

        return db.execute(sql);
        
    }

    static deleteUserById(id){
        let sql = `DELETE FROM users WHERE id = ${id};`;
        return db.execute(sql);
    }
}
module.exports = users;
