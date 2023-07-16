import React, { useState } from 'react'
import styles from "../../Pages/FormsComanda/FormsComanda.module.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { X } from 'phosphor-react'
import { Header } from '../../Components/Header'

export default function FormsComanda() {
    let navigate = useNavigate();

    const [cliente, setCliente] = useState({
      id: '',
      
    });
  
    const onInputChange = (e) => {
      setCliente({ ...cliente, [e.target.name]: e.target.value });
    };
  
    const { id } = cliente;

  
    const onSubmit = async (e) => {
      e.preventDefault()

      
      if (id === "") {
        alert("Por favor, preencha o campos")
        return
      }

      await axios.post('http://localhost:8080/api/comanda/create', { cliente });
      navigate('/Comandas');
    };
    
  return (
    <><div>
    <Header />
</div>
<div>
<div className='row'>
<div className={styles.container}>
  
  <form className={styles.formcomercia} onSubmit={(e) => onSubmit(e)}>
  <a href='http://localhost:5173/Comandas' className={styles.returnlist}><X /></a>
  <h2 className={styles.titulo}>Cadastro de usuário</h2>
  
  <div className={styles.formgroup}
>
      <label
      htmlFor='id cliente'
      
      >
          ID Cliente:
      </label>
      <input
      
     type="number" name='id'
      className={styles.formcontrol}
      placeholder='Insira o id do cliente'
      value={id} onChange={(e) => onInputChange(e)} 
      required             >
      </input>
  </div>
  <div className={styles.formgroup}>
      <button type="submit" value="Submit" className={styles.btnsalvar}>cadastrar</button>
  </div>
  </form>
</div>

</div>

  </div></>
)
}
