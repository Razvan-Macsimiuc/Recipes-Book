import { AppComponent } from "./app.component"

describe( 'AppComponent', () => {
  let fixture: AppComponent

  beforeEach( () => {
    fixture = new AppComponent()
  } )
  it( 'should initialize component', () => {
    expect( fixture ).toBeInstanceOf( AppComponent )
  } )
  it( 'title should be title', () => {
    const appTitle = "Recipes-Book"
    expect( fixture.title ).toStrictEqual( appTitle )
  } )
} )