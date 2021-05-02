export interface InpValue {
    value: string
}
export interface InpValueState {
    readonly data: InpValue
}
export enum InpAction {
    pressEtner = 'pressEter',
    pressBut = 'pressBut'
}