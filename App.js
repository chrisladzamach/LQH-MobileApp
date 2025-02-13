import React, { useState, createContext, useContext } from "react";
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  StatusBar,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

const ThemeContext = createContext({
  isDark: false,
  toggleTheme: () => {},
});

const useTheme = () => useContext(ThemeContext);

const mainSections = [
  // Teoría => Historia
  {
    title: "Teoría",
    icon: "book-open-variant",
    iconType: "community",
    subSections: [
      {
        title: "Historia",
        content: `Para poder entender la historia de las artes marciales coreanas, primero se debe comprender su historia cultural, ya que estas reflejan la cultura del país. Durante el extenso periodo de guerra en el siglo VI, la dinastía china del Rey Silla derrotó al ejército de Paekche. Como resultado, se establecieron en la península de Corea y se oficializó el primer grupo de practicantes de artes marciales: los Hwa Rang, guerreros aristocráticos del gobierno del Rey Silla.  
  
  Los guerreros Hwa Rang entrenaban en diversas formas de artes marciales y también profundizaban sus conocimientos estudiando el budismo, la energía y las artes. Su entrenamiento incluía caminatas en las montañas y natación en ríos turbulentos durante el invierno. Su práctica se enfocaba en el combate cuerpo a cuerpo. Este sistema primario se conoce como Su Bak, y a él los Hwa Rang incorporaron el uso de armas como el sable, bastón, lanza, gancho, arco y flecha.  
  
  Con el tiempo, los Hwa Rang desarrollaron un sistema de combate basado en patadas llamado Su Bak Gi. La eficacia de este sistema radicaba en la combinación de patadas con golpes, lo que llevó a la creación del término Hwa Rang Do, el nuevo nombre de los guerreros aristocráticos de la dinastía Silla.  
  
  El sistema Su Bak es el primer arte marcial documentado en la península de Corea y se remonta a la legendaria era del Rey Tan'gun. Como prueba de ello, en la tumba de Kak Je, ubicada en la antigua ciudad de Koguryo, se encuentran pinturas rupestres donde se representan dos practicantes de Su Bak combatiendo.  
  
  A finales de la dinastía de los Tres Reinos, el Su Bak se fragmentó y dio origen a diversas escuelas de artes marciales. Con el tiempo, este sistema evolucionó y llegó a conocerse como Tae Kyon, mientras que una de sus variantes más conocidas, el Yu Sul, dio origen al Jujitsu japonés, caracterizado por su combinación de suavidad y agresividad.  
  
  En el siglo XX, la dinastía Yi invadió la península de Corea. En 1909, los japoneses lograron ocupar el territorio y prohibieron la práctica del arte marcial Tae Kyon. En 1935, una arqueóloga japonesa descubrió en Tung-huala, provincia de Manchuria, al norte de Corea, dos tumbas con murales de Kakchu Chong, donde aparecen guerreros practicando artes marciales. Posteriormente, se halló en la cueva Sok Kul An la famosa estatua del guerrero coreano Kum Gang Yuk Sa, quien sirvió al Rey Hye Gong entre los años 742 y 762 d.C.  
  
  Para convertirse en monje Zen en Corea, un aspirante debía vincularse a un templo y convertirse en novicio. El monje director le asignaba un primer profesor, quien le brindaba entrenamiento inicial. Luego, era recomendado a otro templo y a un nuevo maestro. Tras varios años de aprendizaje, el estudiante emprendía un viaje por el país, donde adquiría nuevas experiencias y conocimientos. Al regresar al templo, continuaba sus estudios hasta convertirse en monje maduro. Con el tiempo, recopilaba las enseñanzas de sus maestros, seleccionaba la que más le gustaba, la desarrollaba y finalmente se autoproclamaba discípulo de esa tradición. Este mismo sistema de transmisión del conocimiento ha sido adoptado en las artes marciales.  
  
  Otro aspecto fundamental en el desarrollo de las artes marciales coreanas fue el intercambio cultural con sus países vecinos. Geográficamente, Corea está situada entre China y Japón, lo que la convirtió en un puente entre ambas naciones durante miles de años. La cultura china y japonesa se transmitieron a través de Corea y, a su vez, Corea también influyó en ellas. Este intercambio se dio tanto de manera pacífica como a través de guerras, invasiones y sometimientos. Como resultado, la cultura coreana evolucionó con influencias de ambas naciones, lo que también impactó en sus artes marciales, dando lugar a un estilo único.  
  
  Finalmente, las técnicas de las artes marciales coreanas se dividen en tres categorías: mano vacía contra mano vacía, mano vacía contra arma y arma contra arma. Además, existen tres grandes grupos de técnicas:  
  1. Kwan Jul Ki Bub: Llaves, lanzamientos, inmovilizaciones y estrangulamientos.  
  2. Dang Shin Ki Bub: Golpes, puños y patadas.  
  3. Mu Ki Sul: Manejo de armas, incluyendo palo largo, medio y corto, espada larga y corta, cadena, lanza, bastón, cuchillo, y lanzamiento de piedras, puñales y estrellas.  `,
      },
      {
        title: "GM Choi Yon Sul",
        content: `El gran maestro Choi Yong Sul nació el 20 de julio de 1904 en la provincia de Chung Chong, Corea del Sur, y murió en 1986 en la ciudad de Taegu, Corea del Sur. Otro gran hombre que murió sin que se le reconociera su obra. Por esto, nuestra escuela no olvida que gracias a su sacrificio y esfuerzo, hoy tenemos una herramienta perfecta para nuestra evolución interior. En nuestros dojang permanece su imagen como muestra de respeto y admiración. Víctima de la ocupación japonesa y cuando solo era un niño de seis años, fue aceptado como hijo adoptivo y trasladado a Japón por un comerciante japonés. Afortunadamente, y después de muchas vicisitudes, Choi Yong Sul fue admitido como alumno por Sogaku Takeda, famoso maestro de espada y aiki-jutsu. Sogaku Takeda fue un líder de las artes marciales japonesas, muy conocido por sus continuos desafíos a lo largo de todo Japón. Fue el máximo exponente de la escuela Daito Ryu Aiki-Jutsu, aunque dominaba diferentes estilos. 
  
  El maestro Takeda era una persona muy orgullosa, descendiente directo de samuráis, por lo que aceptó como alumno a Choi Yong Sul con la condición de que adoptara un nombre japonés y que renegara de las costumbres coreanas. Le estaba totalmente prohibido hablar en su lengua natal o comportarse como tal. Cuando murió el maestro Takeda en 1943, Choi Yong Sul tenía treinta años y conocimientos suficientes como para suceder a su maestro. La guerra terminó en 1945 y con ella el fin de la ocupación japonesa. Un año más tarde, Choi Yong Sul volvió a Corea. En este tiempo resurgieron con fuerza artes marciales coreanas como Taekyun, Subakdo, Tangsudo, entre otras. Durante dos largos años, el maestro Choi se interesó mucho por el Taekyun y técnicas de otros estilos parecidos al boxeo chino. 
  
  El maestro comprobó que casi todas las artes marciales de su país tenían gran similitud, sobre todo en las técnicas de pierna. Gracias a su experiencia adquirida al lado del maestro Takeda, aprendió rápidamente y con facilidad las nuevas técnicas. Las influencias de las técnicas de pierna del Taekyun y las técnicas de otros estilos, junto a la ciencia del Daito-Ryu, le hicieron crear un arte propio que se llamó Yu Kwon Sul. En 1948, empezó la enseñanza de su nuevo arte en las instalaciones de la empresa del maestro Suh, quien se convirtió en su primer alumno coreano y más tarde en su primer cinturón negro, instructor y mano derecha. 
  
  Algunas de las razones por las cuales el maestro Suh fue el primer alumno del maestro Choi fueron porque este no se ofrecía a enseñar a nadie y porque pocas personas estaban en capacidad de pagar el precio de sus lecciones. El maestro Choi empezó a dar clases en la fábrica de Suh y colocó un aviso con el nombre de su maestro (Sokaku Takeda del Daito Ryu). Decía que el nombre de su arte marcial era Yawara, una antiquísima arte marcial japonesa, y que tenía certificados de su entrenamiento en Japón, pero que los perdió cuando retornó a Corea. 
  
  El maestro Choi se convirtió en el jefe de seguridad y guardaespaldas del padre del maestro Suh y empezó a darse a conocer en toda la ciudad de Taegu a través de sus demostraciones como artemarcialista y guardaespaldas. Los comentarios sobre su arte marcial se convirtieron en un tema común entre la población. Ambos maestros le cambiaron el nombre a su estilo y lo denominaron Hapki Yu Kwon Sul. El primero hacía énfasis en las llaves y los lanzamientos, mientras que el segundo le adicionó golpes y patadas. Este hecho implicó el renacimiento de la defensa personal coreana (Ho Shin Sul) después de muchos años de ausencia en el panorama de las artes marciales. 
  
  El 12 de febrero de 1951, el maestro Choi y Suh, junto con otros dos discípulos, fundaron la primera escuela de su estilo en Taegu, denominada “El Dojang Coreano del Arte Total de las Técnicas del Puño Suave”. Técnicas que, sin golpear ninguna parte de su oponente, utilizan la energía de este para someterlo. De este dojang surgieron los futuros instructores del Hap Ki Do. El primero de ellos, Mun Jin Kang, inauguró el segundo dojang del estilo en 1956 y se le considera uno de los pioneros de su enseñanza. En 1957, otro alumno aventajado de la sede central, Han Jae Ji, abrió el primer dojang en la capital del país, Seúl. 
  
  Hasta 1958, el Hapkido fue conocido con varios nombres: Yu Kwon Sul, Yu Sul, Ho Shin Sul y Bi Sul. Se dice que en esta época los maestros Choi y Suh le adicionaron la terminación Do al Hap Ki y le dieron el nombre actual. A principios de 1960, bajo la dirección del gran maestro Choi y con la asistencia de sus discípulos, los maestros Han Jae Ji, In Hyuk Su y Mu Wung Kim, se fundó la Asociación Coreana de Ki Do. Luego, el primero fundó y presidió la Asociación Coreana de Hapkido y fue el más fiel seguidor de las enseñanzas de su maestro. El segundo se separó para organizar el "Kul Sul Won", un arte marcial muy parecido al Hapkido, ya que tiene las mismas bases, pero con más énfasis en el manejo de armas orientales y la práctica de figuras. De esta forma, el Hapkido se popularizó y su trayectoria fue ascendente, dando el impulso a nivel internacional en 1.962 por el maestro Mu Hong Kim.  
  
  En 1.965, el maestro Suh se traslada a Seúl y abre una escuela llamada Jung Ang Hae. Con el fin de la guerra entre las dos Coreas (1.953), mientras enseña en la fabrica del maestro Suh, el maestro Choi abre en su casa, su propia escuela privada y le empieza a enseñar a un reducido y exclusivo grupo de estudiantes. Uno de estos fue HAN JAE JI, quien ha sido considerado como uno de sus discípulos más notables.  El gran maestro HAN JAE JI, padre del Hapkido moderno (1936 - ), nació en Andong, Corea del Sur en 1.936. Cuando tenía 3 años de edad, su familia viajó a la China huyendo de la invasión japonesa. Vivieron allí durante 10 años y al finalizar la invasión, retornaron a Corea. 
  `,
      },
      {
        title: "GM Ji Han Jae",
        content: `La historia del Maestro Ji Han Jae y el desarrollo del Hapkido
  
  El Maestro Ji Han Jae comenzó su entrenamiento mental a los 8 años, bajo la guía del monje taoísta Lee. Con él aprendió el uso del palo, las patadas del Tae Kyon y técnicas de meditación. A los 17 años entró en la escuela del Maestro Choi, y después de cuatro años de intenso entrenamiento, fue nombrado su ayudante.
  
  Tiempo después, con la aprobación de su maestro, Ji decidió enseñar el Hapki Yu Kwon Sul y abrió su primera escuela en su ciudad natal. Luego de unos nueve meses en Andong, se trasladó a Seúl en septiembre de 1957. Durante el viaje, tuvo varias oportunidades para poner a prueba sus habilidades. Ji siempre mostró interés en el esoterismo y en religiones orientales como el budismo, el taoísmo y el confucianismo.
  
  Al llegar a Seúl, se hospedó en una casa de huéspedes, donde el hijo del dueño se convirtió en su primer alumno. Su escuela empezó con pocos estudiantes, pero tuvo suerte al establecerse cerca de una fábrica de corbatas. La mayoría de sus alumnos venían de la Universidad de Han Yang.
  
  En los años 50, tras la guerra entre las dos Coreas, Seúl estaba en ruinas y llena de pandillas. Muchos artistas marciales desafiaban a Ji, pero él aprovechó cada oportunidad para demostrar la efectividad de su estilo. Rápidamente, tanto él como su arte ganaron reputación. Con el tiempo, su situación económica mejoró, lo que le permitió mudarse a un lugar mejor e ingresar al Ko Bong-ah, un famoso gimnasio de boxeo en Corea.
  
  En 1962, empezó a trabajar como instructor en la Casa Azul, la residencia presidencial, enseñando a la guardia del presidente Park. Mientras entrenaba a los guardaespaldas, trasladó su escuela a la zona occidental de Seúl. El Hapkido comenzó a expandirse por todo el país, convirtiéndose en un arte marcial ampliamente reconocido.
  
  En septiembre de 1967, Ji viajó a Vietnam del Sur para demostrar la eficacia del Hapkido al ejército estadounidense. En 1969, fue invitado al Pentágono para enseñar su arte a la O.S.I., F.B.I. y C.I.A.. Para 1971, comenzó su carrera en el cine, participando en tres películas en Hong Kong:
  
  El Puño del Unicornio (junto a In Sik Hwang).
  Hapkido (con Ángela Mao Ying).
  El Juego de la Muerte (junto a Bruce Lee).
  En 1979, el presidente Park fue asesinado, lo que llevó a Ji a perder su empleo en el gobierno después de 18 años de servicio.
  
  Mu Wung Kim y su contribución al Hapkido
  Mu Wung Kim provenía de una familia acomodada y comenzó su entrenamiento en Yu Sul en 1953 con el Maestro Choi. Junto a Han Jae Ji, se destacó como alumno del maestro. En 1959, se convirtió en instructor en la escuela del Gran Maestro Bok Sub Suh, en Taeguk. Aunque pudo ingresar a la universidad, decidió dedicarse por completo al Hapkido.
  
  Durante los siguientes dos años, perfeccionó nuevas técnicas de patadas. En 1961, se trasladó a Seúl junto a Han Jae Ji, donde entrenaron intensamente durante ocho meses. En este período, terminaron de estructurar las patadas del Hapkido, que hoy en día siguen siendo la base de esta disciplina.
  
  El 26 de octubre de 1979, el presidente Park Chung Hee fue asesinado por su jefe de seguridad. Este evento afectó directamente al Maestro Ji, ya que toda la Guardia Presidencial, compuesta por sus alumnos, fue destituida. Ji y otros miembros del gobierno fueron arrestados mientras se investigaba el caso, pasando un año en prisión.
  
  Ji describió esta experiencia como devastadora, pues lo llevó a convivir con sectores de la sociedad que jamás había imaginado. Sin embargo, en lugar de hundirse en la depresión, aprovechó su tiempo en prisión para entrenar Son Do Sul (control de energía KI) y perfeccionar las técnicas de meditación taoísta que había aprendido de su maestro Lee Do-Sa.
  
  También reestructuró el sistema de patadas del Hapkido, organizándolo en 25 patadas básicas, combinadas en 4 steps, lo que dio lugar a 100 técnicas, sin contar giros, barridos y saltos. Con estas modificaciones, creó un estilo más completo, al que llamó Sin Moo Hapkido (Sin: mental-espiritual, Moo: arte marcial).
  
  Entre 1963 y 1983, el Hapkido "Sung Moo Kwan" era reconocido en toda Corea.
  
  Expansión del Hapkido en Corea y el mundo
  Gracias al apoyo del gobierno, el Hapkido se expandió por todo el país, con escuelas en cada capital y condado. La mayoría estaban bajo la Korea Hapkido Association, dirigida por Ji Han Jae. Sin embargo, otros grupos comenzaron a surgir, como los alumnos de Choi Yong Sul y Myung Jae Nam, quienes desafiaron la supremacía de la organización de Ji.
  
  Con la caída del presidente Park y la detención de Ji, la Korea Hapkido Association perdió a su líder. En su lugar, surgieron nuevas organizaciones, como la International Hapkido Federation de Myung Jae Nam y la Korea Kido Association, que también incorporó grupos de Hapkido. Entre 1980 y 1983, Ji observó estos cambios y, al notar que el panorama político no le favorecía, decidió emigrar a Estados Unidos.
  
  En 1984, Ji llegó a California, donde se reunió con sus antiguos alumnos Myung Kwang Sik y Han Bong Soo, quienes habían popularizado el Hapkido a través de libros, videos y películas. En reconocimiento a su trabajo, Ji les otorgó el 9no Dan en Hapkido.
  
  Ese mismo año, fundó la Korea Sin Moo Hapkido Association, estableciendo su base en Monterrey, California. Desde allí, empezó a formar nuevos instructores en Sin Moo Hapkido, como Youg T. Freeda (California) y Ken Mackenzie (New Jersey).
  
  Expansión del Sin Moo Hapkido en Europa y Latinoamérica
  En 1990, el maestro suizo Jurg Ziegler visitó a Ji Han Jae en Estados Unidos y recibió un entrenamiento intensivo. Ji le pidió que organizara el Hapkido en Europa, lo que llevó a que muchos instructores viajaran a Suiza para aprender de él.
  
  En 1996, Ji realizó una gira por Europa, visitando países como Suiza, Finlandia, Irlanda, Alemania, Bélgica, Austria, Francia y España. Su presencia dio un gran impulso al Sin Moo Hapkido, permitiendo la formación de una nueva generación de maestros que expandieron el arte en todo el mundo.
  
  Entre 2000 y 2003, Ji tomó contacto con profesores de diversos países latinoamericanos, con la intención de trabajar directamente con ellos y seguir difundiendo su legado.
  `,
      },
      {
        title: "GM Young Seok Kim",
        content: `
  La historia del Maestro Ji Han Jae y el desarrollo del Hapkido
  El Maestro Ji Han Jae comenzó su entrenamiento mental a los 8 años, bajo la guía del monje taoísta Lee. Con él aprendió el uso del palo, las patadas del Tae Kyon y técnicas de meditación. A los 17 años entró en la escuela del Maestro Choi, y después de cuatro años de intenso entrenamiento, fue nombrado su ayudante.
  Tiempo después, con la aprobación de su maestro, Ji decidió enseñar el Hapki Yu Kwon Sul y abrió su primera escuela en su ciudad natal. Luego de unos nueve meses en Andong, se trasladó a Seúl en septiembre de 1957. Durante el viaje, tuvo varias oportunidades para poner a prueba sus habilidades. Ji siempre mostró interés en el esoterismo y en religiones orientales como el budismo, el taoísmo y el confucianismo.
  Al llegar a Seúl, se hospedó en una casa de huéspedes, donde el hijo del dueño se convirtió en su primer alumno. Su escuela empezó con pocos estudiantes, pero tuvo suerte al establecerse cerca de una fábrica de corbatas. La mayoría de sus alumnos venían de la Universidad de Han Yang.
  En los años 50, tras la guerra entre las dos Coreas, Seúl estaba en ruinas y llena de pandillas. Muchos artistas marciales desafiaban a Ji, pero él aprovechó cada oportunidad para demostrar la efectividad de su estilo. Rápidamente, tanto él como su arte ganaron reputación. Con el tiempo, su situación económica mejoró, lo que le permitió mudarse a un lugar mejor e ingresar al Ko Bong-ah, un famoso gimnasio de boxeo en Corea.
  En 1962, empezó a trabajar como instructor en la Casa Azul, la residencia presidencial, enseñando a la guardia del presidente Park. Mientras entrenaba a los guardaespaldas, trasladó su escuela a la zona occidental de Seúl. El Hapkido comenzó a expandirse por todo el país, convirtiéndose en un arte marcial ampliamente reconocido.
  En septiembre de 1967, Ji viajó a Vietnam del Sur para demostrar la eficacia del Hapkido al ejército estadounidense. En 1969, fue invitado al Pentágono para enseñar su arte a la O.S.I., F.B.I. y C.I.A.. Para 1971, comenzó su carrera en el cine, participando en tres películas en Hong Kong:
  El Puño del Unicornio (junto a In Sik Hwang).
  Hapkido (con Ángela Mao Ying).
  El Juego de la Muerte (junto a Bruce Lee).
  En 1979, el presidente Park fue asesinado, lo que llevó a Ji a perder su empleo en el gobierno después de 18 años de servicio.
  Mu Wung Kim y su contribución al Hapkido
  Mu Wung Kim provenía de una familia acomodada y comenzó su entrenamiento en Yu Sul en 1953 con el Maestro Choi. Junto a Han Jae Ji, se destacó como alumno del maestro. En 1959, se convirtió en instructor en la escuela del Gran Maestro Bok Sub Suh, en Taeguk. Aunque pudo ingresar a la universidad, decidió dedicarse por completo al Hapkido.
  Durante los siguientes dos años, perfeccionó nuevas técnicas de patadas. En 1961, se trasladó a Seúl junto a Han Jae Ji, donde entrenaron intensamente durante ocho meses. En este período, terminaron de estructurar las patadas del Hapkido, que hoy en día siguen siendo la base de esta disciplina.
  El 26 de octubre de 1979, el presidente Park Chung Hee fue asesinado por su jefe de seguridad. Este evento afectó directamente al Maestro Ji, ya que toda la Guardia Presidencial, compuesta por sus alumnos, fue destituida. Ji y otros miembros del gobierno fueron arrestados mientras se investigaba el caso, pasando un año en prisión.
  Ji describió esta experiencia como devastadora, pues lo llevó a convivir con sectores de la sociedad que jamás había imaginado. Sin embargo, en lugar de hundirse en la depresión, aprovechó su tiempo en prisión para entrenar Son Do Sul (control de energía KI) y perfeccionar las técnicas de meditación taoísta que había aprendido de su maestro Lee Do-Sa.
  También reestructuró el sistema de patadas del Hapkido, organizándolo en 25 patadas básicas, combinadas en 4 steps, lo que dio lugar a 100 técnicas, sin contar giros, barridos y saltos. Con estas modificaciones, creó un estilo más completo, al que llamó Sin Moo Hapkido (Sin: mental-espiritual, Moo: arte marcial).
  Entre 1963 y 1983, el Hapkido "Sung Moo Kwan" era reconocido en toda Corea.
  Expansión del Hapkido en Corea y el mundo
  Gracias al apoyo del gobierno, el Hapkido se expandió por todo el país, con escuelas en cada capital y condado. La mayoría estaban bajo la Korea Hapkido Association, dirigida por Ji Han Jae. Sin embargo, otros grupos comenzaron a surgir, como los alumnos de Choi Yong Sul y Myung Jae Nam, quienes desafiaron la supremacía de la organización de Ji.
  Con la caída del presidente Park y la detención de Ji, la Korea Hapkido Association perdió a su líder. En su lugar, surgieron nuevas organizaciones, como la International Hapkido Federation de Myung Jae Nam y la Korea Kido Association, que también incorporó grupos de Hapkido. Entre 1980 y 1983, Ji observó estos cambios y, al notar que el panorama político no le favorecía, decidió emigrar a Estados Unidos.
  En 1984, Ji llegó a California, donde se reunió con sus antiguos alumnos Myung Kwang Sik y Han Bong Soo, quienes habían popularizado el Hapkido a través de libros, videos y películas. En reconocimiento a su trabajo, Ji les otorgó el 9no Dan en Hapkido.
  Ese mismo año, fundó la Korea Sin Moo Hapkido Association, estableciendo su base en Monterrey, California. Desde allí, empezó a formar nuevos instructores en Sin Moo Hapkido, como Youg T. Freeda (California) y Ken Mackenzie (New Jersey).
  Expansión del Sin Moo Hapkido en Europa y Latinoamérica
  En 1990, el maestro suizo Jurg Ziegler visitó a Ji Han Jae en Estados Unidos y recibió un entrenamiento intensivo. Ji le pidió que organizara el Hapkido en Europa, lo que llevó a que muchos instructores viajaran a Suiza para aprender de él.
  En 1996, Ji realizó una gira por Europa, visitando países como Suiza, Finlandia, Irlanda, Alemania, Bélgica, Austria, Francia y España. Su presencia dio un gran impulso al Sin Moo Hapkido, permitiendo la formación de una nueva generación de maestros que expandieron el arte en todo el mundo.
  Entre 2000 y 2003, Ji tomó contacto con profesores de diversos países latinoamericanos, con la intención de trabajar directamente con ellos y seguir difundiendo su legado.
  `,
      },
      {
        title: "GM Salvador",
        content: `
  MAESTRO SALVADOR PALACIO ARANGO
  Cinturón Negro 7° Dan en Hapkido y 6° Dan en Taekwondo
  
  Salvador Palacio Arango nació el 16 de junio de 1960 en Bello, Antioquia, hijo de Francisco Javier Palacio y María Arcilia Arango.
  
  El 25 de noviembre de 1970 inició su entrenamiento en artes marciales en un estilo similar al karate, en un lugar donde se practicaban diversas disciplinas. Cuatro años después, el profesor Federico Vargas Gil lo invitó a entrenar en su club, llamado Club El Sol, el cual pertenecía a la Liga Antioqueña de Taekwondo. Durante su tiempo allí, el maestro Palacio logró ser parte de la selección de Antioquia.
  
  Posteriormente, continuó su formación en el colegio militar donde realizaba sus estudios académicos. Allí tuvo contacto con el maestro Young Seok Kim, de la naciente Liga Antioqueña de Hapkido. Bajo su guía, entrenó con el cinturón negro Gustavo Robledo y luego con el profesor Omar Duque. En este proceso, conoció a otros maestros de la Escuela Oriental de Artes Marciales, pero se inclinó especialmente por los entrenamientos con el Gran Maestro Cristian Muñoz Vásquez, quien lo formó en Taekwondo y Hapkido.
  
  Se dedicó más al Hapkido porque lo consideró un arte marcial más completo, ya que reunía todas las técnicas que había aprendido previamente, incluyendo defensa personal y lanzamientos.
  
  El 13 de octubre de 1986 obtuvo su cinturón negro ante un jurado conformado por:
  
  Kwan Sin Myu, presidente de la Federación Mundial de Hapkido.
  Joung Seok Kim, presidente de la Escuela de Artes Marciales (EOAM) a nivel mundial.
  Shan Su Ma, maestro de renombre.
  En 1987 viajó a la ciudad de Armenia, Quindío, y el 1 de noviembre de ese mismo año fundó la escuela de artes marciales Shong Do, gracias al apoyo de un exalumno en la ciudad. En Quindío ya había habido presencia de Hapkido por el maestro coreano Yung Du Lee, pero el maestro Palacio es reconocido como pionero en la región, pues ha mantenido la enseñanza del Hapkido por más de 24 años, formando a más de 3,000 estudiantes en el ámbito deportivo e integral.
  
  En 1991 inició el proyecto para organizar la Liga Quindiana de Hapkido, junto con los siguientes clubes:
  
  Joong Do Kwan (Armenia).
  Tang Jong (Montenegro).
  Las Cobras (ya existente en Armenia).
  Tae Beck (Circasia).
  Dragones (Calarcá).
  Finalmente, en junio de 1992, la liga recibió su reconocimiento deportivo. Desde entonces, la Liga Quindiana de Hapkido ha alcanzado múltiples logros, incluyendo campeonatos internacionales en Ecuador y Venezuela, además de destacarse en Colombia como una referencia en el Hapkido.
  `,
      },
    ],
  },
  // grados
  {
    title: "Grados",
    icon: "medal",
    iconType: "community",
    subSections: [
      {
        title: "BLANCO",
        color: "",
        meaning: `

        `,
      },
      {
        title: "AMARILLO",
        color: "",
        meaning: `
        
        `,
      },
      {
        title: "NARANJA",
        color: "",
        meaning: `
        
        `,
      },
      {
        title: "VERDE",
        color: "",
        meaning: `
        
        `,
      },
      {
        title: "AZUL",
        color: "",
        meaning: `
        `,
      },
      {
        title: "PÚRPURA",
        color: "",
        meaning: `
        
        `,
      },
      {
        title: "ROJO",
        color: "",
        meaning: `
        
        `,
      },
      {
        title: "ROJO MARRÓN",
        color: "",
        meaning: `
        
        `,
      },
      {
        title: "MARRÓN",
        color: "",
        meaning: `
        
        `,
      },
      {
        title: "MARRÓN NEGRO",
        color: "",
        meaning: `
        
        `,
      },
      {
        title: "NEGRO",
        color: "",
        meaning: ``,
      },
    ],
  },
  // Examen
  {
    title: "Examen",
    icon: "clipboard-check",
    iconType: "community",
    subSections: [
      {
        name: "Blanco",
        color: ["#fff", "#fff"],
        grado: "10º Geup",
        rango: "Principiante",
        significado: `
Semilla recién sembrada que se empieza a nutrir para desarrollarse, el estudiante que no tiene conocimiento del HAP-KI-DO, pero inicia la jornada.\n
El blanco expresa toda su inocencia, vació, no-acción, y el color de papel que nadie ha escrito.
          `,
        sections: [
          {
            title: "Figuras sin armas - Poomsaes",
            content: ["Joong Do Il Dan - (Esquema)"],
          },
          {
            title: "Básicos sin armas - Gibom",
            content: ["Básico de cuadrado 1", "Básico de respiración 1: 1/3"],
          },
          {
            title: "Básicos con armas - Mugi Gibom",
            content: ["10 básicos con Nunchakus"],
          },
          {
            title: "Llaves - Ho Sin Sul",
            content: ["1 - 15 Agarre de muñeca"],
          },
        ],
      },
      {
        name: "Amarillo",
        color: ["#FFD700", "#FFD700"],
        grado: "9º Geup",
        rango: "Principiante",
        significado: `
El color de la semilla, de la cual empieza a brotar las primeras raíces.
El estudiante comienza a practicar los ejercicios básicos del HAP-KI-DO. 
El amarillo expresa precaución, desarrollo lento y cuidadoso.
El color del girasol que refleja la energía recibido del sol. `,
        sections: [
          {
            title: "Figuras sin armas - Poomsaes",
            content: ["Joong Do Il Dan - (Bien ejecutada)"],
          },
          {
            title: "Básicos sin armas - Gibom",
            content: [
              "Básico de cuadrado 1",
              "Básico de cuadrado 2",
              "Básico de respiración 1: 1/3",
              "Básico de respiración 1: 2/3",
            ],
          },
          {
            title: "Básicos con armas - Mugi Gibom",
            content: ["20 básicos con Nunchakus"],
          },
          {
            title: "Llaves - Ho Sin Sul",
            content: [
              "1 - 20 Agarre de muñeca",
              "21 - 22 Agarre Manga",
              "23 - 24 Agarre Manga - codo",
              "25 - 26 Agarre Hombro",
              "27 - 28 Agarre Nuca",
            ],
          },
        ],
      },
      {
        name: "Naranja",
        color: ["#FFA500", "#FFA500"],
        grado: "8º Geup",
        rango: "Principiante",
        significado: `
La semilla continúa su desarrollo profundizando sus raíces en él conocimiento del HAP-KI-DO y esbozando el tallo de la proyección de este en su vida. 
El estudiante empieza a refinar sus movimientos rudimentarios. 
El naranja representa el deseo de mejorar, el entusiasmo en la acción. 
        `,
        sections: [
          {
            title: "Figuras sin armas - Poomsaes",
            content: ["Joong Do Il Dan", "Won Il Dan"],
          },
          {
            title: "Básicos sin armas - Gibom",
            content: [
              "Básico de cuadrado 1",
              "Básico de cuadrado 2",
              "Básico de cuadrado 3",
              "Básico de respiración 1: 1/3",
              "Básico de respiración 1: 2/3",
              "Básico de respiración 1: 3/3",
              "Básico de HanDary",
            ],
          },
          {
            title: "Básicos con armas - Mugi Gibom",
            content: ["25 básicos con Nunchakus"],
          },
          {
            title: "Llaves - Ho Sin Sul",
            content: [
              "1 - 20 Agarre de muñeca",
              "21 - 22 Agarre Manga",
              "23 - 24 Agarre Manga - codo",
              "25 - 26 Agarre Hombro",
              "27 - 28 Agarre Nuca - cuello",
              "29 - 30 Agarre solapa pecho",
              "31 - 32 Agarre solapa pecho subiendo",
              "33 - 34 Agarre solapa pecho invertido",
              "35 - 36 Agarre cinturón hacia abajo",
              "37 - 38 Agarre cinturón hacia arriba",
              "39 - 40 Agarre cinturón de lado",
              "41 - 42 Agarre lado pecho",
              "43 - 46 Agarre cabeza/pelo",
            ],
          },
        ],
      },
      {
        name: "Verde",
        color: ["#0b6730", "#0b6730"],
        grado: "7º Geup",
        rango: "Intermedio",
        significado: `La planta se convierte en una planta que va profundizando sus 
        raíces y fortaleciendo su tallo. El estudiante recibe su primer 
        cinturón oscuro, fortaleciéndose en el dominio de sus técnicas. El 
        verde simboliza el poder, movimiento intenso, concentración. La 
        planta que inicia su desarrollo.`,
        sections: [
          {
            title: "Figuras sin armas - Poomsaes",
            content: ["Joong Do Il Dan", "Won Il Dan", "Joong Do I Dan"],
          },
          {
            title: "Figuras con armas - Mugi Poomsaes",
            content: ["I Chol Bong Il Dan"],
          },
          {
            title: "Básicos sin armas - Gibom",
            content: [
              "Básico de cuadrado 1",
              "Básico de cuadrado 2",
              "Básico de cuadrado 3",
              "Básico de respiración 1",
              "Básico de HanDary",
              "2/4 Básicos de Kungam",
            ],
          },
          {
            title: "Básicos con armas - Mugi Gibom",
            content: ["30 básicos con Nunchakus"],
          },
          {
            title: "Llaves - Ho Sin Sul",
            content: [
              "46 Agarre de muñeca",
              "10 Puño contra puño",
              "12 Agarres por la espalda",
            ],
          },
        ],
      },
      {
        name: "Azul",
        color: ["#0000FF", "#0000FF"],
        grado: "6º Geup",
        rango: "Intermedio",
        significado: `La planta exhibe un  fértil crecimiento a través del desarrollo de 
        sus ramas y él desenvolviendo de sus hojas. El estudiante ha 
        ascendido a un plano más alto de concentración, foco y 
        coordinación de sus técnicas. El azul representa el centro, la mitad 
        del camino. El color del cielo hacia el cual tiende la vida.  `,
        sections: [
          {
            title: "Figuras sin armas - Poomsaes",
            content: [
              "Joong Do Il Dan",
              "Won Il Dan",
              "Joong Do I Dan",
              "Won I Dan",
            ],
          },
          {
            title: "Figuras con armas - Mugi Poomsaes",
            content: ["I Chol Bong Il Dan", "Jang Bong Il Dan"],
          },
          {
            title: "Básicos sin armas - Gibom",
            content: [
              "Básico de cuadrado 1",
              "Básico de cuadrado 2",
              "Básico de cuadrado 3",
              "Básico de respiración 1",
              "Básico de respiración 2: 1/2",
              "Básico de HanDary",
              "4 Básicos de Kungam",
            ],
          },
          {
            title: "Básicos con armas - Mugi Gibom",
            content: ["35 básicos con Nunchakus", "10 básicos con Jang bong"],
          },
          {
            title: "Llaves - Ho Sin Sul",
            content: [
              "46 Agarre de muñeca",
              "10 Puño contra puño",
              "12 Agarres por la espalda",
              "10 Patada contra puño",
              "14 Contra abrazos",
            ],
          },
        ],
      },
      {
        name: "Purpura",
        color: ["#613d97", "#613d97"],
        grado: "5º Geup",
        rango: "Intermedio",
        significado: `La planta se conviene en un alto y vigoroso árbol, con grandes 
        ramas y abundantes hojas. El conocimiento interiorizado es 
        demostrado a través de unas técnicas claras y precisas. El violeta 
        ejemplariza la madurez, el control, la no violencia.  `,
        sections: [
          {
            title: "Figuras sin armas - Poomsaes",
            content: [
              "Joong Do Il Dan",
              "Won Il Dan",
              "Joong Do I Dan",
              "Won I Dan",
              "Joong Do Sam Dan",
            ],
          },
          {
            title: "Figuras con armas - Mugi Poomsaes",
            content: [
              "I Chol Bong Il Dan",
              "Jang Bong Il Dan",
              "I Chol Bong I Dan",
            ],
          },
          {
            title: "Básicos sin armas - Gibom",
            content: [
              "Básico de cuadrado 1",
              "Básico de cuadrado 2",
              "Básico de cuadrado 3",
              "Básico de respiración 1",
              "Básico de respiración 2",
              "Básico de HanDary",
              "4 Básicos de Kungam",
            ],
          },
          {
            title: "Básicos con armas - Mugi Gibom",
            content: ["40 básicos con Nunchakus", "20 básicos con Jang bong"],
          },
          {
            title: "Llaves - Ho Sin Sul",
            content: [
              "46 Agarre de muñeca",
              "10 Puño contra puño",
              "12 Agarres por la espalda",
              "10 Patada contra puño",
              "14 Contra abrazos",
              "14 Sentados",
            ],
          },
        ],
      },
      {
        name: "Rojo",
        color: ["#FF0000", "#FF0000"],
        grado: "4º Geup",
        rango: "Avanzado",
        significado: `De la copa de las ramas empiezan a brotar los capullos de las 
        primeras flores. Las técnicas poseen plasticidad, potencia y 
        seguridad. El rojo abarca dinamismo y pasión en la ejecución. Es el 
        color de la energía vital presente en el universo.   `,
        sections: [
          {
            title: "Figuras sin armas - Poomsaes",
            content: [
              "Joong Do Il Dan",
              "Won Il Dan",
              "Joong Do I Dan",
              "Won I Dan",
              "Joong Do Sam Dan",
              "Won Sam Dan",
            ],
          },
          {
            title: "Figuras con armas - Mugi Poomsaes",
            content: [
              "I Chol Bong Il Dan",
              "Jang Bong Il Dan",
              "I Chol Bong I Dan",
              "Jang Bong I Dan",
            ],
          },
          {
            title: "Básicos sin armas - Gibom",
            content: [
              "Básico de cuadrado 1",
              "Básico de cuadrado 2",
              "Básico de cuadrado 3",
              "Básico de respiración 1",
              "Básico de respiración 2",
              "Básico de HanDary",
              "4 Básicos de Kungam",
              "Básico cuadrado grande 1",
            ],
          },
          {
            title: "Básicos con armas - Mugi Gibom",
            content: [
              "40 básicos con Nunchakus",
              "22 básicos con Jang bong",
              "10 básicos con Nunchakus dobles",
            ],
          },
          {
            title: "Llaves - Ho Sin Sul",
            content: [
              "46 Agarre de muñeca",
              "10 Puño contra puño",
              "12 Agarres por la espalda",
              "10 Patada contra puño",
              "14 Contra abrazos",
              "14 Sentados",
              "14 Agarre a dos brazos",
            ],
          },
        ],
      },
      {
        name: "Rojo-Marrón",
        color: ["#8B4513", "#FF0000"],
        grado: "3º Geup",
        rango: "Avanzado",
        significado: `Los capullos empiezan a brotar en bellas y luminosas flores 
        radiantes y dulce fragancia. El practicante empieza a ejecutar  
        Técnicas fluidas con exuberante elegancia. El rojo-marrón expresa 
        pasión en el movimiento.`,
        sections: [
          {
            title: "Figuras sin armas - Poomsaes",
            content: [
              "Joong Do Il Dan",
              "Won Il Dan",
              "Joong Do I Dan",
              "Won I Dan",
              "Joong Do Sam Dan",
              "Won Sam Dan",
              "Joong Do Sa Dan",
            ],
          },
          {
            title: "Figuras con armas - Mugi Poomsaes",
            content: [
              "I Chol Bong Il Dan",
              "Jang Bong Il Dan",
              "I Chol Bong I Dan",
              "Jang Bong I Dan",
            ],
          },
          {
            title: "Básicos sin armas - Gibom",
            content: [
              "Básico de cuadrado 1",
              "Básico de cuadrado 2",
              "Básico de cuadrado 3",
              "Básico de respiración 1",
              "Básico de respiración 2",
              "Básico de HanDary",
              "4 Básicos de Kungam",
              "Básico cuadrado grande 1",
              "Básico cuadrado grande 2",
            ],
          },
          {
            title: "Básicos con armas - Mugi Gibom",
            content: [
              "40 básicos con Nunchakus",
              "22 básicos con Jang bong",
              "20 básicos con Nunchakus dobles",
            ],
          },
          {
            title: "Llaves - Ho Sin Sul",
            content: [
              "46 Agarre de muñeca",
              "10 Puño contra puño",
              "12 Agarres por la espalda",
              "10 Patada contra puño",
              "14 Contra abrazos",
              "14 Sentados",
              "14 Agarre a dos brazos",
              "16 Saludo y conducción",
              "14 Llave contra puño",
            ],
          },
        ],
      },
      {
        name: "Marrón",
        color: ["#8B4513", "#8B4513"],
        grado: "2º Geup",
        rango: "Avanzado",
        significado: `La flor de origen a un fruto in maduro que empieza a desarrollarse. 
        El practicante expresa su conocimiento a través de la ejecución de 
        técnicas fluidas y potentes. El marrón caracteriza su neutralidad, 
        consciencia y concentración reflexiva.`,
      },
      {
        name: "Marrón-Negro",
        color: ["#8B4513", "#000"],
        grado: "1º Geup",
        rango: "Avanzado",
        significado: `El fruto ha obtenido su tamaño y forma definitiva, pero necesita 
        continuar nutriéndose para alcanzar su total maduración. El 
        practicante logra la exitosa combinación de técnica y conducta 
        adecuada. El marrón-negro representa la armonía, confianza y 
        perseverancia que llevan al autodominio. `,
        sections: [
          {
            title: "comming soon...",
            content: "comming soon...",
          },
        ],
      },
      {
        name: "Negro",
        color: ["#000", "#000"],
        grado: "1º Dan",
        rango: "Instructor",
        significado: `El fruto está finalmente maduro y posee nuevas semillas que inicia 
        un nuevo ciclo. Después de un largo y difícil camino, el estudiante 
        obtiene este "honroso grado"  del HAP-KI-DO.  
        El color del carbón puro, sencillo y sereno. Una roca que se formo a 
        partir de todo cuanto existe en la tierra, al que la naturaleza tardo 
        en formar millones de años y la cual necesita otro tanto para 
        convertiste en un esplendoroso diamante. 
        Negro como el abismo profundo de nosotros mismos, al que hay 
        que llegar con trabajo, paciencia, perseverancia y sabiduría. Es 
        quien ha alcanzado el conocimiento físico, técnico, mental, filosofo y  
        conductal necesario para empezar a dominar el HAP-KI-DO. Aquel 
        que; profundiza en la búsqueda en sí mismo, no precisa demostrar 
        cuanto sabe y puede enseñar sabia y generosamente el DO (camino) a otros `,
        sections: [
          {
            title: "Figuras sin armas - Poomsaes",
            content: [
              "Joong Do Il Dan",
              "Won Il Dan",
              "Joong Do I Dan",
              "Won I Dan",
              "Joong Do Sam Dan",
              "Won Sam Dan",
              "Joong Do Sa Dan",
              "Won Sa Dan",
              "Joong Do O' Dan",
              "Ki Hap",
            ],
          },
          {
            title: "Figuras con armas - Mugi Poomsaes",
            content: [
              "I Chol Bong Il Dan",
              "Jang Bong Il Dan",
              "I Chol Bong I Dan",
              "Jang Bong I Dan",
              "I Chol Bong Sam Dan",
              "Jang Bong Sam Dan",
              "Tang Bong Il Dan",
            ],
          },
          {
            title: "Básicos sin armas - Gibom",
            content: [
              "Básico de cuadrado 1",
              "Básico de cuadrado 2",
              "Básico de cuadrado 3",
              "Básico de respiración 1",
              "Básico de respiración 2",
              "Básico de HanDary",
              "4 Básicos de Kungam",
              "Básico cuadrado grande 1",
              "Básico cuadrado grande 2",
            ],
          },
          {
            title: "Básicos con armas - Mugi Gibom",
            content: [
              "40 básicos con Nunchakus",
              "22 básicos con Jang bong",
              "30 básicos con Nunchakus dobles",
              "Chuk kung chase",
              "Tang Bong Chase",
            ],
          },
          {
            title: "Llaves - Ho Sin Sul",
            content: [
              "46 Agarre de muñeca",
              "10 Puño contra puño",
              "12 Agarres por la espalda",
              "10 Patada contra puño",
              "14 Contra abrazos",
              "14 Sentados",
              "14 Agarre a dos brazos",
              "16 Saludo y conducción",
              "14 Llave contra puño",
              "20 Contra agarres de Judo",
              "14 Acostados",
              "20 Contra patada",
              "30 Contra cuchillo",
            ],
          },
        ],
      },
      {
        name: "Negro 2 Dan",
        color: ["#000", "#000"],
        grado: "2º Dan",
        rango: "Instructor Mayor",
        significado: `El fruto está finalmente maduro y posee nuevas semillas que inicia 
        un nuevo ciclo. Después de un largo y difícil camino, el estudiante 
        obtiene este "honroso grado"  del HAP-KI-DO.  
        El color del carbón puro, sencillo y sereno. Una roca que se formo a 
        partir de todo cuanto existe en la tierra, al que la naturaleza tardo 
        en formar millones de años y la cual necesita otro tanto para 
        convertiste en un esplendoroso diamante. 
        Negro como el abismo profundo de nosotros mismos, al que hay 
        que llegar con trabajo, paciencia, perseverancia y sabiduría. Es 
        quien ha alcanzado el conocimiento físico, técnico, mental, filosofo y  
        conductal necesario para empezar a dominar el HAP-KI-DO. Aquel 
        que; profundiza en la búsqueda en sí mismo, no precisa demostrar 
        cuanto sabe y puede enseñar sabia y generosamente el DO (camino) a otros `,
        sections: [
          {
            title: "Figuras sin armas - Poomsaes",
            content: [
              "Joong Do Il Dan",
              "Won Il Dan",
              "Joong Do I Dan",
              "Won I Dan",
              "Joong Do Sam Dan",
              "Won Sam Dan",
              "Joong Do Sa Dan",
              "Won Sa Dan",
              "Joong Do O' Dan",
              "Ki Hap",
              "Won O' Dan",
            ],
          },
          {
            title: "Figuras con armas - Mugi Poomsaes",
            content: [
              "I Chol Bong Il Dan",
              "Jang Bong Il Dan",
              "I Chol Bong I Dan",
              "Jang Bong I Dan",
              "I Chol Bong Sam Dan",
              "Jang Bong Sam Dan",
              "Tang Bong Il Dan",
            ],
          },
          {
            title: "Básicos sin armas - Gibom",
            content: [
              "Básico de cuadrado 1",
              "Básico de cuadrado 2",
              "Básico de cuadrado 3",
              "Básico de respiración 1",
              "Básico de respiración 2",
              "Básico de HanDary",
              "4 Básicos de Kungam",
              "Básico cuadrado grande 1",
              "Básico cuadrado grande 2",
            ],
          },
          {
            title: "Básicos con armas - Mugi Gibom",
            content: [
              "40 básicos con Nunchakus",
              "22 básicos con Jang bong",
              "30 básicos con Nunchakus dobles",
              "Chuk kung chase",
              "Tang Bong Chase",
              "Defensa de chuk kung con Tang Bong",
              "Ataque y defensa con Sai",
            ],
          },
          {
            title: "Llaves - Ho Sin Sul",
            content: [
              "46 Agarre de muñeca",
              "10 Puño contra puño",
              "12 Agarres por la espalda",
              "10 Patada contra puño",
              "14 Contra abrazos",
              "14 Sentados",
              "14 Agarre a dos brazos",
              "16 Saludo y conducción",
              "14 Llave contra puño",
              "20 Contra agarres de Judo",
              "14 Acostados",
              "20 Contra patada",
              "60 Contra cuchillo",
              "15 Tang Bong",
              "20 Contra armas de fuego cortas y largas",
              "10 Sentado en silla",
            ],
          },
        ],
      },
      {
        name: "Negro 3 Dan",
        color: ["#000", "#000"],
        grado: "3º Dan",
        rango: "Profesor",
        significado: `El fruto está finalmente maduro y posee nuevas semillas que inicia 
        un nuevo ciclo. Después de un largo y difícil camino, el estudiante 
        obtiene este "honroso grado"  del HAP-KI-DO.  
        El color del carbón puro, sencillo y sereno. Una roca que se formo a 
        partir de todo cuanto existe en la tierra, al que la naturaleza tardo 
        en formar millones de años y la cual necesita otro tanto para 
        convertiste en un esplendoroso diamante. 
        Negro como el abismo profundo de nosotros mismos, al que hay 
        que llegar con trabajo, paciencia, perseverancia y sabiduría. Es 
        quien ha alcanzado el conocimiento físico, técnico, mental, filosofo y  
        conductal necesario para empezar a dominar el HAP-KI-DO. Aquel 
        que; profundiza en la búsqueda en sí mismo, no precisa demostrar 
        cuanto sabe y puede enseñar sabia y generosamente el DO (camino) a otros `,
        sections: [
          {
            title: "Figuras sin armas - Poomsaes",
            content: [
              "Joong Do Il Dan",
              "Won Il Dan",
              "Joong Do I Dan",
              "Won I Dan",
              "Joong Do Sam Dan",
              "Won Sam Dan",
              "Joong Do Sa Dan",
              "Won Sa Dan",
              "Joong Do O' Dan",
              "Ki Hap",
              "Won O' Dan",
            ],
          },
          {
            title: "Figuras con armas - Mugi Poomsaes",
            content: [
              "I Chol Bong Il Dan",
              "Jang Bong Il Dan",
              "I Chol Bong I Dan",
              "Jang Bong I Dan",
              "I Chol Bong Sam Dan",
              "Jang Bong Sam Dan",
              "Tang Bong Il Dan",
            ],
          },
          {
            title: "Básicos sin armas - Gibom",
            content: [
              "Básico de cuadrado 1",
              "Básico de cuadrado 2",
              "Básico de cuadrado 3",
              "Básico de respiración 1",
              "Básico de respiración 2",
              "Básico de HanDary",
              "4 Básicos de Kungam",
              "Básico cuadrado grande 1",
              "Básico cuadrado grande 2",
            ],
          },
          {
            title: "Básicos con armas - Mugi Gibom",
            content: [
              "40 básicos con Nunchakus",
              "22 básicos con Jang bong",
              "30 básicos con Nunchakus dobles",
              "Chuk kung chase",
              "Tang Bong Chase",
              "Defensa de chuk kung con Tang Bong",
              "Ataque y defensa con Sai",
              "Desenfundes y enfundes con sable",
            ],
          },
          {
            title: "Llaves - Ho Sin Sul",
            content: [
              "46 Agarre de muñeca",
              "10 Puño contra puño",
              "12 Agarres por la espalda",
              "10 Patada contra puño",
              "14 Contra abrazos",
              "14 Sentados",
              "14 Agarre a dos brazos",
              "16 Saludo y conducción",
              "14 Llave contra puño",
              "20 Contra agarres de Judo",
              "14 Acostados",
              "20 Contra patada",
              "60 Contra cuchillo",
              "15 Tang Bong",
              "20 Contra armas de fuego cortas y largas",
              "10 Sentado en silla",
              "14 con bastón",
              "10 Tang Bong contra Mokkum",
            ],
          },
        ],
      },
      {
        name: "Negro 4 Dan",
        color: ["#000", "#000"],
        grado: "4º Dan",
        rango: "Maestro",
        significado: `El fruto está finalmente maduro y posee nuevas semillas que inicia 
        un nuevo ciclo. Después de un largo y difícil camino, el estudiante 
        obtiene este "honroso grado"  del HAP-KI-DO.  
        El color del carbón puro, sencillo y sereno. Una roca que se formo a 
        partir de todo cuanto existe en la tierra, al que la naturaleza tardo 
        en formar millones de años y la cual necesita otro tanto para 
        convertiste en un esplendoroso diamante. 
        Negro como el abismo profundo de nosotros mismos, al que hay 
        que llegar con trabajo, paciencia, perseverancia y sabiduría. Es 
        quien ha alcanzado el conocimiento físico, técnico, mental, filosofo y  
        conductal necesario para empezar a dominar el HAP-KI-DO. Aquel 
        que; profundiza en la búsqueda en sí mismo, no precisa demostrar 
        cuanto sabe y puede enseñar sabia y generosamente el DO (camino) a otros `,
        sections: [
          {
            title: "Figuras sin armas - Poomsaes",
            content: [
              "Joong Do Il Dan",
              "Won Il Dan",
              "Joong Do I Dan",
              "Won I Dan",
              "Joong Do Sam Dan",
              "Won Sam Dan",
              "Joong Do Sa Dan",
              "Won Sa Dan",
              "Joong Do O' Dan",
              "Ki Hap",
              "Won O' Dan",
            ],
          },
          {
            title: "Figuras con armas - Mugi Poomsaes",
            content: [
              "I Chol Bong Il Dan",
              "Jang Bong Il Dan",
              "I Chol Bong I Dan",
              "Jang Bong I Dan",
              "I Chol Bong Sam Dan",
              "Jang Bong Sam Dan",
              "Tang Bong Il Dan",
            ],
          },
          {
            title: "Básicos sin armas - Gibom",
            content: [
              "Básico de cuadrado 1",
              "Básico de cuadrado 2",
              "Básico de cuadrado 3",
              "Básico de respiración 1",
              "Básico de respiración 2",
              "Básico de HanDary",
              "4 Básicos de Kungam",
              "Básico cuadrado grande 1",
              "Básico cuadrado grande 2",
            ],
          },
          {
            title: "Básicos con armas - Mugi Gibom",
            content: [
              "40 básicos con Nunchakus",
              "22 básicos con Jang bong",
              "30 básicos con Nunchakus dobles",
              "Chuk kung chase",
              "Tang Bong Chase",
              "Defensa de chuk kung con Tang Bong",
              "Ataque y defensa con Sai",
              "Desenfundes y enfundes con sable",
              "Manejo básico de sable",
              "Manejo de sable y aplicaciones reales de corte.",
            ],
          },
          {
            title: "Llaves - Ho Sin Sul",
            content: [
              "46 Agarre de muñeca",
              "10 Puño contra puño",
              "12 Agarres por la espalda",
              "10 Patada contra puño",
              "14 Contra abrazos",
              "14 Sentados",
              "14 Agarre a dos brazos",
              "16 Saludo y conducción",
              "14 Llave contra puño",
              "20 Contra agarres de Judo",
              "14 Acostados",
              "20 Contra patada",
              "60 Contra cuchillo",
              "15 Tang Bong",
              "20 Contra armas de fuego cortas y largas",
              "10 Sentado en silla",
              "14 con bastón",
              "10 Tang Bong contra Mokkum",
              "10 con Cinturón",
              "10 defensa de chuk kung con mano vacía",
              "10 Tang Bong contra Dangom",
            ],
          },
        ],
      },
    ],
  },
  // Técnicas de defensa personal
  {
    title: "Técnicas de Defensa Personal",
    icon: "shield-account",
    iconType: "community",
    subSections: [
      {
        title: "Llaves mano igual 1-46 (Principiante)",
        content: `
  -----------------------------------------------
  BLANCO
  -----------------------------------------------
  
  --AGARRE DE MUÑECA
  1.  Chuzón a los ojos con la palma hacia arriba, y puño con el nudillo medio a los metacarpos.
  
  2.  Batang son al plexo y saliendo por el lado de la mano.
  
  3.  Pan chumok al plexo y saliendo por el lado de la mano.
  
  4.  Pie por dentro de las piernas del otro, chu chum sogui y codazo a las costillas.
  
  5.  Gira la mano hacia adentro y mantequilla.
  
  6.  Chuzón hacia atrás en diagonal en coap sogui y devuelve con codazo.
  
  7.  Expone la muñeca, batang son y con la mano liberada golpe al cuello con el filo de la mano.
  
  8. Igual que la 7 pero gira con un codazo al plexo.
  
  9. Levanta el brazo y se mete en chu chum sogui y codazo.
  
  10. Igual que la 6 pero con un golpe a la cara con la mano abierta.
  
  11. Con la pierna del mismo lado, chokto dologuí.
  
  12. Con la pierna contraria, rodillazo.
  
  13. Con la pierna del mismo lado, bal dung a la axila.
  
  14. Agarra del cabello y golpea con un rodillazo a la cara.
  
  15. Agarra por la nuca y rodillazo en el plexo.
  
  
  -----------------------------------------------
  AMARILLO
  -----------------------------------------------
  
  16. Agarra la mano por los metacarpos, y la tuerce hacia afuera.
  
  17. Agarra la mano por la muñeca y la tuerce hacia adentro y hace presión en el codo extendido.
  
  18. Agarra la muñeca y gira por dentro hacia afuera ejecutando 16.
  
  19. Misma 5 pero atrayendo al plexo y asestando un codazo descendente en el codo.
  
  20. Hace presión en el musculo lateral del codo y gira por dentro, agarra del cinturón y el cabello y ejecuta chokto doligui en la parte anterior de la rodilla.
  
  -- AGARRE DE MUÑECA/MANGA DE LA CASACA
  21.	Agarra los metacarpos, torsión hacia adentro y pan chumok a la axila.
  
  22.	Péndulo a la par con batang son el plexo.
  
  -- AGARRE DE CODO.
  23.	Sujeta los metacarpos para asegurar la mano, y ejecuta pion son por dentro y hacia abajo.
  
  24.	Misma 23 pero continua el movimiento pasando por debajo del brazo y hace presión en el codo con el antebrazo.
  
  -- AGARRE DE HOMBRO.
  25.	Igual que 21.
  
  26.	Rompe el cuello girándolo.
  
  -- AGARRE DE NUCA.
  
  27.	 Con las dos manos rodeando el codo ejecuta presión hacia abajo. (partir el codo)
  
  28.	Tango.
  
  
  -----------------------------------------------
  NARANJA
  -----------------------------------------------
  
  -- AGARRE DE SOLAPAS DE LA KASACA.
  29.	Saludo chino.
  
  30.	Igual que 17.
  
  31.	(subiendo) dedo
  
  32.	Golpe con el antebrazo al codo.
  
  33.	(invertida) cocodrilo.
  
  34.	Golpe con el antebrazo al codo.
  
  -- AGARRE DE CINTURÓN.
  35.	Pan chumok a los metacarpos.
  
  36.	Aplauso al codo.
  
  37.	(invertido) dedo.
  
  38.	(invertido) asegura y presión hacia arriba agarrado de la casaca.
  
  39.	(de lado) asegura y ejecuta iop chagui.
  
  40.	(de lado) asegura con el antebrazo por debajo, con el otro brazo lo baja y sube haciendo presión en el cuello con los dos brazos.
  
  -- AGARRE DE PECHO.
  41.	29
  
  42.	Codazo al codo, devuelve con otro codazo por dentro y ejecuta un último codazo a la cara.
  
  -- AGARRE DE CABELLO/CABEZA.
  43.	Toalla.
  
  44.	Saludo chino.
  
  45.	Cocodrilo.
  
  46.	Bloqueo hacia abajo y puño al mentón.
          `,
      },
      {
        title: "Llaves mano contraria 1-46 (Principiante)",
        content: `
  This content comming soon...
          `,
      },
      {
        title: "Puño contra puño (Intermedio)",
        content: `
  1-montong bakkat makki batang son al torax.
  
  2-montong bakkat makki pion son al torax.
  
  3-montong bakkat makki agun son al cuello.
  
  4-montong bakkat makki golpe con el filo de la mano al cuello.
  
  5-montong ant makki y codazo de fuera.
  
  6-montong ant makki y codazo desde afuera.
  
  7-montong ant makki y golpe con el filo de la mano al cuello.
  
  8-giro con bloqueo y 8 (de las básicas).
  
  9-Olgoro olgul makki y golpe al plexo con los nudillos.
  
  10-esquiva y puñoo a las costillas.
          `,
      },
      {
        title: "Agarres por la espalda (Intermedio)",
        content: `
  AGARRE DE LA NUCA
  1 - chu chum sogui y golpe con una mano al torso y luego golpe con la otra a la cara.
  2 - Tango.
  
  AGARRE DE LOS HOMBROS
  3 - 16
  4 - medio 16 y golpe a la mandibula.
  
  AGARRE DE LOS CODOS
  5 - chu chum sogui y empujon con el codo.
  6 - aikido, llave de codo.
  
  AGAARRE DE LAS MANGAS
  7 - arriba y torsión.
  8 - arriba y lanzamiento.
  
  AGARRE DE LAS MUÑEECAS
  9 - agarre de muñecas y dip
  10 - giro y 18
  
  AGARRE DEL CINTURON POR DETRÁS
  11 - Montong nulo bakatt makki y batang son a las costillas.
  12 - Codazo a la cara.
          `,
      },
      {
        title: "Patada contra puño (Intermedio)",
        content: `
  1 - Antari.
  
  2 - Bakkatari.
  
  3 - Ap chuk ap chagi.
  
  4 - yop.
  
  5 - antari chanoki (a la rodilla).
  
  6 - Coje el brazo y de la nuca y murup.
  
  7 - Agarra la muñeca y Dollyo.
  
  8 - Agarra la muñeca y Tuit Dollyo desde fuera.
  
  9 - Tora Yop.
  
  10 - Huryo.
          `,
      },
      {
        title: "Contra Abrazos (Intermedio)",
        content: `
  URRÁCARRANA SUELTA.
  
  1-bajo con fuerza, chu chum sogui, y codazo a la cara.
  
  2-bajo con fuerza, chu chum sogui, y 16.
  
  
  MEDIA URRÁCARRANA.
  
  3-bajo con fuerza, chu chum sogui, y pion son a la mano.
  
  4-bajo con fuerza, chu chum sogui, y codazo infeior por un lado y superior por el otro.
  
  
  URRÁCARRANA COMPLETA.
  
  5-cojo un dedo medio y bajo.
  
  6-bajo con fuerza, chu chum sogui, y cojo la cabeza del otro y lo lanzo por el frente.
  
  
  ABRAZO BAJO: MANO - MUÑECA.
  
  7-pion son a los metacarpos.
  8-torsión y pesion muñeca contra mano.
  
  
  ABRAZO BAJO: DEDOS ENTRELAZADOS.
  
  9-cojo un dedo medio y bajo.
  
  10-coje la mano por los metacarpos y tuerce hacia adentro, y luego patada.
  
  
  ABRAZO DE FRENTE.
  
  11-presión en la ingle y dual batang son.
  
  12-Presión en la ingle y cabeza hacia atrás.
  
  
  ABRAZO DE ESPALDA.
  
  13-presión en la ingle y codazo a la cara.
  
  14-presión en la ingle y codazo infeior por un lado y superior por el otro.
          `,
      },
      {
        title: "Sentado (Intermedio)",
        content: `
  AGARRE DE MUÑECA
  
  1- Como 16 de básicas.
  
  2- Como 17 de básicas.
  
  
  AGARRE DE MUÑECA Y HALA.
  
  3- Como 9 de básicas
  
  4- Como 18 de básica 
  
  
  AGARRE DE CABELLO/CABEZA
  
  5- Toalla
  
  
  AGARRE DE LA NUCA
  
  6- Sacrificio
  
  7- Como 27 de básicas
  
  
  AGARRE DE PECHO/CASACA 
  
  8- Como 29 de básicas
  
  
  DE PIE DE FRENTE
  
  9- Coge la rodilla por dentro y pyon-son Kup a la ingle
  
  10- Dual Pyon-son Gi a los metatarsos
  
  11- Engancho por dentro un pie, y con el otro ejecuto Yop Chanoki
  
  12- Engancha con los pies por dentro hacia fuera, empujo con las dos canillas
  
  
  DE PIE DE LADO
  
  13-agarro por dentro(invertido) y ejecuta An Palkup a la corba de la rodilla
  
  14-trenza con los dos pies
          `,
      },
      {
        title: "Agarres a dos manos (Avanzado)",
        content: `
  1-Patada a los genitales, como 17 de las básicas.
  
  2-Patada a los genitales, como 18 de las básicas.
  
  3-Patada a los genitales, lanzamiento como de judo por fuera.
  
  4-Choca muñecas hacia adentro y arriba, tuerce y cruza hacia abajo y lanzamiento de aikido con los brazos cruzados.
  
  5-Agarra con la mano contraria la muñeca del atacante, levanta sobre el hombro a partir el codo y luego lanzamiento de de judo por dentro.
  
  6-Como 20 de las básicas pero lanzando.
  
  7-Como 20 de las básicas pero hala el brazo doblado hacia atrás.
  
  8-Como 4 pero juntan espaldas y deja caer.
  
  9-Abanico con las dos manos.
  
  10-Conducción hacia atras con lanzamiento al final.
  
  
  (ROJO MARRÓN)
  
  CODOS
  
  11-Dual monton bakkat son nal maki/Batang son hacia fuera. 
  
  12-Como 23 de las básicas.
  
  HOMBROS
  
  13-Agacho y por un lado agarro la cadera y giro al oponente.
  
  14-Agacho y por un lado desnuca.
          `,
      },
      {
        title: "LLave contra puño (Avanzado)",
        content: `
  *puño derecho*
  
  1.  Con la mano derecha agarra la mano atacante hacia afuera y ejecuta como 17 de básicas devolviendola.
  
  2.  Con la mano izquierda agarra hacia adentro y devuelve como 16 de básicas.
  
  3.  Uen Montong Bakkat SonNal Makki, Chapki, ejecuta como 18 de básicas.
  
  4.  Orum Montong Bakkat SonNal Makki, Chapki, y golpea Uen Batang-Son a la cara, pasa la mano izquierda por debajo del codo del brazo atacante y ejerce presion hacia afuera mientras la mano derecha hace presión hacia atrás.
  
  5.  Orum Montong Bakkat SonNal Makki, agarra con las dos manos y continua el giro hacia atrás ejerciendo presión con el hombro en el brazo del atacante.
  
  6.  Uen Montong Bakkat SonNal Makki, Chapki, Con la mano derecha sujeto el hombro del atacante con mi codo por debajo, junto las dos manos y ejerzo presión hacia abajo por detrás del hombro.
  
  7.  Uen Montong Bakkat SonNal Makki, con la mano derecha por debajo del codo del atacante, le giro el codo hacia el frente y lo dejo sostenido con la mano izquierda, y Orum Batang-Son al plexo.
  
  8.  Uen Montong Bakkat SonNal Makki, con la mano derecha por debajo del codo del atacante, le giro el codo hacia el frente y lo dejo sostenido con la mano izquierda, y Orum Pyon-Son Gi al Cuello mientras lo barro con la pierna iderecha.
  
  9.  Orum Chapki y devuelve como 21 de básicas, mientras golpea BalDung Bandal Ap Chagi.
  
  10. Orum Chapki y devuelve como 21 de básicas, mientras golpea BalDung Bandal Ap Chagi y Ap Chagi en la cadera.
          `,
      },
      {
        title: "Saludo y conducción (Avanzado)",
        content: `
  1-  Presián en el aductor del dedo pulgar del oponente.
  
  2-  Fractura del dedo pulgar del oponente, con el dedo pulgar hacia un lado.
  
  3-  Con el indice rodeando el dedo pulgar, fractura hacia abajo.
  
  4-  Con el indice rodeando el dedo pulgar, fractura hacia un lado.
  
  5-  Como las 5 de las básicas, pero el primer golpe al dedo pulgar.
  
  6-  Presión al pronador del codo y Gasum Pal Kub Chigi.
  
  7-  Gira hacia atrás del oponente,  agarrando el hombro opuesto del brazo agarrado y hala hacia atrás.
  
  8-  Anaconda rodeando el brazo del agresor y presión hacia afuera con su codo.
  
  9-  Hala con ambas manos y codazo al codo del oponente, igual que 5 de llave contra puño.
  
  10- Igual que 5 de agarres a ambos brazos.
  
  11- Con la palma libre, presiona el codo del atacante hacia abajo y hala para tumbar.
  
  12- Con el filo de la mano libre presiona la base de la muñeca del atacante hacia abajo y hala para tumbar.
  
  13- Igual que 18 de básicas.
  
  14- Gira por el frente y avanza con la mano en la espalda.
  
  15- Lanza con 9 de básicas.
  
  16- Patea a los genitales, la mano libre flexxiona el codo del oponente. Gira por fuera y lanza como palanqueando el codo (Parecida a la 7 de llave contra puño.
          `,
      },
      {
        title: "Defensa contra agrres de Judo (Avanzado)",
        content: `
  CON BLOQUEO.
  
  1-  Bloqueo de águila hacia afuera (la mano izquierda bloquea la mano izquierda).
  
  2-  Bloqueo de águila hacia dentro (la mano izquierda bloquea la mano derecha).
  
  3-  Montong Son-Nal Dung Pal Makki (por fuera)
  
  4-  Montong Gecho Son-Nal Dung Pal Makki.
  
  5-  Montong Gecho Son-Nal Makki.
  
  6-  Doble bloqueo como Agum-Son hacia arriba en los codos.
  
  
  CON GOLPE.
  
  7-  Montong Gecho Son-Nal Makki, Dul Uon Galbi Gecho Chumok Chigi
  
  8-  Montong Gecho Pal Makki, Dul Uon Neryo Batang-Son Gasum Chigi.
  
  9-  Montong Gecho Son-Nal Makki, Dul Uon An Son-Nal Mok Chigi.
  
  10- Montong Gecho Son-Nal Makki, Dul Uon An Batang-Son kui Chigi.
  
  11- Montong Gecho Son-Nal Makki, Chapki Pachigi Mouri Chigi.
  
  
  CON PATADAS.
  
  12- Sale en diagonal hacia adelante, bloqueo de águia por fuera (mano derecha bloquea mano derecha) La mano libre agarra el codo del oponente. Con la pierna de atrás en AnDari Chanoki a la rodilla.
  
  13- Sale en diagonal hacia adelante, bloqueo de águia por fuera (mano derecha bloquea mano derecha) La mano libre agarra el codo del oponente. Con la pierna de atrás BalDung Chagi al abdomen.
  
  14- Sale en diagonal hacia adelante, bloqueo de águia por fuera (mano derecha bloquea mano derecha) La mano libre agarra el codo del oponente. Con la pierna de atrás Mureup Chagi al costado.
  
  15- Montong Gecho Son-Nal Makki, Chapki, Myung Chi Mureup Chagi.
  
  
  CON LANZAMIENTO.
  
  16- Montong Gecho Son-Nal Makki, Chapki y con ambas manos agarran como 18 de básicas.
  
  17- Mongong Gecho Son-Nal Makki, Chapki, con una de las manos agarra la nuca y lanza.
  
  18- Mongong Gecho Son-Nal Makki, Chapki, extiende uno de los brazos del atacante con la palma hacia arriba giraandolo hacia abajo y adentro, el brazol libre  palanquea el codo del atancante, apoya en el hombro el brazo del oponente, haciendo presion hacia abao para lanzar.
  
  19- Mongong Gecho Son-Nal Makki, Chapki, extiende uno de los brazos del atacante con la palma hacia arriba giraandolo hacia abajo y adentro, agarra el tobillo delantero del atacante para ayudar a lanzarlo por encima de los hombros.
  
  20- Mongong Gecho Son-Nal Makki, Chapki, extiende uno de los brazos del atacante con la palma hacia arriba giraandolo hacia abajo y adentro, agarra la cintura del atancante para lanzarlo de a cadera.
  
  
  AGARRADO DE LAS SOLAPAS E IMPIDE SER LANZADO.
  
  21- ChuChum Sogi.
  
  22- Okoru Are Makki
  
  23-Pal Kup Chigi a la cadera evitando que gire.
  
  24-Neryo An Batang Makki a la cadera haciendo que se sobregire.
  
  25- Empuja el hombro trasero del oponente para desontrolar su giro.
  
  26-Hace sobre girar la cabeza del oponente en el sentido del giro empujandolo del menton para hacerlo caer.
          `,
      },
      {
        title: "Acostado (Avanzado)",
        content: `
  This content is comming soon...
          `,
      },
      {
        title: "Llave contra patada (CN)",
        content: `
  This content is comming soon...
          `,
      },
      {
        title: "Defensa contra cuchillo (CN)",
        content: `
  This content is comming soon...
          `,
      },
    ],
  },
  // básicos sin armas
  {
    title: "Básicos Sin Armas",
    icon: "karate",
    iconType: "community",
    subSections: [
      {
        title: "Básico de cuadrado 1",
        content: `
Il Chase SaJoe

ChumChum Sogi, Mon Tong An SonNal Chireugi, Batang-Son Chirugui.
        `,
      },
      {
        title: "Básico de cuadrado 2",
        content: `
I Chase SaJoe

Chum Chum Sogi, Mon Tong Bakkat SonNal Makko, Agum Son Chirugui.
        `,
      },
      {
        title: "Básico de cuadrado 3",
        content: `
Sam Chase SaJoe

Chum Chum Sogi, Are SonNal Makko, Pyon-Son Kub Chirugui.
        `,
      },
      {
        title: "Básico de cuadrado 4",
        content: `
Sa Chase SaJoe Ap Kubi Son Mok

1 - Desplaza al lado, Ap Kubi Are Pyojeok Son Mok Chigi, Pyojeok Bakkata Dary Chagi. 
2 - Ap Kubi Pyojeok Pal Kup Chigi, Dung Chumok Gigi. 
(16 Lados).
`,
      },
      {
        title: "Básico de cuadrado 5",
        content: `
O' Chase, Ap Kubi, Me Jeumok Oligi

1 - Desplaza al lado, desde Mo Chum Chum Sogi, Me Jeumok Oligi, en el mismo puesto cambia a Ap Kubi. 
2 - Mon Tong Pam Jeumok Chirigi. Chapki, Ap Chagi Neryo Batang Makki, 
3 - Dip Kubi, Pyojeok Neryo Me Jeumok Bom Sogi Bande Olgul Makki, Parop Olgul Makki, 
4 - Chu Chum Sogi Iop Jeumok Chigi.
(24 Lados)
`,
      },
      {
        title: "Básico de Garza",
        content: `
ChumChum Sogi, HakDary Sogi, Ap Kubi Sogi

1 - Chuchum Sogui Montong Chumok Chirugui. Iop Andari Sogui, Wesanteul Makki, 
2 - Ap Kubi, Baro Montong Chumok Chirugui, Pal Kup Chiruigui. (Grito).
`,
      },
      {
        title: "Básico de KunGam #1",
        content: `
Il Chase KunGam

1 - Ap Dip Kubi Kun Gam Iop Jeumok Chirugi, Ap Kubi Bande Montong ChumokChirugi, Ap Chagi (Grito). 
2 - Dip Dip Kubi Sogui, Mon Tong Son Nal Makki.
`,
      },
      {
        title: "Básico de KunGam #2",
        content: `
I Chase KunGam

1 - Ap Dip Kubi, Kun Gam Yop Jeumok Chigi, An Son Nal Chigo, Bakkat Son Nal Chigi. 
2 - Ap Kubi Bande Montong Chumok Chigi, Ap Chagui (Kihap). 
3 - Dip Dip Kubi Sogui, Montong Son Nal Koduro Makki.
        `,
      },
      {
        title: "Básico de KunGam #3",
        content: `
Sam Chase KunGam

1 - Ap Dip Kubi, Kun Gam Son Nal Makki, Are Son Nal Koduro Makki, Huryo Chagi, grito. 
2 - Ap Ap Kubi Olgul Makki, Montong Chumok Chigui, Sin Avanzar Dip Kubi Montong Son Nal Koduro Makki.
        `,
      },
      {
        title: "Básico de KunGam #4",
        content: `
Sa Chase KunGam

1 - Ap Dip Kubi, Kun Gam Son Nal Makki, Are Goduro Son Nal Makki, al frente patea Ap Chagi y regresa a Dip Kubi. 
2 - Anja Huryo Chagi. Grito. Terminando el giro en Dip Kubi, Kun Gam Son Nal Makki.
3 - con el pie de atrás Anja Dollyo Chagi y regresa a Dip Kubi Montong Koduro Son Nal Makki girando sobre el pie atrasado.
        `,
      },
      {
        title: `Básico de Respiración 1`,
        content: `
Il Chase Jo Jub Tang Jong

BLANCO

1.	JeomBe. Inhala desde Moa Sogi, eleva los brazos en Kyop Son JeomBe Sogi, baja los brazos por los costados a la vez que exhala. Inhala de nuevo, separa la pierna izquierda para quedar en Chuchum Sogi, Montong Tang Jong Dul Batang Son, Montong Okkoro Makki, vuelve las manos a la cintura en DoJeumokeori Sogi y de nuevo, Montong Dul Batang Son Chigi.

2.	Al lado izquierdo las dos manos la de abajo empuñada y la de arriba abierta con los dedos juntos, golpea Uen Montong Batang Son Chigi, recoge al otro lado, la mano izquierda queda por encima y abierta y la de abajo empuñada, golpea Orum Montong Batang Son Chigi.

3.	Hace Uen Bakkat SonNal Makki, con la derecha, un giro y Deung Jeumok en la palma de la mano izquierda, y hace esto por el lado derecho (repite 2 veces por cada lado)

4.	Después del Deung Jeumok desliza la mano derecha por el antebrazo izquierdo hasta llegar al codo, realiza un giro hacia afuera y golpea Uen Montong Deung Jeumok, abre la mano hacia la derecha y golpea Pal Kub Chigi a la mano abierta, realiza un giro y golpea de nuevo Montong Deung Jeumok (repite este movimiento 2 veces por cada lado)

5.	Hace una "X" con los antebrazos y realiza Dul Yop Son Mok Chigi simultáneamente a cada lado lentamente con la respiración (repite este movimiento 4 veces.)

6.	Sube el brazo izquierdo y baja el derecho, quedando en Uen Olgul Son Mok Chigi, Orum Are Batang Makki, invierte con la respiración lenta, sube derecha y baja izquierda con los mismos dos movimientos (repite este movimiento 4 veces sin contar los anteriores) 


AMARILLO.
  
7.	Recoge en Koap Sogi al lado derecho, y realiza Uen Montong Bakkat SonNal Makki Tang Jong, pasa a Chuchum, Sogi Orum Montong Jeumok Chigi. (repite este movimiento 3 veces más cambiando de lado) terminando con Orum Montong Bakkat Makki Tang Jong.

8.	Pasa a Chuchum Sogi, golpea Orum Montong Pyon Son Gi a la vez que la palma izquierda cure el codo derecho por encima, hace lo mismo por el otro lado (repite este movimiento una vez más por cada lado)

9.	Inhala desde Moa Sogi, eleva los brazos en Kyop Son Chumbi Sogi, baja los brazos por los costados a la vez que exhala. Inhala de nuevo, avanza un paso largo al frente y cae en Koap Sogi Dul Montong Pyon-Son Gi Chigi (Grito).


NARANJA.

10.	Abre al lado izquierdo Ap Kubi, con la mano izquierda marca la zona genital al frente y ejecuta Are Ap Son-Mok Chigi a la mano abierta, realiza un círculo hacia atrás con ambas manos abiertas a la vez que se ejecuta Orum Mureup Chagi (repite el mismo movimiento al lado derecho y repite una vez más por cada lado) terminando al lado derecho en Uen Handari Sogi con las manos por encima de la rodia y apuntando hacia afuera.

11.	Gira al frente, cae en ChuChum Sogi y realiza Orum Chumok Chirigui a la zona genital, Uen Montong Chumok Chirigui en la zona del ombligo, Montong Chumok Chirigui en la zona del plexo y Uen Olgul Chumok Chirigui a la cara.

12.	Recoge a Moap Sogui, respira como al principio. Chumbe.
        `,
      },
      {
        title: "Básico de Respiración 2",
        content: `
I Chase Jo Jub Tang Jong

AZUL

1.	Chumbe. Inhala desde Moap Sogui, eleva los brazos en Kyopson Chumbi Sogui, baja los brazos por los costados a la vez que exhala. Inhala de nuevo, separa la pierna izquierda para quedar en Chuchum Sogui, Are Tang Jong, Olgul Tang Jong (arriba abajo, abajo arriba) Cuatro veces.

2.	En Ap Kubi, Neryo Son Nal Chigui, Pyojeok Son Nal Neeryo Son Nal Chigui la mano izquierda.

3.	En Ap Kubi, Kawi Batang Makki (empieza mano derecha arriba), An Tary Chanoki, cae atrás en Dip Kubi y Montong Son Mal Bakkat Makki (patea primero la pierna derecha) (4 movimientos).

4.	Recoge la pierna izquierda en y en Chuchum Sogui, Son Nal Are Jecho Makki, Iop Chanoki (empieza izquierda), cae en Ap Chuchum Sogui y Son Nal Weasanteul Makki, recoge de nuevo a Chuchum Sogui Son Nal Are Jecho Makki y repite por el otro lado. (4 movimientos).

5.	4 Montong Batang Son Chigui (empeza mano izquierda).

6.	Mon Dolyo Dip Kubi, Son Nal Are Koduro Makki (Bloqueo primero mano izquierda) (4 movimientos) 


PÚRPURA

7.	Recoge la pierna izquierda a Dwichuk Moap Sogui, respira como al inicio Kyopson Chumbi Sogui a la vez que bloquea Montong Okkoru Makki. Hace Chun Ban Nak Bop, y desde ahí rollo lateral , golpea Wen Batang Son Chigui, Dung Chumok Chigui. Grito. (mano contraria al pie adelantado).

8.	Desde la posición anterior hace rollo lateral al lado izquierdo y por el lado izquierdo (termina pierna izquierda adelante) a la vez que golpea Orum Batang Son Chigui, Dung Chumok Chigui. (mano contraria al pie adelantado), Sin levantarse da media vuelta en la misma posición con las manos con Montong Koduro Son Nal Makki como guardia (mano acompañante empuñada). Realiza el mismo movimiento por el otro lado. (4 movimientos)

9.	Se levanta por la espalda y queda en Ap Kubi, a la vez que hace inhalación arriba (con las manos a la altura del pecho y las palmas hacia arriba), sigue al frente, exhala estirando los brazos completamente en Dul Pal Batang Son Chigui, Luego Dul Pal An Son Nal Chigui rápido, Cargándolo desde atrás y con un leve zapateo. Recoge al otro lado. (4 movimientos).

10.	Gira por la espalda ¼ de vuelta en Ap Kubi, batang son Montong Bakkat Nullo Makki, Dul Uon Chumok Chigui, Agum-Son Chigui (abdomen, plexo, garganta). Avanza en koap Sogui (derecha por delante) (acompaña cerrada). Grito. Se desenrosca el Koap Sogui para quedar en Chuchum Sogui con Are Tang Jong. Recoge a Moap Sogui, respira como al principio. Chumbe.

        `,
      },
    ],
  },
  // básicos con armas
  {
    title: "Básicos Con Armas",
    icon: "sword",
    iconType: "community",
    subSections: [
      {
        title: "Básicos con un Nunchakus",
        content: `
BLANCO

1.  Medio círculo hacia al frente y hacia arriba y cambio de mano.

2.  Vuelta por dentro y cambio de mano.

3.  Vuelta por dentro, por fuera y cambio de mano.

4.  Cambios por debajo del hombro y hacia arriba.

5.  Golpe abajo al lado contrario, al otro lado, sube y cambia de mano.

6.  3 giros hacia el frente bajando y 3 giros hacia atrás subiendo y cambia de mano.

7.  Igual que 4+3 sube y cambia de mano.

8.  Igual que 5 reemplazando el último golpe con un giro por fuera hacia atrás y cambia de mano.

9.  Inicia como 5 y envía el Nunchaku por entre las piernas, sube como 1 y cambia de mano.

10. Golpes hacia adentro y a la cabeza cambiando de mano a lado y lado.


AMARILLO

11. Desde la axila giro al frente y por dentro.

12. Igual que 11 cambiando de mano iniciando con mano cruzada.

13. Igual que 11 pero el giro por fuera.

14. Igual que 13 cambiando de mano iniciando con mano cruzada.

15. Igual que 11 pero el giro por dentro y por fuera.

16. Igual que 15 cambiando de mano iniciando con mano cruzada.

17. Igual que 15 pero un lado.

18. Igual que 17 cambiando de mano iniciando con mano cruzada.

19. Igual que 18 pero cambia de lado pasando el Nunchaku por el cuello y desenvuelve terminando el 18.

20. Igual que 4 invertido.


NARANJA

21. Igual que 15 devuelve con el filo de la otra mano.

22. Igual que 17 a un lado, sigue el giro, pasa por detrás terminado con 3 a un lado.

23. Igual que 4 por detrás.

24. Vuelta por encima y 5.

25. Igual 24 cambiando el último golpe por un giro horizontal hacia afuera seguido de un giro vertical hacia el frente (para abajo).


VERDE

26. Pasa el Nunchaku por la muñeca hacia atrás varias veces.

27. Giro por dentro, giro por fuera pasando por la mano por fuera y luego por dentro varias veces.

28. Igual que 24, pasa el Nunchaku por debajo como 26 y sube con 27 y 3.

29. Igual que 28 pero con doble 27.

30. Equis por lado y lado pasando por encima de la mano igual que 26.


AZUL

31. Igual que 26 abajo con un giro posterior.

32. Igual que 31 pero pasando de mano.

33. Igual que31 pero en el medio.

34. Igual que 19 pero con cambios como 31.

35. Igual que 27 pero frenando el último giro quedando vertical, devuelve y vuelve a empezar.


PÚRPURA

36. Igual que 27 pero devuelve con la mano contraria como 21 y sube con 27 cambia de mano y vuelve a empezar.

37. 1ra parte del primer callejón de I Chol Bong I Dan, solo el 24 terminando al otro lado.

38. 2da parte del primer callejón de I Chol Bong I Dan.

39. 3ra parte del primer callejón de I Chol Bong I Dan como el anterior pero pasando por detrás para iniciar por el otro lado.

40. Are Bakkat Makki con el Nunchaku sube y cambia de lado, ejecuta 5 a la vez que hace un giro por el frente para quedar en el otro lado y vuelve a empezar.
        `,
      },
      {
        title: "Básicos con Nunchakus dobles",
        content: `        
ROJO

1.	1 (sim)

2.	2 (sim)

3.	3 (sim)

4.	Hombro, axila (sim)

5.	4 trocada.

6.	6 (sim)

7.	7 desde abajo.

8.	7, 15 desde axilas (sim)

9.	7, 15, 13 (sim)

10.	11 (sim)


ROJO MARRÓN

11.	13 (sim)

12.	15 (sim)

13.	17 (sim)

14.	5 (alt)

15.	8 (alt)

16.	9 (alt) vuelta adentro afuera y arriba.

17.	Medio 24 (alt)

18.	25 (alt)

19.	10 (alt)

20.	5 (sim)


MARRÓN

21.	8 (sim)

22.	9 (sim)

23.	10 (sim)

24.	24 (sim)

25.	25 (sim)

26.	X adelante (sim)

27.	X atrás (sim)

28.	26 (sim)

29.	27 (sim)

30.	Disociado (17/15)
        `,
      },
      {
        title: "BÁSICOS JANG BONG",
        content: `
AZUL


1.	Recoge desde el piso con el pie.

2.	Descarga con el pie.

3.	Desliza entre las manos a lado y lado.

4.	Lanza un extremo y coge el otro (una mano) +-

5.	4 pero cambiando de mano +-

6.	Remo +-

7.	Igual que 6 caminando de frente y de espaldas +-

8.	Igual que 6 girando +-

9.	Ventilador +-

10.	Remo con una mano +-


PÚRPURA

11.	10 cambiando de mano con 9 +-

12.	Helicóptero +-

13.	Igual que 12 y pasa girándolo por la espalda +-

14.	Igual que 13 pero arrodillándose y levantándose +-

15.	Igual que 13 pero solo arrodillado +-

16.	Giros adentro y afuera sostenido de la punta +-

17.	Igual que 16 pero con las dos manos +-

18.	Giros igual que 16 pero terminando golpeando el piso.

19.	Envaina y desenvaine.

20.	Lanza por el cuello igual que 19 de Nunchacos, y recibe al otro lado.


ROJO

21.	Punción como lanza alta.

22.	Giro por la espalda y punción de lanza.
        `,
      },
    ],
  },
  // figuras sin armas
  {
    title: "Figuras Sin Armas",
    icon: "human-handsup",
    iconType: "community",
    subSections: [
      {
        title: "Joong Do Il Dan",
        content: `
1. Chumbi, Inicio de Joong Do.

2. A la izquierda en Ap Kubi, Montong Bakkat Pal Makki, Montong Chumok Chirigui, Ap Chagui, cae adelante en Ap Kubi y Montong Chumok Chirigui.

3. Realiza el paso 2 al otro lado.

4. Por el callejón: Mueve el pie izquierdo para meterse al callejón, Orum  Are Pal  Makki, Montong Chumok Chigui, avanza en Ap Kubi dejando el puño extendido al frente, hace Montong An Makki, Olgul Makki (transición en Bom Sogui), al pasar al Ap Kubi golpea Montong Chumok, repite este paso 3 veces. (Grito).

5. Gira por la espalda en Ohja Sogui Kun Gam Iop Chumok, la mano que bloque punza con Pion Son Kup palma hacia arriba por debajo del brazo que golpea. Luego la mano que estaba golpeando (izquierda) hace Son Nal Bakkat Chirigui en Dip Kubi.

6. Recoge la pierna de adelante y realiza el paso 5 al otro lado.

7. Por el callejón de regreso: En Moap Sogui bloquea Dul Pal Montong An Makki, Are Jecho Makki. En Koap Sogui bloquea Are Sonal Dung Makki y Chumok con la palma hacia arriba (la mano y el brazo forman un ángulo de 90°), mano derecha. Repite luego con la mano izquierda. Avanza en Koap Sogui con pierna derecha por delante a la vez que agarra y trae al enemigo. Patea Wen Iop Chagui. Cae y da un giro completo para bloquear Montong Son Nal Bakkat Makki en Andari Sogui (pierna derecha mano izqueirda), cae atras en Agun Son Chirigui (pierna izquierda adelante). (Grito).

8. Gira al lado derecho por el frente moviendo el pie izquierdo en Ap Sogui a la vez que realiza Montong An Son Nal Makki y Bakkat Son Nal Chigui con la misma mano, avanza pierna derecha adelante y golpea en Agun Son.

9. Gira por delante, realiza el paso 8 al otro lado.

10. Recoge la pierna izquierda para terminar en Chumbi.
        `,
      },
      {
        title: "Joong Do I Dan",
        content: `
1.	Chumbi, Inicio de Joong-Do.

2.	Gira a la izquierda en Bom Sogui con ambos puños a la cintura, desplaza el pie izquierdo en Dip Kubi, bloquea Okkoru Olgul Makki (puño derecho arriba), abre y gira las manos, golpea Bakkat Son Nal con la mano izquierda, punza la ingle con Pyon-Son-kup, bloquea Batang Makko, gira por la espalda y avanza en Ap Kubi, Montong Bakkat Son Nal Makki, Montong Chumok.

3.	Realiza el paso 2 al otro lado.

4.	Por el callejón recoge el pie derecho, golpea codazo en Bom Sogui y otro codazo en Moap Sogui, desplaza el pie izquierdo al frente en Ap Kubi y Yevipon Mok Chigui con Agun Son, patea Ap Chagui y Tio Tora An Dari Chagui pateando la palma de la mano izquierda, cae arrodillado (pie derecho adelante con la planta apollada) golpea Neryop Batang Son y Dung Chumok con la mano derecha. (Grito)

5.	Gira por la espalda para quedar en Ap Kubi, con el pie izquierdo adelante a la vez que bloquea Montong Son Nal Bakkat Makki, Montong Chumok Chirigui, Ap Chago, Dul Uon Montong Chumok Chirigui.

6.	Girando por la espalda realiza el paso 5 al otro lado.

7.	Por el callejón de regreso: Recoge el pie izquierdo para quedar en Bom Sogui, pega codazo, levanta la pierna derecha en Andari Sogui y codazo atrás con la mano derecha, patea Orum Iop Chagui, cae atrás en Dip Kubi a la vez que bloquea Montong Koduro Son Nal Makki, avanza con el pie derecho en Ap Kubi a la vez que pega Orum Pal Mok, (o Dung Chumok, o Sonal Dung, o Son Mok) sobre la palma izquierda y girando sobre el pie derecho cae de nuevo en Ap Kubi con pie derecho adelante a la vez que pega An Son Nal mano derecha y Bakkat Son Nal con la izquierda. Avanza en Ap Kubi y Chumok Chirigui Mano derecha. (Grito).

8.	Hace círculo con el brazo izquierdo de abajo a arriba a la vez que gira el cuerpo por el lado izquierdo para quedar en posición Ap Kubi golpeando Neryop Son Nal con la mano derecha. Sin mover los pies bloquea Olgul Son Nal Makki mano derecha y Olgul Batang Makki con la mano izquierda, golpea An Son Nal Chigui Bakkat Son Nal Chigui (mano izquierda). Avanza en Ohja Sogui Kun Gam Iop Chumok golpea mano derecha. Avanza en Koap Sogui llevando el pie por detrás a la vez que golpea Bakkat Son Nal, despacio, respirando y con el brazo extendido, gira para pasar de Koap Sogui a Ap Kubi hace Montong Sonal Makki, Montong Chumok Chirigui.

9.	Realiza el paso 8 al otro lado.

10.	Recoge la pierna izquierda para terminar. Chumbi.
        `,
      },
      {
        title: "Joong Do Sam Dan",
        content: `
1.	Chumbi, inicio de Joong-Do.

2.	Avanza al frente pierna izquierda en Ap Kubi, bloquea Okkoru Son Nal Makki, agarra y recoge a Moap Sogui, a la vez que golpea talonazo atrás con la pierna derecha y simultáneo con esto Dul Uon Dip Son Karak Chigui. Eleva las manos Juntas hasta extenderlas completamente y alineadas con el pecho y la cara mientras inhala abre los brazos y exhala bajando los brazos hacia los lados. Desplaza al lado izquierdo en Chuchum Sogui con las manos juntas a la altura del pecho. Cambia a Dip Kubi mientras bloquea Montong Bakkat Makki. Patea Montong An Dari Con la pierna de atrás. Sigue el flujo para completar el circulo. Cae en Ap Kubi, Montong Bakkat Son Nal Makki, Montong Chumok Chirigui. Pasa a Chuchum Sogui con las manos juntas a la altura del pecho.

3.	Realiza el paso 2 al otro lado.

4.	Por el callejón: El Chumok extendido lo gira hacia el callejón para luego pasar a Ap Kubi en diagonal con ambos brazos extendidos en diagonal y con las palmas hacia abajo (brazo izquierdo arriba y brazo derecho abajo), Con la mano derecha bloquea Pal makki y Montong Chumok Chirigui (misma mano). Con la pierna de atrás patea Ap Chagui, golpea Montong Chumok Chirigui en Ap Kubi. Pasa a Koap Sogui y Montong Pal Makki, repite este paso 2 veces más, hace media luna en una mano empuñada. Cae y gira en Koap Sogui y Neryo Batang Makki, An Dari Chanoki, Montong Bakkat Makki, cae en Chuchum Sogui y Batang Son Chigui. (Grito).

5.	Gira al lado derecho en Ap Sogui y Olgul Son Nal Makki. Retrocede para arrodillarse y golpear Batang Son al suelo. Se levanta avanzando en Ap Kubi y golpea Son Mok, Agun Son Chigui.

6.	Gira por el frente. Realiza el paso 5 al otro lado.

7.	Por el callejón de regreso: Recoge de adelante para quedar en Moap Sogui y bloquea Olgul Makki, gira por la espalda, avanza en Ap Kubi, Orum An Son Nal Chigui, Wen Son Nal Are Makki, Montong Chumok. Patea Ap Chagui con la pierna de atrás, sin apoyar la pierna que patea hace rollo lateral, lo termina arrodillado, golpea Batang Son Dung Chumok Chirigui. (Grito).

8.	Se levanta y gira por la espalda en Ap Kubi, hace un movimiento por encima de la cabeza, para cargar Batang Makki, y Montong Chumok. Empezamos con la pierna de atrás patea Ap Chagui Tora Iop Chago, cae en Ap Kubi Montong Bakkat Son Nal Makki, Montong Chumok Chirigui.

9.	Gira por el frente. Realiza el paso 8 al otro lado.

10.	Recoge la pierna izquierda para terminar. Chumbi.
        `,
      },
      {
        title: "Joong Do Sa Dan",
        content: `        
1.	Chumbi, inicio de Joong-Do.

2.	En Andari Sogui levantando la pierna izquierda, golpea Iop Dul Me Chumok Chigui, sin descargar la pierna gira al lado izquierdo y bloquea Olgul Makki. Cae en Chuchum Sogui y sin bajar la mano que bloquea, golpea Iop Chumok, abre la pierna al lado para quedar en Ap Kubi y golpear Montong Chumok Cirigui. Desplaza a un lado pero dejando la misma pierna adelante a la vez que golpea Me Chumok Oligui y con la otra mano en Agun Son en Ap Kubi.

3.	Recoge y levanta la pierna derecha. realiza el paso 2 al otro lado.

4.	Por el Callejón: Gira hacia el callejón y recoge la pierna derecha, la levanta en Andari Sogui a la vez que golpea Son Mok Oligui y Neryop Batang Son Makki simultáneo (golpea el dorso de la mano derecha con la palma de la izquierda). Gira la rodilla levantada (derecha) y sin dejarla caer golpea Batang Son con la mano derecha con los dedos hacia abajo. Se deja caer atrás en Dip Kubi Sogui, a la vez que golpea Olgul Dung Chumok (mano izquierda). Abre la mano que golpea Dung Chumok y hace Orum Andari Chagui, Tio Orum Andari sogui, hace un giro en el sentido del flujo, cae en Ap Kubi izquierdo adelante y golpea Orum Me Chumok Chirigui mientras el brazo izquierdo acompaña sobre el codo. (Grito). Avanza en Ap Kubi y golpea Dul Uon Batang Son Chirigui.

5.	Desplaza la pierna de atrás (izquierda) al lado izquierdo en Dip Kubi a la vez que de forma simultánea golpea Agun Son arriba y abajo (Pulgares al mismo lado) desplaza la pierna delantera al lado para quedar en Ap Kubi, extiende los brazos, al frente y arriba el izquierdo, atrás y abajo el derecho (palmas abajo) lento y respirando hace Kawi Makki derecha arriba. Avanza en Koap Sogui (derecha por delante) Patea Wen Iop Chagui. Cae en Ap Kubi hacia la espalda de donde patea, golpea Are Batang Son Chigui (dedos hacia abajo), Retrocede a Ap Sogui mientras mientras hace Are Son Nal Makki, Avanza en Ap Sogui  con Neryop Batang Makki. repite el movimiento por el otro lado.

6.	Realiza el paso 5 al otro lado mas un tercer paso en Ap Sogui con Neryop Batang Makki.

7.	Por el callejón de regreso: Recoge el pie que da el ultimo paso, eleva las manos juntas alineadas con el pecho y la cara y respira llevando los brazos a los lados (despacio). Lleva las manos a la cintura como doble pedazo atrás, avanza pierna derecha a la vez que hace Montong Jecho Makki.

8.	Gira por la espalda a Dip Kubi y Montong Pal Makki. Avanza en Chuchum Sogui a la vez que golpea Iop Dul Uon Me Chumok Chigui, desplaza la pierna delantera al lado para quedar en Ap Kubi y golpear Agun Son.

9.	Realiza el paso 8 por el otro lado.

10.	De nuevo al callejón de regreso: Recoge la pierna izquierda para retroceder en Dip Kubi y Montong Koduro Son Nal Makki, avanza en Bon Sogui (izquierdo adelante) para golpear atrás y de forma simultánea Son Nal Dung. Avanza en Ap Kubi (izquierdo adelante) y hace Are Pion Son Kup Chirigui, con otro brazo sobre el codo. Eleva la pierna derecha mientras después de hacer una finta por detrás de la cabeza bloquea Orum Are Son Nal Makki con la otra mano acompañando en el codo. Baja la pierna gira al frente del comienzo de la figura y avanza la pierna izquierda para caer arrodillado, a la vez que hace Orum An Son Nal Chirigui. Roza la palma de la mano derecha con el filo de la mano izquierda como si rompiera algo que se agarra. Se levanta en Andari Sogui (pierna izquierda arriba) y hace Are wesanteul makki. (Grito). Se para firme. Chumbi.
        `,
      },
      {
        title: "Joong Do O Dan",
        content: `
1.	Chumbi, inicio de Joong-Do.

2.	Se gira al lado izquierdo con Are Makki, Montong Chumok Chigui en Ap Kubi. Se recoge el pie izquierdo, en ‘’L’’ se golpea en Neryop Me Chumok, desplaza el pie derecho detrás del izquierdo en Koap Sogui, para caer en Ap Chuchum Sogui y Are Wesanteul Makki. Gira de nuevo a Ap Kubi, Montong Son Nal Makki, golpea la palma de la mano que bloquea con Son Nal Dung, esa misma mano hace un giro para pegar Olgul An Son Nal Chigui. Bakkat Son Nal Chigui y Montong Chumok Chirigui.

3.	Recoge la pierna izquierda y retrocede en Koap Sogui con la pierna izquierda atrás. Gira y realiza el paso 2 al otro lado.

4.	Desde Koap Sogui con la pierna atrás y habiendo pegado codazo izquierdo extiende el brazo derecho hacia atrás, luego, en el mismo eje retrocede en Koap Sogui con la izquierda atrás, bloquea Montong Son Nal Bakkat Makki, repite el movimiento por el otro lado, repite el movimiento del pie pero golpea Iop Chumok.

5.	A la diagonal bloquea Montong Jecho Makki, guardia vertical, patea Ap Chagui, cae adelante en Ap Kubi, bloquea Oligui Batang Makki y Chumok Oligui.

6.	Realiza el paso 5 al otro lado.

7.	Al callejón: En Ap Sogui Montong Batang Makki, extiende la mano que bloquea, a la vez que la mano libre golpea Son Nal Dung en la mano que bloquea, gira 360° cae en Ap Kubi, hace Orum An Son Nal Chigi, Wen Bakkat Son Nal Chigui, Chumok Chigui. Se pone en guardia, empezando con la pierna de atrás hace Ap Chagui, Ap Chago, Tio Tora Ap Chagi, Tio Tora An Dari. Cae arrodillado y de lado, para golpear Orum Neryop Chumok. Grito. Wen Olgul Son Nal Makki y Orum Oligui Batang Makki, golpea Wen An Son Nal Chigi, Orum Bakat Son Nal Chigui, Wen Chumok.

8.	Gira por la espalda y se levanta hacia la derecha en Ap Kubi, Olgul Son Nal Makki Montong Chumok Chirigui. Gira por la espalda en Ap Sogui bloquea Wen Olgul Son Nal Makki, Retrocede para pegar al suelo con la pierna izquierda extendida y la derecha flexionada. Se levanta y avanza en Ohja Sogui Kun Gam Iop Chumok. Desplaza el pie trasero por detrás para quedar en Koap Sogui a la vez que hace Orum Bakat Son Nal Chigui, sigue el sentido del giro para terminar el Ap Kubi, Wen Olgul Son Nal Makki Orum Chumok.

9.	Realiza el movimiento 8 por el otro lado. agregando un giro más desde el Koap Sogui, Bloquea Batang Makki codo extendido, dedos abajo derecho, izquierdo, Iop Chumok Derecho, Izquierdo, realiza Montong Bakat Makki en tres tiempos, con Iop Chumok con la otra mano ( repite el movimiento hasta completar 4 golpes y termina bloqueando) 

10.	Gira al lado en Ap Kubi, extiende los brazos como para cargar Kawi Makki, Bloquea solo con la mano de abajo, y la otra golpea Chumok, guardia horizontal, con la pierna de atrás patea Are, y Montong Iop Chagui, cae en Ap Kubi, hace Bakat Son Nal Chigui, Montong Chumok.

11.	Realiza el paso 10 por el otro lado.

12.	Al callejón en Ap Kubi, cargar para Kawi Makki, pero solo bloquea la de abajo, con esa misma mano Montong Chumok Chirigui, guardia vertical, patea Ap Chagui, hace media luna en una mano empuñada, cae en Ap Sogui hace un grito con las manos arriba de la cabeza como moviendolas de atrás adelante, hace rollo lateral y Anya Iop Chagui. Grito. Se levanta y retrocede en Dip Kubi Montong Koduro Son Nal Makki. Recoge la pierna de atrás en Moap Sogui. Chumbi.
        `,
      },
      {
        title: "Won Il Dan",
        content: `
1.	Chumbe. Saludo de Won.

2.	Al lado izquierdo Uen Ap Kubi, Uen Montong Nullo Bakkat SonNal Makki, Bande Montong Chumok Chirigi, realiza un círculo hacia afuera con ambas manos abiertas a la vez que se ejecuta Orum Mureup Chagi, cae Orum Ap Kubi Uen Agum-Son Chigi.

3.	Repite el paso anterior al otro lado.

4.	Recoge la pierna izquierda, con las manos empuñadas en la cintura, hacia el callejón del medio abre en Uen Ap Kubi Are Gecho SonNal Makki, Olgul Gecho Pal Makki, hace Uen Koap Sogi mientras con l mano derecha hace agarre de agila, hal con la mano que tiene extendida (lleva a la cintura) a la vez que golpea Orum An-Dari Chanoki, cae en Orum Ap Kubi, Bande Montong Chumok Chirigi. (Repite este movimiento 2 veces más cambiando de lado) Terminando en Montong Chumok Chirigi (Grito).

5.	Gira por detrás a quedar en Handari KunGam Are Pal Makki, ejecuta Bakuoro Dung Pal-Kub Mientras va cayendo y Dung Pal-Kub al otro lado al caer en Uen ChuChum Sogi, Cambia la posición a Uen Ap Kubi, Orum Agum-Son, recoge la pierna izquierda y levanta la derecha en Orum Handari Sogi, y repite los mismos movimientos al otro lado.

6.	Recoge la pierna derecha en Moap Sogi, abre al frente en Uen Ap Kubi, Are Okoru Pal Makki, lleva los brazos a la cintura, Montong Okoru Pal Makki, desenvuelve y gejectura Uen Bakkat Jecho SonNal Chigi con la mano izquierda, gira la mano coo si sujetara una cabeza, ejecuta Orum AnDari, Tyo Tora AnDari ambas pateando la palma izquierda, Uen Hwea Jon Chagi, sin apoyar el pie en el suelo, hace rollo lateral por el lado izquierdo, cae arrodillado (pie derecho adelante con la planta apollada) y ejecuta Uen Neryop Batang-Son y Dung Chumok con la misma mano. (Grito).

7.	Se pone de pie girando por detrás a quedar en Uen Ap Kubi Dul Batang-Son Chigi a las costillas falsas, avanza (dejando la palma izquierda extendida) en Orum Ap Kubi, Orum Olgul Pal-Kub a la mano extendida, gira por detrás y repite el proceso por el otro lado.

8.	Recoge el pie izquierdo, y repite el paso 1 para terminar, Chumbe.
        `,
      },
      {
        title: "Won I Dan",
        content: `
1.	Chumbe. Saludo de Won.

2.	Inicia al lado izquierdo en Uen Ap Dip Kubi KunGam Yop Chumok, cambia a Uen Ap Kubi Montong Kawi Batang Makki. Dul Chapki, Orum Yop Chagi Con Orum Yop Chumok, Tora Uen Yop Chagi, Uen Yop Chumok, cae en Uen Ap Dip Kubi Are Gecho Pal Makki, cambia a Uen Ap Kubi Orum Agum-Son.

3.	Recoge el pie izquierdo y abre en Orum Ap Dip Kubi KunGam Yop Chumok, repitiendo el paso anterior por este lado.

4.	Recoge el pie derecho, en Moap Sogi, abre al frente, en Uen Ap Kubi Olgul Gecho Sona Makki, Are Gecho Pal Makki, avanza en Orum Ap Dip Kubi con Orum Bakkat Pal Makki acompañado con la otra mano cerrada al lado del codo, bloquea Are Nullo Bakkat SonNal Makki, ejecuta Uen Chokto Dolly-gi, Orum Hwea Jon Chagi. (Grito).

5.	Barrido por la espalda con la pierna derecha, quedando o cayendo hacia el lado izquierdo del tercer callejón en Orum Ap Kubi Dul Montong Btang-Son a las costillas, ejecuta Uen Ap Chaoligi, cayendo en Uen Ap Kubi con la mano izquierda al frente con agarre de águila, avanza Orum Ap Kubi con Orum Agum-Son. Hacia atrás por el lado izquierdo Uen Ap Kubi Y repite el proceso por este lado.

6.	Recoge y junta las piernas en Moap Sogi, y pasa al callejón del medio en Uen Ap Dip Kubi Are Kororu SonNal Makki, Montong Kororu SonNal Makki, avanza en Orum koap Sogui Montong Bakkat Dung SonNal Makki (acompañada de la otra mano empuñada al lado del codo), gira mientras desenvuelve a caer en Uen Ap Kubi Uen Montong Jecho Bakkat SonNal Makki, posteriormente hace un rollo lateral por el lado izquierdo cae arrodillado (pie derecho adelante con la planta apoyada) y ejecuta Uen Neryop Batang-Son y Neryop Dung Chumok con la misma mano. (Grito).

7.	Se gira y se levanta por detrás quedando en Uen Handary Sogi KunGam Yop Chumok, mientras cae hace un circulo hacia afuera con la mano derecha por encima de la cabeza, cae apoya la pierna izquierda en Kwang sogi al ancho del Ap Kubi, a la vez que ejecuta Uen Me Chumok Oligi y Orum Olgul Batang-Son Chigi, recoge la pierna izquierda y hace Orum Handary Sogi, y repite el proceso por el lado derecho.

8.	Recoge la pierna derecha, y repite el paso 1 para terminar, Chumbe.
        `,
      },
      {
        title: "Won Sam Dan",
        content: `
1.	Chumbe. Saludo de Won.

2.	Al lado izquierdo en Uen Dip Kubi Montong Koruro SonNal Makki, recoge la guardia y patea con la pierna de atrás Ap Chagi Tora Yop Chagi cayendo adelante a un paso, gira dando 2 pasos cayendo en Orum Dip Kubi Montong Koruro SonNal Makki, abre en Orum Ap Kubi, Orum Montong Bakkat SonNal Makki y Uen Dung An SonNal Chigi, continuando el giro da un paso y cae en Orum Ap Kubi Orum Opoc Bakkat sonNal Chigi, Uen Montong Chumok Chirigi.

3.	Repite el paso anterior por el lado derecho con la pierna derecha.

4.	Gira por la espalda cae en Ap Kubi Orum Montong Nulo Bakkat Makki Uen Montong Chumok Chirigi, recoge la guardia patea Uen Ap Chagi, doble Ap Chagi iniciando con derecha, cayendo con la pierna izquierda adelante ejecuta Orum Hwea Jon Chagi, cae continuando el giro con un barrido por detrás, hacia el frente hace un rollo cae arrodillado (pie derecho adelante con la planta apoyada) golpea Uen Neryop Batang Son y Dung Chumok (Grito).

5.	Se pone de pie por detrás en Uen Ap Kubi Dul Montong Battang Son a las costillas, avanza en Orum Ap Kubi Montong Kawi sonNal Makki, cierra las manos y ejecuta Uen Chokto Doligi, Hwea Jon Chagi continua el giro dando dos pasos girando hacia atrás cayendo en Orum Dip Kubi Montong Koruro SonNal Makki.

6.	Giro por la espalda pasando la pierna derecha a quedar en Orum Ap Kui al otro lado y realiza el paso anterior por este lado. Al final después de la Hwea Jon Chagi cae hacia atrás da dos pasos temrinando en Uen Dip Kubi Montog Koruro SonNal Makki.

7.	Cambia a Uen Ap Kubi Orum Chumok Chirigi, ejecuta Orum Ap Chagi, doble Ap Chagi iniciando con izquierda cayendo con la pierna derecha adelante en Ap Sogui con las manos hace un giro por encima arriba de la cabeza como moviéndolas de atrás adelante, hace rollo lateral y Anja Yop Chagi tora Anja Yop Chagi, pone el pie izquierdo apoyado cerca a la rodilla izquierda y se pone de pie, gira sobre el pie izquierdo y cae con la pierna derecha atrás en Dip Kubi Monong Koruro SonNal Makki (Grito).

8.	Recoge la pierna izquierda hacia atrás para terminar en Chumbi.
        `,
      },
      {
        title: "Won Sa Dan",
        content: `        
1.	Chumbe, Saludo de Won.

2.	Al lado izquierdo mueve el pie derecho pasándolo por detrás del izquierdo para quedar en Koap Sogi SonNal KunGam Yop Chumok, pasa el pie izquierdo hacia el lado izquierdo y queda en Koap Sogi Bakuoro Montong Bakkat Pal Makki mirando hacia la derecha, luego pasa la pierna derecha por el frente de la izquierda a caer al lado izquierdo en Orum Ap Kubi Orum Son Mok Oligi Are Batang Makki, Con las manos empuñadas a los lados del cinturón gira dando tres pasos por el lado izquierdo terminando en Orum Handari Sogi Uen Bakuoro Montong An Pal Makki con la mano derecha empuñada encima de la rodilla levantada.

3.	Cae el pie derecho y ejecuta el paso anterior por el lado derecho.

4.	Desde el Uen Handari sogi, apoya la pierna izquierda y pasa la derecha hacia atrás al callejón del medio a caer en Ap Kubi Orum Montong Nulo Bakkat Makki, pasa a Koap Sogi con agarre de águila con la mano izquierda al medio, Uen Dollyo Chagi Continua el giro y pasa a Orum Ap Kubi Dual Batang Son Chigi a las costillas (Grito).

5.	Ejecuta un barrido por el frente hacia la derecha con la pierda de atrás, continua el giro del barrido deteniéndose juntando las plantas para ponerse de pie por detrás hacia la derecha en Orum Ap Kubi Orum Montong Batang Son Chigi, Uen Dip Son Mok Chigi. Con la mano del Batang Son gira y agarra hacia arriba mientras la de atrás simula levantar a alguien pasando por el frente la pierna izquierda y terminando en Orum Dip Chum Chum Sogi con la palma izquierda apoyada en el suelo.

6.	Recoge la pierna derecha y junta con la izquierda, abre la izquierda en Ap Kubi hacia el lado izquierdo y repite el proceso del paso anterior por este lado.

7.	Con la pierna izquierda ejecuta un barrido por el frente da un paso con un giro hacia atrás y termina en Uen Handari Sogi Uen Are Batang son An Makki (Grito)

8.	Apoya la pierna izquierda al frente y ejecuta Jenyari por la izquierda en el mismo lugar  cayendo con la pierna izquierda atrás y arrodillado, ejecuta Uen Dollyo Chagi, Tora Orum Anya Hwea Jon Chagi termina la patada al frente continuando con un rollo lateral cayendo arrodillado (pie derecho adelante con la planta apoyada) golpea Uen Neryop Batang Son y Dung Chumok (Grito).

9.	Se levanta por detrás en Uen Ap Kubi DuL Montong Bakkat SonNal Dung Chigi, junta las palmas arriba ejecuta un rodillazo con la pierna de atrás y cae con esa misma pierna al frente en Dip Kubi Olkoro Are Makki con la mano izquierda por encima, recoge la pierna izquierda para hacer Uen Handari Sogi KunGam Yop Chumok al lado izquierdo.

10.	Apoya la pierna izquierda, gira por detrás cayendo en Orum Ap Kubi y ejecuta el paso anterior a este lado.

11.	Desde el Orum Handari Sogi KunGam yop Chumok baja y apoya la pierna derecha y recoge la pierna izquierda para terminar en Chumbe
        `,
      },
      {
        title: "Won O Dan",
        content: `
1.	Cheombe, saludo de won.

2.	Al frente, Uen Ap Dip Kubi SonNal KunGam Yop Chumok, cambia a Uen Ap Kubi, Bande Agum Son Chigi, gira la mano como si sujetara una cabeza hacia adentro, Pyojeok BakkataDari Chagui, cae en Chu Chum Sogi Orum Bakkat Jecho SonNal Makki, ejecuta Jinyari por el lado derecho, cae da dos giros retrocediendo quedando en Orum Ap Dip Kubi SonNal KunGam Yop Chumok.

3.	Repite el paso 2 por este lado, terminando después del giro de la Jinyari en Orum Ap Dip Kubi Montong Koruro SonNal Makki, realiza Uen Montong Bituro Chagi, Uen BalDung Chago, ejecuta un barrido por la espalda con la pierna derecha deteniéndose juntando los pies para levantarse por detrás hacia la derecha.

4.	En Orum Ap Kubi Orum Montong Batang Son Chigi, Uen Dip Batang Makki, avanza Uen Beom Sogi con Orum Jevipon Batang Son Chigi, Orum AnDari Makki Bakuoro Orum An Pal Makki, cae en Orum Ap Chu Chum Sogi, Orum Me Chumok Oligi, ejecuta Orum Tio Tora BakkatDari Chagi, cae y continuando el giro realiza un barrido por la espalda con la misma pierna que ejecuto la patada anterior, se pone de pie Batang Makki.

5.	Realiza el paso 4 por el otro lado.

6.	Al finalizar el barrido por izquierda, continuando el giro hacia atrás se levanta y termina girando hasta quedar en Orum Koap Sogi Orum Wesanteul SonNal Makki, Montong Oppok An SonNal Chigi, desenrosca y pasa a Orum Ap Dip Kubi KunGam Yop Chumok, ejecuta Tio Ap Chagi (el pie izquierdo debe caer donde estaba el derecho) 

7.	Al caer de la patada del paso anterior, ejecuta Ap Dip Kubi Wesanteul SonNal Makki, cambia la posición a Kwang Sogi al ancho del Ap Kubi, hace un circulo hacia afuera con la mano izquierda por encima de la cabeza a la vez que ejecuta Orum Me Chumok Oligi continuando el movimiento termina en Orum Koap Sogi con agarre de águila con la mano derecha hacia afuera, ejecuta Uen Dollyo Chagi, y Orum Hwea Jon Chagi, sin bajar la pierna, termina mirando hacia el frente en Orum HanDary Sogi con ambos brazos extendidos a los lados y con las palmas hacia abajo (brazo izquierdo arriba y brazo derecho abajo) con la mirada en el brazo derecho, apoya el pie derecho y pasa por la espalda hacia el otro lado.

8.	Repite el paso 7 por el otro lado.

9.	Con la mano que esta hacia abajo gira y agarra hacia arriba mientras la mano de atrás simula levantar a alguien pasando por el frente la pierna derecha y terminando con la pierna derecha extendida y la izquierda flexionada con la palma derecha golpeando el suelo.

10.	Se pone de pie y recoge la pierna izquierda para terminar con el movimiento del paso 1 y en Moap Sogi. Chumbi.
        `,
      },
      {
        title: "Ki Hap",
        content: `
1.	Saludo, inicio de Joong-Do.

2.	Desde Are Kyopson Chumbi Sogui en Dwichuk Moap Sogui: Inhala elevando los talones y exhala bajando los talones. Eleva los brazos haciendo un circulo largo y amplio mientras eleva el pie izquierdo en Andari Sogui, para caer en Chuchum Sogui a la vez que termina el circulo con bloqueo Montong Jecho Makki.

3.	Avanza el pie izquierdo al frente para quedar en Dip Kubi, bloqueando Wesanteul Makki, con el pie de atrás patea Anya Dolyo Chagui. (Grito). Y regresa a Dip Kubi y Okkoru Olgul Makki (brazo izquierdo por debajo).

4.	Avanza pie derecho a Ap Kubi, con Batang Son Montong Nullo Bakat Makki, y Sewo Pion Son Kup, Wiro Pegui. Gira por la espalda avanzando en Dip Kubi y Dung Chumok Chigui. Orum Anya Fenio Chagui. Grito. Completando el giro al frente al lado derecho a la vez que cae en Chuchum Sogui y Montong An Son Nal Makki.

5.	Recoge el pie derecho en Andari Sogui y tomar impulso para Yenyari Fenio Chagui, Grito. Cae en Dip Kubi pie izquierdo adelante y Khun Dolt Sogui. Avanza en Ap Kubi con Yevipon Tok Chigui (Batang Son).

6.	Gira sobre el pie derecho por la espalda en Ap Kubi y Yevipon Mok Chigui (Son Nal). Desde esta posición, Ap Chagui, Ap Chago, Tio Ap Chagui. Grito. Y sin apoyar la última patada gira por la espalda sobre el pie de apoyo para caer en Ap Kubi, Montong Jecho Bakkat Makki. Avanza en Ap Kubi pie izquierdo adelante y golpea Dul Pal Batang Son Chigui a las costillas, avanza y hace movimiento de lanzamiento terminando con el pie derecho adelante.

7.	Recoge el pie derecho en Andari Sogui y ejecuta Yenyari Fenio Chagui, Grito. Terminando en Dip Kubi Son Nal Wesanteul Makki. Avanza en Ap Kubi con pie derecho adelante y Batang Son Chigui acompañado.

8.	Mueve el pie izquierdo en 'L' al lado izquierdo. Bloqueo Okkoru Are Makki, con la pierna de atrás y repitiendo pierna patea Orum Choki Chirigui Chagui, Anya Fenio Chagui. Grito. Cae de nuevo en el punto de partida de las patadas en Dip Kubi, Okkoru Olgul Makki, avanza en Ap Kubi (derecho adelante) y Montong Batang Son Chigui acompañado.

9.	Gira por la espalda en Dip Kubi, Son Nal Kun Gam Makki, desplaza la pierna al lado para quedar en Ap Kubi y Kawi Makki. Eleva la mano que está abajo. patea Ap Chagui y Dul Uon Chumok Chigui. Empezando con mano igual a la pierna que patea. 

10.	Gira por la espalda, realiza el paso 9 al otro lado.

11.	Mueve el pie izquierdo en 'L' para quedar en Ap Kubi, Okkoru Are Makki, Okkoru Olgul Makki, Batang Son Montong Nullo Bakkat Makki, avanza en Ap Kubi (pie derecho) y golpea Agun Son. (Grito).

12.	Recoge el pie que queda atrás para quedar en Dwichuk Moap Sogui y Kyop Son Chumbi Sogui. Chumbi.
        `,
      },
    ],
  },
  // figuras con armas
  {
    title: "Figuras Con Armas",
    icon: "sword-cross",
    iconType: "community",
    subSections: [
      {
        title: "I Chol Bong Il Dan",
        content: `
NOTA: 
Mientras no se especifique lo contrario, las transiciones entre posiciones de las figuras con I Chol Bong debes ser realizadas en Koap Sogi.

*inicia con los Nunchakus horizontalmente rectos*
1.	10 derecha, 10 izquierda, 19 a la izquierda, ½ 19 a la derecha. 
2.  Baja 6 y al subir 4, lanza por entre las piernas y saca por detrás con medio 6, 7, 7, 7, luego 9, 5 (cambiando de mano), 20, 20, 20 y 21. 
3.  Nunchakus por derecha, cambia con 4 por izquierda y ejecuta 21 terminando en Koap Sogi. (Grito)

*pone los Nunchakus rectos.*
4.	A la cintura 4 veces empezando por izquierda con el palo invertido y arriba como 4 y vuelve a ejecutar 2 movimientos más a la cintura y 4 dos veces. 
5.  8, 13, 15 en diagonal y en Ap Kubi, cambia con 4 a mano izquierda y 13, 15. Cambia al lado derecho en Ap Kubi 8, 13, 15, cambia de mano con 4 y ejecuta 13, 15. 
6.  En Koap Sogi, gira 3 veces por el cuello desde la mano derecha como 19 sin golpe, luego 3 veces por el otro lado. 
7.  19, 25, 22, 25, 22, 15. Engancha en la axila, agarra por la espalda el Nunchaku enganchado, con la mano izquierda, 13, devuelve el Nunchaku pegándole con la mano derecha y pone los Nunchakus rectos. (Grito).


        `,
      },
      {
        title: "I Chol Bong I Dan",
        content: `
1.	Avanza pierna izquierda en Ap Kubi a la vez que bloquea Orum Okkoru Olgul Makki con los Nunchacos. Mueve el pie izquierdo al lado izquierdo en Ap Kubi, a la vez que ejecuta 24, terminando el movimiento al lado derecho, con el pie derecho al frente en Ap Kubi, 15, 13.

2.	Gira al frente en Chuchum Sogui. 7, 7 empezando por izquierdo.

3.	5, 9 (misma mano) Pasa a la diagonal con el Nunchaco en el hombro izquierdo en Koap Sogui, 15, 13, pasa al frente, cambiando con 7 y 15, 13, deja en la axila y gira a la otra diagonal, 15, 13: Gira al frente, cambia con 7 y 15, 13. Da media vuelta (sin desplazamiento de pies) cambia con 7 y 15, 13.

4.	Con la mano derecha 5 al frente y 13 al lado, 5 al frente y 13 al lado.

5.	Gira a la izquierda, 19 terminando en la axila izquierda. 2 veces 10 y vuelve despacio con los Nunchacos extendidos al frente de forma horizontal, al llegar de nuevo al lado, extiende los Nunchacos de forma vertical por detrás del hombro derecho.

6.	Avanza en Ap Sogui con derecho adelante y hace 24 sin el último golpe en la cadera (envaina el Nunchaco). Lo agarra en la cadera. Gira su cuerpo 360° saltando con el Nunchaco en la mano derecha (desenvaina el Nunchaco más una vuelta por encima de la cabeza). Cae en Ap Kubi al frente, hace 25 y medio 21. y 5.

7.	Mueve el pie derecho al lado izquierdo en Ap Kubi hace 25 terminando el movimiento al lado derecho en Ap Kubi (el golpe al lado izquierdo, el desenrosque al lado derecho) sigo al lado derecho y hace 15, 13.

8.	Paso hacia atrás con el nunchaco en la mano derecha, hace 24, 15, y termina con 13 sosteniendo con la mano los dos palos del nunchaco, avanza con Ap Chagi con derecha, doble Ap Chagi, hace gesto inicial de 24 seguido por un rollo lateral.

9.	Se pone de pie por el lado izquierdo y ejecuta 24, 15, 13, 4, 15, 13, pasa al otro lado y repite la secuencia anterior y despues del último 13 sube los nunchcos encima del hombro y termina en Koap Sogi con grito.

10.	Recoge la pierna derecha y termina en chumbe.
        `,
      },
      {
        title: "I Chol Bong Sam Dan",
        content: `
1.	3 veces 3 (básica), 3 veces 15 (básica).

2.	Doble 8 simultaneo, desde abajo 7, 27

3.	3 veces 5 por lado y lado intercalados

4.	3 veces 'X' hacia adelante y 3 veces hacia atrás

5.	Avanza derecho en Ap Kubi al frente y ejecuta 15, 13

6.	Recoge y desplaza Ap Kubi a la izquierda, y vuelve a ejecutar 15, 13

7.	Recoge y repite el paso 5.

8.	Recoge y abre en Ap Kubi con la pierna izquierda al frente hacia la derecha y ejecuta 15, 13

9.	Recoge y ejecuta el paso 5 con la pierna izquierda al frente en Ap Kubi.
        `,
      },
      {
        title: "Jang Bong Il Dan",
        content: `
1.	Chumbe. Chuzona hacia arriba por el lado derecho, abre al lado izquierdo en Uen Dip-ChuChum Sogui a la vez que chuzo a la izquierda y hacia abajo, paso a Ap Kubi y con el lado derecho golpe a la rodilla de lado seguido de un golpe hacia las costillas de lado, avanza en Orum Ap Kubi a la ve que golpea con el lado derecho a la cabeza descendentemente.

2.	Paso por detrás hacia el otro lado pasando la punta de arriba del Jang Bong por debajo a la altura de la rodilla, cae en Orum Ap Kubi repitieno el paso anterior por este lado.

3.	Recoge en Moap Sogui mirando hacia la derecha con el Jang Bong Chuzando arriba, (hacia el callejón del frente) repite el paso 1 agregandole que avanza en Uen Ap Kubi Golpeando con el lado izquierdo al medio a las costillas de lado, avanza en Orum Ap Kubi a la ve que golpea con el lado derecho a la cabeza descendentemente (Grito).

4.	Recoge en Moap Sogui mirando hacia la derecha con el Jang Bong Chuzando arriba, (hacia el callejón del frente) repite el paso 1 agregandole que avanza en Uen Ap Kubi Golpeando con el lado izquierdo al medio a las costillas de lado, avanza en Orum Ap Kubi a la ve que golpea con el lado derecho a la cabeza descendentemente continuando el giro como remo girando y terminando en ChuChum Sogi con el Jang Bong Horizontal arriba y los brazos extendidos (Grito).

5.	al lado izquierdo en Uen Dip-ChuChum Sogui a la vez que chuzo a la izquierda y hacia abajo, paso a Ap Kubi y con el lado derecho golpe a la rodilla de lado seguido de un golpe hacia las costillas de lado, golpea con el lado derecho a la cabeza descendentemente deteniéndolo en la axila derecha, avanza en Orum Ap Kubi diagonal a la vez que hace un circulo por encima de la cabeza con la punta de arriba del Jang Bong como 24 de Nunchacos terminando un golpe de lado a la cabeza hacia el lado izquierdo.

6.	Repite el paso anterior al otro lado.

7.	Recoge el Jang bong por el frente hacia el lado derecho dejándolo por detrás de la axila verticalmente. Chumbe.
        `,
      },
      {
        title: "Jang Bong I Dan",
        content: `
1.	Chumbe. Chuzona hacia arriba por el la do derecho, abre al lado izquierdo en Uen Dip-ChuChum Sogui a la vez que chuzo a la izquierda y hacia abajo, paso a Ap Kubi y con el lado derecho golpe a la rodilla de lado, seguido de un golpe hacia las costillas de lado, golpea con el lado derecho a la cabeza descendentemente deteniéndolo en la axila derecha, avanza en Orum Ap Kubi diagonal a la vez que hace un circulo por encima de la cabeza con la punta de arriba del Jang Bong como 24 de Nunchacos terminando con un golpe de lado a la cabeza hacia el lado izquierdo.

2.	Repite el paso anterior al otro lado.

3.	Recoge en Moap Sogui mirando hacia la derecha con el Jang Bong Chuzando arriba, (hacia el callejón del frente) repite el paso 1 agregandole que avanza en Uen Ap Kubi Golpeando con el lado izquierdo a las costillas del lado derecho y con el lado derecho hacemos la última parte como 24 de nunchacos (Grito).

4.	Recogemos en moap sogi chuzamos hacia arriba con el jang bong y repetimos el paso 1  seguido del 2.

5.	Por el callejón de vuelta repite el paso 3 y al finalizar en lugar del ultimo golpe a la cabeza ejecuta 8 hacia la izquierda dando un giro de 360°.

6.	Terminando el paso anterior al lado izquierdo en Bom Sogi con el Jang Bong temrinando en el lado y con el lado derecho hacia arriba al medio, luego al medio pero el golpe hacia abajo y Orum Ap Kubi diagonal a la vez que hace un circulo por encima de la cabeza con la punta de arriba del Jang Bong como 24 de Nunchacos terminando con un golpe de lado a la cabeza hacia el lado izquierdo.

7.	Repite el paso anterior hacia el otro lado. (Derecho)

8.	Recoge el Jang bong por el frente hacia el lado derecho dejándolo por detrás de la axila verticalmente. Chumbe.
        `,
      },
      {
        title: "Jang Bong Sam Dan",
        content: `
1.	Chumbe. Chuzon a hacia arriba por el lado derecho, abre al lado izquierdo en Uen Dip-ChuChum Sogui a la vez que chuzo a la izquierda y hacia abajo, cambio a Uen Ap Kubi y con el lado derecho golpe a la rodilla de lado, seguido de un golpe hacia las costillas de lado, golpea con el lado derecho a la cabeza descendentemente deteniéndolo en la axila derecha, avanza con Mondolyo quedando en Uen Ap Kubi terminando el básico número 12 de Jang bong golpeando con el extremo derecho a la rodilla.

2.	Cambia al otro lado con el básico número 12 de Jang Bong quedando en Orum Ap Kubi Golpeando a la rodilla con la punta izquierda, repite el paso anterior por el otro lado.

3.	Ejecuta el básico número 12 para cambiar de lado, quedando con la punta derecha golpeando hacia la rodilla, hacia el frente por el callejón del medio.

4.	Avanza ejecutando el básico número 7 finalizando con el básico número 18 (Grito)

5.	Se levanta y avanza el pie derecho hacia el frente para quedar en ChuChum Sogi golpeando con la punta derecha hacia el frente. Gira por la espalda queda en Uen Ap Kubi bloqueando con el Bong hacia arriba de manera horizontal y con los brazos extendidos, Orum Ap Chagi, descarga la pierna derecha y ejecuta un barrido hacia afuera, con la punta derecha del Bong, se levanta, avanza la pierna izquierda por detrás de la derecha a quedar en Orum Koap Sogi cambiando el bong  con el básico número 9 terminando con un golpe hacia el suelo con la punta derecha.

6.	Se gira hacia el lado izquierdo dando dos pasos terminando en Orum Ap Kubi y bloqueando arriba, repite el paso anterior por este lado.

7.	Mueve el pie derecho hacia el lado derecho a quedar en ChuChum Sogia la vez que chuza al lado con la punta derecha del Bong, recoge el pie derecho y queda mirando hacia el lado derecho. Desenvaina, envaina y desenvaina con el brazo derecho, y con el ultimo desenvaine avanza el pie izquierdo hacia el callejón del medio y dando un último paso con el pie derecho para quedar en Moap Sogi con el Bong en el lado derecho. 

8.	Saca el Bong ejecutando 18 con la mano derecha (grito)

9.	Se levanta, recoge el pie derecho y termina en chumbi.
        `,
      },
    ],
  },
];

