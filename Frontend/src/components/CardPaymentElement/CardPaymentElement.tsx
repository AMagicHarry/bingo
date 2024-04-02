import React, { useState } from 'react';
import styled from 'styled-components';
import {
  useElements,
  useStripe,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";

export interface CreateCardPaymentProps {
  onSuccessCard: (id: string) => void;
  onError?: (message?: string) => void;
}

const CardInputWrapper = styled.div`
  padding: 12px 16px;
  width: 100%;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  outline: none;
  &:focus-within {
    box-shadow: 0 0 0 2px #3b82f6;
  }
`;

const Input = styled.input`
  padding: 8px 16px;
  color: '#111827',
  width: 100%;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  outline: none;
  &:focus {
    box-shadow: 0 0 0 2px #3b82f6;
  }
`;

const inputStyle = {
  iconColor: '#6b7280',
  color: '#111827',
  fontWeight: '400',
  fontFamily: '"Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
  fontSize: '16px',
  fontSmoothing: 'antialiased',
  '::placeholder': {
    color: '#6b7280',
  },
  ':-webkit-autofill': {
    color: '#fce883',
  },
}

export const CreateCardPayment: React.FC<CreateCardPaymentProps> = ({ onSuccessCard, onError }) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const elements = useElements();
  const stripe = useStripe();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      onError && onError("Stripe has not initialized.");
      return;
    }

    const cardNumberElement = elements.getElement(CardNumberElement);

    if (cardNumberElement) {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardNumberElement,
        billing_details: {
          name: `${name} ${lastName}`,
          email,
          address: { postal_code: postalCode }
        },
      });

      if (error) {
        console.log(error);
        onError && onError(error.message);
      } else if (paymentMethod?.id) {
        onSuccessCard(paymentMethod.id);
      }
    }
  };

  return (
    <form className='flex flex-col gap-[1rem]' onSubmit={handleSubmit}>
      <div className='flex flex-col sm:flex-row gap-[1rem]'>
        <div className="flex flex-1 flex-col">
          <label htmlFor="firstname" className="mb-2 block text-sm font-medium text-gray-900">
            First name
          </label>
          <Input placeholder="First name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>


        <div className="flex flex-1 flex-col">
          <label htmlFor="lastname" className="mb-2 block text-sm font-medium text-gray-900">
            Last name
          </label>
          <Input placeholder="Last name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>
      </div>

      <div className='flex flex-col  sm:flex-row gap-[1rem]'>
        <div className="flex-1">
          <CardInputWrapper>
            <CardNumberElement options={{ style: { base: inputStyle } }} />
          </CardInputWrapper>
        </div>

        <div className='flex-1 flex-col sm:flex-row flex gap-[1rem]'>
          <CardInputWrapper>
            <CardExpiryElement options={{ style: { base: inputStyle } }} />
          </CardInputWrapper>

          <CardInputWrapper>
            <CardCvcElement options={{ style: { base: inputStyle } }} />
          </CardInputWrapper>
        </div>
      </div>



      <div className='flex flex-col sm:flex-row gap-[1rem]'>
        <div className="flex flex-1 flex-col">
          <label htmlFor="postal-code" className="mb-2 block text-sm font-medium text-gray-900">
            Postal code
          </label>
          <Input placeholder="Postal code" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} />
        </div>

        <div className="flex flex-1 flex-col">
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-900">
            Email
          </label>
          <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
      </div>

      <button className='w-full px-[1rem] py-[.5rem] mx-auto max-w-[10rem] mt-2 text-white rounded-md flex items-center justify-center bg-blue-500 hover:bg-blue-600 duration-300' type="submit" disabled={!stripe || !elements}>
        Pay $80
      </button>
    </form>
  );
};
