import { BaseFilterForm } from "./base-filter-from.model";

export class PCRFilter extends BaseFilterForm {
    batch !: string;
    productName !: string;
}