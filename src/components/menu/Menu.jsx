import { Button, Link } from '@nextui-org/react'
import Logo from './Logo'
import './menu.css'

export default function Menu() {
    return (
        <div className="contenedor cont-menu" id="menu">
            <Logo />
            <Button auto flat as={Link} href="/formulario">
               Formulario
            </Button>
            <Button auto flat as={Link} href="/mostrar">
              Ver datos
            </Button>
        </div>
    )
}
