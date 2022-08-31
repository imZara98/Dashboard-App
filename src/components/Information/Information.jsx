import template from './information.module.css';
import PropTypes from 'prop-types';

const Information = ({name,disscount,use,icons,update}) => {
    return(
        <div className={template.info}>
            <div className={template.detail}>
                <h3 className={template.header}>{name}</h3>
                <div className={template.text}>
                    <p className={template.dis}>{disscount}</p>
                    <p className={template.txt}>{use}</p>
                </div>    
            </div>
            <div className={template.time}>
                <span>{icons}</span>
                <p >{update}</p>
            </div>
        </div>
    )
}

Information.propTypes = {
    name: PropTypes.string.isRequired,
    use: PropTypes.string,
}
export default Information;
