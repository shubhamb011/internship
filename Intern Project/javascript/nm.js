/**
 * Created by SHUBHAM on 20/6/14.
 */


function validate()
{


    if( document.main.name.value == "")
    {
        alert( "Please provide your name!" );
        document.main.name.focus() ;
        return false;
    }
    if( document.main.pass.value == "" )
    {
        alert( "Please provide your password!" );
        document.main.pass.focus() ;
        return false;
    }

    if( document.main.occupation[0].checked==false && document.main.occupation[1].checked==false )
    {
        alert( "Please select a type of login." );
        return false;
    }
    if(document.main.occupation[0].checked==true)
    {
        if(document.main.name.value=="admin" && document.main.pass.value=="manusis")
        {

            document.main.action="admin.html?"+ document.main.name.value;
            window.event.returnValue=true;
        }
        else
        {
            alert("Wrong username or password");
            return false;
        }
    }
    else if(document.main.occupation[1].checked==true)
    {
        if(document.main.name.value=="rahulgaba16" && document.main.pass.value=="1234")
        {
            document.main.action="intern.html?"+ document.main.name.value;
            window.event.returnValue=true;
        }
        else
        if(document.main.name.value=="shubhamb011" && document.main.pass.value=="xyz")
        {
            document.main.action="intern.html?"+ document.main.name.value;
            window.event.returnValue=true;


        }
        else
        if(document.main.name.value=="geet.exe" && document.main.pass.value=="abcd")
        {
            document.main.action="admin.html?"+ document.main.name.value;
            window.event.returnValue=true;
        }
        else
        {
            alert("Wrong username or password");
            return false;
        }
    }
    else
    {
        alert("Wrong Username or password !");

    }
    return(true);
//    console.log("name value is>>>>",document.main.name.value)
//    var data={
//        name:document.main.name.value,
//        password:document.main.pass.value
//
//    }
}

function logout(){
    this.close();
    window.open("home.html");}


function getrep()
{
    var n = document.getElementById("dept").value;
    switch (n)
    {
        case "Web designing":
            document.getElementById("web").style.visibility="visible";
            break;
        default:
//                    document.getElementById("web").style.visibility="hidden";
            document.getElementById("button").style.visibility="visible";
            break;

    }

}

function edit_table()
{
    var x= document.getElementById("tabl");
    var y= x.getAttribute("contenteditable");
    if(x.getAttribute("contenteditable")=="true")
    {
        x.setAttribute("contenteditable", "false");
        alert("Deatails saved successfully !");
        document.getElementById("edit").value="Edit";


    }
    else
    {
        x.setAttribute("contenteditable", "true");
        document.getElementById("edit").value="Save";
    }

    //document.
}

function getn()
{
    var x=window.location.href;
    var getarr= new Array();
    getarr=x.split("?");
    document.getElementById("p").innerHTML="Hello "+ getarr[1];
}

