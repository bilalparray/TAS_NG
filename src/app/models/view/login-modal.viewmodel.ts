import { TokenRequestSM } from "../service/token/token-request-s-m";
import { BaseViewModel } from "../internal/base.viewmodel";

export class LoginModalViewModal implements BaseViewModel {
    PageTitle: string = 'Login';
    tokenRequest!: TokenRequestSM;
    hidePassword: boolean = true;
    eyeDefault!: string;
    rememberMe: boolean = false;
    FormSubmitted = false;
    ValidationData = {
        loginId: [
            { type: 'required', message: 'Login Id is required' },
            { type: 'maxlength', message: 'Login Id is max' },
            { type: 'minlength', message: 'Login Id is min' },
        ],
        password: [
            { type: 'required', message: 'password is required' },
            { type: 'maxlength', message: 'password  is max' },
            { type: 'minlength', message: 'password  is min' },
        ],
    }
}