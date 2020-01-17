import { PaginationInterface } from './pagination.interface'
import { ParameterInterface } from './parameter.interface'
import { OrderInterface } from './order.interface'

export interface FilterInterface {
    parameter?: ParameterInterface,
    page?: PaginationInterface,
    orderBy?: Array<OrderInterface>,
    compare?: {
        // [index: string]: "like" | "equal"
    }
}