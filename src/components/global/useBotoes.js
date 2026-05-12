import { useState } from "react";
import "../../../src/App.css";

export function useBotoes(callback){
    const [clicou, setClicou] = useState(false);

    const handleDown = e => {
        if(e.type === "keydown"){
            if(e.key !== "Enter" && e.key !== " ")return;
            e.preventDefault();
        };
        setClicou(true);
    };
    const handleUp = e => {
        if(!clicou)return;
        setClicou(false);
        if (e.currentTarget) e.currentTarget.blur();
        if(callback)callback();
        if(e.type === "touchend" && e.cancelable) e.preventDefault();
    };
    const handleCancel = () => setClicou(false);

    return{
        clicou,
        bind: {
            onKeyDown: handleDown,
            onKeyUp: handleUp,
            onMouseDown: handleDown,
            onMouseUp: handleUp,
            onTouchStart: handleDown,
            onTouchEnd: handleUp,
            onMouseLeave: handleCancel,
            onTouchCancel: handleCancel,
            onBlur: handleCancel,
            onContextMenu: e => e.preventDefault()
        }
    };
};
