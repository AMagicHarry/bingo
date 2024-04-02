import { useState } from 'react';
import {
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

export const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [errorMessage, setErrorMessage] = useState<string | undefined>('');
  const [paymentElementLoaded, setPaymentElementLoaded] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!elements || !stripe) {
      return;
    }

    const {error: submitError} = await elements.submit();
    if (submitError) {
      setErrorMessage(submitError.message);
      return;
    }

    const res = await fetch('/create-intent', {
      method: 'POST',
    });

    const {client_secret: clientSecret} = await res.json();

    const {error} = await stripe.confirmPayment({

      elements,
      clientSecret,
      confirmParams: {
        return_url: 'https://example.com/order/123/complete',
      },
    });

    if (error) {
      setErrorMessage(error.message);
    } else {
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-[1rem]">
      <PaymentElement onReady={() => setPaymentElementLoaded(true)} />
      </div>
      {paymentElementLoaded && (
        <button 
          className='w-full px-[1rem] py-[.5rem] mx-auto max-w-[10rem] text-white rounded-md flex items-center justify-center bg-blue-500 hover:bg-blue-600 duration-300'
          type="submit"
          disabled={!stripe || !elements}
        >
          Pay
        </button>
      )}
      {errorMessage && <div className='w-full flex items-center  text-[.85rem] text-red-500 mt-[1rem] justify-center px-[1rem]'>{errorMessage}</div>}
    </form>
  );
};

