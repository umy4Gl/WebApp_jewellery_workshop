
import "./CardMain.css";


const CardMain = ({ title, children }) => {
    return (
        <a className="card-wrapper" href="*">
            {children}
            <h3>{title}</h3>
        </a>
    );
};

export default CardMain;