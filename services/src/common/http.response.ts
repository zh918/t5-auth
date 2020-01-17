import { Injectable } from '@nestjs/common';

@Injectable()
export class HttpResponse {

    static success(T: object = {}): object {
        let resultJson = { code: 1, msg: '成功', data: T };
        return resultJson;
    }

    static fail(msg: string = '失败', code: number = -1): object {
        return { code: code, msg: msg, data: null };
    }
}