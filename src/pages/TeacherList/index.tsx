import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { ScrollView, TextInput, BorderlessButton, RectButton } from 'react-native-gesture-handler'
import { Feather } from "@expo/vector-icons"

import PageHeader from '../../components/PageHeader'
import TeacherItem, { Teacher } from '../../components/TeacherItem'

import styles from './styles'
import api from '../../services/api'

function TeacherList() {

  const [ isFilterVisible, setFilterVisible ] = useState(true)
  const [ subject, setSubject ] = useState("")
  const [ week_day, setWeekDay ] = useState("")
  const [ time, setTime ] = useState("")
  const [ teachers, setTeachers ] = useState([])


  function handleToggleFilterVisible() {
    setFilterVisible(!isFilterVisible)
  }

  async function handleFiltersSubmit() {
    const response = await api.get('/classes', {
      params: {
        subject,
        week_day,
        time
      }
    })
    setTeachers(response.data)
    setFilterVisible(false)
  }

  return (
    <View style={styles.container}>
      <PageHeader 
        title="Proffys disponíveis" 
        headerRight={(
          <BorderlessButton onPress={handleToggleFilterVisible}>
            <Feather name="filter" size={30} color="#fff" />
          </BorderlessButton>
        )}
      >

        { isFilterVisible && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Matéria</Text>
            <TextInput 
              style={styles.input} 
              value={subject}
              onChangeText={text => setSubject(text)}
              placeholder="Qual a matéria?"
              placeholderTextColor="#c1bccc"
            />

            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da Semana</Text>
                <TextInput
                  style={styles.input}
                  value={week_day}
                  onChangeText={text => setWeekDay(text)}
                  placeholder="Qual é o dia?"
                  placeholderTextColor="#c1bccc"
              />
              </View>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>
                <TextInput
                  style={styles.input}
                  value={time}
                  onChangeText={text => setTime(text)}
                  placeholder="Qual horário?"
                  placeholderTextColor="#c1bccc"
              />
              </View>
            </View>

            <RectButton 
              style={styles.submitButton}
              onPress={handleFiltersSubmit}
            >
              <Text style={styles.submitButtonText}>
                Filtrar
              </Text>
            </RectButton>

          </View>
        )}
      </PageHeader>

      <ScrollView 
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 24,
        }}
      >
        {teachers.map((teacher: Teacher)  => {
          return <TeacherItem key={teacher.id} teacher={teacher} />
        })}
      </ScrollView>
    </View>
  )
}

export default TeacherList