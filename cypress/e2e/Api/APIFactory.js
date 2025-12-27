
import AccountAPI from "./Account/accountAPI";
import BillAPI from "./Account/BillAPI";
import LogInAPI from "./Misc/LogInAPI";
import TransactionsAPI from "./Transactions/TransactionsAPI";
import LoanAPI from "./Loans/LoanAPI";

class APIFactory{
    static apis = {
        account: AccountAPI,
        login: LogInAPI,
        bill: BillAPI,
        transaction: TransactionsAPI,
        loan: LoanAPI
    };

    static getAPI(apiType) {
        return new this.apis[apiType];
    }
}

export default APIFactory;