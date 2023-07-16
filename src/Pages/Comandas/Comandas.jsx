import { Header } from "../../Components/Header";
import { TrashSimple } from 'phosphor-react'
import styles from './../Comandas/Comanda.module.css'
import { useEffect, useState } from 'react'
import axios from "axios";
import { useParams } from "react-router-dom";

function Comandas() {

    const [comanda, setComanda] = useState([])
    const { id } = useParams()
    useEffect(() => {
        loadComanda()
    }, []);

    const loadComanda = async () => {
        const result = await axios.get('http://localhost:8080/api/comanda/list')
        setComanda(result.data)
    }

    const deleteComanda = async (id) => {
        try {

            await axios.delete(`http://localhost:8080/api/comanda/delete/${id}`);
        
            loadComanda();
        } catch (error) {
            console.error('Error deleting comanda:', error);
        }
    };
    return (
        <div>
            <header>
                <Header />
            </header>
            <div>
                <button className={styles.btnCadatro}><a className={styles.estilobtncadastro} href="http://localhost:5173/addcomanda">Nova Comanda</a></button>

                <main className={styles.divtabela}>
                    <table className={styles.tabela}>
                        <thead>
                            <tr>
                                <th className={styles.tabelatitulo} scope="col">ID comanda</th>

                                <th className={styles.tabelatitulo}>Ações</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                comanda.map((comanda) => (

                                    <tr>
                                        <th scope="row" key={comanda.id}>{comanda.id}</th>
                                        <td>
                                            <button
                                                className={styles.lixeira}
                                                onClick={() => deleteComanda(comanda.id)}
                                            >
                                                <TrashSimple />
                                            </button>

                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </main>
            </div>
        </div>

    )
}

export default Comandas;