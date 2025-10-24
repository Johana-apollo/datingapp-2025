import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AccountService } from '../services/account-service';
import { ToastsService } from '../services/toasts-service';

export const authGuard: CanActivateFn = () => {
  const accountService = inject(AccountService);
  const toast = inject(ToastsService);

  if (accountService.currentUser()) return true;
  else {
    toast.error('You shall not pass');
    return false;
  }
};
