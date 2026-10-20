import './style.css'

export default function Footer() {
    return (   
        <footer className='app-footer'>
            <p>&copy; { new Date().getFullYear()} Metodologia SENAI</p>
        </footer>
    )
}