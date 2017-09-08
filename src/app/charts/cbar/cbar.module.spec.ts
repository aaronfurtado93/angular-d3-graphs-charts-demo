import { CBarModule } from './cbar.module';

describe('CBarModule', () => {
  let cBarModule: CBarModule;

  beforeEach(() => {
    cBarModule = new CBarModule();
  });

  it('should create an instance', () => {
    expect(cBarModule).toBeTruthy();
  });
});
