import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import InsigniaPages from '../pages/InsigniaPages'
import InsigniaNueva from '../pages/InsigniaNueva'

function Aplicacion(){
    
    return(
    <BrowserRouter>
    <switch>
        <Route path = '/' component = {InsigniaPages} ></Route>
        <Route path ='/InsigniaNueva' component={InsigniaNueva}></Route>
    </switch>
        </BrowserRouter>
        )
}
export default Aplicacion;