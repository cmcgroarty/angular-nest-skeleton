import { NgModule, Optional, SkipSelf } from '@angular/core';

import { CoreRoutingModule } from './core-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CoreRoutingModule
  ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule ) {
    throwIfAlreadyLoaded( parentModule, 'CoreModule' );
  }
}

export function throwIfAlreadyLoaded( parentModule: any, moduleName: string ) {
  if ( parentModule ) {
    throw new Error( `${moduleName} has already been loaded. Import core modules in the AppModule only.` );
  }
}
