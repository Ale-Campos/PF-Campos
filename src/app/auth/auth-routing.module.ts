import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { LoginComponent } from "./pages/login/login.component";
import { RegisterComponent } from "./pages/register/register.component";
import { AuthComponent } from "./auth.component";


@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path:'',
                component: AuthComponent,
                children: [
                    {
                        path:'login',
                        component: LoginComponent
                    },
                    {
                        path:'register',
                        component: RegisterComponent
                    },
                    {
                        path:'**',
                        redirectTo: 'login'
                    }
                ]
            },
            
        ])
    ],
    exports: [RouterModule]
})

export class AuthRoutingModule {}