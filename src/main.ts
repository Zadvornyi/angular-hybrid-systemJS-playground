import * as angular from 'angular'

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {NgModule, StaticProvider, StaticProvider} from "@angular/core";
import {UpgradeModule, downgradeModule, downgradeComponent } from "@angular/upgrade/static";
import {BrowserModule} from "@angular/platform-browser";


import {AppComponent} from './component';
import ng1MainCtrl from './ng1mainCtrl';

const bootstrapFn = (extraProviders: StaticProvider[]) => {
    const platformRef = platformBrowserDynamic(extraProviders);
    return platformRef.bootstrapModule(AppModule);
};

// Main Angular module
@NgModule({
    imports: [
        BrowserModule,
        UpgradeModule,
    ],
    declarations: [AppComponent],
    entryComponents: [AppComponent],
})
export class AppModule {
    constructor() {}
    ngDoBootstrap() {}
}

// Main AngularJS angular
export const ng1Module = angular.module('hybridApp', [
    downgradeModule(bootstrapFn)
])
    .directive(
        'myApp',
        downgradeComponent({component: AppComponent }) as angular.IDirectiveFactory
    )

ng1MainCtrl(ng1Module)


// platformBrowserDynamic().bootstrapModule(AppModule);
angular.bootstrap(document.documentElement, [ng1Module.name]);
