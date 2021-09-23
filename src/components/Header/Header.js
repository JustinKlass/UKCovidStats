import './Header.css'

const Header = ( props ) => {

    return (
        <div className='header'>
            <h1>Covid-19 in the {props.area}</h1>
        </div>
    )
}

export default Header