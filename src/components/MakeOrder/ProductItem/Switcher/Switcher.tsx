import s from './Switcher.module.scss';
import {FC} from "react";
import cn from "classnames";

interface SwitcherProps {
    state: boolean;
    onClick: () => void;
}

const Switcher: FC<SwitcherProps> = ({ state, onClick }) => {
    return (
        <div className={cn(s.switcher, state ? s.active : s.notActive)} onClick={onClick}>
            <div className={s.rect} />
        </div>
    );
};

export default Switcher;
