import styles from './Header.module.css'
import { House } from 'phosphor-react'
import { User } from 'phosphor-react'
import { Cards } from 'phosphor-react'
import { Barcode  } from 'phosphor-react'

export function Header(){
    return(
        <header className={styles.header}>
        <a href='http://localhost:5173'><House></House></a>
        <a href='http://localhost:5173/Clientes'><User></User ></a>
        <a href='http://localhost:5173/Comandas'><Cards></Cards></a>
        <a href='http://localhost:5173/Produtos'><Barcode></Barcode></a>
        </header>
            );
}