import {Text, StyleSheet, View, FlatList, SectionList} from 'react-native'
export default function ListScreen() {
    // Se creo el Flatlist
    const ejercicios = [
        {id: '1', nombre: 'Sentadillas', descripcion: 'Ejercicio para piernas y glúteos'},
        {id: '2', nombre: 'Lagartijas', descripcion: 'Fortalece pecho, hombros y tríceps'},
        {id: '3', nombre: 'Plancha', descripcion: 'Ejercicio de core para abdomen y espalda baja'},
        {id: '4', nombre: 'Zancadas', descripcion: 'Trabaja piernas, glúteos y equilibrio'},
        {id: '5', nombre: 'Burpees', descripcion: 'Ejercicio cardiovascular de cuerpo completo'},
        {id: '6', nombre: 'Abdominales', descripcion: 'Fortalece la zona del abdomen'},
        {id: '7', nombre: 'Elevaciones de talón', descripcion: 'Ejercicio para trabajar pantorrillas'},
        {id: '8', nombre: 'Jumping Jacks', descripcion: 'Movimiento aeróbico para calentar y quemar calorías'},
        {id: '9', nombre: 'Bicicleta abdominal', descripcion: 'Ejercicio de abdomen oblicuo y core'},
        {id: '10', nombre: 'Superman', descripcion: 'Fortalece la espalda baja y glúteos'}

    ]
    // Se crea el SectionList
    const contactos = [
        {titulo: 'A', data: ['Alejandra','Ana de las tortillas', 'Adele']},
        {titulo: 'B', data: ['Brenda','Bruno', 'Bárbara']},
        {titulo: 'C', data: ['Carlos','Camila', 'Cristina']},
        {titulo: 'D', data: ['Daniela','Diego', 'Dulce']},
        {titulo: 'E', data: ['Elena','Eduardo', 'Emiliano']},
        {titulo: 'F', data: ['Fernanda','Fernando', 'Fabián']},
        {titulo: 'G', data: ['Gabriela','Guillermo', 'Gael']},
        {titulo: 'H', data: ['Héctor','Hanna', 'Hugo']},
        {titulo: 'I', data: ['Iván','Isabel', 'Iris']},
        {titulo: 'J', data: ['Juan','Jimena', 'José']},
        {titulo: 'K', data: ['Karla','Kevin', 'Kenia']},
        {titulo: 'L', data: ['Luis','Lucía', 'Leonardo']},
        {titulo: 'M', data: ['María','Miguel', 'Mauricio']},
        {titulo: 'N', data: ['Natalia','Néstor', 'Nayeli']},
        {titulo: 'O', data: ['Oscar','Olivia', 'Omar']},
        {titulo: 'P', data: ['Patricia','Pablo', 'Paola']},
        {titulo: 'Q', data: ['Querubin','Quetzalli', 'Quintín']},
        {titulo: 'R', data: ['Raúl','Romina', 'Ricardo']},
        {titulo: 'S', data: ['Sofía','Santiago', 'Silvia']},
        {titulo: 'T', data: ['Tamara','Tomás', 'Teresa']},
        {titulo: 'U', data: ['Ulises','Uriel', 'Úrsula']},
        {titulo: 'V', data: ['Valeria','Víctor', 'Vanessa']},
        {titulo: 'W', data: ['William','Wendy', 'Walter']},
        {titulo: 'X', data: ['Ximena','Xavier', 'Xóchitl']},
        {titulo: 'Y', data: ['Yazmín','Yahir', 'Yolanda']},
        {titulo: 'Z', data: ['Zulema','Zabdiel', 'Zaira']},
    ]

    return (
        // FlatList
        <View style={styles.container}>
            <View style={styles.listContainer}>
                <Text style={styles.titulo}> Lista De Ejercicios </Text>
                <FlatList 
                    data={ejercicios} 
                    renderItem={({item}) => (
                        <View style={styles.item}>
                            <Text style={styles.nombre}> {item.nombre} </Text>
                            <Text style={styles.descripcion}> {item.descripcion} </Text>
                        </View>
                    )}
                />
            </View>
            {/* Section List*/}
            <View style={styles.listContainer}>
                <Text style={styles.titulo}> Contactos </Text>
                <SectionList
                    sections={contactos}
                    renderItem={({item}) =>(
                        <Text style={styles.item}> {item} </Text>
                    )}

                    renderSectionHeader={({section})=>( // Renderisar el encabezado (a,b,c: en caso de contactos) 
                        <Text style={styles.header}> {section.titulo} </Text>
                    )} 
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#60c09bff',
    },
    listContainer: {
        flex: 1,
        marginBottom: 20,
    },
    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10,
    },
    item: {
        padding: 10,
        backgroundColor: '#1eb178ff',
        marginVertical: 5,
        marginHorizontal: 10,
        borderRadius: 5,
    },
    nombre: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    descripcion: {
        fontSize: 15,
        color: '#000000ff'
    },
    header: {
        fontSize: 20,
        backgroundColor: '#5e9c85ff',
        padding: 10,
        marginTop: 10,
    },
})