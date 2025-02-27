export interface SearchResponse {
    results: Result[];
}

export interface Result {
    content: Content;
    created_at: string;
    updated_at: string;
    page: number;
    url: string;
    job_id: string;
    is_render_forced: boolean;
    status_code: number;
    parser_type: string;
}

export interface Content {
    url: string;
    facets: Facet[];
    results: ProductResult[];
    location: Location;
    page_details: PageDetails;
    parse_status_code: number;
}

export interface Facet {
    type: string;
    values: FacetValue[];
    display_name: string;
    max?: number; // Optional, from the first JSON
    min?: number; // Optional, from the first JSON
}

export interface FacetValue {
    name: string;
    type?: string; // Optional, from the first JSON
    item_count?: number; // Optional, from the first JSON
}

export interface ProductResult {
    price: Price;
    rating: Rating;
    seller: Seller;
    general: General;
    fulfillment: Fulfillment;
    variants?: Variant[];
    badge?: string; // Optional, from the first JSON
}

export interface Price {
    price: number;
    currency: string;
    price_strikethrough?: number; // Optional, from the first JSON
    price_min?: number; // Optional, from the first JSON
    price_max?: number; // Optional, from the first JSON
}



export interface Rating {
    count: number;
    rating: number;
}

export interface Seller {
    id: string;
    name: string;
}

export interface General {
    pos: number;
    url: string;
    image: string;
    title: string;
    sponsored: boolean;
    product_id: string;
    out_of_stock: boolean;
    section_title: string;
    badge?: string; // Optional, from the first JSON
}

export interface Fulfillment {
    pickup: boolean;
    delivery: boolean;
    shipping: boolean;
    free_shipping: boolean;
}

export interface Variant {
    url: string;
    image: string;
    title: string;
    product_id: string;
}

export interface Location {
    city: string;
    state: string;
    zipcode: string;
    store_id: string;
}

export interface PageDetails {
    page: number;
    total_results: number;
    last_visible_page: number;
}