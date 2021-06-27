import React from "react";
import { Text, Image, View, ScrollView } from 'react-native';
import { styles } from './styles';
import { categories } from '../../utils/categories'
import { Category } from "../Category";


type Props = {
    categorySelected: string;
    setCategory: (categoryId: string) => void;
    hasCheckBox?: boolean;
}
export function CategorySelect({ hasCheckBox = false,
    categorySelected, setCategory }: Props) {
    return (
        <ScrollView
            horizontal
            style={styles.container}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 40 }}
        >
            {
                categories.map(category => (
                    <Category
                        title={category.title}
                        icon={category.icon}
                        checked={category.id === categorySelected}
                        key={category.id}
                        onPress={() => setCategory(category.id)}
                        hasCheckBox={hasCheckBox}
                    />
                ))
            }
        </ScrollView>

    );
}