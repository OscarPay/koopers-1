import { EventEmitter } from '@angular/core';
import { Alert, INFO_TYPE, SUCCESS_TYPE } from '@core/models/alerts';
import { Category } from '@core/models/categories';
import { Screenshot } from '@core/models/screenshots';
import { CustomSite, Site, SiteDetails } from '@core/models/sites';
import { SuggestedSite } from '@core/models/suggested-sites';
import { TrackedSite } from '@core/models/tracked-sites';
import { User } from '@core/models/users';
import { Observable, of } from 'rxjs';
import { categories, customSites, screenshots, sites, suggestedSites, trackedSites, users } from '../mocks/mocks';

export class CategoriesServiceStub {

  getAll(): Observable<Category[]> {
    return of(categories);
  }

  delete(): Observable<Category> {
    return of(categories[0]);
  }

  create(body: {title: string}): Observable<Category> {
    return of(categories[0]);
  }

  getOne(id: number): Observable<Category> {
    return of(categories[0]);
  }

  update(id: number, body: {title: string}): Observable<Category> {
    return of(categories[0]);
  }
}

export class SuggestedSitesServiceStub {
  getAll(): Observable<SuggestedSite[]> {
    return of(suggestedSites);
  }

  delete(): Observable<SuggestedSite> {
    return of(suggestedSites[0]);
  }

  create(body: {title: string, url: string, categories: string[]}): Observable<SuggestedSite> {
    return of(suggestedSites[0]);
  }

  getOne(id: number): Observable<SuggestedSite> {
    return of(suggestedSites[0]);
  }

  update(id: number, body: {title: string, url: string, categories: string[]}): Observable<SuggestedSite> {
    return of(suggestedSites[0]);
  }
}

export class SitesServiceStub {
  getAll(): Observable<Site[]> {
    return of(sites);
  }

  getCustomSites(): Observable<Site[] & CustomSite[]> {
    return of(customSites);
  }

  delete(): Observable<Site> {
    return of(sites[0]);
  }

  create(body: {title: string, url: string, Available: boolean}): Observable<Site> {
    return of(sites[0]);
  }

  getOne(id: number): Observable<Site> {
    return of(sites[0]);
  }

  getOneWithDetails(id: number): Observable<SiteDetails> {
    return of({
      site: {title: '', url: '', avaliable: true},
      categories: [
        {
          category_id: {
            id: 1,
            title: ''
          }
        }
      ]
    });
  }

  update(id: number, body: {title: string, url: string, Available: boolean}): Observable<Site> {
    return of(sites[0]);
  }
}

export class TrackedSitesServiceStub {
  getAll(): Observable<TrackedSite[]> {
    return of(trackedSites);
  }

  delete(): Observable<TrackedSite> {
    return of(trackedSites[0]);
  }

  create(body: {site_id: number, category_id: number, path_url: string}): Observable<TrackedSite> {
    return of(trackedSites[0]);
  }

  getOne(id: number): Observable<TrackedSite> {
    return of(trackedSites[0]);
  }

  update(id: number, body: {site_id: number, category_id: number, path_url: string}): Observable<TrackedSite> {
    return of(trackedSites[0]);
  }
}

export class UsersServiceStub {
  getAll(): Observable<User[]> {
    return of(users);
  }

  delete(): Observable<User> {
    return of(users[0]);
  }

  create(body: {username: string, is_staff: boolean}): Observable<User> {
    return of(users[0]);
  }

  getOne(id: number): Observable<User> {
    return of(users[0]);
  }

  update(id: number, body: {username: string, is_staff: boolean}): Observable<User> {
    return of(users[0]);
  }
}

export class ScreenshotsServiceStub {
  getAll(): Observable<Screenshot[]> {
    return of(screenshots);
  }

  getOne(id: number): Observable<Screenshot> {
    return of(screenshots[0]);
  }
}

export class FiltersServiceStub {
  filterBySites(siteId: string): Observable<{}> {
    return of({});
  }

  filterByDates(siteId: string, startDate: number, endDate: number): Observable<{}> {
    return of({});
  }

  filterByCategories(siteId: string, categories: string): Observable<{}> {
    return of({});
  }

  filterByAll(siteId: string, categories: string, startDate: number, endDate: number): Observable<{}> {
    return of({});
  }

  filterOptions() {
    return of({});
  }

}

export class AuthServiceStub {
  getUser(): Observable<any> {
    return of(users[0]);
  }

  register(user): Observable<any> {
    return of(users[0]);
  }

  login(user): Observable<any> {
    return of(users[0]);
  }

  logout(): void {}

  refreshToken(): Observable<any> {
    return of(users[0]);
  }
}

export class TokenServiceStub {
  saveToken(token: string): void {}

  saveRefreshToken(tokenRefresh: string): void {}

  getToken(): string {
    return '';
  }

  getRefreshToken(): string {
    return '';
  }

  deleteTokens(): void {}
}

export class LocationStub {
  back(): void {}
}

export class AlertsServiceStub {
  showAlert = new EventEmitter<Alert[]>();

  handleSuccessAlert() {}

  handleErrorAlert(message: string): void {}

  onAlertClosed(alert: Alert): void {}

  checkClass(alert: Alert): string {
    if (alert.type === SUCCESS_TYPE) {
      return 'Alert__div--success';
    }

    if (alert.type === INFO_TYPE) {
      return 'Alert__div--info';
    }

    return 'Alert__div--error';
  }
}
