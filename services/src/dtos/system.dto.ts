import { IsInt, IsString, IsDate, IsNotEmpty } from 'class-validator';
import { StatusEnum } from '../enums/status.enum'

export class SystemDto {
    @IsInt()
    ID: number;

    @IsString()
    CODE: string;

    @IsString()
    readonly NAME: string;

    @IsDate()
    readonly BEGIN_TIME: string;

    @IsDate()
    readonly END_TIME: string;

    @IsInt()
    readonly STATUS: StatusEnum;

    @IsString()
    readonly CREATED_BY: string;

    @IsDate()
    CREATED_TIME: string;

    @IsString()
    readonly UPDATED_BY: string;

    @IsDate()
    readonly UPDATED_TIME: string;
}