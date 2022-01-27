import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { TanksContext } from '../../context/TanksContext';

const Edit = () => {
    const navigate = useNavigate()
    const params = useParams()

    const{getTanksForEdit, editTanks, edit} = useContext(TanksContext)

    useEffect(()=>{
        getTanksForEdit(params.id)
    }, [])

    const [edited, setEdited] = useState({
        name: '',
        type: '',
        country: '',
        image: '',
        price: '',
        description: '', 
    })

    useEffect(()=>{
        setEdited(edit)
    },[edit])

    function handleValues(e){
        let values = {
            ...edited,
            [e.target.name]: e.target.value,
        };
        setEdited(values)
    }

    function checkValues(){
        if (
            !edited.name ||
            !edited.type ||
            !edited.image ||
            !edited.country||
            !edited.price||
            !edited.description
          ) {
            alert("Заполните поля !");
            return;
          } else {
            editTanks(params.id, edited)
            navigate('/tanks')
          }
    }
    return (
        <>
        {edited? <div style={{backgroundImage: 'url(https://izaktv.pl/wp-content/uploads/2020/06/WoT_PC_Key_art_1.9.1_Berlin_map.jpg)', backgroundSize: 'cover', backgroundAttachment: 'fixed'}} className="d-flex justify-content-center align-items-center" >
        <div style={{border: 'grey solid 4px', borderRadius: '5%', marginTop: "120px", marginBottom: '100px', minWidth: '320px', backgroundColor: "rgba(0,0,0,0.4)", textAlign: 'center', display: "flex"}} className="col-4 d-flex flex-column align-items-center">
            <h3 style={{color:'orangered'}}>Форма для редактирования</h3>
            <input value={edited.name} onChange={handleValues} style={{height: '40px'}} type="text" placeholder="Введите имя" name="name" className="m-3 col-9"/>
            <input value={edited.type} onChange={handleValues} style={{height: '40px'}} type="text" placeholder="Введите тип" name="type" className="m-3 col-9"/>
            <input value={edited.country} onChange={handleValues} style={{height: '40px'}} type="text" placeholder="Введите страну" name="country" className="m-3 col-9"/>
            <input value={edited.image} onChange={handleValues} style={{height: '40px'}} type="text" placeholder="Введите url для картинки" name="image" className="m-3 col-9"/>
            <input value={edited.description} onChange={handleValues} style={{height: '40px'}} type="text" placeholder="Введите описание" name="description" className="m-3 col-9"/>
            <input value={edited.price} onChange={handleValues} style={{height: '40px'}} type="number" placeholder="Введите цену" name="price" className="m-3 col-9"/>
            <button onClick={checkValues} style={{background: 'orange', color: 'white', fontSize: '20px', fontWeight: '500'}} className="btn m-3 col-5">Сохранить</button>
        </div> 
        </div>: <h1>Loading</h1>}
        </>

    );
};

export default Edit;