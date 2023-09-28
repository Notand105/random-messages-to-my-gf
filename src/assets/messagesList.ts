type message = {
    id : number,
    title: string,
    description : string
}

let messagesData : message[] = []

messagesData = [
    {
     id:1,
     title:'Mirando el piso',
     description : 'Tu actividad favorita en nuestra temporada uno, probablemente miraste más el piso que mi cara esos primeros dias o hasta semanas cuando apenas nos conociamos, me encantaba ponerte nerviosa, y me alegro de poder seguir haciendolo cuando sonrio y me muerdo el labio <3'   
    },
    {
     id:2,
     title:'Galeria',
     description : 'Estoy escribiendo esto en 26-07-2023, este día me dijiste por instagram que debería borrar muchas de nuestras fotos de la galeria, lo chistoso es que utilizaré esas mismas fotos para recordar e inspirarme para redactar todas estos mensajes muajaja'   
    },
    {
     id:3,
     title:'Elefante',
     description : 'Elefante'   
    },
    {
     id:4,
     title:'Cony Simpson',
     description : '¿Te acuerdas del video del homero con los barcos y tu pelo?, bueno cuando hice ese video no estabamos juntos, pero aun así me importabas tanto que me esforcé en editarlo por una cantidad considerable de tiempo para ver si te podia sacar una sonrisa '   
    },
    {
     id:5,
     title:'Perrito perdido',
     description : 'Me acordé de la vez que encontramos al mino y a su compadre el guapo, recordandolo es un momento super lindo, unimos nuestras fuerzas para ayudar a dos animalitos solitos, a pesar de que no estabamos juntos en ese momento lo recuerdo con mucho cariño, porque me dejó ver lo muy linda que eres y lo bueno que es tu corazoncito '   
    },
    {
     id:6,
     title:'JIM',
     description : 'No jim del nombre de persona, jim de como pronuncias HIMYM, me encanta como esa fue la serie unica que pude pegarte, si bien hemos visto muchas series y peliculas juntos me alegro que la que te gustó y siempre me pidas ver sea justo mi favorita, debe ser que estamos hechos el uno para el otro, como el Marshall y la Lily '   
    },
    {
     id:7,
     title:'Despedida',
     description : 'Chao te amo chao te amo cosita hermosa preciosa bonita bien hecha te amo chao te amo chao te amo divina linda cony preciosa la mejor del mundo me encantas lucesita verdecita chao te amo chao te amo...'   
    },
    {
     id:8,
     title:'Haloween Boo',
     description : 'No importa cuanto tiempo pase, siempre me voy a acordar de la vez que salimos disfrazados y a mi me reconocieron bastante y a ti re poquito jaja, la pasé muy bien contigo esa noche, disfruto mucho hacer cosas así contigo'   
    },
    {
     id:9,
     title:'Caballos',
     description : '7 de febrero 2022, subimos el cerrito detras de tu casa en la playa y aunque aún no estabamos juntos quería pasar mucho tiempo pegado a tí, accedí a a tomarnos muchas fotos para poder estar bien cerquita, ah y ademas vimos unos cuantos caballos'   
    },
    {
     id:10,
     title:'Perfil',
     description : 'Algo que jamás me va a dejar de encantar es tu carita de perfil cuando me miras hacia atrás, no se como explicarlo, te ves tan hermosa que el resto del mundo desaparece, tu carita es una obra de arte'   
    },
    {
     id:11,
     title:'Arena',
     description : 'Lo mejor de la playa es que como solo yo llevo mi toalla grande, podemos estar acostaditos los dos bien juntitos'   
    },
    {
     id:12,
     title:'Flor',
     description : 'Siempre que vamos caminando y encuentras una flor bonita la quedas mirando corazón, yo te miro a ti, porque tu carita cuando ves algo que te gusta y te pones contenta es lo más hermoso del mundo'   
    },
    {
     id:13,
     title:'Picnic playero',
     description : 'Debo admitir que cuando estamos en la playa e insisto en bajar, no es porque me encante el mar o el sol, para mi lo más importante es estar solito contigo, y el caminar solitos al super, elegir algo rico y despues comerlo en la arenita frente al mar es el paraiso.'   
    },
    {
     id:14,
     title:'Amor',
     description : 'Te amo, sin dudas y con todo mi corazón, contigo lo tengo todo y no quiero que acabe nunca'   
    },
    {
     id:15,
     title:'Fotografo',
     description : 'No me gusta tomarme muchas fotos, sin embargo, lo que si me gusta mucho es sacarte fotos a ti, me gusta sacar mil y que puedas escoger tus favoritas y me gusta como sabes editar super bien los colores en el lightroom, tienes talento para eso, te quedan muy bonitas'   
    },
    {
     id:16,
     title:'Cine',
     description : 'Como puedes inferir por el titulo, ir al cine contigo es una de mis actividades favoritas, y me pregunto si me gusta tanto porque me gusta ver peliculas contigo o porque me encanta el tiempo que pasamos antes comprando cositas y despues hablando de si nos gustó no, bueno de cualquier manera, no quiero que dejemos de ir nunca'   
    },
    {
     id:17,
     title:'Adicción',
     description : 'Tus piernas, pecho, cintura y carita. Cada parte de tu cuerpo me tiene loquito, eres ideal para mi, me tienes loquito por ti'   
    },
    {
     id:18,
     title:'Masterchef',
     description : 'Como chef de nivel mundial que soy, eres la única con el honor de probar mis preparaciones, jajaja, fuera de bromas me encanta cocinar para ti, pero me encanta más cuando cocinamos juntos, como nuestras ricas sopaipillas o el postre de galletas y tritón que hicimos un día '   
    },   
    {
     id:19,
     title:'Propuesta',
     description : 'Quiero darte un besito (no importa cuando leas esto) '   
    },   
    {
     id:20,
     title:'Un gay volando',
     description : 'Corazoncito, he de admitir que me has contagiado mucho de tu gusto musical, sin ti jamas hubiera tenido canciones del Harry o del Lui en mis me gustas, y ahora los escucho consistentemente, asi que sienteté orgullosa jaja '   
    },
    {
     id:21,
     title:'Bromita',
     description : 'Fideos de los chinos, sushi, hamburguesas, completos, pancitos del antoja2, pizza, yo. Asi es corazón, la única intención de este mensaje era darte hambre, pequeña broma'   
    },
    {
     id:22,
     title:'Changos',
     description : 'Perdí'   
    },
    {
     id:23,
     title:'Pelo',
     description : 'Me encanta tu pelo, siempre consigues que se te vea bonito, aún cuando recien despiertas. Cortito, larguito, ondulado o con chasquilla siempre te ha quedadó bien y siempre te huele muy bien, me encanta tenerlo en mi pechito y perdón por tirartelo todo el tiempo'   
    },
    {
     id:24,
     title:'Madre canina',
     description : 'Recuerda que tu eres la legitima madre del terry corazón, asi que hay que estar siempre juntitos con nuestra familia de perritos y futuros gatitos'   
    },    
    {
     id:25,
     title:'La mejor',
     description : 'Es hermoso cuando decimos lo mismo al mismo tiempo, cuando nos movemos al unisono, que nos riamos por cosas absurdas y que tengamos nuestros propios jueguitos como el pooddle paso, me encanta tu sentido del humor y me gusta poder hacerte reir con el mio, me encanta nuestra relación y me encantas tú, eres simplemente la mejor'   
    },
    {
     id:26,
     title:'Cama',
     description : 'Que hermoso sentimiento que es estar acostadito contigo, en donde sea, sillón o pastito o camita, el calor que desprendes es tan reconfortante que me quedaría para siempre, ademas me encanta cuando entrelazamos las piernitas, me siento muy cerca a ti y eso me encanta '   
    },
    {
     id:27,
     title:'Crema',
     description : 'Postrecito, tortita de galletas, pie de limón, oreos, calzones rotos. Todos esos postrecitos no se comparan con tus dulces y ricos labios amor, me encanta morder tu labio inferior mientras nos besamos, es de lo que más disfruto de nuestros besos '   
    },
    {
     id:28,
     title:'Verde',
     description : 'No sabes lo hermoso que es el verde de tus ojos, y aunque no me gusta cuando lloras, el contraste entre ese verde y tus ojitos rojos hace que tus ojos se vean aún más hermosos que de constumbre '   
    },
    {
     id:29,
     title:'Trolleo hermano tuturutu',
     description : 'Nada que ver aquí mija, pasele al siguiente <3 '   
    },
    {
     id:30,
     title:'Promesa',
     description : 'Pase lo que pase, cualquier situación o cualquier cantidad de tiempo, voy a estar ahí para ti corazón, eres una parte escencial de mi vida y pase lo que pase no te dejaria ir'   
    },
    {
     id: 31,
     title:'Despedidas',
     description: 'Lo que más temo cuando estamos juntos es que llegue el momento en el que tengamos que separarnos, es tan complicado el ver como nos alejamos y tu figura se hace cada vez más pequeña con la distancia, es muy dificil estar sin ti, pero tenemos que ser pacientes, ya llegará un momento en el que no tendremos que separarnos nunca más'
    }
    ,{
        id:32,
        title:'Vuelta',
        description:'Hola amorcito bonito, he vuelto, se que llevaba tiempo sin agregar nuevitos pero he estado ocupadini, te amo mucho y quiero seguir con esta paginita para que siempre tengas algo con que recordarme, porque yo siempre te estoy recordando mi preciosa hermosa'
    },
    {
        id:33,
        title:'Epico',
        description:'Me calentai las weas, te quiero'
    },
    {
        id:34,
        title:'ZZZ',
        description:'Que rico que es dormir contigo agggh, me encanta, todo todo todo, me encanta tu calorcito, me encanta abrazarte, me encantan tus abrazos y me encanta que no importa en que posición nos durmamos, casi siempre despiertas sobre mi pecho'
    }

] 



export {messagesData}