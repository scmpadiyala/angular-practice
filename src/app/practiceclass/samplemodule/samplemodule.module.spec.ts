import { SamplemoduleModule } from './samplemodule.module';

describe('SamplemoduleModule', () => {
  let samplemoduleModule: SamplemoduleModule;

  beforeEach(() => {
    samplemoduleModule = new SamplemoduleModule();
  });

  it('should create an instance', () => {
    expect(samplemoduleModule).toBeTruthy();
  });
});
