import React, { useEffect, useState } from 'react'
import { Header } from '../../Components/Header'
import styles from '../FormsProduto/FormsProduto.module.css'
import { X } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function FormsProduto() {
  let navigate = useNavigate()

  const onInputChange = (e) => {
    setProduto({ ...produto, [e.target.name]: e.target.value })
  }
  const [produto, setProduto] = useState({
    comandaId: "",
    tipo: '',
    quantidade: "",
    valor: "",
  });

  const { tipo, quantidade, valor,comandaId} = produto;


  const onSubmit = async (e) => {
    e.preventDefault();

    if (tipo === '' || quantidade === 0 || valor === 0.0) {
      alert('Por favor, preencha todos os campos');
      return;
    }

    try {
      await axios.post('http://localhost:8080/api/comandaproduto/create',produto)
      navigate('/Produtos');
    } catch (error) {
      console.error('Erro ao cadastrar a venda:', error);
      alert('Erro ao cadastrar venda. Por favor, tente novamente mais tarde.');
    }
  };

  return (
    <><div>
      <Header />
    </div>
      <div>
        <div className='row'>
          <div className={styles.container}>

            <form className={styles.formcomercia} onSubmit={(e) => onSubmit(e)}>
              <a href='http://localhost:5173/Produtos' className={styles.returnlist}><X /></a>
              <h2 className={styles.titulo}>Registro de venda</h2>

              <div className={styles.formgroup}
              >
                <label>
                  ID Comanda

                </label>
                <input
                  type={"number"}
                  name='comandaId'
                  placeholder='Insira o Id da comanda'
                  className={styles.formcontrol}
                  value={comandaId}
                  onChange={(e) => onInputChange(e)}
                  required>

                </input>

                <label
                  htmlFor='tipo'

                >
                  Produto:
                </label>
                <input
                  type={"text"} name="tipo"
                  className={styles.formcontrol}
                  placeholder='Insira o produto vendido'
                  value={tipo} onChange={(e) => onInputChange(e)} required             >
                </input>
              </div>
              <div className={styles.formgroup}
              >
                <label
                  htmlFor='quantidade'
                  className='formlabel'

                >
                  Quantidade:
                </label>
                <input
                  type={"number"} name="quantidade"
                  className={styles.formcontrol}
                  placeholder='Insira a quantidade vendida'
                  value={quantidade} onChange={(e) => onInputChange(e)} required
                >
                </input>
              </div>
              <div className={styles.formgroup}
              >
                <label
                  htmlFor='valor'
                  className='formlabel'
                >
                  Valor:
                </label>
                <input
                  type={"number"} name="valor"
                  placeholder='Insira o valor da venda'
                  className={styles.formcontrol}
                  value={valor} onChange={(e) => onInputChange(e)} required
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
