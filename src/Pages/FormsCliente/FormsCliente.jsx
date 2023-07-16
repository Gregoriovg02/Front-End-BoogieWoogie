import React, { useState } from 'react'
import { Header } from '../../Components/Header'
import styles from '../FormsCliente/FormsCliente.module.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { X } from 'phosphor-react'

export default function FormsCliente() {
    let navigate = useNavigate()

    const onInputChange = (e) => {
      setCliente({ ...cliente, [e.target.name]: e.target.value })
    }
  
    const [cliente, setCliente] = useState({
      nome: "",
      telefone: "",
      cpf: ""
    })
  
    const { nome, telefone, cpf } = cliente
  
  
    const onSubmit = async (e) => {
      e.preventDefault()
  
      if (nome === "" || telefone === "" || cpf === "") {
        alert("Por favor, preencha o campos")
        return
      }
  
      await axios.post("http://localhost:8080/api/cliente/create", cliente)
      navigate("/Clientes")
    }
  return (
    <><div>
          <Header />
      </div>
      <div>
<div className='row'>
    <div className={styles.container}>
        
        <form className={styles.formcomercia} onSubmit={(e) => onSubmit(e)}>
        <a href='http://localhost:5173/Clientes' className={styles.returnlist}><X /></a>
        <h2 className={styles.titulo}>Cadastro de usuário</h2>
        
        <div className={styles.formgroup}
>
            <label
            htmlFor='nome'
            
            >
                Nome:
            </label>
            <input
           type="text" name="nome"
            className={styles.formcontrol}
            placeholder='Insira o nome do cliente'
            value={nome} onChange={(e) => onInputChange(e)} required             >
            </input>
        </div>
        <div className={styles.formgroup}
>
            <label
            htmlFor='Telefone'
            className='formlabel'

            >
                Telefone:
            </label>
            <input
            type="number" name="telefone"
            className={styles.formcontrol}
            placeholder='Insira o telefone do cliente'
            value={telefone} onChange={(e) => onInputChange(e)} required
            >
            </input>
        </div>
        <div className={styles.formgroup}
>
            <label
            htmlFor='Cpf'
            className='formlabel'
            >
                CPF:
            </label>
            <input
            type="number" name="cpf"
            placeholder='Insira o cpf do cliente'
            className={styles.formcontrol}
            value={cpf} onChange={(e) => onInputChange(e)} required
            >
            </input>
            
            <button type="submit" value="Submit" className={styles.btnsalvar}>cadastrar</button>
        </div>
        </form>
    </div>
    
</div>

        </div></>
  )
}
