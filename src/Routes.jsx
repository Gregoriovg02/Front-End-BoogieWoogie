import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Cliente from "./Pages/Clientes/Cliente";
import Comandas from "./Pages/Comandas/Comandas";
import Produtos from "./Pages/Produtos/Produtos";
import FormsCliente from "./Pages/FormsCliente/FormsCliente";
import FormsComanda from "./Pages/FormsComanda/FormsComanda";
import EditCliente from "./Pages/FormsCliente/EditCliente";
import FormsProduto from "./Pages/FormsProduto/FormsProduto";
import EditProduto from "./Pages/FormsProduto/EditProduto";

 function AppRoutes() {
    return (
        <BrowserRouter>
           <Routes>
                <Route path="/" element={ <Home /> } ></Route>
                <Route path="/Clientes" element={ <Cliente /> } ></Route>
                <Route path="/Comandas" element={ <Comandas /> } ></Route>
                <Route path="/Produtos" element={ <Produtos /> } ></Route>
                <Route path="/adduser" element={ <FormsCliente /> } ></Route>
                <Route path="/addcomanda" element={ <FormsComanda /> } ></Route>
                <Route path="/addvenda" element={ <FormsProduto /> } ></Route>
                <Route path="/editcliente/:id" element={ <EditCliente /> } ></Route>
                <Route path="/editproduto/:comandaId" element={ <EditProduto /> } ></Route>
                </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;
