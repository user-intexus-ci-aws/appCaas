export class BaseResponse {
    success: boolean;
    message: string;
    parametros: Array<Parametro>;

    isSuccess(): boolean {
        return this.success && this.parametros != null;
    }

    getValue(searchValue: string) {
        let parameter = this.parametros.filter(f => f.name.toUpperCase() == searchValue.toUpperCase());
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