const SearchResults = ({ results, onSelect, isDark }) => {
  if (results.length === 0) return null;

  return (
    <ScrollView
      style={[styles.searchResults, isDark && styles.darkSearchResults]}
    >
      {results.map((result, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.searchResultItem,
            isDark && styles.darkSearchResultItem,
          ]}
          onPress={() => onSelect(result)}
        >
          <Text style={[styles.searchResultSection, isDark && styles.darkText]}>
            {result.section}
          </Text>
          <Text style={[styles.searchResultTitle, isDark && styles.darkText]}>
            {result.title}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const MainScreen = ({ onSectionSelect, onSearchResultSelect }) => {
  const { isDark, toggleTheme } = useTheme();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (text) => {
    setSearchQuery(text);
    if (text.trim() === "") {
      setSearchResults([]);
      return;
    }

    const results = [];
    const searchText = text.toLowerCase();

    mainSections.forEach((section) => {
      section.subSections.forEach((subSection) => {
        if (
          subSection.title.toLowerCase().includes(searchText) ||
          section.title.toLowerCase().includes(searchText)
        ) {
          results.push({
            section: section.title,
            title: subSection.title,
            sectionData: section,
            subSection,
          });
        }
      });
    });

    setSearchResults(results);
  };

  return (
    <View style={[styles.container, isDark && styles.darkContainer]}>
      <StatusBar style={isDark ? "light" : "dark"} />
      <SafeAreaView style={[styles.container, isDark && styles.darkContainer]}>
        <View style={[styles.header, isDark && styles.darkHeader]}>
          <Text style={[styles.headerTitle, isDark && styles.darkText]}>
            LQHApp
          </Text>
          <TouchableOpacity onPress={toggleTheme} style={styles.themeToggle}>
            <MaterialIcons
              name={isDark ? "wb-sunny" : "nightlight-round"}
              size={24}
              color={isDark ? "#fff" : "#000"}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.searchContainer}>
          <TextInput
            style={[styles.searchInput, isDark && styles.darkSearchInput]}
            placeholder="Buscar..."
            placeholderTextColor={isDark ? "#888" : "#666"}
            value={searchQuery}
            onChangeText={handleSearch}
          />
        </View>

        {searchResults.length > 0 ? (
          <SearchResults
            results={searchResults}
            onSelect={(result) => {
              onSearchResultSelect(result.sectionData, result.subSection);
              setSearchQuery("");
              setSearchResults([]);
            }}
            isDark={isDark}
          />
        ) : (
          <ScrollView style={styles.content}>
            {mainSections.map((section, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.sectionButton,
                  isDark && styles.darkSectionButton,
                ]}
                onPress={() => onSectionSelect(section)}
              >
                {section.iconType === "community" ? (
                  <MaterialCommunityIcons
                    name={section.icon}
                    size={24}
                    color={isDark ? "#fff" : "#333"}
                  />
                ) : (
                  <MaterialIcons
                    name={section.icon}
                    size={24}
                    color={isDark ? "#fff" : "#333"}
                  />
                )}
                <Text
                  style={[styles.sectionButtonText, isDark && styles.darkText]}
                >
                  {section.title}
                </Text>
                <MaterialIcons
                  name="chevron-right"
                  size={24}
                  color={isDark ? "#fff" : "#333"}
                />
              </TouchableOpacity>
            ))}
          </ScrollView>
        )}
      </SafeAreaView>
    </View>
  );
};

