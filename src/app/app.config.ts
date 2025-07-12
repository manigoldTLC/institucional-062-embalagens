import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import {
  provideRouter,
  withRouterConfig,
  RouterConfigOptions
} from '@angular/router';
import { routes } from './app.routes';
import { provideIcons } from '@ng-icons/core';
import {
  heroMap,
  heroPhone,
  heroEnvelope,
  heroClock,
  heroChatBubbleBottomCenterText
} from '@ng-icons/heroicons/outline';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideClientHydration(withEventReplay()),

    provideRouter(
      routes,
      withRouterConfig(<RouterConfigOptions>{
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled',
        scrollOffset: [0, 80]
      })
    ),

    provideIcons({
      heroMap,
      heroPhone,
      heroEnvelope,
      heroClock,
      heroChatBubbleBottomCenterText
    }),

    provideHttpClient(withFetch())
  ]
};
