# BACKEND

1. npm install
2. npm run dev


http://localhost:5000/users POST to create new user
 - needed fields: firstName: string, lastName: string, image: binary
 - Content-Type: 'multipart/form-data'

http://localhost:5000/users/:firstName GET
 - set firstName as URL param