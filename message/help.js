const fs = require("fs");

let setting = JSON.parse(fs.readFileSync('./config.json'))
const { getLimit, getBalance, cekGLimit } = require("../lib/limit")

const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

function toCommas(x) {
    x = x.toString()
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
    x = x.replace(pattern, "$1,$2");
    return x;
}

exports.allMenu = (prefix) => {
    return`*SIMPLE MENU*
 • .donasi
 • .owner
 • .listbahasa

*CONVERTER/TOOLS*
 • .sticker
 • .stickerwm
 • .smeme
 • .toimg
 • .tovideo
 • .tomp3
 • .ttp
 • .attp
 • .emojimix
 • .nulis

*STORE MENU*
 • .list
 • .addlist
 • .dellist
 • .update
 • .jeda
 • .tambah
 • .kurang
 • .kali
 • .bagi

*PROSES/DONE*
 • proses < reply chat >
 • done < reply chat >
 • .setproses
 • .changeproses
 • .delsetproses
 • .setdone
 • .changedone
 • .delsetdone

*DOWNLOADS MENU*
 • .play
 • .ytmp3
 • .ytmp4
 • .getmusic
 • .getvideo
 • .youtube
 • .instagram
 • .igstory
 • .tiktok
 • .facebook
 • .mediafire
 • .telesticker
 • .pinterestdl

*GROUP MENU*
 • .afk
 • .welcome
 • .left
 • .setwelcome
 • .changewelcome
 • .delsetwelcome
 • .setleft
 • .changeleft
 • .delsetleft
 • .linkgc
 • .setppgc
 • .setnamegc
 • .setdesc
 • .antilink
 • .antiwame
 • .open
 • .close
 • .setopen
 • .changeopen
 • .delsetopen
 • .setclose
 • .changeclose
 • .delsetclose
 • .add
 • .kick
 • .promote
 • .demote
 • .revoke
 • .hidetag
 • .checksewa

*GAME MENU*
 • .tictactoe
 • .delttt
 • .tebakgambar
 • .kuis
 • .tebaklagu
 • .family100
 • .nyerah
 • .casino
 • .delcasino
 • .akinator
 • .cancelakinator

*KERANG MENU*
 • .apakah
 • .bisakah
 • .kapankah
 • .bagaimanakah
 • .rate
 • .gantengcek
 • .cantikcek
 • .sangecek
 • .gaycek
 • .lesbicek
 • .cekbapak

*SEARCH MENU*
 • .nickff
 • .nickml
 • .nickpubg
 • .nickdomino
 • .lirik
 • .pinterest
 • .ytsearch
 • .searchbyimage

*RANDOM MENU*
 • .quotes
 • .cecan
 • .cogan
 • .waifu
 • .meme
 • .darkjoke
 • .couple

*TEXTPROME*
 • .blackpink
 • .neon
 • .greenneon
 • .advanceglow
 • .futureneon
 • .sandwriting
 • .sandsummer
 • .sandengraved
 • .metaldark
 • .neonlight
 • .holographic
 • .text1917
 • .minion
 • .deluxesilver
 • .newyearcard
 • .bloodfrosted
 • .halloween
 • .jokerlogo
 • .fireworksparkle
 • .natureleaves
 • .bokeh
 • .toxic
 • .strawberry
 • .box3d
 • .roadwarning
 • .breakwall
 • .icecold
 • .luxury
 • .cloud
 • .summersand
 • .horrorblood
 • .thunder
 • .pornhub
 • .glitch
 • .avenger
 • .space
 • .ninjalogo
 • .marvelstudio
 • .lionlogo
 • .wolflogo
 • .steel3d
 • .wallgravity

*PHOTOOXY*
 • .shadow
 • .cup
 • .cup1
 • .romance
 • .smoke
 • .burnpaper
 • .lovemessage
 • .undergrass
 • .love
 • .coffe
 • .woodheart
 • .woodenboard
 • .summer3d
 • .wolfmetal
 • .nature3d
 • .underwater
 • .golderrose
 • .summernature
 • .letterleaves
 • .glowingneon
 • .fallleaves
 • .flamming
 • .harrypotter
 • .carvedwood
 • .arcade8bit
 • .battlefield4
 • .pubg

*OWNERS MENU*
 • .join
 • .left
 • .self
 • .public
 • .setprefix
 • .setppbot
 • .broadcast
 • .bcsewa
 • .addsewa
 • .delsewa`
}

