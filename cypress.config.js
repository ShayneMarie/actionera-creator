const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://creators-release.ae-qa.techtank.ca/',
    experimentalRunAllSpecs : true,
    env: {
      accessToken: '{"access_token":"sK18ZKVvzFLzXXuKFCZ0f3hHzASj7CKMWxU39301lac","token_type":"Bearer","expires_in":7200,"refresh_token":"bvSDUVJodW6prxc0HCZXkTXoa5EnS8CYYzW09X9bBoo","scope":"public profile openid name email","created_at":1736183167,"id_token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IkJsRU1xMkZZRG1GMWpJYWJCbTltX1NSOHFORG0zX1lfcW9aRFVsdFp2cHcifQ.eyJpc3MiOiJBY3Rpb25FcmEgU1NPIiwic3ViIjoiMjc2NmI3NGItMmE3MS00YTUwLTg2YjMtYWQ1ZmYzZGExNjlhIiwiYXVkIjoiaWd3QXlVbGRHWVR5X2ZNLWd4Z3ptLS00Qnhla0JqOGQycUlnRFFVRTh5YyIsImV4cCI6MTczNjI2OTU2NywiaWF0IjoxNzM2MTgzMTY3LCJuYW1lIjoiU2hheW5lIiwiZW1haWwiOiJzaGF5bmVAdGVjaHRhbmsuY2EiLCJ0aW1lem9uZSI6IkFzaWEvTWFuaWxhIiwiaXNfc3VwZXIiOnRydWV9.U2_SGhfr4kOd_wOKx9niwxBbVgN42bDKuM9hGXe-mZq-ZYz4joJgJM1tNWINTVtJzWWz0G_sraTa5WHS5hNa2CCnV6joYadISMoD8kwe7wYn684If2IH_xE0vvSqrNb2tO9aa2XqV3ieGMnx6LGisl4HwwY29Lg7TIdVHTAR5k-rab8spltEJpwdeJ2oXGKbYTI_POGryAc7u6IsxCfRIjEbrdgqCuCTq24fGVc0CV7zfAsndne1rlpl6crh0Cyp5A7wube9PgtF4SmCcnlz8Tsp00Xotlb1SpbynkTcDoQUFFJBmJ-69HKgIKJnT7Wq9DMzpR1GCCT8qUavhwpjhBeJY4ZBsnEuuGDUA6JIwITVlw7eCB9VXp5TN2pKCQlW408DXw02bP51bnQN7YvvUB_wQLvEc9kw9DPrhT4nVf2oosxOY4VRaWJDge1Igu48kx6Ys2qieU7h8sLgqsr0U544MiUqFC8KlVO58KseQPbO4P1VMGrcO1SG_PIdpt5IHG3poatyjsToJaWJ1wNxejeWKCN2AXczNLkrJrtDAzNk6cLTvcg2xZ_w1aW51UjkOaZwYt6KCN-jkqiQCV7qp6nP9nUHRBJbwmpPNi4SNF0MPGBU9X7MIpGNJjQgMYozdrSYEEhU15tnuRT2iYVVsEry_GWqA-0V3niviohufZY","expires_at":1736190370718}'
    }
  },
});
