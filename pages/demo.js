import i18next from '../services/i18next';
import { useTranslation } from 'react-i18next';

import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

const dummyItems = [
    {
        "name": "Chicken",
        "price": 2,
        "qty": 2
    },
    {
        "name": "Lamb",
        "price": 6,
        "qty": 1,
    },
    {
        "name": "Pork",
        "price": 10,
        "qty": 3
    },
    {
        "name": "Beef",
        "price": 12,
        "qty": 2
    },
];


const demo = () => {
    const { t } = useTranslation();
    const [language,setLanguage] = useState('zn');
    const [showScanner,setShowScanner] = useState(false);

    const changeLanguage = () => {
        if(language == 'en'){
            setLanguage('zn')
        }
        else{
            setLanguage('en')
        }
        i18next.changeLanguage(language);
        console.log(language)
    }

    const toggleScreen = () => {
        setShowScanner(!showScanner)
    }

  return (
      <View style={styles.container}>
        <View style={styles.langPanel}>
            <TouchableOpacity style={styles.button} onPress={toggleScreen}>
                    <Text style={styles.buttonText}>
                        Toggle Screen
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={changeLanguage}>
                    <Text style={styles.buttonText}>
                        {language === "en" ? "English" : "中国人"}
                    </Text>
                </TouchableOpacity>
            </View>
        {!showScanner? <View>
            <View style={styles.divider} />
            <ScrollView>
                <Text style={styles.sectionTitle}>{t('customer-details.title')}</Text>
                    <View style={styles.col}>
                    <Text style={styles.label}>{t("customer-details.customer_name.label")}</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder={t("customer-details.customer_name.placeholder")}
                        />
                    </View>
                    <View style={styles.col}>
                    <Text style={styles.label}>{t("customer-details.customer_id.label")}</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder="1XX90"
                            keyboardType="numeric"
                        />
                    </View>
                    <Text style={styles.label}>{t("customer-details.address.label")}</Text>
                    <TextInput
                        style={styles.textArea}
                        multiline
                        placeholder={t("customer-details.address.placeholder")}
                    />
                <View>
                <Text style={styles.sectionTitle}>{t("order-details.title")}</Text>
                    <View style={styles.col}>
                    <Text style={styles.label}>{t("order-details.id")}</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder="1237581220"
                            keyboardType="numeric"
                        />
                    </View>
                    <View style={styles.col}>
                    <Text style={styles.label}>{t("order-details.sp_id")}</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder="109887"
                            keyboardType="numeric"
                        />
                    </View>
                </View>
                <View>
                <Text style={styles.sectionTitle}>{t("order-details.orderedItems")}</Text>
                <View style={styles.row}>
                    <Text style={styles.tableHeader}>{t("order-details.prod_name")}</Text>
                    <Text style={styles.tableHeader}>{t("order-details.price")}</Text>
                    <Text style={styles.tableHeader}>{t("order-details.quantity")}</Text>
                    <Text style={styles.tableHeader}>{t("order-details.total")}</Text>
                </View>
                {dummyItems.map((item, index) => (
                    <View style={styles.row} key={index}>
                        <Text style={styles.tableData}>{item.name}</Text>
                        <Text style={styles.tableData}>${item.price}</Text>
                        <Text style={styles.tableData}>{item.qty}</Text>
                        <Text style={styles.tableData}>${item.qty * item.price}</Text>
                    </View>
                ))}
                </View>
            </ScrollView>
        </View>:<Text>"Scanner"</Text>}
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    langPanel: {
        flexDirection: "row",
        justifyContent: "flex-end",
        marginBottom: 16,
        gap:10,
    },
    button: {
        backgroundColor: "blue",
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 8,
    },
    buttonText: {
        color: "white",
        fontSize: 16,
    },
    divider: {
        height: 1,
        backgroundColor: "gray",
        marginBottom: 16,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 12,
        marginTop:8,
        textAlign:'center',
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 8,
    },
    col: {
        flex: 1,
        marginRight: 8,
    },
    textInput: {
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 8,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginBottom:10,
    },
    label: {
        fontSize:16,
    },
    textArea: {
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 8,
        paddingHorizontal: 8,
        paddingVertical: 4,
        textAlignVertical: "top",
        width:'98%',
        height:100,
        marginBottom:10,
    },
    tableHeader: {
        flex: 1,
        fontWeight: "bold",
    },
    tableData: {
        flex: 1,
    },
});

export default demo