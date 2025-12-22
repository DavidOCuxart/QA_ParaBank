import AccountPage from "./AccountPage";
import TransactionPage from "./TransactionPage";
import Loginpage from "./Loginpage";
import BillPage from "./BillPage";
import PageNavigation from "./PageNavigation";
import ContactInfoPage from "./ContactInfoPage";
import LoanPage from "./LoanPage";

class PageFactory{
    static pages = {
        account: AccountPage,
        transaction: TransactionPage,
        login: Loginpage,
        bill: BillPage,
        navigation: PageNavigation,
        contactInfo: ContactInfoPage,
        loan: LoanPage

    };

    static getPage(pageType) {
        return new this.pages[pageType];
    }
}

export default PageFactory;