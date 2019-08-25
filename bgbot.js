const TeleBot = require('telebot');

const bot = new TeleBot('937992821:AAGTOju_M6VL13h37opDrliFnvEFdIE_qZ8'); //si vas a activar el anti-flood desactiva esta linea
/*
const bot = new TeleBot({
    token: '937992821:AAGTOju_M6VL13h37opDrliFnvEFdIE_qZ8',
    usePlugins: ['floodProtection'],
    pluginConfig: {
        floodProtection: {
            interval: 2,
            
            message: 'PARA LA CONCHA DE TU HERMANA TANTO VAS A SPAMEAR HIJO DE PUTA'
        }
    }
});
*/
var http = require("http");
setInterval(function() {
    http.get("http://cuyobot.herokuapp.com");
}, 1);

// ultimo agregado por gero
bot.start();

bot.on('/datodecolor', msg => {
    var usuarios1 = ['milo', 'salsa', 'gero', 'winnie', 'cass', 'el pelado', 'lucio','carina', 'pablo', 'copito','chris', 'enrique', 'pancha', 'vioh','coti'];
	var usuario1 = usuarios1[Math.floor(Math.random()* usuarios1.length)];
	var usuarios2 = ['milo', 'salsa', 'gero', 'winnie', 'cass', 'el pelado', 'lucio','carina', 'pablo', 'copito','chris', 'enrique', 'pancha', 'vioh','coti'];
	var usuario2 = usuarios2[Math.floor(Math.random()* usuarios2.length)];
	var ques = ['admite que le encanta', 'dijo que le gusta', 'admite con todas sus ansias que le fascina', 'sabe que se le hace irresistible', 'no puede evitar', 'está enamorado/a de'];
	var que = ques[Math.floor(Math.random()* ques.length)];
	var cosas = ['la poronga', 'la pija', 'la vieja', 'el pene erecto', 'la hermana', 'la verga',"el Ugi's pizza",'la pichula','el pingo', 'la morcilla', 'la banana de carne', 'la argolla', 'el ojo de pez','el ojito de pollo'];
	var cosa = cosas[Math.floor(Math.random()* cosas.length)];
    return bot.sendMessage(msg.reply.text(usuario1+' '+que+' '+cosa+ ' de ' + usuario2));
});

bot.on(/gato/, (msg) => {
	var gatos = ['https://imgur.com/CXhCA9V.png','https://i.imgur.com/5cTw7Dw.png','https://i.imgur.com/bvfp8Z7.png',
	'https://i.imgur.com/d91GYIv.png','https://i.imgur.com/uqNVsCa.png','https://i.imgur.com/1zcTHRB.png','https://i.imgur.com/A1As5zp.png',
	'https://i.imgur.com/e2LOiZd.png','https://i.imgur.com/c310UMq.png','https://i.imgur.com/VRYTu5S.png','https://i.imgur.com/OkNwlVs.jpg',
	'https://i.imgur.com/pDfZ28J.jpg','https://i.imgur.com/aAwuA4n.png','https://i.imgur.com/onrNQ2X.png','https://i.imgur.com/ARkO8dm.png',
	'https://i.imgur.com/uRq7J0Q.jpg','https://i.imgur.com/Jj5XdId.png','https://i.imgur.com/lAPusIH.png'
	];
	var gato = gatos[Math.floor(Math.random()* gatos.length)];
    return msg.reply.photo(gato);
});

bot.on(/Gato/, (msg) => {
	var gatos = ['https://imgur.com/CXhCA9V.png','https://i.imgur.com/5cTw7Dw.png','https://i.imgur.com/bvfp8Z7.png',
	'https://i.imgur.com/d91GYIv.png','https://i.imgur.com/uqNVsCa.png','https://i.imgur.com/1zcTHRB.png','https://i.imgur.com/A1As5zp.png',
	'https://i.imgur.com/e2LOiZd.png','https://i.imgur.com/c310UMq.png','https://i.imgur.com/VRYTu5S.png','https://i.imgur.com/OkNwlVs.jpg',
	'https://i.imgur.com/pDfZ28J.jpg','https://i.imgur.com/aAwuA4n.png','https://i.imgur.com/onrNQ2X.png','https://i.imgur.com/ARkO8dm.png',
	'https://i.imgur.com/uRq7J0Q.jpg','https://i.imgur.com/Jj5XdId.png','https://i.imgur.com/lAPusIH.png'
	];
	var gato = gatos[Math.floor(Math.random()* gatos.length)];
    return msg.reply.photo(gato);
});


// bot principal + agregado por simon

bot.on(['/autista'], (msg) => msg.reply.text('@nuevedeoro'));

bot.on(['/jeje'], (msg) => msg.reply.text('jiji'));

bot.on(['/autista2'], (msg) => msg.reply.text('@Pabliken'));

bot.on(['/cassandra'], (msg) => msg.reply.text('se está cagando'), { asReply: true });

bot.on(['/tomillerri'], (msg) => msg.reply.photo('https://i.imgur.com/tUxVs7g.gif'));

bot.on(['/youngkicillof'], (msg) => msg.reply.photo('https://i.imgur.com/V9LUZ4l.jpg'));

