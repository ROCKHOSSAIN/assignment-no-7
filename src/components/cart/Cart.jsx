import './Cart.css'
const Cart = ({ courseName, totalPrice, countCredit, remainingCreditHour }) => {
    console.log(courseName)
    let count=1
    return (
        <div className='Cart-Section'>
            <h1 className='cart-hour'>Credit Hour Remaining {remainingCreditHour} hr</h1>
            <hr />
            <h1 className='course-name'>Course Name</h1>
            <div className="Cart-Section">
             
                    {
                        courseName.map(cart => (
                            <li className='list-of-course' key={cart.id}>{count++}. {cart.title}</li>

                        ))
                    }
               
                <hr />
            </div>
            <div>
                <h3 className='credit-price'>Total Credit Hour:{countCredit}</h3>
                <h3 className='credit-price'>Total Price:{totalPrice} USD</h3>
            </div>

        </div>
    );
};

export default Cart;