import React from 'react'
import Resumen from './components/Resumen'
import InyeccionSQL from './components/InyeccionSQL'
import XSS from './components/XSS'
import Comandos from './components/Comandos'
import Activos from './components/Activos'
import Matriz from './components/Matriz'
import Controles from './components/Controles'
import Recuperacion from './components/Recuperacion'
import Prompts from './components/Prompts'

export default function App() {
	return (
		<div>
			<Resumen />
			<InyeccionSQL />
			<XSS />
			<Comandos />
			<Activos />
			<Matriz />
			<Controles />
			<Recuperacion />
			<Prompts />
		</div>
	)
}
