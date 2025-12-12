class PageFactory{
    static pages = {
        account: AccountPage,
        transfer: TransferPage,
        login: Loginpage
    };

    static getPage(pageType) {
        const PageClass = this.pages[pageType];
        if (PageClass) {
            return new PageClass();
        } else {
            throw new Error('Unknown page type');
        }
    }
}

export default PageFactory;