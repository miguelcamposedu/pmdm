import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleListComponent } from './components/people-list/people-list.component';
import { PeopleDetailComponent } from './components/people-detail/people-detail.component';

const routes: Routes = [
  { path: 'people', component: PeopleListComponent },
  { path: 'people-detail/:id', component: PeopleDetailComponent },
  { path: '', redirectTo: '/people', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
