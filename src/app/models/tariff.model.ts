export class TariffModel {
    public id: number;
    public name: string;
    public benefits: Array<string>;
    public price: number;
    public currency: string;
    public uploadSpeed: number;
    public downloadSpeed: number;
}