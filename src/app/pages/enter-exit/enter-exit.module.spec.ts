import { EnterExitModule } from './enter-exit.module';

describe('EnterExitModule', () => {
  let enterExitModule: EnterExitModule;

  beforeEach(() => {
    enterExitModule = new EnterExitModule();
  });

  it('should create an instance', () => {
    expect(enterExitModule).toBeTruthy();
  });
});
