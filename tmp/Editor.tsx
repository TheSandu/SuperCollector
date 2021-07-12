import { property, subclass } from '@arcgis/core/core/accessorSupport/decorators';

import { tsx } from '@arcgis/core/widgets/support/widget';

import Widget from '@arcgis/core/widgets/Widget';

import EditorViewModel from './Editor/EditorViewModel';

export interface EditorProperties extends esri.WidgetProperties {
  /**
   * Your name.
   */
  name?: string;
  /**
   * Map or scene view.
   * https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html
   * https://developers.arcgis.com/javascript/latest/api-reference/esri-views-SceneView.html
   * 
   */
  view?: esri.MapView | esri.SceneView;
}

const CSS = {
  base: 'esri-widget editor-base',
};

@subclass('app.widgets.Editor')
export default class Editor extends Widget {
  @property({
    aliasOf: 'viewModel.view',
  })
  view!: esri.MapView | esri.SceneView;

  @property({
    aliasOf: 'viewModel.name',
  })
  name = '';

  @property({
    type: EditorViewModel,
  })
  viewModel = new EditorViewModel();

  constructor(properties?: EditorProperties) {
    super(properties);
  }

  render(): tsx.JSX.Element {
    const { name } = this;
    return (
      <div class={CSS.base}>
        <p>Welcome {name}!</p>
      </div>
    );
  }
}
