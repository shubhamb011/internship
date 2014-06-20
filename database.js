/**
 * Created by SHUBHAM on 20/6/14.
 */


var db = openDatabase('loi','1.0','My first database',2*1024*1024);
db.transaction(function(tx)
{
tx.executeSql('CREATE TABLE details( user unique, varchar(20))');
});