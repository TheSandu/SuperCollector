// Widgets
import esri = __esri;
import LayerList from '@arcgis/core/widgets/LayerList';
import Legend from '@arcgis/core/widgets/Legend';
import Editor from '../tmp/Editor';

export function initWidgets(view: esri.MapView): esri.MapView {
  const legend = new Legend({ view });
  const layerList = new LayerList({ view });
  view.ui.add( new Editor, 'bottom-left');
  view.ui.add(layerList, 'top-right');
  return view;
}
