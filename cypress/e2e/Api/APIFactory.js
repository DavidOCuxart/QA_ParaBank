
import AccountAPI from "./Account/accountAPI";
import BillAPI from "./Account/BillAPI";
import LogInAPI from "./Misc/LogInAPI";
import TransactionsAPI from "./Transactions/TransactionsAPI";

class APIFactory{
    static pages = {
        account: AccountAPI,
        login: LogInAPI,
        bill: BillAPI,
        transaction: TransactionsAPI
    };

    static getAPI(pageType) {
        return new this.pages[pageType];
    }
}

export default APIFactory;