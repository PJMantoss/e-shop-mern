import StripeCheckout from 'react-stripe-checkout';
import { useState, useEffect } from 'react';
import axios from 'axios';

const KEY = "pk_test_YO4hCduILG2Vkvaecq4Th13V007ILyXZUw";

const Pay = () => {

    const [stripeToken, setStripeToken] = useState(null);

    const onToken = (token) => {
        setStripeToken(token);
    };

    useEffect(() => {
        const makeRequest = async () => {
            try{
                const response = await axios.post(
                    "http://localhost:5000/api/checkout/payment", {
                        tokenId: stripeToken,
                        amount: 2000,
                    }
                    );

                    console.log(response.data);

            }catch(err){
                console.log(err);
            };
        };

        stripeToken && makeRequest();
    }, [stripeToken]);

    return(
        <div 
            style={{
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            <StripeCheckout
                name="Mern E Shop"
                image=""
                billingAddress
                shippingAddress
                description = "Your total is $20"
                amount={2000}
                token={onToken}
                stripeKey={KEY}
            >
                <button
                    style={{
                        border: "none",
                        width: 120,
                        borderRadius: 5,
                        padding: "20px",
                        backgroundColor: "black",
                        color: "white",
                        fontWeight: "600",
                        cursor: "pointer"
                    }}
                >
                    Pay Now
                </button>
            </StripeCheckout>
        </div>
    );
}

export default Pay;