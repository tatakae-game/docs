# Angular Technical Documentation

## Architecture

    tatakae-client
    |- src
       |- app
            |- dashboard-admin
            |- game
            |- header
            |- models
            |- modules
            |- services
            |- user-control
            |- validators
            |- views

A basic Angular architecture using models and services. `views/` represents the pages to be exposed.

## Routing

Angular integrates its own routing system to simplify developers life.

source: https://angular.io/tutorial/toh-pt5

```ts
const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent, canActivate: [NoAuthGuard], },
  { path: 'dashboard/groups', component: PermissionGroupsComponent, canActivate: [AdminGuard], },
  { path: 'chat', component: RoomsComponent, canActivate: [AuthGuard], },
  { path: 'chat/room/:id', component: RoomComponent, canActivate: [AuthGuard], },
  { path: 'support', component: RoomsComponent, canActivate: [AuthGuard], },
  { path: 'user', component: UserPageComponent, canActivate: [AuthGuard], },
  { path: 'support/ticket/:id', component: RoomComponent, canActivate: [AuthGuard], },
  { path: 'editor', component: EditorComponent, canActivate: [AuthGuard], },
  { path: 'play', component: PlayComponent, canActivate: [AuthGuard], },
  { path: 'signup', component: SignupComponent, canActivate: [NoAuthGuard], },
  { path: 'login', component: LoginComponent, canActivate: [NoAuthGuard], },
  { path: '**', component: NotFoundComponent, },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

## Guards

Three guards were developed to ensure the pages access:

- auth.guard.ts
- no-auth.guard.ts
- admin.guard.ts

### Auth Guard

Allow the user to access to the page if is authed.

```ts
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }

  async canActivate(): Promise<boolean | UrlTree> {
    return await this.authService.isLogged() || this.router.parseUrl('/login');
  }
}
```

### No-Auth Guard

Allow the user to access to the page if is not authed.

```ts
export class NoAuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }

  async canActivate(): Promise<boolean | UrlTree> {
    return await this.authService.isNotLogged() || this.router.parseUrl("/editor");
  }
}
```

### Admin Guard

Allow the user to access to the page if is an admin.

```ts
export class AdminGuard implements CanActivate {
  constructor(private authService: AuthService,
              private router: Router,
              private userService: UsersService) {}

  async canActivate(): Promise<boolean | UrlTree> {
    const isAdmin = await this.userService.isAdmin();
    const isAdminAndAuthed = await this.authService.isLogged() && isAdmin;

    return isAdminAndAuthed || this.router.parseUrl('/editor');
  }
}
```
