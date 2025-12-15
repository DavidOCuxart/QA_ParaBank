
import AccountAPI from "./Account/accountAPI";
import LogInAPI from "./Account/LogInAPI";

class APIFactory{
    static pages = {
        account: AccountAPI,
        login: LogInAPI,
    };

    static getPage(pageType) {
        return new this.pages[pageType];
    }
}

export default APIFactory;