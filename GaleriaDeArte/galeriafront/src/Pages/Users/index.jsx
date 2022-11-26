import { useEffect, useState } from "react";
import UsersService from "../../services/UsersService";
import { ALERT_STATUSES } from "../../constants/alertStatuses";
import { createAlert } from "../../utils/alerts";

const Users = () => {

    const [users,setUsers] =  useState([]);


    useEffect(()=>{
        const service = new UsersService();
        service.getUsers(callbackSuccessGetUsers,callbackErrorGetUsers);
    },[])

  
    const callbackSuccessGetUsers = (res) =>{
        const { data, status} = res;
        setUsers(data.payload);
        createAlert(ALERT_STATUSES.SUCCESS,'Usuarios obtenidos','Se han obtenido los usuarios con éxito');
    }

    const callbackErrorGetUsers = (err) =>{
        console.log(err);
    }

    return (<>
        <h1>Hola!</h1>
        <img src="http://localhost:8080/images/1667666026003-perritoDeprimido.jpg"></img>
    </>)
}

export default Users;