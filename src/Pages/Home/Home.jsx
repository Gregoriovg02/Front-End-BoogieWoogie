import  React  from 'react'

import { Header } from '../../Components/Header'
import styles from './Home.module.css'
import '../../global.css'
import Logobranco from '../../Assets/logobranco 1.svg'


function Home() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <main>
          <img className={styles.logo} src={Logobranco} />
          <div className={styles.divisao}>
            <button className={styles.btnCliente}><a href='http://localhost:5173/Clientes'className={styles.estilobtncliente}>Cliente</a></button>
            <button className={styles.btnComanda}><a href='http://localhost:5173/Comandas' className={styles.estilobtncomanda}>Comanda</a></button>
            <button className={styles.btnProduto}><a href='http://localhost:5173/Produtos'className={styles.estilobtnproduto}>vendas</a></button>
          </div>
        </main>
      </div>
    </div>

  )
}

export default Home;