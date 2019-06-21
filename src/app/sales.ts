export class Sales {
    id: number;
    SalesName: string;
    CustomerName: string;
    CustomerAddress: string;
    CustomerContact: number;
}

export class Order {
    id: number;
    sales_id: number;
    product_id: number;
    ProductCode: string;
    ProductName: string;
    ProductPrice: number;
    ProposedPrice: number;
    Quantity: number;
    margin: number;
    totalproposedprice: number;
    Accepted: boolean;
    RecommendedPrice: number;
}