// Angular
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentHarness } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { HttpClient, HttpRequest } from '@angular/common/http';

// RxJS
import { NEVER, of, throwError } from 'rxjs';

// PrimeNG
import { DynamicDialogConfig } from 'primeng/dynamicdialog';

// Own
import { Artwork, ArtworkModule, ArtworkService } from '@jurisin/artwork/api';
import { ArtworkFeatureGridViewModule } from './artwork-feature-grid-view.module';
import { GridViewShellComponent } from './grid-view-shell.component';
import { DetailsDynamicDialogShellComponent } from '../details/details-dynamic-dialog-shell.component';

// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { data } from 'libs/artwork/api/src/assets/artworks.json';

class GridViewShellComponentHarness extends ComponentHarness {

  static hostSelector = 'jurisin-grid-view-shell';

  protected locateFilter = this.locatorFor('[mark=gridFilter]');
  protected locateImages = this.locatorForAll('[mark=gridImage]');
  protected locateTitles = this.locatorForAll('[mark=gridTitle]');
  protected locateSubTitles = this.locatorForAll('[mark=gridSubtitle]');
  protected locateGridItem = this.locatorFor('[mark=gridItem]');
  protected locateError = this.locatorForAll('[mark=error]');
  protected locateLoading = this.locatorForAll('[mark=loading]');

  async areImagesShown(): Promise<boolean> {
    return Promise.resolve((await this.locateImages()).length > 0);
  }

  async areMultipleImagesShown(): Promise<boolean> {
    return Promise.resolve((await this.locateImages()).length > 1);
  }

  async isJustOneImagesShown(): Promise<boolean> {
    return Promise.resolve((await this.locateImages()).length === 1);
  }

  async filterImages(): Promise<void> {
    (await this.locateFilter()).focus();
    (await this.locateFilter()).click();
    (await this.locateFilter()).sendKeys('arrival of');
  }

  async unfilterImages(): Promise<void> {
    (await this.locateFilter()).focus();
    (await this.locateFilter()).click();
    (await this.locateFilter()).clear();
  }

  async areTitlesShown(): Promise<boolean> {
    return Promise.resolve((await this.locateTitles()).length > 0);
  }

  async areSubtitlesShown(): Promise<boolean> {
    return Promise.resolve((await this.locateSubTitles()).length > 0);
  }

  async clickGridItem(): Promise<void> {
    return (await this.locateGridItem()).click();
  }

  async isErrorShown(): Promise<boolean> {
    return Promise.resolve((await this.locateError()).length > 0);
  }

  async isLoadingShown(): Promise<boolean> {
    return Promise.resolve((await this.locateLoading()).length > 0);
  }

  async forceRefresh(): Promise<void> {
    await this.waitForTasksOutsideAngular();
    await this.forceStabilize();
    return Promise.resolve();
  }
}

class DetailsComponentHarness extends ComponentHarness {

  static hostSelector = 'jurisin-details-dynamic-dialog-shell';

  protected locateImage = this.locatorForAll('[mark=detailsImage]');
  protected locateTitle = this.locatorForAll('[mark=detailsTitle]');
  protected locateArtistTitle = this.locatorForAll('[mark=detailsArtistTitle]');
  protected locateDetailsDateDisplay = this.locatorForAll('[mark=detailsDateDisplay]');
  protected locateError = this.locatorForAll('[mark=error]');
  protected locateLoading = this.locatorForAll('[mark=loading]');

  async isImageShown(): Promise<boolean> {
    return Promise.resolve((await this.locateImage()).length === 1);
  }

  async isTitleShown(): Promise<boolean> {
    return Promise.resolve((await this.locateTitle()).length === 1);
  }

  async isArtistTitleShown(): Promise<boolean> {
    return Promise.resolve((await this.locateArtistTitle()).length === 1);
  }

  async isDetailsDateDisplayShown(): Promise<boolean> {
    return Promise.resolve((await this.locateDetailsDateDisplay()).length === 1);
  }

  async isErrorShown(): Promise<boolean> {
    return Promise.resolve((await this.locateError()).length > 0);
  }

  async isLoadingShown(): Promise<boolean> {
    return Promise.resolve((await this.locateLoading()).length > 0);
  }
}

