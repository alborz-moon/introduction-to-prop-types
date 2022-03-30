import usersData from './data/users.json'
import UserList from './components/UserList'
import AverageAge from './components/AverageAge'

const App = () => {
  const users = usersData.filter((user) => user.role === 'user')
  const admins = usersData.filter((user) => user.role === 'admin')
  const adminAverageAge =
    admins.reduce((total, admin) => total + admin.age, 0) / admins.length

  return (
    <>
      <UserList users={users} />
      <AverageAge average={adminAverageAge} />
    </>
  )
}

export default App
