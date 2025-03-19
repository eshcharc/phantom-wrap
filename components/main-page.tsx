import { useMemo, useState } from "react";
import { StyleSheet, View, Text, GestureResponderEvent, Pressable } from "react-native"
import { Settings } from "./settings";
import { Home } from "./home";
import { useActivation } from "@/hooks/use-activation";

const Tab = ({ isSelected, label, onPress }: { isSelected: boolean, label: string, onPress: (event: GestureResponderEvent) => void }) => {
    return (
        <Pressable onPress={onPress}>
            <View style={[styles.tab, { 
                backgroundColor: isSelected ? '#333' : '#ccc',
                
            }]}>
                <Text style={{color: isSelected ? 'white' : 'inherit'}}>{label}</Text>
            </View>
        </Pressable>
    )
}

export const MainPage = ()=> {
    const { isActive, setActivation } = useActivation(false)
    const [pageId, setPageId] = useState('home')

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                {
                    pageId === 'settings' ? <Settings /> : <Home part={pageId} isActive={isActive} setActivation={setActivation} />
                }
            </View>
            <View style={styles.tabsContainer}>
                <Tab isSelected={pageId === 'home'} onPress={() => setPageId('home')} label="Home"></Tab>
                <Tab isSelected={pageId === 'programs'} onPress={() => setPageId('programs')} label="Programs"></Tab>
                <Tab isSelected={pageId === 'settings'} onPress={() => setPageId('settings')} label="Settings"></Tab>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        flexDirection: 'column',
    },
    content: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    tabsContainer: {
        height: 40,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    tab: {
        backgroundColor: '#ccc',
        borderRadius: 5,
        padding: 8,
        height: 40,
        boxShadow: '2px 2px 2px #333'
    }
  });
  