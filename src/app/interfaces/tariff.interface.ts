export interface ITariff {
    id: number;
    name: string;
    benefits: Array<string>;
    price: number;
    uploadSpeed: number;
    downloadSpeed: number;
}