describe('GridViewShellComponent', () => {
  let component: GridViewShellComponent;
  let fixture: ComponentFixture<GridViewShellComponent>;
  let subject: GridViewShellComponentHarness;
  let detailsSubject: DetailsComponentHarness;
  let artworkService: ArtworkService;
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;

  const dataRaw = data;
  const artworks: Artwork[] = data.data as Artwork[];
  const artworkForDetails: Artwork = artworks[0];

  const setupComponents = async (): Promise<null> => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        ArtworkModule,
        ArtworkFeatureGridViewModule,
      ],
      providers: [
        DynamicDialogConfig,
      ]
    })
    .compileComponents();

    artworkService = TestBed.inject(ArtworkService);
    httpMock = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);

    return Promise.resolve(null);
  };

  const createAndApply = async (): Promise<null> => {
    fixture = TestBed.createComponent(GridViewShellComponent);
    const detailsFixture = TestBed.createComponent(DetailsDynamicDialogShellComponent);
    component = fixture.componentInstance;
    apply();
    subject = await TestbedHarnessEnvironment.harnessForFixture(fixture, GridViewShellComponentHarness);
    detailsSubject = await TestbedHarnessEnvironment.harnessForFixture(detailsFixture, DetailsComponentHarness);
    return Promise.resolve(null);
  }

  const apply = ():void => {
    fixture.detectChanges();
  };

  const flushOneHttpRequest = (
    options?: {status: number, statusText: string},
    data: Record<string, unknown> | string = dataRaw
  ): void => {
    httpMock.expectOne((req: HttpRequest<unknown>): boolean => {
      return req.url.includes('api/artworks');
    }).flush(data, options ?? {});
    httpMock.verify();
  };

  const returnArtworks = () => flushOneHttpRequest();

  const returnArtworksNotLoaded = () =>
    jest.spyOn(httpClient, 'get').mockReturnValue(NEVER);

  const returnArtworksLoadError = () =>
    jest.spyOn(httpClient, 'get').mockReturnValue(
      throwError(new Error('Error!'))
    );

  // Alternative way to test an error. Trying to figure out, why
  // no error is shown when using this.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const provokeHttRequestError = ():void => {
    return flushOneHttpRequest({status: 500, statusText: 'Error Provoked!'}, 'error!');
  }

  const returnArtworkDetails = () =>
    jest.spyOn(artworkService, 'getByKey').mockReturnValue(of(artworkForDetails));

  const returnArtworkDetailsNotLoaded = () =>
    jest.spyOn(artworkService, 'getByKey').mockReturnValue(NEVER);

  const returnDetailsError = () =>
    jest.spyOn(artworkService, 'getByKey').mockReturnValue(
      throwError(new Error('getByKey-Error!'))
    );

  beforeEach(() => expect.hasAssertions());
  afterEach(() => jest.resetAllMocks());

  it('should create', async () => {
    await setupComponents();
    await createAndApply();
    expect(component).toBeTruthy();
  });


  it('should show elements in grid view', async () => {

    await setupComponents()
    await createAndApply();
    returnArtworks();
    apply();

    expect(await subject.areImagesShown()).toBe(true);
    expect(await subject.areTitlesShown()).toBe(true);
    expect(await subject.areSubtitlesShown()).toBe(true);
    expect(await subject.isErrorShown()).toBe(false);
    expect(await subject.isLoadingShown()).toBe(false);
  });

  // TODO:
  // Figure out how to filter using the DOM of jest
  // or use E2E (e.g. Cypress) for testing filtering instead
  xit('should filter elements in grid view', async () => {

    await setupComponents()
    await createAndApply();
    returnArtworks();
    apply();

    expect(await subject.areMultipleImagesShown()).toBe(true);
    subject.filterImages();
    // subject.forceRefresh();
    apply();
    expect(await subject.isJustOneImagesShown()).toBe(true);
    subject.unfilterImages();
    // subject.forceRefresh();
    apply();
    expect(await subject.areMultipleImagesShown()).toBe(true);
  });

  it('should show load grid view', async () => {
    await setupComponents();
    returnArtworksNotLoaded();
    await createAndApply();

    expect(await subject.areImagesShown()).toBe(false);
    expect(await subject.areTitlesShown()).toBe(false);
    expect(await subject.areSubtitlesShown()).toBe(false);
    expect(await subject.isErrorShown()).toBe(false);
    expect(await subject.isLoadingShown()).toBe(true);
  });

  it('should show show error in grid view', async () => {
    await setupComponents();
    returnArtworksLoadError();
    await createAndApply();

    // Trying to figure out, why
    // no error is shown when using this.
    // provokeHttRequestError();
    // apply();

    expect(await subject.areImagesShown()).toBe(false);
    expect(await subject.areTitlesShown()).toBe(false);
    expect(await subject.areSubtitlesShown()).toBe(false);
    expect(await subject.isErrorShown()).toBe(true);
  });

  it('should show details', async () => {
    await setupComponents();
    returnArtworkDetails();
    await createAndApply();
    returnArtworks();
    apply();
    await subject.clickGridItem();

    expect(await detailsSubject.isImageShown()).toBe(true);
    expect(await detailsSubject.isTitleShown()).toBe(true);
    expect(await detailsSubject.isArtistTitleShown()).toBe(true);
    expect(await detailsSubject.isDetailsDateDisplayShown()).toBe(true);
    expect(await detailsSubject.isErrorShown()).toBe(false);
    expect(await detailsSubject.isLoadingShown()).toBe(false);
  });

  it('should load details', async () => {
    await setupComponents();
    await createAndApply();
    returnArtworks();
    returnArtworkDetailsNotLoaded();
    apply();
    await subject.clickGridItem();

    expect(await detailsSubject.isImageShown()).toBe(false);
    expect(await detailsSubject.isTitleShown()).toBe(false);
    expect(await detailsSubject.isArtistTitleShown()).toBe(false);
    expect(await detailsSubject.isDetailsDateDisplayShown()).toBe(false);
    expect(await detailsSubject.isErrorShown()).toBe(false);
    expect(await detailsSubject.isLoadingShown()).toBe(true);
  });

  it('should show details error', async () => {
    await setupComponents();
    returnDetailsError();
    await createAndApply();
    returnArtworks();
    apply();
    await subject.clickGridItem();

    expect(await detailsSubject.isImageShown()).toBe(false);
    expect(await detailsSubject.isTitleShown()).toBe(false);
    expect(await detailsSubject.isArtistTitleShown()).toBe(false);
    expect(await detailsSubject.isDetailsDateDisplayShown()).toBe(false);
    expect(await detailsSubject.isLoadingShown()).toBe(false);
    expect(await detailsSubject.isErrorShown()).toBe(true);
  });
});
