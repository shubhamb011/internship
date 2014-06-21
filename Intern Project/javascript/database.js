/**
 * Created by SHUBHAM on 20/6/14.
 */

function datb(){
var db = openDatabase('loi','1.0','My first database',2*1024*1024);
db.transaction(function(tx)
{
tx.executeSql('CREATE TABLE IF NOT EXISTS details( user,password,l_type)');
    tx.executeSql('INSERT INTO details(user, password) VALUES(?,?,?)',[name, pass, occupation]);


});}