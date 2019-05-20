export enum Size {
    Small, Medium, Large, XLarge
}

export interface Kennel {
    KennelID?: number;
    KennelNumber: number;
    Size: string;
    Occupied: boolean;
    DoggoID: string;
    DoggoName: string;
    HumanID: string;
    FullName: string;
}