bot.on('/hello', (msg) => {
  return bot.sendMessage(msg.reply.text(`lavate el orto ${ msg.from.first_name }!`));
});

bot.on(['/porfavordameamor'], (msg) => msg.reply.text('dame pollo con arroz'));

bot.on('edit', (msg) => {
    return msg.reply.text('qué editás mogolico te pensás que no te vi', { asReply: true });
});

bot.on(['/elbanquerodesimon'], (msg) => msg.reply.text(`TODOS LOS QUE YO TRAIGO A LA BIDET GANG SE VICIAN CON TELEGRAM
  
TODOS LOS QUE YO TRAIGO A LA BIDET GANG SE VICIAN CON TELEGRAM
 
HABLAN 4 VECES Y CREEN QUE PUEDEN SER ADMIN`));

bot.on(['/laleydegeronimo'], (msg) => msg.reply.text(`Duermo en la bidet gvng porque hay mas lag que en ningún otro grupo
  
Bajo por pedidosya y milo me dice cocinate puton

Si mañana yo me hago hacker adios Richard stone`));

bot.on(['/comandos'], (msg) => msg.reply.text(`/autista
  
/autista2

/cassandra

/tomillerri

/youngkicillof

/hello

/porfavordameamor

/jeje

/npfull

/elbanquerodesimon

/laleydegeronimo

/culear

/cyc`));

bot.on(['pinnedMessage'], msg => {
  return bot.sendMessage(msg.reply.text(`el mogolico de ${ msg.from.first_name } pineó un mensaje`));
});

bot.on(/gato /, (msg) => {
    return msg.reply.photo('https://imgur.com/CXhCA9V.png');
});

bot.on(/aliado/, (msg) => {
    return msg.reply.photo('https://imgur.com/RuJMipF.png');
});

bot.on(/kicillof/, (msg) => {
    return msg.reply.photo('https://i.imgur.com/V9LUZ4l.jpg');
});

bot.on(/reputación/, (msg) => {
    return bot.sendMessage(msg.reply.text(`capo cuantas veces te tengo que decir que todavía no está disponible`, { asReply: true }));
});

bot.on(/npfull/, (msg) => {
    return bot.sendMessage(msg.reply.text(`a nadie le importa el tema de mierda que estás escuchando ${ msg.from.first_name }`, { asReply: true }));
});

bot.on([/mas1/], (msg) => {
    return bot.sendMessage(msg.reply.text(`la función rep no está disponible`));
});

bot.on(/gracias bidet bot/, (msg) => {
    return bot.sendMessage(msg.reply.text(`de nada, y no olvides que la higiene anal es lo primero`, { asReply: true }));
});

bot.on(/toy cagando/, (msg) => {
    return bot.sendMessage(msg.reply.text(`no estarás planeando cagar y no limpiarte con bidet, no?`, { asReply: true }));
});

bot.on(['/culear'], (msg) => {
  var usuarios1 = ['milo', 'salsa', 'gero', 'winnie', 'cass', 'el pelado', 'lucio','carina', 'pablo', 'copito','chris', 'enrique', 'pancha', 'vioh','coti'];
	var usuario1 = usuarios1[Math.floor(Math.random()* usuarios1.length)];
	var usuarios2 = ['milo', 'salsa', 'gero', 'winnie', 'cass', 'el pelado', 'lucio','carina', 'pablo', 'copito','chris', 'enrique', 'pancha', 'vioh','coti'];
	var usuario2 = usuarios2[Math.floor(Math.random()* usuarios2.length)];
    return bot.sendMessage(msg.reply.text(usuario2 + ` se culea a ` + usuario1));
});

bot.on(['/cyc'], (msg) => msg.reply.text(`culiadores y culiados: 'milo', 'salsa', 'gero', 'winnie', 'cass', 'pelado', 'lucio','carina', 'pablo', 'copito','chris', 'enrique', 'pancha', 'vioh','coti'`));

//poner + como string
/*bot.on('text', msg => {
    var texto = msg.text;
    if (texto == '+') {
    	bot.sendMessage(msg.reply.text(`TOMA GIL AHORA SE PUEDE PONER +`))
    };
});
*/
//traductor
const translate = require('translate-google')

bot.on(/^\/ingles (.+)$/, (msg, props) => {
    const text = props.match[1];
	translate(text, {to: 'en'}).then(res => {
	    bot.sendMessage(msg.reply.text(`${ res }`,{ asReply: true }))
	}).catch(err => {
	    bot.sendMessage(msg.reply.text(`${ err }`,{ asReply: true }))
	})
});

bot.on(/^\/espanol (.+)$/, (msg, props) => {
    const text = props.match[1];
	translate(text, {to: 'es'}).then(res => {
	    bot.sendMessage(msg.reply.text(`${ res }`,{ asReply: true }))
	}).catch(err => {
	    bot.sendMessage(msg.reply.text(`${ err }`,{ asReply: true }))
	})
});

bot.on(/^\/frances (.+)$/, (msg, props) => {
    const text = props.match[1];
	translate(text, {to: 'fr'}).then(res => {
	    bot.sendMessage(msg.reply.text(`${ res }`,{ asReply: true }))
	}).catch(err => {
	    bot.sendMessage(msg.reply.text(`${ err }`,{ asReply: true }))
	})
});
