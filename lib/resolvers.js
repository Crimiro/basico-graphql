'use strict'

const courses = [
  {
    _id: 'anyid',
    title: 'Mi Título 1',
    teacher: 'Mi Profesor',
    description: 'Una descripción',
    topic: 'Programación'
  },
  {
    _id: 'anyid',
    title: 'Mi Título 2',
    teacher: 'Mi Profesor',
    description: 'Una descripción',
    topic: 'Programación'
  },
  {
    _id: 'anyid',
    title: 'Mi Título 3',
    teacher: 'Mi Profesor',
    description: 'Una descripción',
    topic: 'Programación'
  }
]

module.exports = {
  getCourses: () => {
    return courses
  }
}