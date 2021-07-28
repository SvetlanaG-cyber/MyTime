import selectors from '../selectors/expressCheckout.sel';
import Base from '../pages/base.page';
import { assert } from 'chai';

class expressCheckout extends Base {

    openPage() {
        browser.url(selectors.URL);
    }


    pageServicesDisplayed() {
        $(selectors.services).waitForDisplayed();
    }

    selectAllServices() {

        $(selectors.services).click();
    }

    select2Staff() {
        $$(selectors.row)[1].click();
    }

    selectService(service) {
        $(`${selectors.choise}${service}${selectors.second}`).click();
    }

    getServiceInfo(service) {
        let price = $$(selectors.serviceBlock).find(item => item.$(selectors.serviceTitle).getText() === service).$(selectors.serviceValue).getText();
        let staff = $(selectors.servicePrice).getText();
        return { staff, price };
    }

    selectTime() {
        $(selectors.timeContainer).waitForDisplayed();
        $(selectors.btnSelectTime).click();
    }

    timeIsAvailable() {
        browser.pause(3000);
        if ($(selectors.btnGoNext).isDisplayed()) {
            $(selectors.btnGoNext).click();
        }
        $(selectors.timesList).waitForDisplayed();
    }

    numbersOfTime(num) {
        let searchTimeLength = $$(selectors.timesList).length;
        console.log(searchTimeLength);
        assert.isTrue(searchTimeLength > num);
    }

    serviceDisplayed(serviceSelected) {
        let serviceDisplayed = $(selectors.serviceText).getText();
        assert.equal(serviceSelected, serviceDisplayed);
    }

    priceDisplayed(priceSelected) {
        let priceDisplayed = $(selectors.priceText).getText();
        assert.equal(priceSelected, priceDisplayed);
    }

    staffDisplayed(staffSelected) {
        let staffDisplayed = $(selectors.staffText).getText();
        assert.equal(staffSelected, staffDisplayed);
    }

}

export default new expressCheckout;