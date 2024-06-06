import React, { useState } from 'react';

function CountPage({title, children, className}) {

    const [count, setCount] = useState(false)

    const handleClick = function () {
        setCount(!count)
    }


    return (
        <div className={`info ${className}`}>
            <div className='width'>
                {/* Si count est vrai, la classe rotate est ajoutée. Sinon, la classe rotate2 est ajoutée. */}
                <p className="nameDescription margin_top_mobile"><span>{title}</span><i className={`fas fa-chevron-up ${count ? 'rotate' : 'rotate2'}`} onClick={handleClick}></i></p>
                {/* si count est vrai, alors ajoute le paragraphe... */}
                {count && (<div className={`clickPage ${className}`}>{children}</div>)}
            </div>
        </div>
    );
}

export default CountPage;