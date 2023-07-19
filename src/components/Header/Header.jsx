import Button from "../Button/Button";
import { useTelegram } from "../../hooks/useTelegram";
import "./Header"

const Header = () => {
    const { user, onClose } = useTelegram();
    return (
        <div className={'header'}>

            <span className={'username'}>
                {user?.username}
            </span>
        </div>
    )
}

export default Header