import selectors from '../selectors/scenarioFirst.sel';
import expected from '../expected/scenario.exp';
import Base from './base.page';
import { assert } from 'chai';


class Scenario extends Base {

    openPage() {
        browser.url(selectors.URL);
    }

    searchBusinessLocation(business, location) {
        $(selectors.businessSearchField).setValue(business);
        $(selectors.locationSearchField).setValue(location);
        $(selectors.btnSearch).click();
    }

}

export default new Scenario;