const SubSectionScreen = ({ section, onBack, onSubSectionSelect }) => {
  const { isDark } = useTheme();

  return (
    <View style={[styles.container, isDark && styles.darkContainer]}>
      <SafeAreaView style={[styles.container, isDark && styles.darkContainer]}>
        <View style={[styles.header, isDark && styles.darkHeader]}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={onBack}
            hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
          >
            <MaterialIcons
              name="arrow-back"
              size={24}
              color={isDark ? "#fff" : "#000"}
            />
          </TouchableOpacity>
          <Text style={[styles.headerTitle, isDark && styles.darkText]}>
            {section.title}
          </Text>
        </View>
        <ScrollView style={styles.content}>
          {section.subSections.map((subSection, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.sectionButton, isDark && styles.darkSectionButton]}
              onPress={() => onSubSectionSelect(subSection)}
            >
              <Text
                style={[styles.sectionButtonText, isDark && styles.darkText]}
              >
                {subSection.title || subSection.name}
              </Text>
              <MaterialIcons
                name="chevron-right"
                size={24}
                color={isDark ? "#fff" : "#333"}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const ContentScreen = ({ subSection, onBack }) => {
  const { isDark } = useTheme();

  return (
    <View style={[styles.container, isDark && styles.darkContainer]}>
      <SafeAreaView style={[styles.container, isDark && styles.darkContainer]}>
        <View style={[styles.header, isDark && styles.darkHeader]}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={onBack}
            hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
          >
            <MaterialIcons
              name="arrow-back"
              size={24}
              color={isDark ? "#fff" : "#000"}
            />
          </TouchableOpacity>
          <Text style={[styles.headerTitle, isDark && styles.darkText]}>
            {subSection.title || subSection.name}
          </Text>
        </View>

        <ScrollView style={styles.content}>
          <View
            style={[
              styles.contentContainer,
              isDark && styles.darkContentContainer,
            ]}
          >
            {subSection.name === "Examen" ? (
              <>
                <Text style={[{ color: "red" }, isDark && styles.darkText]}>
                  {`name: ${subSection.name}`}
                </Text>
                <Text style={[styles.contentText, isDark && styles.darkText]}>
                  {`: ${subSection.grado}`}
                </Text>
                <Text style={[styles.contentText, isDark && styles.darkText]}>
                  {`Rango: ${subSection.rango}`}
                </Text>
                <Text style={[styles.contentText, isDark && styles.darkText]}>
                  {`Significado:\n${subSection.significado}`}
                </Text>

                {subSection.sections.map((section, index) => (
                  <View key={index} style={{ marginVertical: 10 }}>
                    <Text
                      style={[
                        styles.sectionTitle,
                        isDark && styles.darkText,
                        { fontWeight: "bold" },
                      ]}
                    >
                      {section.title}
                    </Text>
                    {subSection.content.map((content, i) => (
                      <Text
                        key={i}
                        style={[styles.contentText, isDark && styles.darkText]}
                      >
                        {content}
                      </Text>
                    ))}
                  </View>
                ))}
              </>
            ) : (
              <>
                <Text style={[styles.contentText, isDark && styles.darkText]}>
                  {subSection.title || subSection.name}
                </Text>
                {subSection.content ? (
                  <View>
                    <Text
                      style={[styles.contentText, isDark && styles.darkText]}
                    >
                      {subSection.content}
                    </Text>
                  </View>
                ) : subSection.grado ? (
                  <View>
                    <Text
                      style={[styles.contentText, isDark && styles.darkText]}
                    >
                      {subSection.grado}
                    </Text>
                    <View
                      style={{
                        width: 360,
                        height: 20,
                        borderColor: "#000",
                        borderStyle: "solid",
                        borderWidth: 1,
                      }}
                    >
                      <View
                        style={{
                          flex: 1,
                          backgroundColor: subSection.color[0],
                          width: 358,
                          height: 10,
                        }}
                      />
                      <View
                        style={{
                          flex: 1,
                          backgroundColor: subSection.color[1],
                          width: 358,
                          height: 10,
                        }}
                      />
                    </View>
                    <Text
                      style={[styles.contentText, isDark && styles.darkText]}
                    >
                      {subSection.rango}
                    </Text>
                    <Text
                      style={[styles.contentText, isDark && styles.darkText]}
                    >
                      {subSection.significado}
                    </Text>
                  </View>
                ) : null}

                {subSection.sections &&
                  subSection.sections.map((section, index) => (
                    <View key={index} style={{ marginVertical: 10 }}>
                      <Text
                        style={[
                          styles.sectionTitle,
                          isDark && styles.darkText,
                          { fontWeight: "bold" },
                        ]}
                      >
                        {section.title}
                      </Text>
                      {section.content.map((content, i) => (
                        <Text
                          key={i}
                          style={[
                            styles.contentText,
                            isDark && styles.darkText,
                          ]}
                        >
                          {content}
                        </Text>
                      ))}
                    </View>
                  ))}
              </>
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default function MartialArtsApp() {
  const [currentScreen, setCurrentScreen] = useState("main");
  const [selectedSection, setSelectedSection] = useState(null);
  const [selectedSubSection, setSelectedSubSection] = useState(null);
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const handleSectionSelect = (section) => {
    setSelectedSection(section);
    setCurrentScreen("subSection");
  };

  const handleSubSectionSelect = (subSection) => {
    setSelectedSubSection(subSection);
    setCurrentScreen("content");
  };

  const handleSearchResultSelect = (section, subSection) => {
    setSelectedSection(section);
    setSelectedSubSection(subSection);
    setCurrentScreen("content");
  };

  const handleBack = () => {
    if (currentScreen === "content") {
      setCurrentScreen("subSection");
      setSelectedSubSection(null);
    } else if (currentScreen === "subSection") {
      setCurrentScreen("main");
      setSelectedSection(null);
    }
  };

  const themeContext = {
    isDark,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={themeContext}>
      <View style={[styles.appContainer, isDark && styles.darkContainer]}>
        {currentScreen === "main" && (
          <MainScreen
            onSectionSelect={handleSectionSelect}
            onSearchResultSelect={handleSearchResultSelect}
          />
        )}
        {currentScreen === "subSection" && selectedSection && (
          <SubSectionScreen
            section={selectedSection}
            onBack={handleBack}
            onSubSectionSelect={handleSubSectionSelect}
          />
        )}

        {currentScreen === "content" && selectedSubSection && (
          <ContentScreen subSection={selectedSubSection} onBack={handleBack} />
        )}
      </View>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  ...styles,
  tableContainer: {
    margin: 10,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#fff",
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#2c3e50",
    padding: 10,
  },
  headerCell: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    minHeight: 50,
  },
  cell: {
    padding: 10,
    justifyContent: "center",
  },
  colorCell: {
    width: "100%",
    height: "100%",
    borderWidth: 1,
    borderColor: "#ddd",
    position: "relative",
    minHeight: 40,
  },
  danLine: {
    position: "absolute",
    left: 0,
    right: 0,
    height: 2,
  },
  appContainer: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  container: {
    flex: 1,
    backgroundColor: "#ccc",
  },
  darkContainer: {
    backgroundColor: "#121212",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#2c3e50",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  darkHeader: {
    backgroundColor: "#1a1a1a",
  },
  backButton: {
    marginRight: 16,
    padding: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ccc",
    flex: 1,
    left: 10,
  },
  darkText: {
    color: "#ddd",
  },
  content: {
    flex: 1,
  },
  sectionButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#ddd",
    marginHorizontal: 8,
    marginVertical: 4,
    borderRadius: 8,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  darkSectionButton: {
    backgroundColor: "#2a2a2a",
  },
  sectionButtonText: {
    flex: 1,
    fontSize: 16,
    marginLeft: 12,
    color: "#333",
  },
  contentContainer: {
    padding: 16,
    backgroundColor: "#ddd",
    margin: 8,
    borderRadius: 8,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  darkContentContainer: {
    backgroundColor: "#2a2a2a",
  },
  contentText: {
    fontSize: 16,
    lineHeight: 24,
    color: "#333",
  },
  themeToggle: {
    padding: 8,
  },
  searchContainer: {
    padding: 8,
    backgroundColor: "transparent",
  },
  searchInput: {
    height: 40,
    backgroundColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  darkSearchInput: {
    backgroundColor: "#2a2a2a",
    borderColor: "#444",
    color: "#fff",
  },
  searchResults: {
    position: "absolute",
    top: 130,
    left: 8,
    right: 8,
    maxHeight: "80%",
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    zIndex: 1000,
  },
  darkSearchResults: {
    backgroundColor: "#2a2a2a",
  },
  searchResultItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  darkSearchResultItem: {
    borderBottomColor: "#444",
  },
  searchResultSection: {
    fontSize: 14,
    color: "#666",
    marginBottom: 4,
  },
  searchResultTitle: {
    fontSize: 16,
    color: "#333",
  },
});
