/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async ({ view }) => {
  return view.render('index')
})

// Route.get('/patient', async ({ view }) => {
//   return view.render('patient/index')
// })

Route.group(() => {
  Route.get('/', 'PatientsController.index').as('patient.index')
  Route.get('/create', 'PatientsController.create')
}).prefix('patient')

Route.group(() => {
  Route.get('/', 'DoctorsController.index').as('doctor.index')
  Route.get('/create', 'DoctorsController.create')
}).prefix('doctor')
