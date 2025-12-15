import AccountPage from "./AccountPage";
import TransactionPage from "./TransactionPage";
import Loginpage from "./Loginpage";
import BillPage from "./BillPage";
import PageNavigation from "./PageNavigation";
import ContactInfoPage from "./ContactInfoPage";

class PageFactory{
    static pages = {
        account: AccountPage,
        transfer: TransactionPage,
        login: Loginpage,
        bill: BillPage,
        navigation: PageNavigation,
        contactInfo: ContactInfoPage

    };

    static getPage(pageType) {
        return new this.pages[pageType];
    }
}

export default PageFactory;