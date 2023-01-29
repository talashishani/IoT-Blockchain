App = {
  web3Provider: null,
  contracts: {},
  account: '0x0',

  init: function () {
    return App.initWeb3();
  },

  initWeb3: async function () {
    if (window.ethereum) { 
      App.web3Provider = window.ethereum;

      try {
        const accounts = window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccounts(accounts);

      } catch (error) { 
        console.error("User denied account access")
      }
    } else if (window.web3) {  
      App.web3Provider = window.web3.currentProvider;
    } else {  
      App.web3Provider = new Web3.providers.HttpProvider('HTTP://localhost:8545');
    }
    web3 = new Web3(App.web3Provider);
    return App.initContract();
  },

  initContract: function () {
    $.getJSON("TalaShishani.json", function (TalaShishani) {
      // Instantiate a new truffle contract from the artifact
      App.contracts.TalaShishani = TruffleContract(TalaShishani);
      // Connect provider to interact with contract
      App.contracts.TalaShishani.setProvider(App.web3Provider);

      return App.render();
    });
  },

  render: function () {
    var TalaShishaniInstance;
    var loader = $("#loader");
    var content = $("#content");
    loader.show();
    content.hide();

    // Load account data
    web3.eth.getCoinbase(function (err, account) {
      if (err === null) {
        App.account = account;
        $("#accountAddress").html("Your Account: " + account);
      }
    });
    // Load contract data
    App.contracts.TalaShishani.deployed().then(function (instance) {
      TalaShishaniInstance = instance;
      return TalaShishaniInstance.SensorKitsCount();
    }).then(function (SensorKitsCount) {

      var SensorKitsResults = $("#SensorKitsResults");
      SensorKitsResults.empty();

      var TalaShishaniSelect = $('#TalaShishaniSelect');
      TalaShishaniSelect.empty();

      for (var i = 1; i <= SensorKitsCount; i++) {
        TalaShishaniInstance.SensorKits(i).then(function (SensorKit) {
          var id = SensorKit[0];
          var hum = SensorKit[1];
          var temp = SensorKit[2];
          var touch = SensorKit[3];
          var fire = SensorKit[4];
          var pulse = SensorKit[5];
          var sound = SensorKit[6];

          // Render SensorKit Result
          var SensorKitTemplate = "<tr><th>" + id + "</th><td>" + hum + "</td><td>" + temp + "</td><td>" + touch + "</td><td>" + fire + "</td><td>" + pulse + "</td><td>" + sound + "</td></tr>"
          SensorKitsResults.append(SensorKitTemplate);
          // Render SensorKit ballot option
          var SensorKitOption = "<option value='" + id + "'>" + hum + "</option>"
          SeniorProjectsSelect.append(SensorKitOption);

        });
      }
      loader.hide();
      content.show();
    }).catch(function (error) {
      console.warn(error);
    });

  },
  castsensor: function () {
    var SensorKitId = $('#TalaShishaniSelect').val();
    App.contracts.TalaShishani.deployed().then(function (instance) {
      return instance.sensor(SensorKitId, { from: App.account });
    }).then(function (result) {
      // Wait for sensors to update
      $("#content").show();
      $("#loader").show();
    }).catch(function (err) {
      console.error(err);
    });
  }
};

$(function () {
  $(window).load(function () {
    App.init();
  });
});
