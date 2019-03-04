import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v } from '@dojo/framework/widget-core/d';

import * as css from './styles/Home.m.css';

export default class Home extends WidgetBase {
	protected render() {
    const area = v('textarea', { value: 'this area should have a blue border'});
    const areaContainer = v('div', { classes: 'area-container'}, [area]);
		return v('h1', { classes: [css.root] }, [areaContainer]);
	}
}
