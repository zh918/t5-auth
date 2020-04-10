import { IsInt, IsString, IsDate, IsNotEmpty } from 'class-validator';
import { StatusEnum } from '../enums/status.enum'

export class UserDto {
    @IsInt()
    readonly ID: number;

    @IsString()
    readonly LOGIN_NAME: string;

    @IsString()
    readonly LOGIN_PWD: string;

    @IsString()
    readonly SYSTEM_CODE: string;

    @IsInt()
    readonly ROLE_ID: number;

    @IsInt()
    readonly STATUS: StatusEnum;

    @IsString()
    readonly CREATED_BY: string;

    @IsDate()
    readonly CREATED_TIME: string;

    @IsString()
    readonly UPDATED_BY: string;

    @IsDate()
    readonly UPDATED_TIME: string;
}
