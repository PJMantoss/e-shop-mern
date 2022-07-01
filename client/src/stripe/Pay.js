import StripeCheckout from 'react-stripe-checkout';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const KEY = "pk_test_YO4hCduILG2Vkvaecq4Th13V007ILyXZUw";

const Pay = () => {
    // const [stripeToken, setStripeToken] = useState(null);

    // const navigate = useNavigate();

    const onToken = (token) => {
        console.log(token);
    };

    // useEffect(() => {
    //     const makeRequest = async () => {
    //         try{
    //             const response = await axios.post(
    //                 "http://localhost:5000/api/checkout/payment", {
    //                     tokenId: stripeToken.id,
    //                     amount: 2000,
    //                 }
    //                 );

    //                 console.log(response.data);
    //                 navigate.push("/success");
    //         }catch(err){
    //             console.log(err);
    //         }
    //     };

    //     stripeToken && makeRequest();
    // }, [stripeToken, navigate]);

    return(
        <div 
            style={{
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            {stripeToken ? (
                <span>Processing. Please wait...</span>
                ) : (
                    <StripeCheckout
                        name="Mern E Shop"
                        image="https://i.ibb.co/J7skp3X/logo-sample.jpg"
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
                )}
        </div>
    );
}

export default Pay;