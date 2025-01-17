import logoImage from '/logo.svg';
type LogoProps = {
    width: number;
}
export const Logo:React.FC<LogoProps> = (props) => {
    return (
        <a href="/" className='max-w-max flex items-center gap-x-4 justify-self-center'>
            <img src={logoImage} alt="Logo" width={props.width}/>
            <span className='text-dark font-semibold font-sans uppercase'>music</span>
        </a>
    )
}