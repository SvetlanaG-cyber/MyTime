import first from '../pages/scenarioFirst.page';
import searchResult from '../pages/searchResult.page';
import expressCheckout from '../pages/expressCheckout.page';

const serviceInfo = {
    service: "Men's Haircut",
}

describe('Scenario', () => {

    before(() => {
        first.openPage();
    })

    it('Search-business-location', function () {
        first.searchBusinessLocation("haircut", "San Francisco, CA");
        searchResult.numberOfResults(3);
    })

    it('open-busines-Test - Sabre Cuts', function () {
        searchResult.openLink();
    })

    it('Booking', () => {
        expressCheckout.pageServicesDisplayed();
        expressCheckout.selectAllServices();
        expressCheckout.select2Staff();
        Object.assign(serviceInfo, expressCheckout.getServiceInfo(serviceInfo.service));
        console.log(serviceInfo);
        expressCheckout.selectService(serviceInfo.service);
        expressCheckout.selectTime();
        expressCheckout.timeIsAvailable();
        expressCheckout.numbersOfTime(2);
        expressCheckout.serviceDisplayed(serviceInfo.service);
        expressCheckout.priceDisplayed(serviceInfo.price);
        expressCheckout.staffDisplayed(serviceInfo.staff);
    })
    
});
