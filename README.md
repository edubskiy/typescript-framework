# Think of it like mini react view library that can show all typescript best patterns

Example
```javascript
const users = new Collection(
  'http://localhost:3000/users', 
  (json: UserProps) => {
    return User.build(json)
  }
)

users.on('change', () => {
  const root = document.getElementById('root')

  if (root != null) {
    new UserList(root, users).render()
  }
})

users.fetch()
