var app = app || {};

app.paymentMethods = app.paymentMethods || {};

app.paymentMethods.bitcoreTestnet = (function() {

	'use strict';

	return app.paymentMethods.bitcore.extend({

		enabled: function() {
			return app.isDeveloperMode();
		},

		// The name of the cryptocurrency shown in the UI:
		label: 'Bitcore (testnet)',

		// The exchange symbol:
		code: 'BTX',

		// Used internally to reference itself:
		ref: 'bitcoreTestnet',

		/*
			Network constants.
		*/
		network: {
			messagePrefix: '\x18BitCore Signed Message:\n',
			wif: 'ef',
			p2pkh: '6f',
			p2sh: 'c4',
			//bech32: 'tb', //not supported
			/*
				NOTE:
				Some wallets use the same constants as Bitcore-Mainnet, which is why they are included here.
			*/
			xpub: {
				'p2pkh': [
					'043587cf',// xpub
				],
				'p2wpkh-p2sh': [
					'044a5262',// ypub
				],
				'p2wpkh': [
					'045f1cf6',// zpub
				],
				'p2wsh': [
					'02575483',// Zpub
				],
			},
			xprv: {
				'p2pkh': [
					'04358394',// xprv
				],
				'p2wpkh-p2sh': [
					'044a4e28',// yprv
				],
				'p2wpkh': [
					'045f18bc',// zprv
				],
				'p2wsh': [
					'02575048',// Zprv
				],
			},
		},
	});

})();
