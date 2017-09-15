import { CEnterExitModule } from './center-exit.module';

describe('CEnterExitModule', () => {
  let cEnterExitModule: CEnterExitModule;

  beforeEach(() => {
    cEnterExitModule = new CEnterExitModule();
  });

  it('should create an instance', () => {
    expect(cEnterExitModule).toBeTruthy();
  });
});
