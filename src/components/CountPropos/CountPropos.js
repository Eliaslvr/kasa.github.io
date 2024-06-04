import React, { useState } from 'react';

function Count({title, children}) {

    const [count, setCount] = useState(false)

    const handleClick = function () {
        setCount(!count)
    }

    return (
        <div className='affiche'>
            <div>
                <div className='propos'>
                    <p>{title}</p>
                    {/* Si count est vrai, la classe rotate-icon est ajoutée. Sinon, la classe rotate2 est ajoutée. */}
                    <i className={`fas fa-chevron-up ${count ? 'rotate' : 'rotate2'}`} onClick={handleClick} />
                </div>
                    {/* si count est vrai, alors ajoute le paragraphe... */}
                    {count && ( <div className='clickPropos'>{children}</div> )}
            </div>
        </div>
    );
}

export default Count;