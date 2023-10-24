class LoginPage {
    constructor(page) {
      this.page = page;
      this.username_textbox = page.locator('[class="oxd-input oxd-input--active"]');
      this.password_textbox = page.locator('[class="oxd-input oxd-input--active"]');
      this.login_button = page.locator('[type="submit"]');
    }
  
    async gotoLoginPage() {
      await this.page.goto('https://opensource-demo.orangehrmlive.com');
    }
  
    async login(username,password) {
      await this.username_textbox.fill(username);
      await this.password_textbox.fill(password);
      await this.login_button.click();
    }
  }
  
  module.exports = LoginPage;
  