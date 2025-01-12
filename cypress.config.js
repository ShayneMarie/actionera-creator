const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://creators-release.ae-qa.techtank.ca/',
    experimentalRunAllSpecs : true,
    env: {
      accessToken: '{"access_token":"HY0T1EzjffyHlEJQdVqbz511ligDiXooh5yOaAzhUIQ","token_type":"Bearer","expires_in":7200,"refresh_token":"RSm_CuTBrQfFqjx5s6LZx59yXa0QDMU_9CaZm_okAwU","scope":"public profile openid name email","created_at":1736696617,"id_token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IkJsRU1xMkZZRG1GMWpJYWJCbTltX1NSOHFORG0zX1lfcW9aRFVsdFp2cHcifQ.eyJpc3MiOiJBY3Rpb25FcmEgU1NPIiwic3ViIjoiNjIwYzVkZTctZWQxNi00MTM0LWFjZWItN2M0MzdmODA2YTU1IiwiYXVkIjoiaWd3QXlVbGRHWVR5X2ZNLWd4Z3ptLS00Qnhla0JqOGQycUlnRFFVRTh5YyIsImV4cCI6MTczNjc4MzAxNywiaWF0IjoxNzM2Njk2NjE3LCJuYW1lIjoiU2hheW5lIFRlc3QiLCJlbWFpbCI6InNoYXluZSt0ZXN0Y2xpZW50QHRlY2h0YW5rLmNhIiwidGltZXpvbmUiOiJBc2lhL1NpbmdhcG9yZSIsImlzX3N1cGVyIjp0cnVlfQ.wf-SJ2ALGyFdnJLqQNviziiRyBQ-jkPK4abyQIk5WEBA0LbMt7xNMO9I0Y_nUY-N8FkxtRcCepxJNrNWjpZ746jR1lpPTNSDhhZFPU1iT3ImdhwQqy-TyFPeWbnuCwsAPl2ljspffZMqj5za3xulEqc6AnO1OZ10EE_6etlO-3IgJnICe0LQYoNwx5sjvOCo4O5evn4JAWS5w-plKm_kNaBeBsucy5Hhtvl81T2Qfcjs4wbwV9UJmAY_yc4qoAFz2pTPFa57jXSWtri0fPswXcCK7d_VZOfzn7tm5eCMyfs7vez4C07JAXGodGXV8OtwcCYIy88Y7cDLTXHeICjLhBmZ7W2qd09cAliGYwaWEWWs5E_AabXowL_TGP__jtZrHcQGPdi9RvIT5CLmSdJCJp3zDRFgPie6FtHYEJXeImDG3s4W3pHlRYbqrvIh-M-rJvHv8wx5X78bmPAtz1wf2LIVOyy3K8u6l_v-uIJzp3QMIoZq6tdFaehrxmkytCZxmJpWvrfpjpRftGCPFBe3tZfMita9ta96JGOjlMaepeAUji1N2PRe2fU4zy9NBvZdzTWypSgu2zLaBUiP4lQpgZ2sJhIpD0My6hkwjmXHidG3S_8kyg19NQu_GqrcAIMWM6HrlOQFPv4kk-HuI6dWFkbkLndhDjbIG02fREmB16k","expires_at":1736703821383}',
      accessTokenCreator: '{"access_token":"XRWhz7ma1sv8TTLu8RiD6-UAeIFgTHV4TBvTNkvUXzQ","token_type":"Bearer","expires_in":7200,"refresh_token":"rXsxWse5gXXlIhu0Zwk579djpnP1lsWzjQBegfugFzs","scope":"public profile openid name email","created_at":1736675997,"id_token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IkJsRU1xMkZZRG1GMWpJYWJCbTltX1NSOHFORG0zX1lfcW9aRFVsdFp2cHcifQ.eyJpc3MiOiJBY3Rpb25FcmEgU1NPIiwic3ViIjoiYzY5NzM2MDctMDhiNi00NDkyLWE1ZjQtOTQzMmYzY2E1NTExIiwiYXVkIjoiaWd3QXlVbGRHWVR5X2ZNLWd4Z3ptLS00Qnhla0JqOGQycUlnRFFVRTh5YyIsImV4cCI6MTczNjc2MjM5NywiaWF0IjoxNzM2Njc1OTk3LCJuYW1lIjoiU2hheW5lLUVudGVycHJpc2UiLCJlbWFpbCI6InNoYXluZStlbnRlcnByaXNlQHRlY2h0YW5rLmNhIiwidGltZXpvbmUiOiJBc2lhL1NpbmdhcG9yZSIsImlzX3N1cGVyIjpmYWxzZX0.QAC3Ry87jJPymuAAQstx405K3GD_NU0_Yz8AOIo55g0DEtyb23j2AIAhdTVOE9GvHyw55CkUx_l3193tFnTKm7V6f2pVr4tKxaoUIpcoQhYCVme-sEPP4GAEj-D8k5jwkMrQm5p6C8cPLTgV2NKz2evjDWl7DKMr9x53TFov4BeT6Inp6ehVkdXqGbGks6krQdJ1GMClFbSfa7do-9IE6576wel7QxngJeWszogDgpCg9x8-BYqzJsGsNTzF_EYrAXO86VjGnwPGZgJBjILp-xDtu0m2de-3FqpVnqdUiAiXWyp5fStM9ZvgBwLywc7FCQodAiYF8blyBEGhgrKyY0RdDDkqQ48o1Rgm6PQjSU2o-9bkS0k_2npb3ELYYeDT1YVMjObzEqlH22_muIcYc3o7IiH2RKDPW7TZO-LgeCedjiqcGuobHxZAQ6dinWSDUSOoVy2m6ZnfHb11MOL-f527Me524ps7ySl3IG-gFYIdiKP-cyXceBzZi1A-hEf0sI-jUqQbU5sMAdNFFZjmBxa1IijBHzQSt9fRaxzyvX7BhOZBfeKo-nFQZ8ZA3p_mODPgGEiivMXL4kYDDcYv7MfemwaD0yUYLCfOKUfpAJh8gb0rmZL0fyyleLEoAWxMq8BWbw6wY8IbpkVNO7w0ZGNjVhHRV1-1aH1x8RLjYZA","expires_at":1736683202425}'
    }
  },
});
