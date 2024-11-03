import style from './Button.module.css'

const Button = (({rotulo}) => {
    return (
            <button className= {style.button}>{rotulo}</button>
    )
})

export default Button;