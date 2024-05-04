import { SerializationFilterForm } from "./serialization-filter-form.model";

export class ProductFilter extends SerializationFilterForm {
    product !: string;
    batch !: string;
    GTIN !: string;
}