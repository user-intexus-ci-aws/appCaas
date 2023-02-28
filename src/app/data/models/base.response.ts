export class BaseResponse {
    success: boolean;
    message: string;
    parameters: Array<Parametro>;

    isSuccess(): boolean {
        return this.success && this.parameters != null;
    }

    getValue(searchValue: string) {
        let parameter = this.parameters.filter(f => f.name.toUpperCase() == searchValue.toUpperCase());
        if (parameter != null) {
            return parameter[0].value;
        }
        return null;
    }

}

export interface Parametro {
    name: string,
    value: string
}