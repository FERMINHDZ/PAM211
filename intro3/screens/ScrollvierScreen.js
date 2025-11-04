import { Text, StyleSheet, View, ScrollView, ImageBackground } from 'react-native' // <-- Importa ImageBackground
import React, { Component } from 'react'

// Importa la imagen para usar como fondo
const GaiaBackground = require('../assets/Gaia2.jpg') //Ruta de la imagen de fondo

export default function ScrollvierScreen() {
    return (
      // Componente que muestra la imagen de fondo
      <ImageBackground 
        source={GaiaBackground}          //  Imagen que se usa como fondo
        style={styles.background}         //  Estilo para que ocupe toda la pantalla
        resizeMode="cover"                //  Ajusta la imagen para cubrir todo el fondo
      >
        {/* Contenedor principal con fondo semitransparente para mejor lectura */}
        <View style={styles.container}>
          <ScrollView 
            style={styles.scrollArea} 
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={true}
          >
            <Text style={styles.title}>Mägo de Oz</Text>       

            <Text style={styles.item}> Biografía y álbumes — Desplázate para leer todo </Text>

            <Text style={styles.textRed}>
              Mägo de Oz es un grupo español de Folk Metal formado el 7 de Julio de 1988 por el baterista Txus di Fellatio,
              en el barrio de Begoña, Madrid. Inicialmente llamado Transilvania 666, en honor a Iron Maiden, no fue hasta 1989 cuando empezó a llamarse Mägo de Oz.
            </Text>

            <Text style={styles.subtitleRed}>La Leyenda de La Mancha (1998)</Text>
            <Text style={styles.text}>
               En este, la banda de folk metal plantea sus canciones nuevamente en forma de álbum conceptual, esta vez usando uno de los mayores clásicos de la literatura universal: Don Quijote de la Mancha, de Miguel de Cervantes.
               En la introducción del libreto, Txus habla del clásico castellano y nos invita a su lectura. Según él mismo, "es un modesto homenaje". Todas las canciones del álbum comienzan con unas pequeñas palabras que introducen la canción,
               análogamente a los títulos de cada capítulo de Don Quijote.
              </Text>

            <Text style={styles.subtitleRed}>Finisterra(2000)</Text>
            <Text style={styles.text}>
              Finisterra es el cuarto álbum de estudio de la banda Mägo de Oz, suponiendo este su primer disco doble y su segunda ópera rock desde Jesús de Chamberí.
              Es el tercer álbum más vendido de la banda, llegando con 200.000 ejemplares vendidos a disco de oro y de platino, siendo solo superado por los Gaia I y II: la voz dormida, respectivamente.
              Contiene varias de las canciones más populares del grupo, tales como: La Danza del Fuego, Hasta que el Cuerpo Aguante, Fiesta Pagana, El que Quiera Entender que Entienda, entre otras.
              Es considerado por la mayoría de sus fanáticos como el mejor álbum de la agrupación, e igualmente la banda misma lo considera uno de los mejores que han hecho a lo largo de su trayectoria.
               Fue este trabajo el que catapultó a la banda a la fama internacional.
              </Text>

            <Text style={styles.subtitleRed}>Gaia (2003)</Text>
            <Text style={styles.text}>
              Gaia es el quinto álbum de estudio de la banda Mägo de Oz, siendo este la primera parte de la trilogía Gaia.
              El disco revela la problemática de la conquista, y es un grito musical de Mägo de Oz por la libertad y el amor a la naturaleza. La historia del libreto es, cariñosamente, para Txus, su escritor, su "pequeña novela".
              La trilogía "Gaia" consta de tres discos, dos de ellos dobles, y los tres con su respectiva novela o historia: Gaia, Gaia II: La voz dormida y Gaia III: Atlantia.
              La gira en torno a este disco fue llamada Se Hará como se pueda... y encima llueve Tour, de la cual se sacaría el álbum en directo Madrid las Ventas.
              </Text>

            <Text style={styles.subtitleRed}>Gaia II: la voz dormida (2005)</Text>
            <Text style={styles.text}>
              Gaia II: La voz dormida es el séptimo álbum de estudio de la banda Mägo de Oz, siendo este la segunda parte de la trilogía Gaia.
              Las letras del disco, compuestas por el baterista de la banda, Txus di Fellatio, causaron polémica debido a la fuerte crítica hacia la Iglesia católica. El disco fue producido por el difunto Big Simon.
               Para este disco se incorporó un nuevo guitarrista, Jorge Salán, que ya había colaborado en la gira y grabación de Gaia y Belfast, así como el bajista Pedro Díaz "Peri", proveniente de la banda de folk metal Ars Amandi.
              Al contrario que en el disco Gaia, el vocalista José Andrëa deja un poco de lado las tesituras muy agudas, haciendo uso de tonos de voz más graves y oscuros de lo habitual en temas como Diábulus in música o Aquelarre.
              La cantata del diablo (Missit me dominus) es la canción más larga de Mägo de Oz con una duración de 21:11
              </Text>

            <Text style={styles.subtitleRed}>Gaia III: atlantia (2010)</Text>
            <Text style={styles.text}>
              Gaia III: Atlantia es el noveno álbum de estudio de la banda Mägo de Oz, siendo este la última parte de la trilogía Gaia. Fue lanzado el 6 de abril de 2010 en distintos países de Europa y América excepto en México, donde fue lanzado el 19 de abril.
              No se es sabido de una continuación a la línea Gaia de álbumes de Mägo de Oz. Desde un principio se dijo que iba a ser una trilogía; sin embargo, en la novela que acompaña el disco en su edición especial,
              se deja con un suspenso el final dando a entender que tal vez la historia no haya tenido fin (hablando sobre dos políticos que estaban sentados en su oficina tomando whisky, sin parar de reír, mientras el mundo era destruido).
              Según un comunicado de Txus Di Fellatio, después de Gaia III: Atlantia la banda se tomará un receso de tiempo sin determinar en su trabajo, no significando esto una disolución del grupo. En cuanto al futuro musical del grupo,
              el líder se refirió a que tal vez publiquen un álbum más simple e íntimo como La ciudad de los árboles aunque no cierra la posibilidad de continuar con una nueva línea conceptual igual de trabajada y "majestuosa" que la línea Gaia,
              y advirtió que tarde o temprano el grupo volverá a hacer un trabajo de este estilo.
              </Text>

            <Text style={styles.textRed}>
              Mägo de Oz ha mantenido su esencia: la unión entre la fuerza del metal, la magia y la profundidad de sus letras.
            </Text>
          </ScrollView>
        </View >
      </ImageBackground>
    )
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // oscurece el fondo
  
  },
  scrollArea: {
    flex: 1,
  },
  scrollContent: { 
    alignItems: 'center',
    paddingVertical: 20,
  },
  title: { 
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFD700',
    textAlign: 'center',
    marginBottom: 20,
  },
  item: {
    backgroundColor: '#ff0000ff',
    color: '#fff',
    padding: 12,
    marginVertical: 8,
    borderRadius: 10,
    textAlign: 'center',
  },
  subtitleRed: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    backgroundColor: '#FF0000',
    borderRadius: 10,
    marginVertical: 12,
    paddingVertical: 12,
    paddingHorizontal: 10,
    width: '95%',
    alignSelf: 'center',
  },
  text: {
    fontSize: 16,
    color: '#FFFFFF',
    lineHeight: 24,
    textAlign: 'justify',
    marginBottom: 15,
    padding: 10,
  },
  textRed: {
    fontSize: 16,
    color: '#FFFFFF',
    lineHeight: 24,
    textAlign: 'justify',
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#FF0000',
    borderRadius: 10,
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  }, //  Estilo para ImageBackground que ocupa toda la pantalla
});












