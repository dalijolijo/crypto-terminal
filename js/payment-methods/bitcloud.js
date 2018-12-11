var app = app || {};

app.paymentMethods = app.paymentMethods || {};

app.paymentMethods.bitcloud = (function() {

	'use strict';

	return app.paymentMethods.bitcoin.extend({

		enabled: true,

		// The name of the cryptocurrency shown in the UI:
		label: 'Bitcloud',

		// The exchange symbol:
		code: 'BTDX',

		// Used internally to reference itself:
		ref: 'bitcloud',

		// Used to generate a payment request URI:
		uriScheme: 'bitcloud',

		/*
			Network constants.
		*/
		network: {
			messagePrefix: '\u0018Diamond Signed Message:\n',
			wif: '99', 
			p2pkh: '19',
			p2sh: '05',
			//bech32: 'btdx', //not supported
			/*
				NOTE:
				Some wallets use the same constants as Bitcoin-Mainnet, which is why they are included here.
			*/
			xpub: {
				'p2pkh': [
					'0488b21e',// xpub
				],
				'p2wpkh-p2sh': [
					'049d7cb2',// ypub
				],
				'p2wsh-p2sh': [
					'0295b43f',// Ypub
				],
				'p2wpkh': [
					'04b24746',// zpub
				],
				'p2wsh': [
					'02aa7ed3',// Zpub
				],
			},
			xprv: {
				'p2pkh': [
					'0488ade4',// xprv
				],
				'p2wpkh-p2sh': [
					'049d7878',// yprv
				],
				'p2wsh-p2sh': [
					'0295b005',// Yprv
				],
				'p2wpkh': [
					'04b2430c',// zprv
				],
				'p2wsh': [
					'02aa7a99',// Zprv
				],
			},
		},

		settings: [
			{
				name: 'extendedPublicKey',
				label: function() {
					return app.i18n.t('bitcloud.settings.extendedPublicKey.label');
				},
				description: function() {
					return app.i18n.t('bitcloud.settings.extendedPublicKey.description');
				},
				type: 'text',
				required: true,
				validateAsync: function(value, data, cb) {
					this.decodeExtendedPublicKey(value, cb);
				},
				actions: [
					{
						name: 'camera',
						fn: function(value, cb) {
							app.device.scanQRCodeWithCamera(cb);
						}
					}
				]
			},
			{
				name: 'addressIndex',
				label: function() {
					return app.i18n.t('bitcloud.settings.addressIndex.label');
				},
				description: function() {
					return app.i18n.t('bitcloud.settings.addressIndex.description');
				},
				type: 'number',
				required: true,
				default: '0',
				validate: function(value, data) {
					value = parseInt(value);
					if (_.isNaN(value)) {
						throw new Error(app.i18n.t('bitcloud.settings.addressIndex.integer-required'));
					}
					if (value < 0) {
						throw new Error(app.i18n.t('bitcloud.settings.addressIndex.greater-than-or-equal-zero'));
					}
				}
			},
			{
				name: 'derivationScheme',
				type: 'text',
				visible: false,
				default: 'm/0/n',
			}
		],
	});
})();
