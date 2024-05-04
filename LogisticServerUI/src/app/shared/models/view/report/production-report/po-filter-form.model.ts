import { SerializationFilterForm } from "./serialization-filter-form.model";

export class POFilter extends SerializationFilterForm {
    po !: string;
    batch !: string;
    GTIN !: string;
}