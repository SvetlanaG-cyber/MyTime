import selectors from '../selectors/searchResult.sel';
import Base from '../pages/base.page';
import { assert } from 'chai';

class SearchResult extends Base {

    openPage() {
        browser.url(selectors.URL);
    }

    numberOfResults(min) {
        $(selectors.searchResult).waitForDisplayed();
        let searchLength = $$(selectors.searchResult).length;
        assert.isTrue(searchLength > min);

    }

    openLink() {
        const testLink = $(selectors.sabreCutsLink);
        testLink.click();
    }

}

export default new SearchResult;