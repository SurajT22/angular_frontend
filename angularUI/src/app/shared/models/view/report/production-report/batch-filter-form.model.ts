import { SerializationFilterForm } from "./serialization-filter-form.model";

export class BatchFilterForm extends SerializationFilterForm {
    line!: string;
    batch !: string;
    product !: string;
    GTIN !: string;
}