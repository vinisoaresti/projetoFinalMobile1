import {
    useEffect,
    useMemo,
    useState
} from 'react';
import {
    ActivityIndicator,
    FlatList,
    StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native';
import PlaceCard from '../../components/PlaceCard';
import placesData from '../../data/places';
export default function Home({ navigation }) {
    const [places, setPlaces] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    function loadPlaces() {
        try {
            setIsLoading(true);
            /*
            * O setTimeout simula o tempo necessário para carregar
            * informações de uma API ou de um banco de dados.
            */
            setTimeout(() => {
                setPlaces(placesData);
                setIsLoading(false);
            }, 1000);
        } catch (error) {
            console.error('Erro ao carregar os locais:', error);
            setPlaces([]);
            setIsLoading(false);
        }
    }
    useEffect(() => {
        loadPlaces();
    }, []);
    const filteredPlaces = useMemo(() => {
        const normalizedSearch = searchText
            .trim()
            .toLowerCase();
        if (normalizedSearch === '') {
            return places;
        }
        return places.filter((place) => {
            const name = place.name.toLowerCase();
            const category = place.category.toLowerCase();
            const neighborhood = place.neighborhood.toLowerCase();
            return (
                name.includes(normalizedSearch) ||
                category.includes(normalizedSearch) ||
                neighborhood.includes(normalizedSearch)
            );
        });
    }, [places, searchText]);
    function openDetails(place) {
        navigation.navigate('Details', {
            place: place
        });
    }
    function renderPlace({ item }) {
        return (
            <PlaceCard
                place={item}
                onPress={() => openDetails(item)}
            />
        );
    }
    function renderEmptyList() {
        return (
            <View style={styles.emptyContainer}>
                <Text style={styles.emptyTitle}>
                    Nenhum local encontrado
                </Text>
                <Text style={styles.emptyMessage}>
                    Verifique o texto pesquisado e tente novamente.
                </Text>
            </View>
        );
    }
    if (isLoading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator
                    size="large"
                    color="#174d38"
                />
                <Text style={styles.loadingText}>
                    Carregando locais...
                </Text>
            </View>
        );
    }
    return (
        <View style={styles.container}>
            <View style={styles.introduction}>
                <Text style={styles.title}>
                    Descubra Garanhuns
                </Text>
                <Text style={styles.subtitle}>
                    Conheça alguns dos espaços turísticos,
                    culturais e naturais da cidade.
                </Text>
            </View>
            <TextInput
                style={styles.input}
                value={searchText}
                onChangeText={setSearchText}
                placeholder="Pesquisar por nome, categoria ou bairro"
                placeholderTextColor="#777777"
                autoCapitalize="none"
                autoCorrect={false}
                returnKeyType="search"
            />
            <Text style={styles.resultText}>
                {filteredPlaces.length}{' '}
                {filteredPlaces.length === 1
                    ? 'local encontrado'
                    : 'locais encontrados'}
            </Text>
            <FlatList
                data={filteredPlaces}
                renderItem={renderPlace}
                keyExtractor={(item) => item.id}
                ListEmptyComponent={renderEmptyList}
                contentContainerStyle={
                    filteredPlaces.length === 0
                        ? styles.emptyList
                        : styles.list
                }
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="handled"
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f1f4f2',
        paddingHorizontal: 16
    },
    introduction: {
        paddingTop: 20,
        paddingBottom: 16
    },
    title: {
        color: '#174d38',
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 6
    },
    subtitle: {
        color: '#4f5b55',
        fontSize: 15,
        lineHeight: 22
    },
    input: {
        backgroundColor: '#ffffff',
        borderColor: '#bfd3c9',
        borderWidth: 1,
        borderRadius: 12,
        color: '#222222',
        fontSize: 15,
        paddingHorizontal: 16,
        paddingVertical: 13
    },
    resultText: {
        color: '#5a655f',
        fontSize: 13,
        marginVertical: 12
    },
    list: {
        paddingBottom: 24
    },
    emptyList: {
        flexGrow: 1
    },
    loadingContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f1f4f2'
    },
    loadingText: {
        color: '#174d38',
        fontSize: 15,
        marginTop: 12
    },
    emptyContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 30
    },
    emptyTitle: {
        color: '#333333',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
        textAlign: 'center'
    },
    emptyMessage: {
        color: '#666666',
        fontSize: 15,
        lineHeight: 22,
        textAlign: 'center'
    }
});
