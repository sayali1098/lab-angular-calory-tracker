import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CalorylistComponent } from './calorylist/calorylist.component';
import { FoodSearchPipe } from './search.pipe';

@NgModule({
  declarations: [AppComponent, CalorylistComponent, FoodSearchPipe],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
