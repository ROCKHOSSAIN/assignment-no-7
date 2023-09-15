
const Card = ({course,handleSelect}) => {
    const{image,title,credit,price,details}=course;
    return (
        
             <div className="card">
                
                        <div>
                        <img className="image" src={image} alt="" />
                        </div>
                        <h4 className='intro'>{title}</h4>
                        <p><small className='details'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</small></p>
                        <div className='course-info'>
                            <p><span>$</span>Price:{price}</p>
                            
                            <p>Credit:{credit}</p>
                        </div>
                        <div>

                        <button className='btn' onClick={()=>handleSelect(course)}>Select</button>
                        </div>
                    </div>
    );
};

export default Card;