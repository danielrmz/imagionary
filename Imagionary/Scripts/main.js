$(function () {

    var musica = ['Me dediqué a perderte', 'Se le apagó la luz', 'Sin miedo a nada',
        'No sé por qué te quiero',
        'Todo Cambió', 'Y tu te vas', 'Azul', 'Quién me ha robado el Mes de Abril?',
        'Otro día más sin verte', 'La playa', 'Se fue', 'Ojos de Gata', 'No se tú',
        'Noviembre sin Ti', 'Te Extraño, te olvido y te amo', 'Mientes tan Bien', 'Gritar',
        'No me compares', 'Aunque no te pueda ver', 'Chiquitita', 'Bebé Bonita', 'Gracias a la vida',
        'Besame mucho', 'Toda una vina', 'Yo no me doy por vencido', 'Bendita tu luz',
        'El día que me quieras', 'Somos Novios', 'La gota fría', 'Eres tu',
        'Aquellos Ojos Verdes', 'Por el Amor de una Mujer', 'Querida',
        '¿Quiéres ser mi amante?', 'Matador', 'Cuando pase el temblor',
        'Como han pasado los años', 'Adiós Muchachos', 'Hijo de la Luna',
        'Historia de un Taxi', 'Entre dos aguas', 'Historia de una Amor',
        'Entre el mar y una estrella', 'Callados', 'Lágrimas Negras',
        'La distancia', 'Solamente una vez', 'Antes que ver el sol',
        'Tu amor o tu desprecio', 'Cuando calienta el sol', 'Heroe',
        'Mujer contra mujer', 'Solo le pido a Dios', 'Y nos dieron las 10',
        'A puro dolor', 'Que nadie sepa mi sufrir', 'Un toque de locura',
        'Flaca', 'En un rincón del alma', 'Balada para un loco', 'Esta tarde vi llover',
        'La copa rota', 'Echame a mi la culpa', 'Piensa en mi', 'Fina Estampa', 'Sábado en la Ciudad',
        'Colgado en tus manos', '19 días y 500 noches', 'Ojalá que llueva café', 'Alejate de mí',
        'Muñecos de Papel', 'La papa sin Catsup', 'Dejate Caer', 'No puedo estar sin ti',
        'Más de lo que te imaginas', 'La mujer que soñe Jamás', 'Amor a la Mexicana', 'Media Naranja',
        'Mal Bicho', 'Pisando Fuerte', 'Chiquilla Triste', 'Vivir sin Aire', 'Solo se vive una vez',
        'Estoy aquí', 'Como hemos cambiado', 'La Calle de las Sirenas', 'Provocame',
        'Las piedras rodantes', 'Dormir Soñando', 'A Fuego Lento', 'Suavemente', 'Se fue',
        'Nada Personal', 'Dos mujeres un camino', 'Pachuco', 'Amiga mía', 'Muriendo lento',
        'Azucar Amargo', 'El esqueleto', 'Déjame Llorar', 'Pelo suelto', 'Cosas de la Vida',
        'Mi historia entre tus dedos', 'La Macarena', 'Burbujas de Amor', 'Eternamente Bella',
        'Experiencia Religiosa', 'Amor Prohibido', 'La vida es un Carnaval', 'Vuelva vuela',
        'Mujeres', 'No podrás', 'Ingrata', 'Si tu no vuelves', 'De música ligera',
        'Tu y yo somos uno mismo', 'Cruz de navajas', 'Amante bandido', 'Persiana Americana',
        'La negra tomasa', 'Subete a mi moto', 'Devuelveme a mi chica', 'Bazar', 'Triste cancion',
        'Como te va mi amor', 'La muralla verde', 'Yo no te pido la lna', 'La puerta de Alcalá',
        'Maldita primavera', 'Cuando seas grande', 'El me mintió', 'Para amarnos más', 'Una noche de copas',
        'Viviendo de noche', 'No controles', 'Ay que pesado', 'Claridad', 'Maracas', 'Cuentame',
        'Bailando sin salir de casa', 'A cara o cruz', 'Como una mariposa', 'Fotografía', 'Quitate la mascara',
        'Sueños compartidos', 'La plaga', 'Tengo un mes con el mismo pantalón', 'Me duele la cara de ser tan guapo',
        'Las mil y una noches', 'Soy un desastre', 'Tu pirata soy yo', 'Aquí', 'Gasolina', 'Suerte',
        'Amor, amor, amor', 'Andar conmigo', 'Todos me miran', 'Loca', 'Secreto de Amor', 'No me digas que no',
        'Amargo adiós', 'Desde que llegaste', 'Kilometros', 'Nada fue un error', 'El sol no regresa', 'Alucinado',
        'Miedo', 'La camisa negra', 'Baila mi corazón', 'Tu no eres para mí', 'Borracho', 'Yo no soy esa mujer',
        'Odio amarte', 'Yo no fui', 'La mano de Dios', 'Llamado de Emergencia', 'En el 2000', 'Me gustas tú',
        'Mi primer millón', 'Rata de dos patas',
        'Quitame ese hombre', 'Tardes negras', 'Mundo de caramelo', 'Antes muerta que sencilla', 'El problema'];

    var serie = ['30 Rock', 'American Horror Story', 'Bones', 'Mentes Criminales', 'Esposas Desesperadas',
            'Friends', 'Glee', 'Gossip Girl', 'Grey´s Anatomy', 'How I Met your Mother', 'Lost', 'Modern Family',
            'New Girl', 'Once Upon a Time', 'Private Practice', 'SmallVille', 'Supernatural',
            'The Big Band Theory', 'The Mentalist', 'The Office', 'The Walking Dead', 'True Blood',
            'Two and a Half Men', 'The Vampire Diaries', 'Up All Night', 'Lo que callamos las mujeres',
            'C. S. I. Las Vegas', 'Venga la Alegría', 'Una familia de diez', 'Arquitectos de la Economía Mundial',
            'Al caer la noche', 'La teniente', 'A corazón abierto', 'La Rosa de Guadalupe', 'Lo que la gente cuenta',
            'La familia P. Luche', 'La niñera', 'Morir en Martes', 'Mujer casos de la vida real', 'Papá Soltero',
            'Los años maravillosos', 'A dos metros bajo tierra', 'Los soprano', 'Salvados por la campana',
            'Superagente 86', 'Doogie Howser', 'Treintaytantos', 'Star Trek. Viaje a las estrellas',
            'Los problemas crecen', 'Matrimonio con hijos', 'Padre de Familia', 'Doctor Who', 'House',
            'Los Simpsons', 'Futurama', 'Infelices para siempre', 'Hermanos de Sangre', 'Buffy, la Cazavampiros',
            'Cadenas de Amor', 'Cartas de amor', 'Donde comienza la tristeza', 'Dos caras tiene el destino',
            'El hombre de oro', 'Vida robada', 'Un hijo cayó del ciel', 'Vivimos en una estrella', 'La intrusa',
            'Cárcel de mujeres', 'Un grito en la oscuridad', 'Rubí', 'La sonrisa del diablo',
            'El amor tiene cara de mujer', 'No todo lo que brilla es oro', 'Un original y veinte copias',
            'El amor llego más tarde', 'Los ricos también lloran', 'Cuna de lobos', 'Cicatrices del alma',
            'Carrusel de las Américas', 'Días sin luna', 'Cenizas y diamantes', 'La picara soñadora',
            'El abuelo y yo', 'Marimar', 'Agujetas de color de rosa', 'El vuelo del águila', 'Luz Clarita',
            'Mi pequeña traviesa', 'La usurpadora', 'Soñadoras', 'El diario de Daniela',
            'El niño que vino del mar', 'Alma rebelde', 'Amigos x siempre', 'Carita de ángel',
            'Primer amor a 1000 por hora', 'Amigas y rivales', 'Clase 406', 'La fea más bella',
            'Destilando amor', 'Hasta que el dinero nos separe', 'Siempre en Domingo',
            'La rueda de la Fortuna', 'Otro rollo', 'Bailando por un Sueño', 'Cantando por un Sueño',
            'Vas o no vas', 'Laura', 'La Voz... México', '24 horas', 'Tercer Grado', 'Los Polivoces',
            'El Chapulín Colorado', 'En familia con Chabelo', 'Chiquilladas', 'El Coyote y el Correcaminos',
            'Los supersonicos', 'ALF', 'Pokemon', 'Ranma 1/2', 'Bob Esponga', 'Los Padrinos Mágicos',
            'Los ángeles de Charlie', 'Misterios sin resolver', 'El principe del Rap', 'La ley y el Orden',
            'Sabrina, la bruja adolescente', 'Charmed (Hechiceras)', 'Puro Loco', 'A quien corresponda',
            'Candy Candy', 'Se vale soñar', 'Tuneame la nave', 'Ventaneando', 'Insomnia', 'Cosas de la vida',
            'Nada personal', 'Al norte del corazón', 'Mirada de mujer', 'La calle de las novias',
            'El amor no es como lo pintan', 'Cuando seas mía', 'Agua y aceite', 'Súbete a mi moto',
            'La hija del jardinero', 'La otra mitad del sol', 'Amor en custodia', 'Se busca un hombre',
            'Tengo todo excepto a ti', 'Pasión Morena', 'Quiéreme tonto', 'Los Rey', 'La vida es una canción',
            'A cada quién su santo', 'El rival más debil', 'Te regalo mi canción', 'Doble cara',
            'Password: la palabra secreta.', 'Con sello de mujer', 'En medio del Espectáculo', 'Tempranito',
            'El ojo del Huracán', 'Poker de Reinas', 'Caiga quién caiga', 'Famosos en Jaque', 'Historias engarzadas',
            'La Historia detrás del Mito', 'Va que va', 'Los 25+', 'Soy tu doble', 'La isla, el reality', 'Miénteme',
            'Caritele', 'Fenomenoide', 'Disney Club', 'Sailor Moon'];

    var pelicula = [
             'Parque Jurásico', 'La Bella y la Bestia', 'Star Trek', 'Un tranvía llamado deseo',
                'Harry Potter', 'El exorcista', 'Rocky', 'Una mente maravillosa',
                'Quisiera ser millonario', 'El graduado', 'Amores perros', 'Doce Monos',
                'Cisne Negro', 'Terminator', 'Ben-Hur', 'Crimen Perfecto', 'Buscando a Nemo',
                'El discurso del Rey', 'Lo que el viento se llevo', 'Dos hombres y un destino',
                'Eso', 'El sexto sentido', 'Toy Story', 'El hombre elefante', 'El laberinto del fauno',
                'Corazon Valiente', 'Réquiem por un sueño', 'La vida es bella', 'El pianista', 'Amanecer',
                'Belleza Americana', 'El resplandor', 'Salvando al Soldado Ryan', 'Psicosis',
                'El joven manos de tijera', 'Seven', 'Forrest Gump', 'Matrix', 'La guerra de las galaxias',
                'Origen', 'La lista de Schindler', 'E. T.', 'Alicia en el país de las maravillas', 'El llanero solitario',
                'Sombras tenebrosas', 'Enemigos Públicos', 'La leyenda del Jinete sin cabeza', 'Chocolate', 'La ventana Secreta',
                'Charlie y la fábrica de Chocolate', 'King Kong', 'Armageedoon', 'Duro de Matar 4',
                'Tiempos Modernos', 'Avatar', 'El curioso caso de Benjamin Button', 'Quemar después de leer',
                'El asesinato de Jesse James por el cobarde Robert Ford', 'Sr. Y Sra. Smith', 'Malditos bastardos',
                'Babel', 'Troya', 'Wall E', '300', 'Media noche en París', 'Pequeña Miss Sunshine', 'Secreto en la Montaña',
                'REC', 'Juno', 'V de Vendetta', 'El ilusionista', 'El bueno, el feo y el malo', 'Escape de Alcatraz',
                'El planeta de los simis', 'Cinema Paradiso', 'Million Dollar Baby', 'Invictus', 'Curvas de la Vida',
                'Votos de Amor', 'Atrapen al Gringo', 'Diario de una Pasión', '007 Otro día para Morir',
                '10 Cosas que Odio de Ti', '127 Horas', '17 Otra Vez', '2012', '21 Gramos', '21: Blackjack',
                '27 Bodas', '500 días con ella', '60 segundos', 'A prueba de fuego', 'A través del Universo',
                'A. I. Inteligencia Artificial', 'Ace Ventura: Detective de Mascotas', 'Acorralados',
                'Actividad Paranomal', 'Adivina quién viene esta Noche', 'Agua para elefantes', 'Agua turbia',
                'Aguas profundas', 'Ahora son 13', 'Al borde del abismo', 'Al diablo con el diablo', 'Al Filo de la Muerte',
                'Alerta Máxima', 'Amanecer de los Muertos', 'Amar te duele', 'American Pie', 'Amor a distancia', 'Amor ciego',
                'Amor en juego', 'Amor sin Escalas', 'Amores perros', 'Angeles y Demonios', 'Año Nuevo', 'Antes de Partir',
                'Arma Mortal', 'Asesinos con Estilo', 'Atando cabos', 'Atrapame si puedes', 'Australia', 'Bajo Amenaza',
                'Bajo Cero', 'Bajo el Mismo Techo', 'Banderas de nuestros Padres', 'Batman', 'Beetlejuice', 'Besos que matan',
                'Billy Elliot', 'Blancanieves y el Cazador', 'Bosque de sombras', 'Buenas Noches y Buena Suerte',
                'Buscando un Amigo para el Fin del Mundo', 'Búsqueda Implacable', 'Caballo de Guerra', 'Cadena de Favores',
                'Calles de Fuego', 'Cambio de planes', 'Camino a la perdición', 'Capitán América', 'Cartas a Julieta',
                'Casino Royal', 'Cazadores de Mentes', 'Cena de Amigos', 'Chicago', 'Chicas Pesadas', 'Mamma Mía',
                'Click: Perdiendo el Control', 'Coco antes de Chanel', 'Código de Familia', 'Comer, rezar, amar',
                'Cómo cocinar tu vida', 'Cómo Entrenar a tu Dragón', 'Cómo perder a un hombre en 10 días',
                'Como si fuera cierto', 'Como si fuera la primera vez', 'Confesiones de una Compradora compulsiva',
                'Confesiones de una Mente Peligrosa', 'Conocerás al Hombre de tus Sueños', 'Conquistando a mi Suegro',
                'Contagio', 'Desayuno en Tiffany´s', 'Contando a mis Ex', 'Contracara', 'Control Total', 'Corazón de Caballero',
                'Corre Lola Corre', 'Criadas y Señoras', 'Cuando el Amor es para Siempre', 'Cuando Harry Encontró a Sally',
                'Cuando te Encuentre', 'Cuatro bodas y un funeral', 'Cuatro Hermanos', 'Culpable o Inocente', 'Damas en Guerra',
                'Desde mi Cielo', 'Despertando a la Vida', 'Detective por error', 'Detrás de las Paredes', 'Día de Entrenamiento',
                'Día de la Independencia', 'Día de los Enamorados', 'Diarios de Motocicleta', 'Dicen por ahí', 'Dinero Sucio',
                'Donde Viven los Monstruos', 'Dos Inútiles en Patrulla', 'Dos por el Dinero', 'Drácula', 'Dulce Noviembre', 'Duplex',
                'El abogado del diablo', 'Educando a Mamá', 'El Amor en Tiempo de Cólera', 'El Amor Cuesta Caro', 'El Arte de la Guerra',
                'El artista', 'El Asesinato de John Lennon', 'El Atajo', 'El Ataque de los Tomates Asesinos', 'El Aviador',
                'El Cadaver de la Novia', 'El Camino Hacia el dorado', 'El Club de la Pelea', 'El Club de las Divorciadas',
                'El Coleccionista de Huesos', 'El Color Púrpura', 'El cubo', 'El cuervo', 'El detective Cantante',
                'El devorador de Pecados',
                'El día después de Mañana', 'El día que la Tierra se Detuvo', 'El diablo viste a la moda',
                'El diario de Bridget Jones', 'El efecto Mariposa', 'El embajador del Miedo', 'El espantatiburones',
                'El Expreso Polar', 'El extraño mundo de Jack', 'El fantasma de la ópera', 'El gato con Botas',
                'El gran truco', 'El guardaespaldas', 'El guardian del Zoológico', 'El Hombre Araña',
                'El Hombre Bicentenario', 'El Hombre de la Máscara de Hierro', 'EL Hombre sin Sombra',
                'El informante', 'El jardinero fiel', 'El jardín de la alegría', 'El juego de la fortuna',
                'El juego del miedo', 'El lado oscuro del Sol', 'El ladrón de Orquídeas', 'El libro de los Secretos',
                'El llanto de la Lechuza', 'El mejor papá del Mundo', 'El mismo amor, la misma lluvia',
                'El niño con el Pijama de Rayas', 'El ocaso de un Asesino', 'El orfanato',
                'El perfume: Historia de un Asesino', 'El Plan B', 'El precio del mañana',
                'El primer día del resto de tu vida', 'El protegido', 'El quinteto de la muerte',
                'El Quinto Elemento', 'El retrato de Dorian Gray', 'El Rey Arturo', 'El señor de la guerra',
                'El señor de las moscas', 'El Silencio de los Inocentes', 'El Sol Rojo', 'El Sonido del Trueno',
                'El Sustituto', 'El tercer hombre', 'El tesoro del Amazonas', 'El tigre y la Nieve', 'El turista',
                'El último aplauso', 'El último gran mago', 'El último Samurai', 'El vengador del futuro',
                'En Búsqueda de la Felicidad', 'En el límite del Amor', 'En la Boca del Miedo',
                'En la Boda de mi Hermana', 'Enamorándome de mi Ex', 'Encantada', 'Encuentro Explosivo',
                'Enredados', 'Entrenando a Papá', 'Entrevista con el Vampiro', 'Escuela de Rock',
                'Eternamente Comprometidos', 'Eterno Resplandor de una Mente sin Recuerdos', 'Fantasía',
                'Flubber, el invento del siglo', 'Furia de Titanes', 'Gigantes de Acero', 'Gladiador',
                'Golpe de Suerte', 'Golpes del Destino', 'Grandes Esperanzas', 'Guerra de Novias',
                'Hada por Accidente', 'Hazme Reir', 'Hombre en Llamas', 'Hombres de Honor',
                'Indiana Jones: En Busca del Arca Perdida', 'Jamás Besada', 'Juego de lágrimas',
                'Jumanji', 'La Bella Durmiente', '¿Quién quiere ser millonario?', 'Yo robot', 'Vanilla Sky',
                'Una noche fuera de serie', 'Una pareja explosica', 'Una esposa de mentira', 'Todo un parto',
                'Todopoderoso', 'Tienes un E-mail', 'Tira a mamá del tren', 'Suban el volumen', 'Soltero en casa',
                'Siempre el mismo día', 'Rudo y Cursi', 'Red Social', 'Rápido y Furioso', 'Querida encogí a los niños',
                'Quiero matar a mi jefe', 'Perfume de mujer', 'Pelotas en juego', 'Orgullo y prejuicio', 'P. D. Te amo' 
    ];


    var gameStarted = false;
    var dictionary = {
       // "cosa": ["uno"],
        "musica": musica,
        "serie":  serie,
        "pelicula": pelicula
    };

    var maxTeams = 2;
    var currentTeam = 1;
    var currentDeck = null;
    var currentTimer = null;
    var timerLength = 2; // minutes

    function isDeckEmpty() {
        var isEmpty = true;
        $.each(currentDeck, function (idx, list) {
            if (isEmpty == false) { return; }
            if (list.length > 0) { isEmpty = false; }
        });
        return isEmpty;
    }

    function startTimer() {
        var $container = $(".timer");
        $container.data("time-left", (timerLength * 60) - 1);
        var minutes = Math.floor(timerLength);
        var seconds = (timerLength - 2) % 60;
        $(".timer").html(("00" + minutes).slice((minutes + "").length) + ":" + ("00" + seconds).slice((seconds + "").length));

        currentTimer = setInterval(function () {
            var left = $container.data("time-left");
            $container.data("time-left", left - 1);

            var minutes = Math.floor(left / 60);
            var seconds = left % 60;

            $(".timer").html(("00" + minutes).slice((minutes + "").length) + ":" + ("00" + seconds).slice((seconds + "").length));

            if (left == 0) {
                stopTimer();
                return;
            }
        }, 1000);
    }

    function stopTimer() {
        if (currentTimer != null) {
            clearInterval(currentTimer);
            currentTimer = null;
        }
    }

    function copyDeck() {
        var newDeck = {};

        $.each(dictionary, function (idx, value) {
            newDeck[idx] = $.extend([], value);
        });

        return newDeck;
    }

    function getFromCategory(category) {
        var cat = currentDeck[category] || [];

        if (cat.length == 0) {
            return -1;
        }

        var idx = Math.floor((Math.random() * cat.length));

        var found = cat[idx];
        // Remove found value
        var newList = [];
        for (var i = 0; i < cat.length; i++) {
            if (cat[i] == found) { continue; }
            else { newList.push(cat[i]); }
        }

        if (newList.length == 0) {
            $("." + category).addClass("empty");
        }

        currentDeck[category] = newList;

        return found;
    }


    function nextTeam() {
        var $team = $(".team" + currentTeam);
        var lastTeam = currentTeam;

        $team.removeClass("turn");
        if (currentTeam == maxTeams) {
            currentTeam = 1;
        } else {
            currentTeam++;
        }
        $(".team" + currentTeam).addClass("turn");
        stopTimer();

        $(".options li").show();
        $(".options li").removeClass("disabled").removeClass("selected");
        $(".result").text("");
        $(".answer").hide();
        $(".timer").text("00:00");

        if (isDeckEmpty()) {
            var $teams = $(".team"); 
            var max = null;
            var equals = true;
            var last = null;
            $.each($teams, function (idx, team) {
                var score = $(team).find(".score").data("score");
                var maxScore = max != null ? $(max).find(".score").data("score") : 0;
                
                if (last != null && $(last).find(".score").data("score") != score) {
                    equals = false;
                }

                if (score > maxScore) {
                    max = team;
                }

                last = team;
            });

            if (equals == false) {
                $(".result").text("Equipo " + $(max).find("input").val() + " GANO!");
            } else {
                $(".result").text("EMPATE");
            }
            
        }
    }

    $(".start").on("click", function () {
        gameStarted = true;
        currentDeck = copyDeck();

        $(".container").show();
        $(".team" + currentTeam).addClass("turn");
        $(".start").hide();
        $(".timer").show();
    });

    $(".restart").on("click", function () {
        gameStarted = false;
        currentDeck = copyDeck();
        $(".options li").show();
        $(".options li").removeClass("disabled").removeClass("selected");
        $(".timer").hide();
        $(".turn").removeClass("turn");
        $(".start").show();
        $(".container").hide();
        $(".score").html("0");
        $(".result").text("");
        $(".answer").hide();
        $(".empty").removeClass("empty");
        $(".score").data("score", 0);
        $(".timer").text("00:00");

        stopTimer();
    });

    $(".options a").click(function () {
        var selected = $(this).parent()[0].className;
        if ($(this).parent().hasClass("selected")) { return false; }
        $(".options li").addClass("disabled");
        $(".options li." + selected).removeClass("disabled")
            .addClass("selected");
        $(".answer").show();

        var thing = getFromCategory(selected);
        if (thing == -1) {
            $("." + selected).hide();
        } else {
            $(".result").text(thing);
            startTimer();
        }

    });


    $(".si").on("click", function () {
        var $team = $(".team" + currentTeam);
        var $score = $team.find(".score");
        var score = $score.data("score") || 0;
        score = score + 1;
        $score.data("score", score);
        $score.text(score);
        nextTeam();
    });

    $(".no").on("click", function () { nextTeam(); });
});