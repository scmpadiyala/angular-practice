import { Samplemodule1Module } from './samplemodule1.module';

describe('Samplemodule1Module', () => {
  let samplemodule1Module: Samplemodule1Module;

  beforeEach(() => {
    samplemodule1Module = new Samplemodule1Module();
  });

  it('should create an instance', () => {
    expect(samplemodule1Module).toBeTruthy();
  });
});
