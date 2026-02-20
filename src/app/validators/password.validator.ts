import { AbstractControl, ValidationErrors } from '@angular/forms';

export function passwordValidator(
  control: AbstractControl, //Control es la caja donde esta escrita tu contraseña
): ValidationErrors | null {
  const value = control.value || ''; //Esto saca la contraseña como tal
  const errors: ValidationErrors = {}; //Esto crea un objeto para los errores y ya vas metiendo segun se cumplan

  if (value.length < 8) errors['minLength'] = true;
  if (!/[A-Z]/.test(value)) errors['upperCase'] = true;
  if (!/\d/.test(value)) errors['number'] = true;
  return Object.keys(errors).length ? errors : null;
}
