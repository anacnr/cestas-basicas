import React, { useState, type FormEvent } from 'react'

import { Container } from '../../../component/container'
import { H1 } from '../../../component/h1'
import './css/mobile.css'
import { Form } from '../../../component/form'
import { Input } from '../../../component/input'
import { Button } from '../../../component/button'

import { FiUpload } from "react-icons/fi";
import { PatternFormat } from 'react-number-format'

const Register = () =>{

interface DatesProps{
 photo : string,
 company : string,
 manager : string,
 cnpj_pj : string,
 address : string,
 fix_tel : string,
 mobile_tel: string,
 email : string,
 password_hash : string
}

const [dates, setDates] = useState<DatesProps>({
    photo : '',
    company : '',
    manager : '',
    cnpj_pj : '',
    address : '',
    fix_tel : '',
    mobile_tel: '',
    email : '',
    password_hash : ''
})

const FormSubmit =  async (e : FormEvent) =>{
    e.preventDefault();

    if(dates.company?.length != 0 && dates.cnpj_pj?.length != 0){
        //Faz requisição
        try {
           const result = await fetch("http://localhost:3000/supermarket/register", {
            method :"post",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({"photo" : dates.photo, "company" : dates.company, "manager" : dates.manager, "cnpj_pj" : dates.cnpj_pj, "address" : dates.address, "fix_tel" : dates.fix_tel, "mobile_tel" : dates.mobile_tel, "email" : dates.email, "password_hash" : dates.password_hash})//Nome da chave precisa ser a mesma na hora de inserir (const {my_name} = req.body)
           } )

           const resText = await result.text();//Emite a mensagem do res.send lá do back-end
           console.log("Cadastro realizado! " , resText);
           console.log("Foto no front: " , dates.photo );
           
        } catch (error) {
            console.log("ERRO: " , error);
        }
    }
    else{
        alert("Campo vazio!")
    }
}

    const uploadImg = ( perfil : React.ChangeEvent<HTMLInputElement> )=>{

        let file_info = perfil.target.files?.[0];

        if(!file_info) return; //Se não escolher imagem. Para que o ts não reclame que o campo está vazio

        let temporary_url = URL.createObjectURL(file_info)//Url temporária criada

        let label_img = document.querySelector<HTMLLabelElement>('#image_label')

        if(label_img){
            label_img.style.backgroundImage = `url(${temporary_url})`
            label_img.style.backgroundSize = 'contain'
        }
        console.log("uploadImg: " , file_info);

        const modified_name = crypto.randomUUID().toLocaleLowerCase()
        const extension_name = file_info.type.split('/').pop()
        setDates({...dates, photo : `${modified_name}.${extension_name}`})
    }

    return(
        <>
            <H1>Cadastrar Supermercado</H1>

            <Container> 
            <Form onSubmit={FormSubmit}>

                <label htmlFor="image_id" id='image_label'> <FiUpload id='image_icon'/> </label>
                <Input id='image_id' type='file' accept='image/*' name='photo' onChange={uploadImg} />

                <Input id='company_id' type='text' name='company' placeholder='Empresa' value={dates?.company} 
                onChange={(e) => setDates({...dates , company : e.target.value})} />

                
                <Input id='manager_id' type='text'name='manager' placeholder='Gerente' value={dates?.manager} 
                onChange={(e)=> setDates({...dates, manager: e.target.value})} />

                <PatternFormat format='##.###.###/####-##' mask="_" name='cnpj_pj' placeholder='CNPJ/PJ' value={dates?.cnpj_pj} onChange={(e)=> setDates({...dates, cnpj_pj : e.target.value})} />
               
                <Input id='address_id' type='text'name='address' placeholder='Endereço' value={dates?.address} 
                onChange={(e)=> setDates({...dates, address: e.target.value})} />

                 
                <Input id='fix-tel_id' type='text'name='fix_tel' placeholder='Telefone-fixo' value={dates?.fix_tel} 
                onChange={(e)=> setDates({...dates, fix_tel: e.target.value})} />

                
                <Input id='mobile-tel_id' type='text'name='mobile_tel' placeholder='Telefone móvel' value={dates?.mobile_tel} 
                onChange={(e)=> setDates({...dates, mobile_tel: e.target.value})} />

            
                <Input id='email_id' type='text'name='email' placeholder='E-mail' value={dates?.email} 
                onChange={(e)=> setDates({...dates, email: e.target.value})} />

                
                <Input id='passw_id' type='text'name='password_hash' placeholder='Senha' value={dates?.password_hash} 
                onChange={(e)=> setDates({...dates, password_hash: e.target.value})} />

                <Button type='submit'>Enviar</Button>
            </Form>
            </Container>

        </>
    )
}

export {Register}