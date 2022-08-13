import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { CadastroComponent } from "../demos/reactiveForms/cadastro/cadastro.component";

export class CadastroGuard implements  CanDeactivate<CadastroComponent> {
  
  canDeactivate(component: CadastroComponent) {
    if(component.mudancasNaoSalvas){
      return window.confirm('Tem certeza que deseja abandonar o preenchimento do formulário?');
    }

    return true;
  }
  
}