type Sale = {
    saleType: "imei" | "discount" | "bundle" | "tradeIn";
    description: string;
    value: string;
    info?: string | undefined;
    enabled?: boolean | true;
}

export default Sale;
