const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://creators-release.ae-qa.techtank.ca/',
    env: {
      accessToken: '{"access_token":"sPJ3FnUwjps4Kt0EgvOVTpSr7Y0nJWPGwUDI4KcZtAA","token_type":"Bearer","expires_in":7199,"refresh_token":"qlmo1IRHwcJNjHj_dWzTaQEnogvgM_3La3Q0ynfxulY","scope":"public profile openid name email","created_at":1732375528,"id_token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IkJsRU1xMkZZRG1GMWpJYWJCbTltX1NSOHFORG0zX1lfcW9aRFVsdFp2cHcifQ.eyJpc3MiOiJBY3Rpb25FcmEgU1NPIiwic3ViIjoiMjc2NmI3NGItMmE3MS00YTUwLTg2YjMtYWQ1ZmYzZGExNjlhIiwiYXVkIjoiaWd3QXlVbGRHWVR5X2ZNLWd4Z3ptLS00Qnhla0JqOGQycUlnRFFVRTh5YyIsImV4cCI6MTczMjQ2MTkyOCwiaWF0IjoxNzMyMzc1NTI4LCJuYW1lIjoiU2hheW5lIiwiZW1haWwiOiJzaGF5bmVAdGVjaHRhbmsuY2EiLCJ0aW1lem9uZSI6IkFzaWEvTWFuaWxhIiwiaXNfc3VwZXIiOnRydWV9.Ho3FuuMkRErZFw9eRcz8hKAoFmpwkLPPNvitt0P6kzCNHWiGbzycmB186Z6ypcSw5bEbFz7VrHX1AOx8QFl3DycY0qjLgDWJBCUr7DAH8ooOCC909QbU74c1cn8a9tYageObONkOOIoD9GDA72_FLttZZqRHGr3RGik4KlvdGCvS-At4FonnB8F_tnxm1LYwn5k8nnLayhW5KRSu5K-OnqyJfpxXgmugxYNmWA1-yBmj5Z1wshKJsliHYhwSjQ0vI0k9J0ohmyqF-fQACU49o5heTu5bh0S1WXxGIynPDRotYYMUfpMvs0ovBghbn1fgIGY-SqVpauo7Z2Z5_x6DXNY4uWV8jrdXeSPJdfNGTpc_YS8nJ22dZ-Te1Out_1LMATeeP_tIn1IhxGVet_qC98QYuaxZ7yrcM_SJgGDp6CEDsaWBW9BpxBEbV-d5R4uC-m0x6_FTIxOrSazhOzWZapWp6qEMWFEsN_ZsA4FmluTsEhE6YfJdLUxiRt9dS0c4P797hcKTrRSxtB0wIF8l79wg9fohF7YgBeCrLaAG8gjZlOfig3ZqlHO6lhLsbkXinxk96N4nJsMcsdT7I0q4HweRj9X1V8vTcXTaQrWV7TWfSpT_PB2Zucjj6rhmr3T4vz_iv8i65U1mpT5YUa7Y6sVypIZN33JPE_o8QrEd7s8","expires_at":1732382732647}'
    }
  },
});
