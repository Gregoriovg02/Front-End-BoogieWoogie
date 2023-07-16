import { Header } from '../../Components/Header';
import styles from './Produtos.module.css';
import React, { useEffect, useState } from 'react';
import { TrashSimple, Pencil } from 'phosphor-react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Produtos() {
    const { id } = useParams()
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    loadProdutos();
  }, []);

  const loadProdutos = async () => {
    const result = await axios.get('http://localhost:8080/api/comandaproduto/list');
    setProdutos(result.data);
  };
   const deleteProdutos = async (produtosId) => {
    await axios.delete(`http://localhost:8080/api/comandaproduto/delete/${produtosId}`);
    loadProdutos();
  };


  return (
    <div>
      <header>
        <Header />
      </header>
      <div>
        <button className={styles.btnCadatro}>
          <a href='http://localhost:5173/addvenda' className={styles.estilobtncadastro}>Nova venda</a>
        </button>
        <div className="mudelo"></div>

        <main className={styles.divtabela}>
          <table className={styles.tabela}>
            <thead>
              <tr >
                <th className={styles.tabelatitulo} scope="col">
                  ID Comanda
                </th>
                <th className={styles.tabelatitulo} scope="col">
                  Produto
                </th>
                <th className={styles.tabelatitulo} scope="col">
                  Quantidade
                </th>
                <th className={styles.tabelatitulo} scope="col">
                  Valor
                </th>
                <th className={styles.tabelatitulo}>Ações</th>
              </tr>
            </thead>
            <tbody >
              {produtos.map((produto) => (
                <tr key={produto.id}>
                  <th scope="row" >{produto.comandaId}</th>
                  <td>{produto.tipo}</td>
                  <td>{produto.quantidade}</td>
                  <td>{produto.valor}</td>
                  <td>
                  <button
                    className={styles.lixeira}
                    onClick={() => deleteProdutos(produto.id)}
                  >
                    <TrashSimple />
                  </button>
                    <a href="#" className={styles.edit}>
                      <Pencil />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </div>
    </div>
  );
}

export default Produtos;