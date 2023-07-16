import { Header } from "../../Components/Header";
import styles from '../Clientes/Cliente.module.css';
import React, { useEffect, useState } from 'react';
import { TrashSimple, Pencil } from 'phosphor-react';
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function Cliente() {
  const { id } = useParams();
 
  const [clientes, setClientes] = useState([]);
  
  useEffect(() => {
    loadClientes();
  }, []);

  const loadClientes = async () => {
    const result = await axios.get('http://localhost:8080/api/cliente/list');
    setClientes(result.data);
  };

  

  const deleteCliente = async (clienteId) => {
    await axios.delete(`http://localhost:8080/api/cliente/delete/${clienteId}`);
    loadClientes();
  };

  return (
    <div>
      <header>
        <Header />
      </header>
      <div>
        <button className={styles.btnCadatro}><a className={styles.estilobtncadastro} href="http://localhost:5173/adduser">Novo Cliente</a></button>
      </div>
      <main className={styles.divtabela}>
        <table className={styles.tabela}>
          <thead>
            <tr>
              <th className={styles.tabelatitulo} scope="col">ID</th>
              <th className={styles.tabelatitulo} scope="col">Nome</th>
              <th className={styles.tabelatitulo} scope="col">Telefone</th>
              <th className={styles.tabelatitulo} scope="col">CPF</th>
              <th className={styles.tabelatitulo}>Ações</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((cliente) => (
              <tr key={cliente.id}>
                <th scope="row">{cliente.id}</th>
                <td>{cliente.nome}</td>
                <td>{cliente.telefone}</td>
                <td>{cliente.cpf}</td>
                <td>
                  <button
                    className={styles.lixeira}
                    onClick={() => deleteCliente(cliente.id)}
                  >
                    <TrashSimple />
                  </button>
                  <Link
                    className={styles.edit}
                    to={`/editcliente/${cliente.id}`}
                  >
                    <Pencil />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default Cliente;
