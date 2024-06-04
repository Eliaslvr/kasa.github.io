import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import elementJson from '../../element.json'

function CountPage({title, children, className, className2}) {

    const [count, setCount] = useState(false)

    const handleClick = function () {
        setCount(!count)
    }


    return (
        <div className={`info ${className}`}>
                <div className='width'>
                    <div className=''>
                    {/* Si count est vrai, la classe rotate est ajoutée. Sinon, la classe rotate2 est ajoutée. */}
                        <p className="nameDescription margin_top_mobile"><span>{title}</span><i className={`fas fa-chevron-up ${count ? 'rotate' : 'rotate2'}`} onClick={handleClick}></i></p>
                    </div>
                    {/* si count est vrai, alors ajoute le paragraphe... */}
                    {count && (<div className={`clickPage ${className2}`}>{children}</div>)}
                </div>

                {/* <div className='width'>
                    <div>
                        <p className='nameDescription'><span>Equipement</span><i className={`fas fa-chevron-up ${rotation2 ? 'rotate' : 'rotate2'}`} onClick={handleClick2}></i></p>
                    </div>
                    {rotation2 && (<div className='infoDescription'>{element.equipments.map((elem, index) => (
                                <div key={index}>
                                    <p>{elem}</p>
                                </div> 
                            ))}
                        </div>
                    )}
                </div> */}
            </div>
    );
}

export default CountPage;