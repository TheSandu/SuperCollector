import EditorViewModel from './Editor/EditorViewModel';

describe('app/Editor/EditorViewModel', () => {
  let viewModel: EditorViewModel;

  beforeEach(() => {
    viewModel = new EditorViewModel();
  });

  test('name should be Slagathor', () => {
    expect(viewModel.name).toBe('Slagathor');
  });
});
