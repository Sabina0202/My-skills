const conf = {
    
    specs: ['./specs/**/*first.spec.js'],
    framework: 'mocha',
    mochaOpts: {
    timeout: 20*1000
    },
    onPrepare () {
        browser.waitForAngularEnabled(false)
    },
    SELENIUM_PROMISE_MANAGER: false
};

exports.config = conf;
