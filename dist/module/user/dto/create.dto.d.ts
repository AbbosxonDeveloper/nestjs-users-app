declare class Address {
    readonly city: string;
    readonly district: string;
}
export declare class CreateDto {
    readonly name: string;
    readonly password: string;
    readonly age: number;
    address: Address;
}
export {};
