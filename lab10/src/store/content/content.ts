
interface Content {
    inp_value: string,
    avatar_url?: string,
    followers?: number,
    following?: number,
    repos?: string[]
}


export interface ContentState {
    readonly loading: boolean,
    readonly data: Content,
    err: string
}

export enum fetchRequest {
    fetch_req = "@@fetch_request",
    fetch_suc = "@@fetch_suc",
    fetch_err = "@@fetch_err"
}