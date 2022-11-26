import {useState,useEffect} from 'react';
import SessionService from '../../services/sessionsService';
import { useNavigate } from 'react-router-dom';
import { createAlertWithCallback } from '../../utils/alerts';
import { ALERT_STATUSES } from "../../constants/alertStatuses";
const Register = () =>{
    const [input,setInput] = useState({
        first_name:{
            value:"",
            error:""
        },
        last_name:{
            value:'',
            error:''
        },
        email:{
            value:'',
            error:''
        },
        password:{
            value:'',
            error:''
        }
    })
    const [image,setImage] =  useState(null);
    
    const navigation = useNavigate();


    const handleInputChange = (e) =>{
        setInput((prev)=>({
            ...prev,
            [e.target.name]:{
                value:e.target.value,
                error:null
            }
        }))
    }

    const handleImageChange = (e) =>{
        setImage(e.target.files[0])
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        let error = false;
        Object.keys(input).forEach(key=>{
            if(input[key].value.trim().length===0){
                error = true;
                setInput((prev)=>({
                    ...prev,
                    [key]: {
                        ...prev[key],
                        error:'Completar este campo'
                    }
                }))
            }
        })
        if(!error){
            let form = new FormData();
            form.append('first_name',input.first_name.value);
            form.append('last_name',input.last_name.value);
            form.append('email',input.email.value);
            form.append('password',input.password.value);
            form.append('avatar',image)
            const service = new SessionService();
            service.register({body:form,callbackSuccess:callbackSuccessRegister,callbackError:callbackErrorRegister})
        }
    }


    //CALLBACKS
    const callbackSuccessRegister = (res) =>{
        const {data,status} = res;
        createAlertWithCallback(ALERT_STATUSES.SUCCESS,'Usuario registrado','Ahora puede loguearse en la pantalla de ingreso',()=>{
            navigation('/login');
        })
    }
    const callbackErrorRegister = (err) =>{
        console.log(err);
    }

    return(<div>
        <h1>Registro de usuario</h1>
        <form>
            <label>Nombre</label>
            <input name="first_name" value={input.first_name.value} onChange={handleInputChange}/>
            {input.first_name.error&&<p style={{color:"red"}}>{input.first_name.error}</p>}

            <label>Apellido</label>
            <input name="last_name" value={input.last_name.value} onChange={handleInputChange}/>
            {input.last_name.error&&<p style={{color:"red"}}>{input.last_name.error}</p>}

            <label>Email</label>
            <input name="email" value={input.email.value} onChange={handleInputChange}/>
            {input.email.error&&<p style={{color:"red"}}>{input.email.error}</p>}

            <label>Contraseña</label>
            <input name="password" type={"password"} value={input.password.value} onChange={handleInputChange}/>
            {input.password.error&&<p style={{color:"red"}}>{input.password.error}</p>}

            <label>Imagen de perfil</label>
            <input type={"file"} name="avatar" onChange={handleImageChange}/>

            <button onClick={handleSubmit}>Registrarse</button>
        </form>
    </div>)
}

export default Register;