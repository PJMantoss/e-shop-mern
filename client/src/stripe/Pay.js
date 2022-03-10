import StripeCheckout from 'react-stripe-checkout';

const KEY = "pk_test_YO4hCduILG2Vkvaecq4Th13V007ILyXZUw";

const Pay = () => {

    const onToken = () => {};
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
                description="Your total is $20"
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