import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsString,IsNumber, IsNotEmpty, Length } from "class-validator";

class Address {
    @ApiProperty({name: "city", type: 'string', required: true, example: "Toshkent"})
    readonly city: string;
    
    @ApiProperty({name: "district", type: 'string', required: true, example: "Bektemir"})
    readonly district: string;
}

export class CreateDto{
    @ApiProperty({name: "name", type: 'string', required: true, example: "Toshmat"})
    @Transform(({value}) => value?.trim())
    @IsNotEmpty()
    @IsString()
    @Length(1,30)
    readonly name: string;

    @ApiProperty({name: "password", type: 'string', required: false, example: "12345678"})
    @Length(8,30)
    @Transform(({value}) => value?.trim())
    @IsNotEmpty()
    @IsNumber()
    readonly password: string;

    @ApiProperty({name: "age", type: 'number', required: false, example: 13})
    @IsNotEmpty()
    @IsNumber()
    readonly age: number;

    @ApiProperty({ type: Address,name: "address"})
    address: Address;
}