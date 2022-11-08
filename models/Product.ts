import { Sale, InstallmentPlan } from "."

type Product = {
    id: string;
    name: string;
    price: number;
    characteristic: {
        name: string;
        value: string;
    }[];
    sales: Sale[];
    images: string[];
    installmentPlans: InstallmentPlan[];
}

export default Product;
