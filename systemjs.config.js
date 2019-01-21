const versions = {
    angular: '@5.0.0',
    typescript: '@2.6.1',
    tsLib: '@1.8.0',
    pluginTypescript: '@5.3.1',
    rxjs: '@5.5.2'
};

System.config({
    transpiler: 'ts',
    typescriptOptions: {
        experimentalDecorators: true,
        emitDecoratorMetadata: true
    },
    meta: {
        'typescript': { 'exports': 'ts' }
    },
    paths: {
        'npm:': 'https://unpkg.com/'
    },
    // map tells the System loader where to look for things
    map: {
        'app': './src',
        '@angular/core':                     'npm:@angular/core' + versions.angular + '/bundles/core.umd.js',
        '@angular/common':                   'npm:@angular/common' + versions.angular + '/bundles/common.umd.js',
        '@angular/common/http':              'npm:@angular/common' + versions.angular + '/bundles/common-http.umd.js',
        '@angular/compiler':                 'npm:@angular/compiler' + versions.angular + '/bundles/compiler.umd.js',
        '@angular/forms':                    'npm:@angular/forms' + versions.angular + '/bundles/forms.umd.js',
        '@angular/router':                   'npm:@angular/router' + versions.angular + '/bundles/router.umd.js',
        '@angular/platform-browser':         'npm:@angular/platform-browser' + versions.angular + '/bundles/platform-browser.umd.js',
        '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic' + versions.angular + '/bundles/platform-browser-dynamic.umd.js',
        'rxjs':                              'npm:rxjs' + versions.rxjs,
        // 'ts':                                'npm:plugin-typescript' + versions.pluginTypescript + '/lib/plugin.js',
        // 'tslib':                             'npm:tslib' + versions.tsLib,
        // 'typescript':                        'npm:typescript' + versions.typescript + '/lib/typescript.js'
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
        app: {
            main: './main.ts',
            defaultExtension: 'ts'
        },
        rxjs: { defaultExtension: 'js' }
    },
});