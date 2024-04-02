import GooglePayButton from '@google-pay/button-react';

interface GooglePayButtonProps {
    totalPrice: string;
    currencyCode: string;
    countryCode: string;
}

export default function GooglePay({ totalPrice, currencyCode, countryCode }: GooglePayButtonProps) {
    return (
        <div>
            <GooglePayButton
                environment="TEST"
                paymentRequest={{
                    apiVersion: 2,
                    apiVersionMinor: 0,
                    allowedPaymentMethods: [{
                        type: 'CARD',
                        parameters: {
                            allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                            allowedCardNetworks: ['MASTERCARD', 'VISA'],
                        },
                        tokenizationSpecification: {
                            type: 'PAYMENT_GATEWAY',
                            parameters: {
                                gateway: 'example',
                                gatewayMerchantId: 'exampleGatewayMerchantId',
                            },
                        },
                    }],
                    merchantInfo: {
                        merchantId: '12345678901234567890',
                        merchantName: 'Demo Merchant',
                    },
                    transactionInfo: {
                        totalPriceStatus: 'FINAL',
                        totalPriceLabel: 'Total',
                        totalPrice,
                        currencyCode,
                        countryCode,
                    },
                    shippingAddressRequired: true,
                }}
                onLoadPaymentData={paymentData => {
                    console.log(paymentData);
                    return { transactionState: 'SUCCESS' };
                }}
                existingPaymentMethodRequired={false}
                buttonColor="black"
                buttonType="pay"
            />
        </div>
    );
}
