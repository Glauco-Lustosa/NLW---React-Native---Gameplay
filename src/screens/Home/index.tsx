import React, { useState } from "react";

import { View, FlatList, Text } from "react-native";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { Profile } from "../../components/Profile";
import { ListHeader } from "../../components/ListHeader";
import { ListDivider } from "../../components/ListDivider";
import { Appoinment } from "../../components/Appoinment";
import { styles } from "./style";

export function Home() {
    const [category, setCategory] = useState('');
    const appointment = [
        {
            id: '1',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20:40',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
        },
        {
            id: '2',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20:40',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
        }

    ]

    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId)

    }
    return (
        <View>
            <View style={styles.header}>
                <Profile></Profile>
                <ButtonAdd></ButtonAdd>
            </View>

            <CategorySelect
                categorySelected={category}
                setCategory={handleCategorySelect}
            />
            <View style={styles.content}>
                <ListHeader title="Partidas agendadas" subtitle="Total 6" />
                
                <FlatList
                    data={appointment}
                    keyExtractor={item => item.id}
                    style={styles.matches}
                    showsVerticalScrollIndicator={false}
                    ItemSeparatorComponent={()=> <ListDivider/>}
                    renderItem={({ item }) => (
                        <Appoinment data={item} />

                    )}
                />
                
            </View>
        </View>
    );
}