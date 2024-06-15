import { Injectable } from '@angular/core';
import { AppConstants } from 'src/app-constants';
import Swal, { SweetAlertOptions } from 'sweetalert2';

import { BaseService } from './base.service';
import { StorageService } from './storage.service';
import {
  ConfirmModalInfo,
  LayoutVM,
  LayoutViewModel,
  LoaderInfo,
} from '../models/internal/common-models';
import { RoleTypeSM } from '../models/service/enums/role-type-s-m.enum';
import { TokenRequestSM } from '../models/service/token/token-request-s-m';
import { LoginUserSM } from '../models/service/v1/app-users/login/login-user-s-m';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonService extends BaseService {
  // toasts: ToastInfo[] = [];
  searchInput: string = '';
  showHideHomeButton: boolean = true;
  preciseValue: number = 10;
  // ////
  highlightCommonCategory: boolean = false;
  highlightEngineeringCategory: boolean = false;
  highlightOthersCategory: boolean = false;
  highlightBankingCategory: boolean = false;
  highlightHealthCategory: boolean = false;
  highlightGeometryCategory: boolean = false;

  ///////
  layoutViewModel!: LayoutViewModel;
  layoutVM = new LayoutVM();
  loaderInfo: LoaderInfo = { message: '', showLoader: false };
  constructor(private storageService: StorageService) {
    super();
  }

  private selectedString = new BehaviorSubject<string>('');
  selectedItem$ = this.selectedString.asObservable();

  setSelectedStringFromTopNav(stringName: string) {
    this.selectedString.next(stringName);
  }

  async presentLoading(message: string = '') {
    this.loaderInfo = { message, showLoader: true };
  }

  // async presentToast(toastInfo: ToastInfo) {
  //   this.toasts.push(toastInfo);
  // }

  // removeToast(toast: any) {
  //   this.toasts = this.toasts.filter((t) => t !== toast);
  // }

  // clearAllToasts() {
  //   this.toasts.splice(0, this.toasts.length);
  // }

  async presentAlert() {}

  async presentConfirmAlert(modalInfo: ConfirmModalInfo): Promise<boolean> {
    // const modalRef = this.modalService.open(ConfirmModalComponent, options);
    // modalRef.componentInstance.confirmModalInfo = modalInfo;
    return true;
  }

  /**Show custom sweet alert*/
  async showSweetAlertConfirmation(alertOptions: SweetAlertOptions) {
    return (await Swal.fire(alertOptions)).isConfirmed;
  }

  /**Show custom sweet alert*/
  async showSweetAlertToast(alertOptions: SweetAlertOptions) {
    alertOptions.toast = true;
    // alertOptions.position = 'top-right';
    alertOptions.showConfirmButton = false;
    // alertOptions.timer = 3000;
    alertOptions.timerProgressBar = true;
    alertOptions.didOpen = (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    };
    return await Swal.fire(alertOptions);
  }

  async dismissLoader() {
    this.loaderInfo.showLoader = false;
    this.loaderInfo.message = '';
  }

  async getUserIdPwdFromStorage(): Promise<TokenRequestSM> {
    let request: TokenRequestSM = {
      companyCode: '',
      loginId: '',
      password: '',
      roleType: RoleTypeSM.Unknown,
    };
    let user: LoginUserSM = await this.storageService.getFromStorage(
      AppConstants.DbKeys.LOGIN_USER
    );
    if (user) {
      request.loginId = user.loginId;
      request.password = user.passwordHash;
      request.roleType = user.roleType;

      let cCode: string = await this.storageService.getFromStorage(
        AppConstants.DbKeys.COMPANY_CODE
      );
      if (cCode && cCode != '') request.companyCode = cCode;
    }
    return request;
  }

  async addDummyUserToStorage() {
    let user: LoginUserSM = {
      createdBy: '',
      createdOnUTC: new Date(),
      dateOfBirth: new Date(),
      emailId: '',
      firstName: '',
      id: 1,
      isEmailConfirmed: false,
      isLoginEnabled: true,
      isPhoneNumberConfirmed: false,
      lastModifiedBy: '',
      lastName: '',
      loginId: 'testId',
      middleName: '',
      passwordHash: 'testPwdHash',
      phoneNumber: '',
      profilePicturePath: '',
      roleType: RoleTypeSM.ClientEmployee,
      lastModifiedOnUTC: new Date(),
    };
    user.loginId = 'testUser';
    this.storageService.saveToStorage(
      AppConstants.DbKeys.REMEMBER_PWD,
      true.toString()
    );
    this.storageService.saveToStorage(AppConstants.DbKeys.LOGIN_USER, user);
  }

  //removing - negative sign
  onInputChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.value.startsWith('-')) {
      if (inputElement.value.length > 1) {
        inputElement.value = inputElement.value.slice(1);
      } else {
        inputElement.value = ''; // If only '-' is entered, clear the input
      }
    }
  }

  // preventing user to enter -v
  preventNegativeValues(event: KeyboardEvent) {
    if (event.key === '-' || event.key === 'Minus') {
      event.preventDefault();
    }
  }

  convertFileToBase64(file: File): Observable<string> {
    const result = new ReplaySubject<string>(1);
    const reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = (event: any) =>
      result.next(btoa(event.target.result.toString()));
    return result;
  }

  handleImageError(event: any) {
    event.target.src = '../../../assets/images/1.png';
  }
}
