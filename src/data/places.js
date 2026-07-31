const places = [
    {
        id: '1',
        name: 'Relógio das Flores',
        category: 'Ponto turístico',
        neighborhood: 'Heliópolis',
        address: 'Praça Tavares Correia, Heliópolis, Garanhuns',
        openingHours: 'Espaço público com visitação livre',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/51/3a/a9/photo0jpg.jpg?w=1000&h=-1&s=1',
        summary:
            'O principal cartão-postal de Garanhuns, inaugurado em 1981, único do gênero nas regiões Norte e Nordeste do Brasil.',
        description:
            'Inaugurado em 1981 na Praça Tavares Correia, o Relógio das Flores é o mais famoso símbolo de Garanhuns. Com quatro metros de diâmetro, seu mostrador e números são cuidadosamente desenhados com diferentes espécies de plantas e flores coloridas que formam belos mosaicos. Seu maquinário é de cristal de quartzo e foi importado da Suíça. É um ponto de parada obrigatório para fotos, ganhando destaque especial durante o Festival de Inverno (FIG) e o Encantos do Natal, quando a praça recebe decorações e iluminações temáticas.'
    },
    {
        id: '2',
        name: 'Parque Euclides Dourado',
        category: 'Parque urbano',
        neighborhood: 'Heliópolis',
        address: 'Avenida Júlio Brasileiro, Heliópolis, Garanhuns',
        openingHours: 'Consulte os horários definidos pela administração local',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/36/c1/b7/parque-dos-eucaliptos.jpg?w=900&h=-1&s=1',
        summary:
            'Conhecido como Parque dos Eucaliptos, é um complexo de lazer de 8 hectares que abriga rica infraestrutura esportiva e cultural.',
        description:
            'Popularmente chamado de Parque dos Eucaliptos devido às altas árvores que o cercam, o Parque Euclides Dourado é o coração do lazer urbano em Garanhuns. Com cerca de 8 hectares de área verde, oferece pistas de cooper, quadras poliesportivas, pista de skate e playgrounds. O espaço também é um importante polo cultural, abrigando a Biblioteca Pública Municipal Luiz Jardim e se transformando em um dos principais polos de shows e atividades durante o Festival de Inverno de Garanhuns (FIG).'
    },
    {
        id: '3',
        name: 'Parque Ruber van der Linden',
        category: 'Parque natural',
        neighborhood: 'Centro',
        address: 'Rua Manoel Clemente, Centro, Garanhuns',
        openingHours: 'Consulte os horários definidos pela administração local',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/d2/5f/a2/ta-img-20160702-113232.jpg?w=1000&h=-1&s=1',
        summary:
            'Um recanto de tranquilidade no centro da cidade, conhecido como Pau Pombo, que mescla natureza exuberante e história preservada.',
        description:
            'Conhecido carinhosamente como Parque Pau Pombo, o Ruber van der Linden é um oásis de biodiversidade e tranquilidade encravado no centro de Garanhuns. Originalmente construído para abrigar a primeira estação de captação e tratamento de água da cidade, o local preserva seus antigos aquedutos e arquitetura de época. Hoje, conta com alamedas sombreadas, caramanchões e uma densa vegetação, sendo o ambiente perfeito para caminhadas, contemplação e contato direto com a natureza.'
    },
    {
        id: '4',
        name: 'Castelo de João Capão',
        category: 'Construção histórica',
        neighborhood: 'Heliópolis',
        address: 'Avenida Caruaru, Heliópolis, Garanhuns',
        openingHours: 'Visitação conforme disponibilidade do espaço',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/c3/d4/12/20180714-100518-largejpg.jpg?w=1000&h=-1&s=1',
        summary:
            'Uma fascinante obra de arquitetura popular idealizada e construída ao longo de décadas por um único morador apaixonado pela era medieval.',
        description:
            'O Castelo de João Capão é a concretização do sonho de infância do encanador e eletricista João Ferreira da Silva, o João Capão. Sem qualquer formação em engenharia ou arquitetura, ele ergueu tijolo por tijolo desta fortificação de estilo medieval ao longo de várias décadas. O castelo conta com torres, ameias e detalhes rústicos que atraem a curiosidade de turistas e moradores, tornando-se um símbolo marcante da perseverança e da arte popular do Agreste pernambucano.'
    },
    {
        id: '5',
        name: 'Centro Cultural Alfredo Leite Cavalcanti',
        category: 'Cultura',
        neighborhood: 'Centro',
        address: 'Praça Dom Moura, Centro, Garanhuns',
        openingHours: 'Conforme a programação cultural',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/80/62/44/centro-cultural-em-um.jpg?w=1000&h=-1&s=1',
        summary:
            'A antiga Estação Ferroviária de Garanhuns, de bela arquitetura inglesa do século XIX, revitalizada como o principal polo difusor da cultura local.',
        description:
            'Instalado no belíssimo prédio da antiga Estação Ferroviária, inaugurada no final do século XIX com fortes traços da arquitetura inglesa, o Centro Cultural Alfredo Leite Cavalcanti é o coração histórico-artístico de Garanhuns. O complexo foi totalmente restaurado e hoje abriga o Teatro Luiz Souto Dourado, além de galerias de arte e salas de exposições. O local preserva a importante memória ferroviária do município e é um dos polos mais vibrantes de apresentações teatrais e musicais o ano inteiro.'
    },
    {
        id: '6',
        name: 'Santuário Mãe Rainha',
        category: 'Turismo religioso',
        neighborhood: 'Magano',
        address: 'Região do Magano, Garanhuns',
        openingHours: 'Visitação conforme as atividades religiosas',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/af/ac/e5/capela-da-mae-rainha.jpg?w=1000&h=-1&s=1',
        summary:
            'Local de visitação religiosa situado em uma área elevada da cidade.',
        description:
            'O Santuário Mãe Rainha é um espaço de oração, contemplação e turismo religioso. Sua localização também proporciona uma visão privilegiada de diferentes áreas da cidade.'
    },
    {
        id: '7',
        name: 'Mosteiro de São Bento',
        category: 'Turismo religioso',
        neighborhood: 'São José',
        address: 'Praça Tiradentes, 23 - São José, Garanhuns',
        openingHours: 'Domingo (missa às 10h), Dias úteis (missa às 07h)',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/a3/9b/64/mosteiro-de-sao-bento.jpg',
        summary:
            'Mosteiro beneditino tradicional no Agreste pernambucano, famoso por suas missas com canto gregoriano.',
        description:
            'Fundado em 1940, o Mosteiro de São Bento de Garanhuns é um refúgio de paz espiritual em uma das áreas mais altas da cidade. A comunidade de monges mantém viva a tradição litúrgica e o espaço atrai diversos fiéis e turistas em busca de contemplação.'
    },
    {
        id: '8',
        name: 'Fazenda Polilac',
        category: 'Agroturismo e Gastronomia',
        neighborhood: 'São Pedro',
        address: 'BR-423, S/N - Distrito de São Pedro, Garanhuns',
        openingHours: 'Quarta a Domingo, das 09:00 às 17:00 / 18:00',
        image: 'https://polilac.com.br/wp-content/uploads/2022/10/DJI_0621-HDR-scaled.jpg',
        summary:
            'Fazenda com amplo espaço de lazer, contato com a natureza e empório regional.',
        description:
            'A Fazenda Polilac oferece uma experiência rural imersiva, ideal para o turismo familiar. O local permite o contato direto com animais da fazenda e possui um empório completo que comercializa laticínios artesanais e outros produtos produzidos na região.'
    },
    {
        id: '9',
        name: 'Palácio Celso Galvão',
        category: 'Turismo histórico e Arquitetura',
        neighborhood: 'Centro',
        address: 'Avenida Santo Antônio, S/N - Centro, Garanhuns',
        openingHours: 'Segunda a Sexta (horário comercial); Visitação externa livre 24h',
        image: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Garanhuns-Prefeitura-Pal%C3%A1cio-Celso-Galv%C3%A3o.jpg',
        summary:
            'Edifício histórico com bela arquitetura e sede da atual Prefeitura Municipal.',
        description:
            'Situado no coração de Garanhuns, o Palácio Celso Galvão conserva suas linhas arquitetônicas originais. É um dos prédios mais icônicos da cidade e se transforma num palco iluminado e decorado para diversas apresentações durante as festividades do Encantos do Natal.'
    },
    {
        id: '10',
        name: 'Cristo do Magano',
        category: 'Turismo religioso e Mirante',
        neighborhood: 'Magano',
        address: 'Alto do Morro do Magano, Garanhuns',
        openingHours: 'Aberto 24 horas',
        image: 'https://upload.wikimedia.org/wikipedia/commons/2/23/Cristo_do_Magano_-_Garanhuns%2C_Pernambuco%2C_Brasil.jpg',
        summary:
            'Monumento e mirante localizado no ponto mais alto de Garanhuns, a 1.030 metros de altitude.',
        description:
            'Inaugurada em 1954 pelo escultor Renato Pantaleão, a estátua de 4 metros fica sobre uma base em formato de fortaleza. Além do aspecto religioso, é um dos melhores mirantes da região, oferecendo uma vista panorâmica inesquecível de toda a cidade.'
    },
    {
        id: '11',
        name: 'Vinícola Mello',
        category: 'Enoturismo',
        neighborhood: 'Zona Rural',
        address: 'Sítio Mochila de Baixo, 850 - Zona Rural, Garanhuns',
        openingHours: 'Quinta a Domingo, das 10:00 às 18:00',
        image: 'https://brasildevinhos.com.br/wp-content/uploads/2024/02/vinicola-mello-garanhuns-1024x683.jpg',
        summary:
            'Propriedade com vinhedos voltada ao enoturismo e produção de vinhos.',
        description:
            'Consolidando a rota do vinho no Agreste, a Vinícola Mello proporciona uma rica experiência sensorial. O local conta com opções de visitas guiadas para aprender sobre a história do espaço, bar de vinhedos, contemplação da natureza e degustação.'
    },
    {
        id: '12',
        name: 'Fonte Luminosa (Praça Souto Filho)',
        category: 'Lazer e Turismo urbano',
        neighborhood: 'Heliópolis',
        address: 'Praça Souto Filho - Bairro Heliópolis, Garanhuns',
        openingHours: 'Aberto 24 horas',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/a5/d8/d5/praca-souto-filho.jpg',
        summary:
            'Uma das praças mais queridas da cidade, famosa por sua fonte com águas iluminadas.',
        description:
            'Popularmente conhecida como Fonte Luminosa, a Praça Souto Filho é rodeada por área verde e bancos para descanso, sendo ponto de encontro tradicional dos moradores. À noite, as luzes da fonte criam uma atmosfera mágica e romântica.'
    },
    {
        id: '13',
        name: 'Vinícola Vale das Colinas',
        category: 'Enoturismo',
        neighborhood: 'Zona Rural',
        address: 'Fazenda São Silvestre, S/N - Zona Rural, Garanhuns',
        openingHours: 'Quintas e Sextas (12:00 às 18:00), Sábados e Domingos (10:00 às 18:00)',
        image: 'https://static.wixstatic.com/media/2e3a1f_7b3a4a007f354f3b8b6f3c14d9342417~mv2.jpg',
        summary:
            'Vinícola pioneira no estilo boutique que transformou a região no mais novo terroir brasileiro.',
        description:
            'Iniciando suas atividades de enoturismo em 2020, a Vale das Colinas adota colheita manual e produção em pequena escala para focar na qualidade do vinho de altitude. O visitante encontra belos cenários, tours guiados pelos parreirais e degustações exclusivas.'
    },
    {
        id: '14',
        name: 'Espaço Cultural Luiz Jardim',
        category: 'Cultura e Eventos',
        neighborhood: 'Centro',
        address: 'Região central (próximo à Praça Dom Moura), Garanhuns',
        openingHours: 'Variável de acordo com as programações e exposições do dia',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/5e/52/bd/espaco-cultural-luiz.jpg',
        summary:
            'Ponto dedicado à promoção de artes plásticas, literatura e manifestações artísticas locais.',
        description:
            'O Espaço Cultural homenageia o ilustre escritor e artista plástico Luiz Jardim. O local funciona como uma galeria viva, sediando importantes lançamentos de livros, saraus literários e mostras que fomentam e celebram as raízes culturais de Garanhuns.'
    }
];
export default places;