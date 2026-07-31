import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View
} from 'react-native';
export default function Details({ route }) {
    const { place } = route.params;
    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer}
            showsVerticalScrollIndicator={false}
        >
            <Image
                source={{ uri: place.image }}
                style={styles.image}
                resizeMode="cover"
            />
            <View style={styles.content}>
                <View style={styles.categoryContainer}>
                    <Text style={styles.category}>
                        {place.category}
                    </Text>
                </View>
                <Text style={styles.name}>
                    {place.name}
                </Text>
                <Text style={styles.neighborhood}>
                    Bairro: {place.neighborhood}
                </Text>
                <View style={styles.informationBox}>
                    <Text style={styles.informationTitle}>
                        Endereço
                    </Text>
                    <Text style={styles.informationText}>
                        {place.address}
                    </Text>
                </View>
                <View style={styles.informationBox}>
                    <Text style={styles.informationTitle}>
                        Horário de funcionamento
                    </Text>
                    <Text style={styles.informationText}>
                        {place.openingHours}
                    </Text>
                </View>
                {place.admission && (
                    <View style={styles.informationBox}>
                        <Text style={styles.informationTitle}>
                            Entrada / Valor
                        </Text>
                        <Text style={styles.informationText}>
                            {place.admission}
                        </Text>
                    </View>
                )}
                <Text style={styles.sectionTitle}>
                    Sobre o local
                </Text>
                <Text style={styles.description}>
                    {place.description}
                </Text>
                <View style={styles.warningBox}>
                    <Text style={styles.warningTitle}>
                        Observação
                    </Text>
                    <Text style={styles.warningText}>
                        As informações apresentadas possuem finalidade
                        educacional. Horários e condições de visitação
                        devem ser confirmados antes da visita.
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f1f4f2'
    },
    contentContainer: {
        paddingBottom: 30
    },
    image: {
        width: '100%',
        height: 260,
        backgroundColor: '#d9d9d9'
    },
    content: {
        padding: 18
    },
    categoryContainer: {
        alignSelf: 'flex-start',
        backgroundColor: '#dcefe5',
        borderRadius: 20,
        paddingHorizontal: 13,
        paddingVertical: 6,
        marginBottom: 12
    },
    category: {
        color: '#174d38',
        fontSize: 13,
        fontWeight: '700'
    },
    name: {
        color: '#222222',
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 7
    },
    neighborhood: {
        color: '#666666',
        fontSize: 15,
        marginBottom: 22
    },
    informationBox: {
        backgroundColor: '#ffffff',
        borderRadius: 12,
        padding: 15,
        marginBottom: 12
    },
    informationTitle: {
        color: '#174d38',
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 5
    },
    informationText: {
        color: '#444444',
        fontSize: 15,
        lineHeight: 22
    },
    sectionTitle: {
        color: '#222222',
        fontSize: 21,
        fontWeight: 'bold',
        marginTop: 12,
        marginBottom: 10
    },
    description: {
        color: '#444444',
        fontSize: 16,
        lineHeight: 25,
        textAlign: 'justify'
    },
    warningBox: {
        backgroundColor: '#fff4cf',
        borderRadius: 12,
        marginTop: 22,
        padding: 15
    },
    warningTitle: {
        color: '#755b00',
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 5
    },
    warningText: {
        color: '#5d4b0c',
        fontSize: 14,
        lineHeight: 21
    }
});