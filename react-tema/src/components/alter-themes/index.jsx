import { useState } from 'react'
import './style.css'

export default function AlterTheme() {
    
    const [ isDark, setIsDark ] = useState(false)
    const [ viewTip, setViewTip ] = useState(false)

    function ChangerTheme() {
        setIsDark(anterior => !anterior) // ! representa not
    }

    function ChangerTip() {
        setViewTip(anterior => !anterior)
    }

    return (
        <main className="main-container">
            <article className={`card-example ${isDark ? 'dark-theme-card' : ''}`}>
                <header className='card-header'>
                    <span className='badge'>
                        2. Estado Booleano
                    </span>
                    <h3>Alternador de Tema & Visibilidade</h3>
                </header>

                <div className="theme-status" aria-live='polite'>
                    Modo Atual: <strong>
                        { isDark ? 'Escuro' : 'Claro'}
                    </strong>
                </div>

                <div className="btn-group">
                    <button type='button' className='btn btn-theme' onClick={ ChangerTheme }>
                        {isDark ? 'Mudar para Claro' : 'Mudar para Escuro'}
                    </button>

                    <button type='button' className='btn btn-tip' onClick={ChangerTip} aria-expanded={viewTip} aria-controls='panel-tip-id'>
                        {viewTip ? 'Ocultar Dica' : 'Exibir Dica'}
                    </button>
                </div>

                {viewTip && (
                    <div id='panel-tip-id' className='panel-tip' role='region'>
                        <strong>Dica de Estado Booleano:</strong> Estados booleanos são perfeitos para alternar entre dois estados como ligado/desligado, aberto/fechado ou visível/oculto usando <code>!estadoAnterior</code>
                    </div>
                )}

                <footer className='explanation-box'>
                    <code>
                        const [ isDark, setIsDark ] = useState(false)
                    </code>
                    <p>
                        Alterna classes CSS dinamicamente com base em um valor true/false
                    </p>
                </footer>

            </article>
        </main>
    )
}