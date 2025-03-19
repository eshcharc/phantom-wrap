import { Program } from '@/models/program';
import { Programs } from '@/models/programs';
import { useState } from 'react';
import { StyleSheet, View, Text, Pressable, GestureResponderEvent, FlatList } from 'react-native';

const ProgramEdit = ({ onExit }: { onExit: (event: GestureResponderEvent) => void }) => {
  
  return (
    <View style={styles.container}>
      <Pressable onPress={onExit}>
        <Text>Program Edit</Text>
      </Pressable>
    </View>
  )
}

const ProgramsList = ({ currentProgramId, programs, onEdit, onProgramSelect }: { 
  currentProgramId: string,
  programs: Programs; 
  onEdit: (id: string) => void,
  onProgramSelect: (id: string) => void 
}) => {
  
  return (
    <View style={styles.container}>
      <Text style={styles.programsTitle}>Programs</Text>
      <View style={styles.programsContainer}>
        {
          Object.values(programs).map((item) => (
            <Pressable  style={{ height: 60, width: 100}}
              key={item.id}
              onPress={() => onProgramSelect(item.id)}
              onLongPress={() => onEdit(item.id)}>
              <View style={[styles.listItem, {
            backgroundColor: item.id === currentProgramId ? '#4444ff' : 'white',
            }]}>
                <Text style={[styles.text, {
                  color: item.id === currentProgramId ? 'white' : 'black'
                }]} numberOfLines={1} >{item.name}</Text>
              </View>
            </Pressable>
          ))
        }
      </View>
    </View>
  )
}

export const ProgramsPage = ({ currentProgram, programs, onProgramSelect }: { currentProgram: Program; programs: Programs, onProgramSelect: (id: string) => void }) => {
  const [shouldEdit, setShouldEdit] = useState(false)

  const gotoList = () => {
    setShouldEdit(false)
  }

  const enterEditMode = (id: string) => {
    setShouldEdit(true)
    onProgramSelect(id)
  }

  return (
      <View style={styles.container}>
        { shouldEdit ? <ProgramEdit onExit={gotoList}/> : (
          <ProgramsList 
            currentProgramId={currentProgram.id}
            programs={programs} 
            onProgramSelect={onProgramSelect}
            onEdit={enterEditMode}
            />
        )}
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    flexDirection: 'column',
    width: '100%',
    borderRadius: 5,
  },
  programsContainer: {
    flex: 1,
    gap: 5,
    flexDirection: 'row',
  },
  programsTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 15
  },
  listItem: {
    flex: 1, // ✅ Makes each item flexible
    padding: 10,
    backgroundColor: "white",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    elevation: 3,
    width: 100,
    height: 60
  },
  text: { 
    fontSize: 12, 
    fontWeight: "bold",
  },
});