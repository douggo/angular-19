import { DataBrPipe } from './data-br.pipe';

describe('DataBrPipe', () => {
  it('create an instance', () => {
    const pipe = new DataBrPipe();
    expect(pipe).toBeTruthy();
  });

  it('deve formatar a data 2024-09-03 para 03/09/2024', () => {
    const pipe = new DataBrPipe();
    expect(pipe.transform('2024-09-03')).toEqual('03/09/2024');
  });
});
