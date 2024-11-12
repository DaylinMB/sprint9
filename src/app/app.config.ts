import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { routes } from './app.routes';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { ToastrModule } from 'ngx-toastr'; 



export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withFetch()),
    importProvidersFrom(
      BrowserAnimationsModule, 
      ToastrModule.forRoot(
        {
          timeOut: 5000,                   // Duración del toast en milisegundos
          positionClass: 'toast-bottom-center',  // Posición en la pantalla
          preventDuplicates: true,        // Evitar duplicados
          closeButton: true,              // Mostrar el botón de cerrar (X)
          progressBar: true,  
        }
      ) 
    ),
  ]
};
