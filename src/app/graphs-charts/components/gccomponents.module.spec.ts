import { GCComponentsModule } from './gccomponents.module';

describe('GCComponentsModule', () => {
  let gCComponentsModule: GCComponentsModule;

  beforeEach(() => {
    gCComponentsModule = new GCComponentsModule();
  });

  it('should create an instance', () => {
    expect(gCComponentsModule).toBeTruthy();
  });
});
